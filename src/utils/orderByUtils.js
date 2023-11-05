export const orderByPriority = (data) => {
    Object.keys(data).forEach((key) => {
        data[key].sort((ticket1, ticket2) => {
            if (ticket1.priority === 0 && ticket2.priority !== 0) return -1;
            if (ticket1.priority !== 0 && ticket2.priority === 0) return 1;
            return ticket2.priority - ticket1.priority;
        });
    });
    return data;
};

export const orderByTitle = (data) => {
    Object.keys(data).forEach((key) => {
        data[key].sort((ticket1, ticket2) =>
            ticket1.title.localeCompare(ticket2.title)
        );
    });
    return data;
};
