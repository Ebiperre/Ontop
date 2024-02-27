import classes from "./Footer.module.css";
import logo from "../../assets/icons/logo_with_left_text.svg"

export default function Footer() {


    return (
        <>
            <div className={classes.rights}>

                &copy; Copyright
                <span className="font-bold mx-1">

                    { }
                </span>
                All Rights Reserved by
                <span className="font-bold mx-1 text-purple">

                    ONTOP.
                </span>
            </div>

        </>
    )
}