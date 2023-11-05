import { TbCircleDotted } from "react-icons/tb";
import { BsCircle } from "react-icons/bs";
import { BiAdjust } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { AiOutlineDash } from "react-icons/ai";
import { TbAlertSquareFilled } from "react-icons/tb";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { MdOutlineSignalCellularAlt2Bar } from "react-icons/md";
import { MdOutlineSignalCellularAlt1Bar } from "react-icons/md";

export const statusIcons = {
    Backlog: (
        <TbCircleDotted style={{ color: "#007BFF", fontSize: "larger" }} />
    ),
    Todo: <BsCircle style={{ color: "#FFA500" }} />,
    "In progress": (
        <BiAdjust style={{ color: "#0000FF", fontSize: "larger" }} />
    ),
    Done: <AiFillCheckCircle style={{ color: "#008000" }} />,
    Canceled: <MdCancel style={{ color: "#FF0000" }} />,
};

export const priorityIcons = {
    "No priority": <AiOutlineDash style={{ color: "#007BFF" }} />,
    Urgent: <TbAlertSquareFilled style={{ color: "#FF4136" }} />,
    High: <MdOutlineSignalCellularAlt style={{ color: "#FF851B" }} />,
    Medium: <MdOutlineSignalCellularAlt2Bar style={{ color: "#FFDC00" }} />,
    Low: <MdOutlineSignalCellularAlt1Bar style={{ color: "#0074D9" }} />,
};
