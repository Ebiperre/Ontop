import  AboutImage  from "../../assets/images/about.png"
import  HistoryImage  from "../../assets/images/history4.jpg"
import TradeImage from "../../assets/images/history5.jpg"
import AboutIcon from "../../assets/images/iconabout.png"
import AboutIcon2 from "../../assets/images/iconabout2.png" 
import AboutIcon3 from "../../assets/images/iconabout3.png"
import Man from "../../assets/images/man.png"
import BuyingImage from "../../assets/images/convert-currency.png"
import { useNavigate } from "react-router-dom"





const AboutPageContainer = () => {
    const navigate = useNavigate()


    return (
        <div>
            <div className="w-full h-full relative px-[1rem] pt-3 xl:w-full">
                <img className="h-[500px] w-full object-cover xl:w-full" src={AboutImage} alt="about" />
                <div className="bg-white rounded-sm  p-5 absolute top-8 mt-[17rem] ml-[0.89rem] w-[84%] lg:py-16 xl:w-[50%] xl:mt-[14rem] xl:py-16 xl:items-start">
                    <div className="flex flex-col lg:items-start xl:items-start">
                        <p className="text-3xl font-semibold lg:text-2xl xl:text-4xl">Not Going Anywhere, We Are One </p>
                        <p className="text-gray-500 xl:text-lg text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                    </div>
                </div>
            </div>
            <div className="pt-10 sm:flex sm:flex-col sm:items-center sm:justify-center lg:mt-24">
                <p className="text-3xl xl:text-4xl">Our Services</p>
                <div className="pt-5 px-[1rem] sm:flex sm:justify-center sm:items-center sm:flex-col sm:w-full lg:flex lg:flex-row xl:flex xl:justify-center xl:items-center">
                    <img src={HistoryImage} alt="" className=" lg:w-[30%] xl:w-[30%]"/>
                    <div className="bg-gray-50 px-3 pb-6 pt-4 sm:py-14 sm:w-[98%] lg:text-start xl:py-[7rem]">
                        <p className="text-2xl font-medium">Adding Crytocurrencies</p>
                        <p className="text-gray-600 w-full text-sm sm:text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
                    </div>
                </div>
                <div className="pt-5 px-[1rem] sm:flex sm:justify-center sm:items-center sm:flex-col sm:w-full lg:flex lg:flex-row-reverse ">
                    <img src={TradeImage} alt="" className=" lg:w-[30%] xl:w-[30%]"/>
                    <div className="bg-gray-50 px-3 pb-6 pt-4 sm:py-14 sm:w-[98%] lg:text-start xl:py-[7rem]">
                        <p className="text-2xl font-medium">Trading Platform</p>
                        <p className="text-gray-600 w-full text-sm sm:text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
                    </div>
                </div>
            </div>
            <div className="pt-10">
                <div className="px-[1rem] sm:px-16 lg:py-28 xl:flex xl:justify-center xl:items-center xl:flex-col">
                <p className="text-3xl lg:text-3xl lg:font-bold">Our Values</p>
                <p className="lg:text-lg xl:text-2xl xl:w-[33rem]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
                </div>
                <div className="lg:flex">
                <div className="pt-5 flex flex-col justify-center items-center">
                    <img src={AboutIcon} alt="" className="w-[30%]"/>
                    <div className=" px-3 pb-6 pt-4  sm:px-16">
                        <p className="text-2xl font-medium lg:text-lg lg:font-bold">Create Account</p>
                        <p className="text-gray-600 w-full text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
                    </div>
                </div>
                <div className="pt-5 flex flex-col justify-center items-center">
                    <img src={AboutIcon2} alt="" className="w-[30%]"/>
                    <div className=" px-3 pb-6 pt-4  sm:px-16">
                        <p className="text-2xl font-medium lg:text-lg lg:font-bold">Link Your Bank Account</p>
                        <p className="text-gray-600 w-full text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
                    </div>
                </div>
                <div className="pt-5 flex flex-col justify-center items-center">
                    <img src={AboutIcon3} alt="" className="w-[30%]"/>
                    <div className=" px-20 pb-6 pt-4  sm:px-16">
                        <p className="text-2xl font-medium lg:text-lg lg:font-bold">Starting Buying and Selling</p>
                        <p className="text-gray-600 w-full text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="pt-4 pb-4 sm:flex sm:justify-center sm:items-center">
                        <img src={BuyingImage} alt="" />
                    </div>
            <div className="bg-purple pt-5 lg:mt-11 w-full lg:w-full xl:w-full">
                <div className="px-[1rem] w-full flex flex-col items-center justify-center gap-3 sm:px-14 xl:flex xl:justify-center xl:items-center xl:flex-col">
                    <p className="text-white text-xl sm:text-2xl lg:text-5xl">Start Trading On ONTOP</p>
                    <p className="text-white sm:text-md  lg:text-2xl xl:text-2xl xl:w-[33rem]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
                    <button onClick={() => {navigate('/sign-up')}} className="text-white bg-orange2 px-4 w-30 py-2 font-medium text-lg rounded-md lg:px-12">Register Now</button>
                </div>
                <div className="w-full flex justify-center items-center pt-4">
                    <img src={Man} alt="" className="w-[90%] lg:w-[40%]"/>
                </div>
            </div>
        </div>
    )

    

}

export default AboutPageContainer;