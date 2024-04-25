import dataStorage from "@/services/dataStorage";

function initializeDataStorage () {
    dataStorage.initialize();
}

async function importData (data) {
    console.log("import data::");
    dataStorage.persistData(data);
}

export default {
    importData,
    initializeDataStorage
};