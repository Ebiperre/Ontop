import { Link } from 'react-router-dom'; 
import SteamImage from "../../../assets/images/card_steam.png"
import AmazonImage from "../../../assets/images/card_amazon.png"
import GoogleImage from "../../../assets/images/card_google.png"
import AppleImage from "../../../assets/images/card_apple.png"
import VisaImage from "../../../assets/images/card_visa.png"
import RazerImage from "../../../assets/images/card_razer.png"
import SephoraImage from "../../../assets/images/card_sephora.png"
import React, { useContext } from 'react'
import { AppContext } from '../../../context/AppContext';
import { useNavigate } from 'react-router-dom';


const DashBoardGiftcardContainer: React.FC = () => {
const {cards} = useContext(AppContext)
   const navigate = useNavigate();


const DashBoardGiftcardContainer = () => {
    const cards = [
        {   
            id: 1,
            image: AmazonImage,
            title: 'Amazon'
        },
        {
            id: 2,
            image: SteamImage,
            title: 'Steam'
        },
        {
            image: GoogleImage,
            title: 'Google'
        },
        {
            id: 3,
            image: AppleImage,
            title: 'Apple'
        },
        {
            id: 4,
            image: VisaImage,
            title: 'Visa'
        },
        {
            id: 5,
            image: RazerImage,
            title: 'Razer'
        },
        {
            id: 6,
            image: SephoraImage,
            title: 'Sephora'
        },
    ]
   
  return (
    <div className='px-4 md:px-8 xl:px-10'>
        <div className='flex justify-start items-start flex-col p-3 xl:pl-[5rem]'>
            <h2 className='text-xl font-medium xl:text-2xl'>Trade Gift Cards</h2>
            <p>click om any gift card to start trading</p>
        </div>
        <div className='flex justify-start items-start flex-col pb-4 p-3 xl:pl-[5rem]'>
            <p className='text-xl font-medium'>Top Cards</p>
        </div>
        <div>
        <div className='flex flex-wrap gap-14 justify-center items-center xl:gap-16'>
            {cards.map((data)=>(
                

                <>
                <div key={Math.random()} onClick={()=> navigate(`/wallet-cards/${data.title.toLowerCase()}`)}  className='cursor-pointer'>
                <img className='w-32 md:w-40 xl:w-60' src={data.image} alt="" />
                <p key={Math.random()} className='text-lg font-medium gap-2'>{data.title}</p> 
                </div>
                </>
             

       


            ))}
            
        </div>
    </div>
    
    </div>
    
  )
}

export default DashBoardGiftcardContainer