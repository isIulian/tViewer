import resourcesService from "@/services/resourcesService";
import resourceTypeService from "@/services/resourceTypeService";

async function getReport () {
    let report = {
        resourcesCount: 0,
        resourcesTypes: [
        ],
        overview: [
            {
                "label": "Jan",
                "value": 10
            },
            {
                "label": "Feb",
                "value": 15
            },
            {
                "label": "Mar",
                "value": 12
            },
            {
                "label": "Apr",
                "value": 50
            },
            {
                "label": "May",
                "value": 60
            },
            {
                "label": "Jun",
                "value": 12
            },
            {
                "label": "Jul",
                "value": 16
            },
            {
                "label": "Aug",
                "value": 43
            },
            {
                "label": "Sep",
                "value": 43
            },
            {
                "label": "Oct",
                "value": 15
            },
            {
                "label": "Nov",
                "value": 21
            },
            {
                "label": "Dec",
                "value": 75
            }
        ],
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

    return report;
}

export default {
    getReport,
};