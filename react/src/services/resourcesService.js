import dataStorage from "@/services/dataStorage";

async function getResources (type, search) {

    let resources = dataStorage.getData().resources;
    if (type !== undefined) {
        resources = resources.filter((resource) => resource.type === type);
    }
    if (search !== undefined) {
        resources = resources.filter((resource) => resource.name.toLowerCase().includes(search));
    }

    return resources;
}

async function getPagedResources (type, search, page = 1) {
    let resources = dataStorage.getData().resources;
    if (type !== undefined && !isNaN(type)) {
        resources = resources.filter((resource) => resource.type === type);
    }
    if (search !== "") {
        resources = resources.filter((resource) => resource.name.toLowerCase().includes(search));
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
    let resources = dataStorage.getData().resources;
    resources = resources.filter((resource) => resource.id === id);
    if (resources.length === 0) {
        return null;
    }
    return resources[0];
}
async function createResource (resource) {
    console.log("add resource");
}

async function updateResource (resource) {
    console.log("update resource");
}

async function deleteResource (id) {
    console.log("update resource");
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