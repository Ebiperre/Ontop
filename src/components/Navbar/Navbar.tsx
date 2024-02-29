import classes from './Navbar.module.css';
import "./hamburger.css"
import logo from "../../assets/icons/logo_without_text.svg";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

type NavBarProps = {
    notNavlist?: boolean
    navBg?: string
}

export default function Navbar({ notNavlist, navBg }: NavBarProps) {
    const navigate = useNavigate();
    const [click, setClick] = useState(false);
    const closeNav = () => setClick(!click)


    return (
        <>
            <nav className={classes.nav} style={navBg ? { background: "#fff" } : undefined}>

                <div onClick={() => { navigate('/home') }} className="text-white font-bold text-lg flex items-center justify-center">
                    <img

                        className={classes.logo} src={logo} alt="Ontop" />
                    <p className="">
                        ONTOP
                    </p>
                </div>
                {!notNavlist && (
                    <div className={classes.nav_list}>
                        <ul className="gap-8 flex items-center justify-center">
                            <a href="home">
                                <li>Home</li>
                            </a>
                            <a href="/about">
                                <li>About</li>
                            </a>
                            <a href="service">
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
                <div onClick={closeNav} className="hamburger relative z-10">
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

                <section className={click ? "absolute top-0 right-0 h-[100vh] w-[100vw] flex" : "hidden"}>
                    <div onClick={closeNav} className="bg-[#0000003d]  flex-1"></div>

                    <div className={`${classes.nav_list} flex flex-col items-center justify-between h-full w-3/4 bg-white text-black p-8 gap-4`}>
                        <ul className="flex flex-col items-start justify-start h-full w-full gap-8">
                            <Link to="/home">
                                <li>Home</li>
                            </Link>
                            <Link to="/home">
                                <li>About</li>
                            </Link>
                            <Link to="/home">
                                <li>Services</li>
                            </Link>
                            <Link to="/home">
                                <li>Contact Us</li>
                            </Link>

                        </ul>
                        <div className="flex flex-col w-full gap-4 items-start justify-start">
                            <Link to="/sign-in">

                                <span className="material-symbols-outlined">
                                    login
                                </span>
                                Login
                            </Link>
                            <Link to="/sign-up">
                                <button className={classes.sign_up_btn2}>
                                    Get Started
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>

            </nav>

        </>
    )
}