import { TbCircleDotted } from "react-icons/tb";
import { BiCircle } from "react-icons/bi";
import { BiAdjust } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { AiOutlineDash } from "react-icons/ai";
import { TbAlertSquareFilled } from "react-icons/tb";
import { PiCellSignalHighFill } from "react-icons/pi";
import { PiCellSignalMediumFill } from "react-icons/pi";
import { PiCellSignalLowFill } from "react-icons/pi";

export const statusIcons = {
    Backlog: <TbCircleDotted style={{ color: "#007BFF" }} />,
    Todo: <BiCircle style={{ color: "#FFA500" }} />,
    "In progress": <BiAdjust style={{ color: "#0000FF" }} />,
    Done: <AiFillCheckCircle style={{ color: "#008000" }} />,
    Canceled: <MdCancel style={{ color: "#FF0000" }} />,
};

export const priorityIcons = {
    "No priority": <AiOutlineDash style={{ color: "#007BFF" }} />,
    Urgent: <TbAlertSquareFilled style={{ color: "#FF4136" }} />,
    High: <PiCellSignalHighFill style={{ color: "#FF851B" }} />,
    Medium: <PiCellSignalMediumFill style={{ color: "#FFDC00" }} />,
    Low: <PiCellSignalLowFill style={{ color: "#0074D9" }} />,
};
