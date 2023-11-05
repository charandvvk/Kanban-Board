import * as utils from "../utils/groupByUtils";

const useGroupBy = (rawData, groupBy) => {
    if (rawData) {
        switch (groupBy) {
            case "status":
                return utils.groupByStatus(rawData);
            case "userId":
                return utils.groupByUser(rawData);
            case "priority":
                return utils.groupByPriority(rawData);
            default:
        }
    }
};

export default useGroupBy;
