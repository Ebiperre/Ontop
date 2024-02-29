


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
import RazerImage from "../../assets/images/card_razer.png"
import SephoraImage from "../../assets/images/card_sephora.png"
import { useNavigate } from "react-router-dom"

const ServicePageContainer = () => {
    const navigate = useNavigate();

const giftCard = [
    {
        title: 'Steam Card',
        img: SteamImage,
        price: 1200
    },
    {
        title: 'Amazon Card',
        img: AmazonImage,
        price: 1060
    },
    {
        title: 'Google Card',
        img: GoogleImage,
        price: 1100
    },
    {
        title: 'Apple Card',
        img: AppleImage,
        price: 1420
    },
    {
        title: 'Visa Card',
        img: VisaImage,
        price: 1050
    },
    {
        title: 'Razer Card',
        img: RazerImage,
        price: 1140
    },
    {
        title: 'Sephora Card',
        img: SephoraImage,
        price: 1300
    },
]

    return (
        <div>
            
            <div className="p-5">
                <p className="text-2xl font-medium">About Rates On ONTOP</p>
                <p className="text-md">You can check the current rates on this page, but it still changes. So please sell your gift cards as soon as possible after seeing the appropriate real-time rate to ensure that the rate will not change. Rate of the final order depends on the time of selling. Our rate is generally higher than the market rate, and we promise the security of cards, fast transaction, and get cash instantly. If you have any other questions, you can click <span className="text-orange3">“contact us”</span>.</p>
            </div>
            <div className="">
                <div className="bg-transparent flex justify-center flex-col pb-4 pt-3">
                    {giftCard.map((data)=>(
                        <>
                        <p key={Math.random()} className="text-xl font-medium">{data.title}</p>
                                            <div key={Math.random()} className="flex flex-wrap items-center justify-center gap-2 px-2 pt-3 pb-3 xl:flex xl:items-start xl:justify-start">
                                                <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8 xl:w-10" src={UsaImage} alt="" />USA</button>
                                                <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8 xl:w-10" src={UkImage} alt="" /> UK</button>
                                                <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8 xl:w-10" src={AudImage} alt="" />AUD</button>
                                                <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8 xl:w-10" src={EURImage} alt="" />EUR </button>
                                                <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8 xl:w-10" src={CadImage} alt="" />CAD</button>
                                                <button className="flex justify-center border-1 items-center gap-3 rounded-md bg-gray-100 px-5 py-2 hover:bg-orange3 hover:text-white cursor-pointer"> <img className="w-8 xl:w-10" src={ChfImage} alt="" />CHF</button>
                                            </div>
                                            <div key={Math.random()} className=" p-4 md:flex md:gap-2 lg:gap-2">
                                                <div className="pb-3">
                                                    <img className="md:w-[26rem] lg:w-[32rem]" src={data.img} alt="" />
                                                </div>
                                                <div className="border-[0.3px] bg-transcard border-purple2 flex justify-center gap- w-full p-6 md:h-[158px]  lg:flex lg:justify-between lg:h-[144px]  xl:h-[13.7rem]">
                                                    <div className="flex flex-col items-start xl:mt-8">
                                                        <div className="w-20 h-11 border-r-2 border-gray-300 border-b-2 flex items-start lg:w-[310px]">
                                                            <p className="text-lg font-medium">Face Value</p>
                                                        </div>
                                                        <div className="w-20 h-11 border-r-2 border-gray-300 flex items-start lg:w-[310px] ">
                                                            <p className="text-lg font-medium">Rate</p>
                                                        </div>
                                                    </div>
                                                    <div  className="flex flex-col items-start lg:flex lg:justify-start lg:items-start xl:mt-8">
                                                        <div className="border-b-2 border-gray-300 h-11 pl-2  lg:w-[310px]">
                                                            <p className="lg:text-lg">50-200: include Ecode</p>
                                                        </div> 
                                                        <div className="h-11 pl-2  lg:w-[310px] ">
                                                            <p className="lg:text-lg">₦ {data.price}</p>
                                                        </div>
                                                    </div>
                        
                                                </div>
                                            </div>
                        </>
                    ))}
                </div>
            </div>
            
        </div>

    )
}
export default ServicePageContainer;