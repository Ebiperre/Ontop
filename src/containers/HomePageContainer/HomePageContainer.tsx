import classes from './HomePageContainer.module.css';
import heroImage from "../../assets/images/hero_image.svg"

const HomePageContainer = () => {
    return (

        <>

            <main>

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

            </main>

        </>

    )
}

export default HomePageContainer