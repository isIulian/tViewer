import dataStorage from "@/services/dataStorage";
import { getDiffKeys } from "@/lib/utils";

async function getResources (type, search) {

    let resources = dataStorage.getData().resources;
    if (type !== undefined) {
        resources = resources.filter((resource) => resource.type === type);
    }
    if (search !== undefined) {
        resources = resources.filter((resource) => resource.title.toLowerCase().includes(search));
    }

    return resources;
}

async function getPagedResources (type, search, page = 1) {
    let resources = dataStorage.getData().resources;
    if (type !== undefined && !isNaN(type)) {
        resources = resources.filter((resource) => resource.type === type);
    }
    if (search !== "") {
        resources = resources.filter((resource) => resource.title.toLowerCase().includes(search));
    }

    if (page < 1) {
        page = 1;
    }
    const pageSize = 10;
    let skipOffset = (page - 1) * pageSize;
    let result = resources.slice(skipOffset, skipOffset + pageSize);
    let pagedResult = {
        totalPages: Math.ceil(resources.length / pageSize),
        currentPage: page,
        items: result
    };

    return pagedResult;
}

async function getResource (id) {
    let storedData = dataStorage.getData();
    let resources = storedData.resources;
    resources = resources.filter((resource) => resource.id === id);
    if (resources.length === 0) {
        return null;
    }
    let resource = resources[0];
    let resourceType = storedData.types.find(x => x.id === resource.type);
    resource.resourceType = resourceType;
    return resource;
}

async function createResource (resource) {
    let storageData = dataStorage.getData();
    let resources = storageData.resources;
    let lastResourceId = 0;
    resources.map(track => {
        const trackId = track.id;
        lastResourceId = Math.max(lastResourceId, trackId);
    });

    let newResource = {
        id: lastResourceId + 1,
        ...resource
    };
    resources.push(newResource);
    storageData.resources = resources;
    dataStorage.persistData(storageData);
}

async function updateResource (resource) {
    let persistedResource = await getResource(resource.id);
    if (persistedResource === null) {
        return;
    }
    var diffFields = getDiffKeys(resource, persistedResource);
    if (diffFields.length > 0) {
        for (const field of diffFields) {
            persistedResource[field] = resource[field];
        }

        let storageData = dataStorage.getData();
        let resources = storageData.resources;

        resources = resources.filter(x => x.id !== persistedResource.id); // delete old version
        resources.push(persistedResource); // add the new version
        storageData.resources = resources;
        dataStorage.persistData(storageData);
    }
}

async function deleteResource (id) {
    let storageData = dataStorage.getData();
    let resources = storageData.resources.filter(x => x.id !== id);
    storageData.resources = resources;
    dataStorage.persistData(storageData);
}

async function getUntrackedResources (type) {

    let storageData = dataStorage.getData();
    let resources = storageData.resources;
    let tracks = storageData.tracks;
    if (type !== undefined) {
        resources = resources.filter((resource) => resource.type === type);
    }

    if (tracks.length > 0) {
        let trackedResourcesId = tracks.map(x => x.resourceId);
        resources = resources.filter(x => !trackedResourcesId.includes(x.id))
    }
    return resources;
}

export default {
    getResources,
    getPagedResources,
    getResource,
    createResource,
    updateResource,
    deleteResource,
    getUntrackedResources
};