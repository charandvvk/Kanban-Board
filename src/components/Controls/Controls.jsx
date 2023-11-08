import { useEffect, useRef, useState } from "react";
import classes from "./Controls.module.css";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { BiChevronDown } from "react-icons/bi";
import Menu from "./Menu";

const Controls = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const menuRef = useRef();
    const buttonRef = useRef();

    const toggleMenuVisibility = () => {
        setIsMenuVisible((oldState) => !oldState);
    };
    useEffect(() => {
        const hideMenu = (event) => {
            if (
                !menuRef.current.contains(event.target) &&
                !buttonRef.current.contains(event.target)
            )
                setIsMenuVisible(false);
        };
        if (isMenuVisible) {
            document.addEventListener("mousedown", hideMenu);
        }
        return () => {
            document.removeEventListener("mousedown", hideMenu);
        };
    }, [isMenuVisible]);

    return (
        <div className={classes.controls}>
            <button onClick={toggleMenuVisibility} ref={buttonRef}>
                <HiAdjustmentsHorizontal className={classes.controls__icon} />
                <div>Display</div>
                <BiChevronDown className={classes.controls__icon} />
            </button>
            {isMenuVisible && <Menu ref={menuRef} />}
        </div>
    );
};

export default Controls;
