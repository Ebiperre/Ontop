import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import SteamImage from "../../../assets/images/card_steam.png"
import AmazonImage from "../../../assets/images/card_amazon.png"
import GoogleImage from "../../../assets/images/card_google.png"
import AppleImage from "../../../assets/images/card_apple.png"
import VisaImage from "../../../assets/images/card_visa.png"
import RazerImage from "../../../assets/images/card_razer.png"
import SephoraImage from "../../../assets/images/card_sephora.png"

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
    <div>
        <div className='flex justify-start items-start flex-col p-3'>
            <h2 className='text-xl font-medium'>Trade Gift Cards</h2>
            <p>click om any gift card to start trading</p>
        </div>
        <div className='flex justify-start items-start flex-col p-3'>
            <p className='text-xl font-medium'>Top Cards</p>
        </div>
        <div>
        <div className='flex flex-wrap gap-14 justify-center items-center'>
            {cards.map((data)=>(
                

                <>
               
                <div  key={Math.random()}>
                <img className='w-28' src={data.image} alt="" />
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