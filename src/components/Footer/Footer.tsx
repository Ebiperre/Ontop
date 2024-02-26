import classes from "./Footer.module.css";
import logo from "../../assets/icons/logo_with_left_text.svg"

export default function Footer() {


    return (
        <>
            <footer className={classes.footer}>
                <div>
                    <div className={classes.subscribe}>
                        <div className={classes.logo}>
                            <img src={logo} alt="" />
                        </div>
                        <p>
                            Subscribe To Our Newsletter
                        </p>
                        <div className={classes.subscribe_field}>
                            <div className={classes.subscribe_input}>
                                <input type="email" placeholder="Input Email:" />

                            </div>
                            <button>
                                Subscribe
                            </button>
                        </div>
                    </div>

                </div>
                <div className={classes.list_items}>
                    <ul>
                        <h4>
                            Heading
                        </h4>
                        <a href="#">
                            <li>listItem</li>
                        </a>
                        <a href="#">
                            <li>listItem</li>
                        </a>
                        <a href="#">
                            <li>listItem</li>
                        </a>
                        <a href="#">
                            <li>listItem</li>
                        </a>
                        <a href="#">
                            <li>listItem</li>
                        </a>
                    </ul>

                    <ul>
                        <h4>
                            Heading
                        </h4>
                        <a href="#">
                            <li>listItem</li>
                        </a>
                        <a href="#">
                            <li>listItem</li>
                        </a>
                        <a href="#">
                            <li>listItem</li>
                        </a>
                        <a href="#">
                            <li>listItem</li>
                        </a>
                        <a href="#">
                            <li>listItem</li>
                        </a>
                    </ul>

                    <ul>
                        <h4>
                            Heading
                        </h4>
                        <a href="#">
                            <li>listItem</li>

                        </a>
                        <a href="#">
                            <li>listItem</li>

                        </a>
                        <a href="#">
                            <li>listItem</li>

                        </a>
                        <a href="#">
                            <li>listItem</li>

                        </a>
                        <a href="#">
                            <li>listItem</li>

                        </a>
                    </ul>
                </div>

            </footer>
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