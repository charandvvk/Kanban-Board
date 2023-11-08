export const priorityLabels = {
    4: "Urgent",
    3: "High",
    2: "Medium",
    1: "Low",
    0: "No priority",
};

const createUserMap = (users) => {
    return users.reduce((userMap, user) => {
        userMap[user.id] = user;
        return userMap;
    }, {});
};

export const groupByStatus = (rawData) => {
    const statusOrder = ["Backlog", "Todo", "In progress", "Done", "Canceled"];
    const userMap = createUserMap(rawData.users);
    return statusOrder.reduce((groupedData, status) => {
        if (!groupedData[status]) groupedData[status] = {};
        groupedData[status].tickets = rawData.tickets
            .filter((ticket) => ticket.status === status)
            .map((ticket) => ({
                ...ticket,
                priorityLabel: priorityLabels[ticket.priority],
                userName: userMap[ticket.userId].name,
                isUserAvailable: userMap[ticket.userId].available,
            }));
        return groupedData;
    }, {});
};

export const groupByUser = (rawData) => {
    const sortedUsers = [...rawData.users].sort((user1, user2) =>
        user1.name.localeCompare(user2.name)
    );
    return sortedUsers.reduce((groupedData, user) => {
        if (!groupedData[user.name]) groupedData[user.name] = {};
        groupedData[user.name].isUserAvailable = rawData.users.find(
            (element) => element.name === user.name
        ).available;
        groupedData[user.name].tickets = rawData.tickets
            .filter((ticket) => ticket.userId === user.id)
            .map((ticket) => ({
                ...ticket,
                userName: user.name,
                priorityLabel: priorityLabels[ticket.priority],
            }));
        return groupedData;
    }, {});
};

export const groupByPriority = (rawData) => {
    const priorityOrder = [0, 4, 3, 2, 1];
    const userMap = createUserMap(rawData.users);
    return priorityOrder.reduce((groupedData, priority) => {
        const priorityLabel = priorityLabels[priority];
        if (!groupedData[priorityLabel]) groupedData[priorityLabel] = {};
        groupedData[priorityLabel].tickets = rawData.tickets
            .filter((ticket) => ticket.priority === priority)
            .map((ticket) => ({
                ...ticket,
                userName: userMap[ticket.userId].name,
                isUserAvailable: userMap[ticket.userId].available,
                priorityLabel,
            }));
        return groupedData;
    }, {});
};
