import classes from "./Footer.module.css";
import logo from "../../assets/icons/logo_without_text.svg"

export default function Footer() {
    return (
        <>
            <div className=" bg-text-color text-black px-[4vw] pt-[16vh] md:pt-[30vh] md:pb-[10vh]">
                <div>
                    <div className="flex flex-wrap lg:flex-nowrap items-start justify-start md:flex-row md:items-start md:justify-start md:text-left md:gap-40 gap-10 mb-5 md:mb-10 lg:mb-20">
                        <div className="flex-col flex gap-4 text-left">
                            <div className="h-10 font-bold text-lg flex items-center justify-start ml-[-3rem]">
                                <img
                                    className={classes.logo} src={logo} alt="Ontop" />
                                <p className="ml-[-3rem]">
                                    ONTOP
                                </p>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, beatae?
                            </p>
                            <div className="flex rounded-md overflow-hidden h-10 shadow-[0px_0px_1px_0px_orange] shadow-orange">
                                <div className="flex w-4/6">
                                    <input className="flex-1 pl-3 outline-none" type="email" placeholder="Input Email:" />
                                </div>
                                <button className="bg-orange flex-1 flex items-center justify-center text-white">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-start gap-10 w-full">

                            <div className="flex flex-col gap-2 items-start text-left">
                                <div className="font-semibold text-xl mb-3 whitespace-nowrap">About us</div>
                                <div className="font-extralight  flex flex-col  gap-2 flex flex-col gap-2">
                                    <a className="hover:underline hover:text-purple hover:cursor-pointer">About Us</a>
                                    <a className="hover:underline hover:text-purple hover:cursor-pointer">Buy/Sell</a>
                                    <a className="hover:underline hover:text-purple hover:cursor-pointer">Staking</a>
                                </div>
                            </div>
                            <div className=" items-start text-left">
                                <div className="font-semibold text-xl mb-3">Privacy</div>
                                <div className="font-extralight  flex flex-col gap-2">
                                    <a href="/terms&conditions" className="hover:underline hover:text-purple hover:cursor-pointer">Terms & Condition</a>
                                    <a href="/terms&conditions" className="hover:underline hover:text-purple hover:cursor-pointer">Privacy Policy</a>
                                </div>
                            </div>
                            <div className=" items-start text-left">
                                <div className="font-semibold text-xl mb-3">ONTOP</div>
                                <div className="font-extralight flex flex-col gap-2">
                                    <span className="max-w-[300px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, tenetur!</span>
                                    <a href="tel:+23470173453453">Contact:
                                        <span className="hover:underline hover:text-purple hover:cursor-pointer ml-2">(234) 701-3458-453</span></a>
                                </div>
                                <div className="mt-3">
                                    <div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.5 21.888C18.311 21.164 22 17.013 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.013 5.689 21.165 10.5 21.888V15H9C8.60218 15 8.22064 14.842 7.93934 14.5607C7.65804 14.2794 7.5 13.8978 7.5 13.5C7.5 13.1022 7.65804 12.7206 7.93934 12.4393C8.22064 12.158 8.60218 12 9 12H10.5V10C10.5 9.07174 10.8687 8.1815 11.5251 7.52513C12.1815 6.86875 13.0717 6.5 14 6.5H14.5C14.8978 6.5 15.2794 6.65804 15.5607 6.93934C15.842 7.22064 16 7.60218 16 8C16 8.39782 15.842 8.77936 15.5607 9.06066C15.2794 9.34196 14.8978 9.5 14.5 9.5H14C13.8674 9.5 13.7402 9.55268 13.6464 9.64645C13.5527 9.74021 13.5 9.86739 13.5 10V12H15C15.3978 12 15.7794 12.158 16.0607 12.4393C16.342 12.7206 16.5 13.1022 16.5 13.5C16.5 13.8978 16.342 14.2794 16.0607 14.5607C15.7794 14.842 15.3978 15 15 15H13.5V21.888Z"
                                                fill="white" />
                                        </svg>
                                    </div>
                                    <div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.0276 2.00123C13.7573 1.99843 14.4871 2.00576 15.2166 2.02323L15.4106 2.03023C15.6346 2.03823 15.8556 2.04823 16.1226 2.06023C17.1866 2.11023 17.9126 2.27823 18.5496 2.52523C19.2096 2.77923 19.7656 3.12323 20.3216 3.67923C20.83 4.17884 21.2234 4.78318 21.4746 5.45023C21.7216 6.08723 21.8896 6.81423 21.9396 7.87823C21.9516 8.14423 21.9616 8.36623 21.9696 8.59023L21.9756 8.78423C21.9934 9.51342 22.001 10.2428 21.9986 10.9722L21.9996 11.7182V13.0282C22.0021 13.758 21.9944 14.4877 21.9766 15.2172L21.9706 15.4112C21.9626 15.6352 21.9526 15.8562 21.9406 16.1232C21.8906 17.1872 21.7206 17.9132 21.4746 18.5502C21.2242 19.218 20.8307 19.8228 20.3216 20.3222C19.8216 20.8306 19.2169 21.224 18.5496 21.4752C17.9126 21.7222 17.1866 21.8902 16.1226 21.9402C15.8556 21.9522 15.6346 21.9622 15.4106 21.9702L15.2166 21.9762C14.4871 21.994 13.7573 22.0017 13.0276 21.9992L12.2816 22.0002H10.9726C10.2429 22.0027 9.51313 21.995 8.7836 21.9772L8.5896 21.9712C8.35221 21.9626 8.11487 21.9526 7.8776 21.9412C6.8136 21.8912 6.0876 21.7212 5.4496 21.4752C4.78228 21.2246 4.17784 20.8311 3.6786 20.3222C3.16965 19.8225 2.77582 19.2178 2.5246 18.5502C2.2776 17.9132 2.1096 17.1872 2.0596 16.1232C2.04846 15.8859 2.03846 15.6486 2.0296 15.4112L2.0246 15.2172C2.00616 14.4877 1.99783 13.758 1.9996 13.0282V10.9722C1.99681 10.2428 2.00414 9.51343 2.0216 8.78423L2.0286 8.59023C2.0366 8.36623 2.0466 8.14423 2.0586 7.87823C2.1086 6.81323 2.2766 6.08823 2.5236 5.45023C2.77497 4.78285 3.16956 4.17868 3.6796 3.68023C4.17849 3.17098 4.78256 2.7768 5.4496 2.52523C6.0876 2.27823 6.8126 2.11023 7.8776 2.06023L8.5896 2.03023L8.7836 2.02523C9.51278 2.0068 10.2422 1.99847 10.9716 2.00023L13.0276 2.00123ZM11.9996 7.00123C11.3371 6.99186 10.6794 7.11425 10.0646 7.3613C9.4498 7.60834 8.89025 7.97511 8.41845 8.44029C7.94664 8.90546 7.572 9.45977 7.31629 10.071C7.06057 10.6822 6.92889 11.3382 6.92889 12.0007C6.92889 12.6633 7.06057 13.3192 7.31629 13.9305C7.572 14.5417 7.94664 15.096 8.41845 15.5612C8.89025 16.0264 9.4498 16.3931 10.0646 16.6402C10.6794 16.8872 11.3371 17.0096 11.9996 17.0002C13.3257 17.0002 14.5975 16.4734 15.5351 15.5358C16.4728 14.5981 16.9996 13.3263 16.9996 12.0002C16.9996 10.6741 16.4728 9.40238 15.5351 8.4647C14.5975 7.52701 13.3257 7.00123 11.9996 7.00123ZM11.9996 9.00123C12.3981 8.99389 12.7941 9.06603 13.1644 9.21344C13.5347 9.36085 13.8719 9.58057 14.1564 9.85978C14.4408 10.139 14.6668 10.4721 14.821 10.8396C14.9753 11.2071 15.0548 11.6016 15.0549 12.0002C15.0549 12.3988 14.9756 12.7934 14.8214 13.1609C14.6673 13.5285 14.4414 13.8617 14.1571 14.141C13.8727 14.4203 13.5356 14.6401 13.1653 14.7876C12.7951 14.9352 12.3991 15.0074 12.0006 15.0002C11.205 15.0002 10.4419 14.6842 9.87928 14.1216C9.31667 13.5589 9.0006 12.7959 9.0006 12.0002C9.0006 11.2046 9.31667 10.4415 9.87928 9.87891C10.4419 9.3163 11.205 9.00023 12.0006 9.00023L11.9996 9.00123ZM17.2496 5.50123C16.927 5.51414 16.6219 5.65138 16.3982 5.8842C16.1745 6.11702 16.0496 6.42736 16.0496 6.75023C16.0496 7.0731 16.1745 7.38344 16.3982 7.61626C16.6219 7.84908 16.927 7.98632 17.2496 7.99923C17.5811 7.99923 17.8991 7.86753 18.1335 7.63311C18.3679 7.39869 18.4996 7.08075 18.4996 6.74923C18.4996 6.41771 18.3679 6.09977 18.1335 5.86535C17.8991 5.63093 17.5811 5.49923 17.2496 5.49923V5.50123Z"
                                                fill="white" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
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
                </div>
            </div>
        </>
    )
}
