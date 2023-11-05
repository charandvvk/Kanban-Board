import { useContext } from "react";
import { DisplayContext } from "../../context/DisplayContext";
import classes from "./Menu.module.css";

const Menu = () => {
    const displayContext = useContext(DisplayContext);

    const groupingChangeHandler = (event) => {
        displayContext.handleGroupingChange(event.target.value);
    };

    const orderingChangeHandler = (event) => {
        displayContext.handleOrderingChange(event.target.value);
    };

    return (
        <div className={classes.menu}>
            <div>
                <label htmlFor="grouping">Grouping</label>
                <select
                    id="grouping"
                    value={displayContext.groupBy}
                    onChange={groupingChangeHandler}
                >
                    <option value="status">Status</option>
                    <option value="userId">User</option>
                    <option value="priority">Priority</option>
                </select>
            </div>

            <div>
                <label htmlFor="ordering">Ordering</label>
                <select
                    id="ordering"
                    value={displayContext.orderBy}
                    onChange={orderingChangeHandler}
                >
                    <option value="priority">Priority</option>
                    <option value="title">Title</option>
                </select>
            </div>
        </div>
    );
};

export default Menu;
