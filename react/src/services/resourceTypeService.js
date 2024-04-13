import data from "/src/data/data.json";

let resourceTypesStore = data.types;

async function getTypes () {
    return resourceTypesStore;
}

async function getType (id) {
    let types = resourceTypesStore;
    types = types.filter((type) => type.id === id);
    if (types.length === 0) {
        return null;
    }
    return types[0];
}

async function getTypeByName (name) {
    let types = resourceTypesStore;
    types = types.filter((type) => type.name.toLowerCase() === name.toLowerCase());
    if (types.length === 0) {
        return null;
    }
    return types[0];
}

export default {
    getTypes,
    getType,
    getTypeByName,
};