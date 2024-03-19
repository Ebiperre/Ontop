import React from 'react'

const DashboardPaymentPageContainer: React.FC = () => {
    return (
        <div className="px-4 lg:px-8 pt-14 pb-10">
            <div className=" flex flex-col gap-16 relative">
                <div className="bg-white p-4 md:p-6 lg:py-10 lg:px-8 rounded-lg shadow-sm flex flex-wrap items-start justify-between gap-10">
                    <div className='text-left w-full max-w-xl'>
                        <h2 className="text-3xl lg:text-5xl text-dark font-medium mb-3">Manage Payments</h2>
                        <p className="text-grey text-sm lg:text-base">
                            Stay on top of your payments. Monitor, analyze, and manage your transactions seamlessly with our intuitive platform.
                        </p>
                    </div>
                    <button onClick={() => { }} className="bg-orange2 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-100">Add Card</button>
                </div>
                <div>
                    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-100">
                        <form className="bg-white w-full max-w-3xl mx-auto px-6 py-8 shadow-md rounded-md flex">
                            <div className="w-1/2 pr-8 border-r-2 border-slate-300">
                                <label className="text-neutral-800 font-bold text-sm mb-2 block">Card number:</label>
                                <input type="text" className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg ring-offset-background focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4" />
                                <div className="flex gap-x-2 mb-4">
                                    <div className="flex-1">
                                        <label className="text-neutral-800 font-bold text-sm mb-2 block">Exp. date:</label>
                                        <input type="text" className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg ring-offset-background focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4" />
                                    </div>
                                    <div className="flex-1">
                                        <label className="text-neutral-800 font-bold text-sm mb-2 block">CCV:</label>
                                        <input type="text" className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg ring-offset-background focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4" />
                                    </div>
                                </div>

                                <label className="text-neutral-800 font-bold text-sm mb-2 block">Card holder:</label>
                                <input type="text" className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg ring-offset-background focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                            </div>
                            <div className="w-1/2 pl-8">
                                <div className="w-full h-56" style={{ perspective: '1000px' }}>
                                    <div className="crediCard relative cursor-pointer transition-transform duration-500" style={{ transformStyle: 'preserve-3d' }}>
                                        <div className="w-full m-auto rounded-xl shadow-2xl absolute" style={{ backfaceVisibility: 'hidden' }}>
                                            <img src="https://i.ibb.co/B2vQ0xG/Card-1.jpg" className="object-cover w-full h-full" />
                                        </div>
                                        <div className="w-full m-auto rounded-xl shadow-2xl absolute" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                                            <img src="https://i.ibb.co/ThGc8mn/Card-2.jpg" className="object-cover w-full h-full" />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-center text-neutral-800 font-bold text-sm mb-2 block">Hover the card</p>
                            </div>
                        </form>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default DashboardPaymentPageContainer