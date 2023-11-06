import { useState } from "react";
import classes from "./Controls.module.css";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { BiChevronDown } from "react-icons/bi";
import Menu from "./Menu";

const Controls = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenuVisibility = () => {
        setIsMenuVisible((oldState) => !oldState);
    };

    return (
        <div className={classes.controls}>
            <button onClick={toggleMenuVisibility}>
                <HiAdjustmentsHorizontal className={classes.controls__icon} />
                <div>Display</div>
                <BiChevronDown className={classes.controls__icon} />
            </button>
            {isMenuVisible && <Menu />}
        </div>
    );
};

export default Controls;
