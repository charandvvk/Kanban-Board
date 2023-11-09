import classes from "./Icon.module.css";
import * as utils from "../../utils/iconUtils";

const Icon = (props) => {
    return (
        <div className={classes.icon}>
            {utils[`${props.groupBy}Icons`][props.query]}
        </div>
    );
};

export default Icon;