import dataStorage from "@/services/dataStorage";
dataStorage.getData().resources;

async function getTypes () {
    return dataStorage.getData().types;
}

async function getType (id) {
    let types = dataStorage.getData().types;
    types = types.filter((type) => type.id === id);
    if (types.length === 0) {
        return null;
    }
    return types[0];
}

async function getTypeByName (name) {
    let types = dataStorage.getData().types;
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