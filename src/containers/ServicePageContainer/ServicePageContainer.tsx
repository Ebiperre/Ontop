


import UsaImage from "../../assets/images/usa.png"
import UkImage from "../../assets/images/UK.png"
import AudImage from "../../assets/images/AUD.png"
import EURImage from "../../assets/images/Euro.png"
import CadImage from "../../assets/images/canada.png"
import ChfImage from "../../assets/images/tuks.png"
import SteamImage from "../../assets/images/card_steam.png"
import AmazonImage from "../../assets/images/card_amazon.png"
import GoogleImage from "../../assets/images/card_google.png"
import AppleImage from "../../assets/images/card_apple.png"
import VisaImage from "../../assets/images/card_visa.png"

// import RazerImage from "../../assets/images/card_razer.png"
import RazerImage from "../../assets/images/card_razer.png"
import SephoraImage from "../../assets/images/card_sephora.png"

const ServicePageContainer = () => {

    return (
        <div>
            
             
            <div className="p-5">
                <p className="text-2xl font-medium">About Rates On ONTOP</p>
                <p className="text-md">You can check the current rates on this page, but it still changes. So please sell your gift cards as soon as possible after seeing the appropriate real-time rate to ensure that the rate will not change. Rate of the final order depends on the time of selling. Our rate is generally higher than the market rate, and we promise the security of cards, fast transaction, and get cash instantly. If you have any other questions, you can click <span className="text-orange3">“contact us”</span>.</p>
            </div>
            <div>
                <div className="bg-transparent flex justify-center flex-col pb-4 pt-3">
                    <p className="text-xl font-medium">Steam cards</p>
                    <div className="flex flex-wrap items-center justify-center gap-2 px-2 pt-3 pb-3">
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={UsaImage} alt="" />USA</button>
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={UkImage} alt="" /> UK</button>
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={AudImage} alt="" />AUD</button>
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={EURImage} alt="" />EUR </button>
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={CadImage} alt="" />CAD</button>
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={ChfImage} alt="" />CHF</button>
                    </div>
                    <div className="p-4">
                        <div className="pb-3">
                            <img src={ SteamImage} alt="" />
                        </div>
                        <div className="border-[0.3px] border-purple flex justify-center gap- w-full p-6">
                            <div className="flex flex-col items-start">
                                <div className="w-20 h-11 border-r-2 border-b-2 flex items-start">
                                    <p className="text-lg font-medium">Face Value</p>
                                </div>
                                <div className="w-20 h-11 border-r-2 flex items-start">
                                    <p className="text-lg font-medium">Rate</p>
                                </div>
                            </div>
                            <div  className="flex flex-col items-start">
                                <div className="border-b-2 h-11 pl-2  ">
                                    <p>50-200: include Ecode</p>
                                </div> 
                                <div className="h-11 pl-2  ">
                                    <p>₦ 1078</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* 2 */}
            <div className="mt-4">
            <div className="bg-transparent flex justify-center flex-col pb-4 pt-3 mt-6">
                    <p className="text-xl font-medium">Amazon cards</p>
                    <div className="flex flex-wrap items-center justify-center gap-2 px-2 pt-3 pb-3">
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={UsaImage} alt="" />USA</button>
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={UkImage} alt="" /> UK</button>
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={AudImage} alt="" />AUD</button>
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={EURImage} alt="" />EUR </button>
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={CadImage} alt="" />CAD</button>
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={ChfImage} alt="" />CHF</button>
                    </div>
                    <div className="p-4">
                        <div className="pb-3">
                            <img src={ AmazonImage} alt="" />
                        </div>
                        <div className="border-[0.3px] border-purple flex justify-center gap- w-full p-6">
                            <div className="flex flex-col items-start">
                                <div className="w-20 h-11 border-r-2 border-b-2 flex items-start">
                                    <p className="text-lg font-medium">Face Value</p>
                                </div>
                                <div className="w-20 h-11 border-r-2 flex items-start">
                                    <p className="text-lg font-medium">Rate</p>
                                </div>
                            </div>
                            <div  className="flex flex-col items-start">
                                <div className="border-b-2 h-11 pl-2  ">
                                    <p>50-200: include Ecode</p>
                                </div> 
                                <div className="h-11 pl-2  ">
                                    <p>₦ 1078</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* 3 */}
            <div className="mt-4">
            <div className="bg-transparent flex justify-center flex-col pb-4 pt-3 mt-6">
                    <p className="text-xl font-medium">Google cards</p>
                    <div className="flex flex-wrap items-center justify-center gap-2 px-2 pt-3 pb-3">
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={UsaImage} alt="" />USA</button>
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={UkImage} alt="" /> UK</button>
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={AudImage} alt="" />AUD</button>
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={EURImage} alt="" />EUR </button>
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={CadImage} alt="" />CAD</button>
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={ChfImage} alt="" />CHF</button>
                    </div>
                    <div className="p-4">
                        <div className="pb-3">
                            <img src={ GoogleImage} alt="" />
                        </div>
                        <div className="border-[0.3px] border-purple flex justify-center gap- w-full p-6">
                            <div className="flex flex-col items-start">
                                <div className="w-20 h-11 border-r-2 border-b-2 flex items-start">
                                    <p className="text-lg font-medium">Face Value</p>
                                </div>
                                <div className="w-20 h-11 border-r-2 flex items-start">
                                    <p className="text-lg font-medium">Rate</p>
                                </div>
                            </div>
                            <div  className="flex flex-col items-start">
                                <div className="border-b-2 h-11 pl-2  ">
                                    <p>50-200: include Ecode</p>
                                </div> 
                                <div className="h-11 pl-2  ">
                                    <p>₦ 1078</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* 4 */}
            <div className="mt-4">
            <div className="bg-transparent flex justify-center flex-col pb-4 pt-3 mt-6">
                    <p className="text-xl font-medium">Apple cards</p>
                    <div className="flex flex-wrap items-center justify-center gap-2 px-2 pt-3 pb-3">
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={UsaImage} alt="" />USA</button>
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={UkImage} alt="" /> UK</button>
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={AudImage} alt="" />AUD</button>
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={EURImage} alt="" />EUR </button>
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={CadImage} alt="" />CAD</button>
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={ChfImage} alt="" />CHF</button>
                    </div>
                    <div className="p-4">
                        <div className="pb-3">
                            <img src={ AppleImage } alt="" />
                        </div>
                        <div className="border-[0.3px] border-purple flex justify-center gap- w-full p-6">
                            <div className="flex flex-col items-start">
                                <div className="w-20 h-11 border-r-2 border-b-2 flex items-start">
                                    <p className="text-lg font-medium">Face Value</p>
                                </div>
                                <div className="w-20 h-11 border-r-2 flex items-start">
                                    <p className="text-lg font-medium">Rate</p>
                                </div>
                            </div>
                            <div  className="flex flex-col items-start">
                                <div className="border-b-2 h-11 pl-2  ">
                                    <p>50-200: include Ecode</p>
                                </div> 
                                <div className="h-11 pl-2  ">
                                    <p>₦ 1078</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* 5 */}
            <div className="mt-4">
            <div className="bg-transparent flex justify-center flex-col pb-4 pt-3 mt-6">
                    <p className="text-xl font-medium">Sephora cards</p>
                    <div className="flex flex-wrap items-center justify-center gap-2 px-2 pt-3 pb-3">
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={UsaImage} alt="" />USA</button>
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={UkImage} alt="" /> UK</button>
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={AudImage} alt="" />AUD</button>
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={EURImage} alt="" />EUR </button>
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={CadImage} alt="" />CAD</button>
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={ChfImage} alt="" />CHF</button>
                    </div>
                    <div className="p-4">
                        <div className="pb-3">
                            <img src={ SephoraImage } alt="" />
                        </div>
                        <div className="border-[0.3px] border-purple flex justify-center gap- w-full p-6">
                            <div className="flex flex-col items-start">
                                <div className="w-20 h-11 border-r-2 border-b-2 flex items-start">
                                    <p className="text-lg font-medium">Face Value</p>
                                </div>
                                <div className="w-20 h-11 border-r-2 flex items-start">
                                    <p className="text-lg font-medium">Rate</p>
                                </div>
                            </div>
                            <div  className="flex flex-col items-start">
                                <div className="border-b-2 h-11 pl-2  ">
                                    <p>50-200: include Ecode</p>
                                </div> 
                                <div className="h-11 pl-2  ">
                                    <p>₦ 1078</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* 6 */}
            <div className="mt-4">
            <div className="bg-transparent flex justify-center flex-col pb-4 pt-3 mt-6">
                    <p className="text-xl font-medium">Visa cards</p>
                    <div className="flex flex-wrap items-center justify-center gap-2 px-2 pt-3 pb-3">
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={UsaImage} alt="" />USA</button>
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={UkImage} alt="" /> UK</button>
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={AudImage} alt="" />AUD</button>
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={EURImage} alt="" />EUR </button>
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={CadImage} alt="" />CAD</button>
                        <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8" src={ChfImage} alt="" />CHF</button>
                    </div>
                    <div className="p-4">
                        <div className="pb-3">
                            <img src={ VisaImage  } alt="" />
                        </div>
                        <div className="border-[0.3px] border-purple flex justify-center gap- w-full p-6">
                            <div className="flex flex-col items-start">
                                <div className="w-20 h-11 border-r-2 border-b-2 flex items-start">
                                    <p className="text-lg font-medium">Face Value</p>
                                </div>
                                <div className="w-20 h-11 border-r-2 flex items-start">
                                    <p className="text-lg font-medium">Rate</p>
                                </div>
                            </div>
                            <div  className="flex flex-col items-start">
                                <div className="border-b-2 h-11 pl-2  ">
                                    <p>50-200: include Ecode</p>
                                </div> 
                                <div className="h-11 pl-2  ">
                                    <p>₦ 1078</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
          


        </div>

    )
}
export default ServicePageContainer;