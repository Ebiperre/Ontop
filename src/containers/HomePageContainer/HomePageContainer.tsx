import classes from './HomePageContainer.module.css';
import marqueeStyle from "./marque.module.css";
import giftCards from "../../assets/images/undraw_gift_card_re_5dyy.svg";
import heroVideo from "../../assets/videos/original-0950845b9346878fc5c5ca847b4d2eef.mp4";
import creditCard from "../../assets/images/credit_card.svg";
import userShield from "../../assets/images/user_shield.svg";
import handingDollar from "../../assets/images/handing_dollar.svg";
import testimonialData from '../../utilities/testimonialData';
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

        setDisplayedData(testimonialData.slice(currentIndex, currentIndex + getDisplayCount()));

        return () => clearInterval(switchData);
    }, [currentIndex, testimonialData]);
    const getDisplayCount = () => {
        return window.innerWidth < 768 ? 1 : 3; // Adjust breakpoint as needed
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
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae hic autem sit mollitia sunt illo nostrum harum quas iure facilis modi deserunt, voluptas earum. Tenetur vero distinctio voluptatum officiis repellendus.
                        </p>

                        <Link to="/sign-up" className="md:mx-0 mx-auto">
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
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, placeat?
                        </h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis pariatur excepturi, eligendi perspiciatis totam sapiente facilis reiciendis, sit ducimus eos porro repellendus.
                        </p>
                    </div>

                    <section className={classes.card_wrap}>
                        <div className={classes.card}>
                            <div className="bg-orange rounded p-4">
                                <img src={creditCard} alt="Graph" />
                            </div>
                            <h3>
                                Lorem, ipsum dolor.
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, accusantium! Aspernatur, voluptatum eius quos dolorem debitis sapiente alias fuga praesentium.
                            </p>
                        </div>

                        <div className={classes.card}>
                            <div className="bg-orange rounded p-4">
                                <img src={handingDollar} alt="Graph" />
                            </div>
                            <h3>
                                Lorem, ipsum dolor.
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, accusantium! Aspernatur, voluptatum eius quos dolorem debitis sapiente alias fuga praesentium.
                            </p>
                        </div>

                        <div className={classes.card}>
                            <div className="bg-orange rounded p-4">
                                <img src={userShield} alt="Graph" />
                            </div>
                            <h3>
                                Lorem, ipsum dolor.
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, accusantium! Aspernatur, voluptatum eius quos dolorem debitis sapiente alias fuga praesentium.
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, maiores.
                        </h3>
                        <p className="lg:w-[70%]">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum laboriosam, blanditiis tenetur molestiae eos quo quidem magnam. Excepturi assumenda atque expedita incidunt earum, velit eveniet.
                        </p>
                    </div>
                </section>


                <div className={marqueeStyle.marquee}>

                    <section >
                        <span className="flex flex-col gap-4">
                            <h2 className="text-3xl font-semibold">Lorem, ipsum dolor.</h2>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, natus?
                            </p>
                        </span>

                        <span className=" flex ">
                            {displayedData.map((item, index) => (
                                <div key={index}>
                                    <img className="h-28 aspect-square object-cover object-top rounded-full" src={item.userImage} alt="" />
                                    <span>
                                        <h1 className="font-medium text-2xl">{item.name}</h1>
                                        <p>"{item.message}"</p>
                                        <span className="flex flex-row">
                                            {renderStars(item.rating)}
                                        </span>

                                    </span>
                                </div>
                            ))}
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
                        <button className="bg-white rounded-xl h-12 md:w-36 flex-1 md:flex-none font-medium text-lg">
                            Register
                        </button>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffaa0e" fill-opacity="1" d="M0,224L0,128L160,128L160,256L320,256L320,224L480,224L480,128L640,128L640,160L800,160L800,288L960,288L960,96L1120,96L1120,96L1280,96L1280,288L1440,288L1440,0L1280,0L1280,0L1120,0L1120,0L960,0L960,0L800,0L800,0L640,0L640,0L480,0L480,0L320,0L320,0L160,0L160,0L0,0L0,0Z"></path></svg>
                </section>
            </main>

        </>

    )
}

export default HomePageContainer