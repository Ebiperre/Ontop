import React, { useContext } from 'react'
import { AppContext } from '../../../context/AppContext';
import { useNavigate } from 'react-router-dom';


const DashBoardGiftcardContainer: React.FC = () => {
    const { cards } = useContext(AppContext)
    const navigate = useNavigate();
    return (
        <div className='px-4 md:px-8 xl:px-10 pt-10'>
            <div className='text-left bg-white p-4 md:p-6 lg:py-10 lg:px-8 rounded-lg shadow-sm flex flex-wrap items-start justify-between mb-5'>
                <h2 className='text-3xl lg:text-5xl text-dark font-medium mb-3'>Trade Gift Cards</h2>
                <p className='text-grey text-sm lg:text-base'>Click on any gift card to start trading and explore a wide range of options for exchanging your gift cards with others.</p>
            </div>
            <div className='flex justify-start items-start flex-col pb-8 p-3 xl:pl-[5rem]'>
                <p className='text-2xl font-medium xl:text-2xl'>Top Cards</p>
            </div>
            <div>
                <div className='flex flex-wrap gap-14 justify-center items-center xl:gap-16'>
                    {cards.map((data) => (


                        <>

                            <div key={Math.random()} onClick={() => navigate(`/dashboard-cards/${data.title.toLowerCase()}`)} className='cursor-pointer'>
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