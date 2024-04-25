import data from "@/data/data.json";
import { tryParseJson } from "@/lib/utils";

const ACCOUNT_DATA_KEY = "account-data";

/*
Loading of initial example data if not present
 */
function initialize () {
    const storedValue = localStorage.getItem(ACCOUNT_DATA_KEY)
    let storedData = storedValue !== null
        ? (tryParseJson(storedValue)) : null;
    if (storedData === null) {
        // setting an example dataset
        persistData(data);
    }
}

function persistData (data) {
    localStorage.setItem(ACCOUNT_DATA_KEY, JSON.stringify(data))
}

function getData () {
    const storedValue = localStorage.getItem(ACCOUNT_DATA_KEY)
    let storedData = storedValue !== null
        ? (tryParseJson(storedValue)) : null;
    return storedData;
}



export default {
    initialize,
    persistData,
    getData
};