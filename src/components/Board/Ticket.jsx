import { useContext } from "react";
import { DisplayContext } from "../../context/DisplayContext";
import classes from "./Ticket.module.css";
import * as utils from "../../utils/iconUtils";
import images from "../../utils/imageUtils";
import { BsFillCircleFill } from "react-icons/bs";

const Ticket = ({ ticket }) => {
    const { groupBy } = useContext(DisplayContext);

    return (
        <div className={classes.ticket}>
            <div className={classes["ticket__id-and-user"]}>
                <div className={classes.ticket__id}>{ticket.id}</div>
                {groupBy !== "userId" && (
                    <div className={classes.ticket__user}>
                        <img
                            className={classes.ticket__image}
                            src={images[ticket.userName]}
                            alt={ticket.userName}
                        />
                        <div
                            className={`${classes.ticket__availability} ${
                                ticket.isUserAvailable
                                    ? classes.ticket__available
                                    : classes.ticket__unavailable
                            }`}
                        ></div>
                    </div>
                )}
            </div>

            <div className={classes["ticket__status-and-title"]}>
                {groupBy !== "status" && (
                    <div>{utils.statusIcons[ticket.status]}</div>
                )}
                <div className={classes.ticket__title}>{ticket.title}</div>
            </div>

            <div className={classes["ticket__priority-and-tag"]}>
                {groupBy !== "priority" && (
                    <div>{utils.priorityIcons[ticket.priorityLabel]}</div>
                )}
                {ticket.tag.map((tag) => (
                    <div key={tag} className={classes.ticket__tag}>
                        <BsFillCircleFill className={classes.ticket__icon} />
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ticket;
