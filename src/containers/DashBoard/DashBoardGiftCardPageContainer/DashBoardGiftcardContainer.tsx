import React, { useContext } from 'react'
import { AppContext } from '../../../context/AppContext';
import { useNavigate } from 'react-router-dom';

const DashBoardGiftcardContainer: React.FC = () => {
const {cards} = useContext(AppContext)
   const navigate = useNavigate();

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
               
                <div key={Math.random()} onClick={()=> navigate(`/wallet-cards/${data.title.toLowerCase()}`)}  className='cursor-pointer'>
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