import data from "/src/data/data.json";

let resourcesStore = data.resources;

async function getResources (type, search) {
    console.log("fetch resources");
    let resources = resourcesStore;
    if (type !== undefined) {
        resources = resources.filter((resource) => resource.type === type);
    }
    if (search !== undefined) {
        resources = resources.filter((resource) => resource.name.toLowerCase().includes(search));
    }

    return resources;
}

async function getPagedResources (type, search, page = 1) {
    console.log("fetch paged resources");
    let resources = resourcesStore;
    if (type !== undefined) {
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
        totalPages: resources.length / pageSize,
        currentPage: page,
        items: result
    };

    return pagedResult;
}

async function getResource (id) {
    console.log("get resource");
    let resources = resourcesStore;
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

export default {
    getResources,
    getPagedResources,
    getResource,
    createResource,
    updateResource,
    deleteResource
};