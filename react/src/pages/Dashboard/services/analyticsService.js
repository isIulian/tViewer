import resourcesService from "@/services/resourcesService";
import resourceTypeService from "@/services/resourceTypeService";
import trackService from "@/services/trackService";
import { statuses } from "@/pages/Tracks/data/data";

async function getReport () {
    let report = {
        resourcesCount: 0,
        resourcesTypes: [],
        overview: [],
        history: [
            {
                "resource": "A",
                "description": "short indication on resource",
                "type": "New"
            },
            {
                "resource": "B",
                "description": "short indication on resource",
                "type": "Update"
            },
            {
                "resource": "Z",
                "description": "short indication on resource",
                "type": "Removed"
            },
            {
                "resource": "B",
                "description": "short indication on resource",
                "type": "New"
            },
            {
                "resource": "Z",
                "description": "short indication on resource",
                "type": "New"
            },
        ]
    };

    let resources = await resourcesService.getResources();
    if (resources != null && resources.length > 0) {
        report.resourcesCount = resources.length;
    }

    let resourceTypes = await resourceTypeService.getTypes();
    let typesReportData = [];
    for (const type of resourceTypes) {
        let resourcesByType = await resourcesService.getResources(type.id);
        if (resourcesByType != null &&
            resourcesByType.length > 0) {
            typesReportData.push({
                "label": type.name,
                "value": resourcesByType.length
            })
        }
    }
    report.resourcesTypes = typesReportData;

    // tracks logic
    let tracks = await trackService.getTracks();
    let overview = [];
    for (const status of statuses) {
        let tracksByStatus = tracks.filter(x => x.status === status.value);
        overview.push(
            {
                "label": status.label,
                "value": tracksByStatus.length
            }
        );
    }
    report.overview = overview;

    return report;
}

export default {
    getReport,
};