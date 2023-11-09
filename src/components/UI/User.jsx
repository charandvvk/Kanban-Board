import classes from "./User.module.css";

const Image = (props) => {
    return (
        <div className={classes.user}>
            <img
                className={classes.user__image}
                src={props.src}
                alt={props.alt}
            />
            <div
                className={`${classes.user__availability} ${
                    props.isUserAvailable
                        ? classes["user__availability--available"]
                        : classes["user__availability--unavailable"]
                }`}
            ></div>
        </div>
    );
};

export default Image;
