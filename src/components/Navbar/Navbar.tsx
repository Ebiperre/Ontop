import classes from './Navbar.module.css';
import "./hamburger.css"
import logo from "../../assets/icons/logo_with_left_text.svg";
import { Link, useNavigate } from 'react-router-dom';

type NavBarProps = {
    notNavlist?: boolean
    navBg?: string
}

export default function Navbar({ notNavlist, navBg }: NavBarProps) {
    const navigate = useNavigate();

    return (
        <>
            <nav className={classes.nav} style={navBg ? { background: "#fff" } : undefined}>
                <img
                    onClick={() => { navigate('/home') }}
                    className={classes.logo} src={logo} alt="Ontop" />
                {!notNavlist && (
                    <div className={classes.nav_list}>
                        <ul className="gap-8 flex items-center justify-center">
                            <a href="#">
                                <li>Home</li>
                            </a>
                            <a href="/about">
                                <li>About</li>
                            </a>
                            <a href="#">
                                <li>Services</li>
                            </a>
                            <a href="/contact-us">
                                <li>Contact Us</li>
                            </a>
                        </ul>
                        <div className="flex gap-4 items-center justify-center">
                            <Link to="/sign-in">

                                <span className="material-symbols-outlined">
                                    login
                                </span>
                                Login
                            </Link>
                            <Link to="/sign-up">
                                <button className={classes.sign_up_btn}>
                                    Get Started
                                </button>
                            </Link>
                        </div>

                    </div>
                )}
                <div className="hamburger">
                    <input className="checkbox" type="checkbox" />
                    <svg fill="none" viewBox="0 0 50 50" height="50" width="50">
                        <path
                            className="lineTop line"
                            stroke-linecap="round"
                            stroke-width="4"
                            stroke="black"
                            d="M6 11L44 11"
                        ></path>
                        <path
                            stroke-linecap="round"
                            stroke-width="4"
                            stroke="black"
                            d="M6 24H43"
                            className="lineMid line"
                        ></path>
                        <path
                            stroke-linecap="round"
                            stroke-width="4"
                            stroke="black"
                            d="M6 37H43"
                            className="lineBottom line"
                        ></path>
                    </svg>
                </div>

            </nav>

        </>
    )
}