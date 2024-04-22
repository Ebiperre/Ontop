import classes from './HomePageContainer.module.css';
import marqueeStyle from "./marque.module.css";
import giftCards from "../../../assets/images/undraw_gift_card_re_5dyy.svg";
import heroVideo from "../../../assets/videos/original-0950845b9346878fc5c5ca847b4d2eef.mp4";
import creditCard from "../../../assets/images/credit_card.svg";
import userShield from "../../../assets/images/user_shield.svg";
import handingDollar from "../../../assets/images/handing_dollar.svg";
import testimonialData from '../../../utilities/testimonialData';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';

interface Testimonial {
    message: string;
    name: string;
    rating: number;
    userImage: string;
}

const HomePageContainer = () => {

    const [displayedData, setDisplayedData] = useState<Testimonial[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const starStyle = {
        color: '#ffaa0e'
    };


    useEffect(() => {
        const switchData = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % testimonialData.length);
        }, 10000);

        return () => clearInterval(switchData);
    }, [testimonialData]);

    useEffect(() => {
        const updateDisplayedData = () => {
            const displayCount = getDisplayCount();
            const newData = [];
            let index = currentIndex;
            for (let i = 0; i < displayCount; i++) {
                newData.push(testimonialData[index]);
                index = (index + 1) % testimonialData.length;
            }
            setDisplayedData(newData);
        };

        updateDisplayedData();

        const resizeHandler = () => {
            updateDisplayedData();
        };

        window.addEventListener('resize', resizeHandler);

        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, [currentIndex, testimonialData]);

    const getDisplayCount = () => {
        return window.innerWidth < 800 ? 1 : 3;
    };

    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + testimonialData.length) % testimonialData.length);
    };

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % testimonialData.length);
    };

    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<span key={i} style={starStyle}>&#9733;</span>);
            } else {
                stars.push(<span key={i} style={starStyle}>&#9734;</span>);
            }
        }
        return stars;
    };

    return (

        <>
            <main className={classes.container}>

                <section className={classes.hero_section}>
                    <div className={classes.hero_text}>

                        <h2>
                            A Trusted and Secure Cryptocurrency Exchange
                        </h2>

                        <p>
                            Looking for secure cryptocurrency trading? Our trusted exchange ensures confident buying, selling, and management of digital assets with robust security. Join now!                        </p>

                        <Link to="/sign-up" className={classes.start_btn}>
                            <button>
                                Get Started
                            </button>
                        </Link>

                    </div>

                    <div className={classes.hero_image}>
                        <video src={heroVideo} autoPlay loop ></video>
                    </div>
                </section>

                <section>
                    <div className={classes.features_head}>
                        <h2>
                            Explore Exciting Features
                        </h2>
                        <p>
                            Discover the latest advancements in cryptocurrency trading. From intuitive interfaces to real-time analytics, we've got you covered.                        </p>
                    </div>

                    <section className={classes.card_wrap}>
                        <div className={classes.card}>
                            <div className="bg-orange rounded p-4">
                                <img src={creditCard} alt="#Credit Card" />
                            </div>
                            <h3>
                                Convenient Online Payments
                            </h3>
                            <p>
                                Enjoy seamless transactions with our user-friendly payment system. No more hassles of traditional methods; our platform guarantees effortless purchases.
                            </p>
                        </div>

                        <div className={classes.card}>
                            <div className="bg-orange rounded p-4">
                                <img src={handingDollar} alt="#Growth" />
                            </div>
                            <h3>
                                Financial Growth and Crypto Market Expansion
                            </h3>
                            <p>
                                Discover the evolving realm of cryptocurrency and its financial opportunities, offering potential growth and myriad possibilities in today's dynamic landscape.
                            </p>
                        </div>

                        <div className={classes.card}>
                            <div className="bg-orange rounded p-4">
                                <img src={userShield} alt="Graph" />
                            </div>
                            <h3>
                                User Data Security
                            </h3>
                            <p>
                                <p>
                                    We prioritize protecting your data with advanced encryption, strict access controls, and continuous monitoring, ensuring utmost security and privacy.</p>
                            </p>
                        </div>
                    </section>
                </section>

                <section className={classes.giftCard_wrap}>
                    <div>
                        <img src={giftCards} alt="" />
                    </div>
                    <div className="flex flex-col lg:w-[70%]">
                        <h3 className={`${classes.h3}`}>
                            Explore Our Gift Card Market
                        </h3>
                        <p className="lg:w-[90%] mt-4">
                            Discover a diverse range of gift cards on our platform, offering convenience and flexibility for your gifting needs. Whether it's for retail, dining, entertainment, or more, find the perfect gift card for any occasion. With easy access and seamless transactions, gifting has never been easier. Start exploring our gift card market today and delight your loved ones with the gift of choice.
                        </p>
                        <Link to="/service">
                            <button className={classes.giftCard_btn}>
                                See More
                            </button>
                        </Link>

                    </div>
                </section>


                <div className={marqueeStyle.marquee}>

                    <section className="flex-col">
                        <h2 className="text-4xl font-semibold">User Testimonials and Feedback</h2>
                        <p>
                            Explore the insights and opinions shared by our valued users...
                        </p>

                        <span className=" flex flex-row items-center justify-center flex-1 relative">

                            <button onClick={handlePrev} className="absolute md:static mt-20 bottom-[-1.5rem] left-[9rem] w-10 rounded-full border-2 border-greyWhite text-greyWhite hover:border-orange hover:text-orange  aspect-square flex items-center justify-center">
                                <span className="material-symbols-outlined">
                                    keyboard_arrow_left
                                </span>
                            </button>

                            {displayedData.map((testimonial, index) => (
                                <div key={index} className="testimonial-card">
                                    <img className="h-28 aspect-square object-cover object-top rounded-full" src={testimonial.userImage} alt="" />
                                    <span>
                                        <h1 className="font-medium text-2xl">{testimonial.name}</h1>
                                        <p>"{testimonial.message}"</p>
                                        <span className="flex flex-row">
                                            {renderStars(testimonial.rating)}
                                        </span>
                                    </span>
                                </div>
                            ))}
                            <button onClick={handleNext} className="absolute md:static bottom-[-1.5rem] right-[9rem] mt-20 w-10 rounded-full border-2 border-greyWhite text-greyWhite hover:border-orange hover:text-orange  aspect-square flex items-center justify-center">
                                <span className="material-symbols-outlined">
                                    keyboard_arrow_right
                                </span>
                            </button>
                        </span>


                    </section>
                </div>

                <section className={classes.subscribe}>

                    <div className="text-left text-4xl text-white font-semibold">
                        <p>
                            Register Now !
                        </p>
                        <p>
                            Get Live Market Prices.
                        </p>
                    </div>

                    <div className="flex flex-1 flex-wrap items-center justify-center bg-[#ff9900d0] p-2 rounded-2xl w-2/4">
                        <input placeholder="Enter Email..." className="md:flex-1 outline-none border-none text-white" type="email" />
                        <Link to="/sign-up">
                            <button className="bg-white rounded-xl h-12 md:w-36 flex-1 md:flex-none font-medium text-lg">
                                Register
                            </button>
                        </Link>

                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffaa0e" fill-opacity="1" d="M0,224L0,128L160,128L160,256L320,256L320,224L480,224L480,128L640,128L640,160L800,160L800,288L960,288L960,96L1120,96L1120,96L1280,96L1280,288L1440,288L1440,0L1280,0L1280,0L1120,0L1120,0L960,0L960,0L800,0L800,0L640,0L640,0L480,0L480,0L320,0L320,0L160,0L160,0L0,0L0,0Z"></path></svg>
                </section>
            </main>

        </>

    )
}

export default HomePageContainer