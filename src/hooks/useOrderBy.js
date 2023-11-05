import * as utils from "../utils/orderByUtils";

const useOrderBy = (groupedData, orderBy) => {
    if (groupedData) {
        switch (orderBy) {
            case "priority":
                return utils.orderByPriority(groupedData);
            case "title":
                return utils.orderByTitle(groupedData);
            default:
        }
    }
};

export default useOrderBy;
