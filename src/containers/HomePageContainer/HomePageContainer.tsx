import classes from './HomePageContainer.module.css';
import marqueeStyle from "./marque.module.css";
import heroImage from "../../assets/images/hero_image.svg";
import bitGraph from "../../assets/images/bit_graph_icon.png";
import phoneInHand from "../../assets/images/phone_in_hand.png";
import Bitcoin from "../../assets/images/bitcoin.png";
import giftCards from "../../assets/images/undraw_gift_card_re_5dyy.svg";
import heroVideo from "../../assets/videos/original-0950845b9346878fc5c5ca847b4d2eef.mp4";
import userImage from "../../assets/images/e8589424b38a561d93ece194321ebd06.jpg";
import creditCard from "../../assets/images/credit_card.svg";
import userShield from "../../assets/images/user_shield.svg";
import handingDollar from "../../assets/images/handing_dollar.svg"




const HomePageContainer = () => {
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

                        <button>
                            Get Started
                        </button>
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
                    <div>
                        <h3 className={classes.h3}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, maiores.
                        </h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum laboriosam, blanditiis tenetur molestiae eos quo quidem magnam. Excepturi assumenda atque expedita incidunt earum, velit eveniet.
                        </p>
                    </div>
                </section>


                {/* <section> */}
                <div className={marqueeStyle.marquee}>
                    <section>


                        <div>
                            <img className="h-28 aspect-square object-cover object-top rounded-full " src={userImage} alt="" />
                            <span>

                                <h1 className="font-medium text-2xl">
                                    Lorem, ipsum dolor.
                                </h1>

                                <p>
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iste a doloremque facilis possimus."
                                </p>
                            </span>
                        </div>


                        <div>
                            <img className="h-28 aspect-square object-cover object-top rounded-full " src={userImage} alt="" />
                            <span>

                                <h1 className="font-medium text-2xl">
                                    Lorem, ipsum dolor.
                                </h1>

                                <p>
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iste a doloremque facilis possimus."
                                </p>
                            </span>
                        </div>

                        <div>
                            <img className="h-28 aspect-square object-cover object-top rounded-full " src={userImage} alt="" />
                            <span>

                                <h1 className="font-medium text-2xl">
                                    Lorem, ipsum dolor.
                                </h1>

                                <p>
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iste a doloremque facilis possimus."
                                </p>
                            </span>
                        </div>

                    </section>
                </div>
                {/* </section> */}


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