import classes from './HomePageContainer.module.css';
import heroImage from "../../assets/images/hero_image.svg";
import bitGraph from "../../assets/images/bit_graph_icon.png";
import phoneInHand from "../../assets/images/phone_in_hand.png";
import Bitcoin from "../../assets/images/bitcoin.png";
import giftCards from "../../assets/images/undraw_gift_card_re_5dyy.svg"

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

                        <div className={classes.subscribe_field}>
                            <div className={classes.subscribe_input}>
                                <input type="email" placeholder="Input Email:" />

                            </div>
                            <button>
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div className={classes.hero_image}>
                        <img src={heroImage} alt="" />
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
                            <div>
                                <img src={bitGraph} alt="Graph" />
                            </div>
                            <h3>
                                Lorem, ipsum dolor.
                            </h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, inventore?
                            </p>
                        </div>

                        <div className={classes.card}>
                            <div>
                                <img src={phoneInHand} alt="Graph" />
                            </div>
                            <h3>
                                Lorem, ipsum dolor.
                            </h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, inventore?
                            </p>
                        </div>

                        <div className={classes.card}>
                            <div>
                                <img src={Bitcoin} alt="Graph" />
                            </div>
                            <h3>
                                Lorem, ipsum dolor.
                            </h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, inventore?
                            </p>
                        </div>
                    </section>
                </section>

                <section>
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

            </main>

        </>

    )
}

export default HomePageContainer