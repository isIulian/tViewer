import { getDiffKeys } from "@/lib/utils";
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
            lastReadedPart: track.lastReadedPart,
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
    let storageData = dataStorage.getData();
    let tracks = storageData.tracks;
    let lastTrackId = 0;
    tracks.map(track => {
        const trackId = track.id;
        lastTrackId = Math.max(lastTrackId, trackId);
    });

    let newTrack = {
        id: lastTrackId + 1,
        resourceId: track.resourceId,
        lastReadedPart: track.lastReadedPart
    };
    tracks.push(newTrack);
    storageData.tracks = tracks;
    dataStorage.persistData(storageData);
}

async function updateTrack (track) {
    let persistedTrack = await getTrack(track.id);
    if (persistedTrack === null) {
        return;
    }
    var diffFields = getDiffKeys(track,persistedTrack);
    if (diffFields.length > 0) {
        for (const field of diffFields) {
            persistedTrack[field] = track[field];
        }

        let storageData = dataStorage.getData();
        let tracks = storageData.tracks;

        tracks = tracks.filter(x => x.id !== persistedTrack.id); // delete old version
        tracks.push(persistedTrack); // add the new version
        storageData.tracks = tracks;
        dataStorage.persistData(storageData);
    }
}

async function deleteTrack (id) {
    let storageData = dataStorage.getData();
    let tracks = storageData.tracks.filter(x => x.id !== id);
    storageData.tracks = tracks;
    dataStorage.persistData(storageData);
}

async function deleteTracks (ids) {
    if (ids === undefined ||
        ids === null ||
        ids.length <= 0) {
        return;
    }

    let storageData = dataStorage.getData();
    let tracks = storageData.tracks.filter(x => !ids.includes(x.id));
    storageData.tracks = tracks;
    dataStorage.persistData(storageData);
}

export default {
    getTracks,
    getTrack,
    createTrack,
    updateTrack,
    deleteTrack,
    deleteTracks
};