import classes from './Navbar.module.css';
import "./hamburger.css"
import logo from "../../assets/icons/logo_without_text.png";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

type NavBarProps = {
    notNavlist?: boolean
    navBg?: string
}

export default function Navbar({ notNavlist, navBg }: NavBarProps) {
    const location = useLocation();
    const navigate = useNavigate();
    const [click, setClick] = useState(false);
    const closeNav = () => setClick(!click);


    return (
        <>
             <nav className={classes.nav} style={navBg ? { background: "#fff" } : undefined}>
                <div onClick={() => { navigate('/home') }} className="ml-6 text-white font-bold text-lg flex items-center justify-center">
                    <img
                        className="logo" src={logo} alt="Ontop" />
                    <p className="text-black text-[22px] ml-1.5">
                        ONTOP
                    </p>
                </div>
                {!notNavlist && (
                    <div className={classes.nav_list}>
                        <ul className="gap-8 flex items-center justify-center">
                            <NavLink to="/home">
                                <li>Home</li>
                            </NavLink>
                            <NavLink to="/about">
                                <li>About</li>
                            </NavLink>
                            <NavLink to="/service">
                                <li>Services</li>
                            </NavLink>
                            <NavLink to="/contact-us">
                                <li>Contact Us</li>
                            </NavLink>
                        </ul>
                        <div className="flex gap-4 items-center justify-center">
                            <Link to="/sign-up">
                                <button className={classes.sign_up_btn}>
                                    Get Started
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
                <div onClick={closeNav} className="hamburger relative z-10">
                    <input className="checkbox" checked={click} type="checkbox" />
                    <svg fill="none" viewBox="0 0 50 50" height="50" width="50">
                        <path
                            className="lineTop line"
                            strokeLinecap="round"
                            strokeWidth="4"
                            stroke="black"
                            d="M6 11L44 11"
                        ></path>
                        <path
                            strokeLinecap="round"
                            strokeWidth="4"
                            stroke="black"
                            d="M6 24H43"
                            className="lineMid line"
                        ></path>
                        <path
                            strokeLinecap="round"
                            strokeWidth="4"
                            stroke="black"
                            d="M6 37H43"
                            className="lineBottom line"
                        ></path>
                    </svg>
                </div>
                <section className={click ? "fixed top-0 right-0 h-[100vh] w-[100vw] flex overflow-hidden" : "w-[0px] bg-purple"}>
                    <div onClick={closeNav} className="bg-[#0000003d]  flex-1"></div>
                    <div className={click ? "w-3/4 overflow-hidden bg-white text-black pt-28 pb-20 px-2 flex justify-center items-center flex-col" : "w-[0px]"}>
                        <ul className="flex flex-col items-start justify-start h-full w-full gap-4 overflow-hidden">
                            <NavLink to="/home">
                                <li>Home</li>
                            </NavLink>
                            <NavLink to="/about">
                                <li>About</li>
                            </NavLink>
                            <NavLink to="/service">
                                <li>Services</li>
                            </NavLink>
                            <NavLink to="/contact-us">
                                <li>Contact Us</li>
                            </NavLink>
                        </ul>
                        <div className="flex flex-col w-full gap-4 items-start justify-start md:hidden">
                            <Link className="flex items-center justify-center" to="/sign-in">
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