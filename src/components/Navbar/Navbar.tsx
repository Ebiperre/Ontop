import classes from './Navbar.module.css';
import "./hamburger.css"
import logo from "../../assets/icons/logo_with_left_text.svg";

type NavBarProps = {
    showNavlist?: boolean
    
    
}

export default function Navbar({showNavlist}:NavBarProps) {


    return (
        <>

            <nav className={classes.nav}>

                <img className={classes.logo} src={logo} alt="" />
{showNavlist && (
                <div className={classes.nav_list}>
                
                    
                        <ul className="gap-8 flex items-center justify-center">
                        <a href="#">
                            <li>Home</li>
                        </a>
                        <a href="#">
                            <li>About</li>
                        </a>
                        <a href="#">
                            <li>Services</li>
                        </a>
                        <a href="#">
                            <li>Contact Us</li>
                        </a>

                    </ul>

                    
                    <div className="flex gap-4 items-center justify-center">
                        <a href="#">

                            <span className="material-symbols-outlined">
                                login
                            </span>
                            Login
                        </a>
                        <a href="#">
                            <button className={classes.sign_up_btn}>
                                Get Started
                            </button>
                        </a>
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