import React, { useContext, } from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { AppContext } from '../../../context/AppContext'
import { useParams } from 'react-router-dom'
import UsaImage from "../../../assets/images/usa.png"
import CadImage from "../../../assets/images/canada.png"
import CardClass from "../../../containers/DashBoardContainers/DashBoardGiftCardPageContainer/CardDetails.module.css"
import { FaImage } from "react-icons/fa6";

const CardDetails = () => {
  const navigate = useNavigate()


  const { cards } = useContext(AppContext)

  const { CardId } = useParams()

  const activeCard = cards.find(data => data.title.toLowerCase() === CardId)

  const [userImage, setUserImage] = useState<{
    frontendFile: null | string;
    file: null | string;
  }>({
    file: null,
    frontendFile: null,
  });

  // Utils
  const imageHandler = (e: any) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setUserImage((prevState: any) => {
          return { ...prevState, frontendFile: reader.result };
        });
      }
    };
    reader.readAsDataURL(e.target.files[0]);

    setUserImage((prevState: any) => {
      return { ...prevState, file: e.target.files[0] };
    });


  }





  return (
<<<<<<< HEAD:src/containers/DashBoardContainers/DashBoardGiftCardPageContainer/CardDetails.tsx
    <div>
      <div className='w-[100%]'>
     
      </div>
=======
>>>>>>> 3e8d8fa (added the correct layout):src/containers/DashBoard/DashBoardGiftCardPageContainer/CardDetails.tsx
    <div className='px-6 xl:px-60 xl:pb-8'>
      <div className='flex justify-between items-center pt-2'>
        <div className='flex justify-center items-center gap-3'>
          <img className='w-12 xl:w-20' src={activeCard?.image} alt="" />
          <h1 className='text-xl font-medium'>{activeCard?.title}</h1>
        </div>
        <p className="font-medium cursor-pointer xl:text-lg" onClick={() => { navigate('/dashboard/cards') }} >Back</p>
<<<<<<< HEAD:src/containers/DashBoardContainers/DashBoardGiftCardPageContainer/CardDetails.tsx
      <div className='flex justify-between items-center xl:flex xl:justify-between xl:items-center pt-2'>
        <div className='flex justify-center items-center gap-3 mt-24'>
      <img className='w-12 xl:w-20' src={activeCard?.image} alt="" />
      <h1 className='text-xl font-medium'>{activeCard?.title}</h1>
      </div>
      <p className="font-medium cursor-pointer mt-20 xl:text-lg" onClick={() => {navigate('/dashboard-cards')}} >Back</p>
=======
>>>>>>> 3e8d8fa (added the correct layout):src/containers/DashBoard/DashBoardGiftCardPageContainer/CardDetails.tsx
      </div>
      <div className="flex flex-col items-start justify-start pt-4">
        <p className='text-xl'>Fill the form to start trading </p>
        <p className='font-semibold'>Select Country</p>
        <div className="flex  items-start justify-start gap-4 pt-4">
          <button className='border-[1px] p-1 bg-gray-50 rounded-md border-purple flex flex-col justify-center items-center px-2'>
            <img className='w-8' src={UsaImage} alt="" />
            <p>United</p>
          </button>
          <button className='border-[1px] p-1 bg-gray-50  rounded-md border-purple flex flex-col justify-center items-center px-2'>
            <img className='w-8' src={CadImage} alt="" />
            <p>canada</p>
          </button>
        </div>
      </div>
      <div>
        <div className='flex flex-col justify-start items-start pt-6 gap-2'>
          <label className='text-lg font-semibold' htmlFor="">Card Value ($)</label>
          <input className='bg-gray-200 py-3 w-full px-2 rounded-sm outline-none ' type="number" placeholder='Enter Card Value' name="" id="" />
        </div>
      </div>
      <div className='flex justify-start items-start h-4 pt-2'>
        <label className='text-lg font-semibold flex items-center gap-1' htmlFor="">Upload Card Image <FaImage /></label>
      </div>
      <div className="w-full bg-gray-200 mt-5 h-[100px] gap-8 flex justify-center items-center p-4 xl:py-20">
        <div className='flex flex-col justify-center  items-start'>
          <img className='w-16'
            src={
              (userImage?.frontendFile as string)
            }
            alt=""
          />
          <div className="">
            <input className={CardClass.input_field} type="file" accept=".jpg, .jpeg, .png" id="profilePhoto" onChange={imageHandler} />

          </div>
        </div>
      </div>
      <button className='w-full bg-purple2 mt-8 text-white py-4 rounded-md xl:py-2 xl:mr-[50rem] xl:text-xl xl:w-36'>Confirm Trade</button>

    </div>

  )
}

export default CardDetails;