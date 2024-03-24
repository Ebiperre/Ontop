import React, { useContext } from 'react'
import { AppContext } from '../../../context/AppContext';
import { useNavigate } from 'react-router-dom';


const DashBoardGiftcardContainer: React.FC = () => {
const {cards} = useContext(AppContext)
   const navigate = useNavigate();
  return (
    <div className='px-4 md:px-8 xl:px-10'>
        <div className='flex justify-start items-start flex-col p-3  xl:pl-[5rem]'>
            <h2 className='text-xl font-medium xl:text-2xl'>Trade Gift Cards</h2>
            <p>click om any gift card to start trading</p>
        </div>
        <div className='flex justify-start items-start flex-col pb-8 p-3 xl:pl-[5rem]'>
            <p className='text-2xl font-medium xl:pl-8'>Top Cards</p>
        </div>
        <div>
        <div className='flex flex-wrap gap-14 justify-center items-center xl:gap-16'>
            {cards.map((data)=>(
                

                <>
               
                <div key={Math.random()} onClick={()=> navigate(`/dashboard-cards/${data.title.toLowerCase()}`)}  className='cursor-pointer'>
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