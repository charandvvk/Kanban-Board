import { useContext } from "react";
import { DisplayContext } from "../../context/DisplayContext";
import classes from "./Group.module.css";
import * as utils from "../../utils/iconUtils";
import images from "../../utils/imageUtils";
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import Ticket from "./Ticket";

const Group = ({ title, tickets }) => {
    const { groupBy } = useContext(DisplayContext);

    return (
        <div className={classes.group}>
            <div className={classes.group__header}>
                <div>
                    {groupBy === "status" && (
                        <div className={classes.group__icons}>
                            {utils.statusIcons[title]}
                        </div>
                    )}
                    {groupBy === "userId" && (
                        <img
                            className={classes.group__image}
                            src={images[title]}
                            alt={title}
                        />
                    )}
                    {groupBy === "priority" && (
                        <div className={classes.group__icons}>
                            {utils.priorityIcons[title]}
                        </div>
                    )}
                    <div className={classes.group__title}>{title}</div>
                    <div className={classes.group__count}>{tickets.length}</div>
                </div>
                <div className={classes.group__icons}>
                    <AiOutlinePlus />
                    <BsThreeDots />
                </div>
            </div>
            <div className={classes.group__tickets}>
                {tickets.map((ticket) => (
                    <Ticket key={ticket.id} ticket={ticket} />
                ))}
            </div>
        </div>
    );
};

export default Group;
