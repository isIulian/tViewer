import dataStorage from "@/services/dataStorage";

async function getTracks () {
    let tracks = dataStorage.getData().tracks;
    let resources = dataStorage.getData().resources;

    let trackDtos = [];
    for (const track of tracks) {
        let resource = resources.find((x) => x.id === track.resourceId)
        if (resource === undefined) {
            continue;
        }

        let trackDto = {
            id: track.id,
            title: resource.name,
            status: resource.status,
            lastReadedPart: track.lastReadPart,
            lastPart: null
        };

        if (resource.parts !== undefined && resource.parts.length > 0) {
            trackDto.lastPart = resource.parts.slice(-1);
        }

        trackDtos.push(trackDto);
    }
    return trackDtos;
}

async function getTrack (id) {
    let tracks = dataStorage.getData().tracks;
    tracks = tracks.filter((track) => track.id === id);
    if (tracks.length === 0) {
        return null;
    }
    return tracks[0];
}
async function createTrack (track) {
    console.log("add resource");
}

async function updateTrack (track) {
    console.log("update resource");
}

async function deleteTrack (id) {
    console.log("update resource");
}

export default {
    getTracks,
    getTrack,
    createTrack,
    updateTrack,
    deleteTrack
};