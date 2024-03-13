import { Link } from "react-router-dom"

const WalletPageContainer = () => {
  return (
    <div className="w-full">
     <div className="md:flex md:items-center md:gap-2">
     <div className="mb-4 mx-4 overflow-hidden">
        <div className=" bg-dark2 text-white rounded-md w-full md:w-[32%] mb-4">
          <div className="flex relative">
            <div className="px-4 py-3 text-start">
              <h4 className="text-sm pb-2">Your <span className="font-semibold">Balance</span></h4>
              <div className="flex items-center gap-3 pb-2">
                <h1 className=" font-sans text-2xl font-extrabold">$24,899.<span className=" text-slate-400">00</span>
                {/* <select name="crypto" id="1" className=" text-gray-700 text-sm pl-1 outline-none">
                  <option value="BTC">BTC</option>
                  <option value="ETH">ETH</option>
                  <option value="BNB">BNB</option>
                  <option value="USDT">USDT</option>
                </select> */}
                </h1>
                {/* <span className=" rotate-90 ">icon</span> */}
              </div>
              <h5 className="font-sans text-md font-semibold text-grey2">0.00<span className="pl-1">USD</span></h5>
            </div>
           <div className="absolute bottom-3 right-4">
             <div className="border border-orange rounded-full w-8 h-8 flex justify-center items-center text-lg font-semibold">+</div>
           </div>

           {/* Designs */}
           <div className="absolute -top-9 -right-8">
             <div className="border border-orange rounded-full w-24 h-24 flex justify-center items-center text-lg font-semibold"></div>
           </div>
           <div className="absolute -top-6 -right-5">
             <div className="border border-orange rounded-full w-16 h-16 flex justify-center items-center text-lg font-semibold"></div>
           </div>
           <div className="absolute -top-6 -right-5">
             <div className="border border-orange rounded-full w-12 h-12 flex justify-center items-center text-lg font-semibold"></div>
           </div>
          </div>
        </div>
      </div>
      
      <div className="flex gap-10 items-center justify-center mb-4">
        <div className="">
           <div className="w-14 h-14 rounded-full text-sm bg-[#FFFFFF] border border-gray-400 font-semibold flex items-center justify-center">
             B
           </div>
           Buy
        </div>
        <div className="">
           <div className="w-14 h-14 rounded-full text-sm bg-[#FFFFFF] border border-gray-400 font-semibold flex items-center justify-center">
             S
           </div>
           Swap
        </div>
        <div className="">
           <div className="w-14 h-14 rounded-full text-sm bg-[#FFFFFF] border border-gray-400 font-semibold flex items-center justify-center">
             SA
           </div>
           Sell
        </div>
      </div>
       <hr className="bg-gray-400 mx-4"/>
      <div className=" bg-[#9a9d9d33] w-full rounded-xl px-4 pt-6 text-[#000] mt-4">
        <div className="flex w-full items-center justify-between pb-6">
          <h1 className="font-semibold text-lg">Token market</h1>
          <Link to='/wallet-home'><span className="text-sm font-medium text-grey">View All</span></Link>
        </div>
        {/* crypto cards */}
        <div className="pb-4">
           <div className="flex justify-between items-center w-full">
             <div className="flex items-center gap-2">
              {/* image */}
              <div className="w-11 h-11 bg-yellow-500 rounded-full flex items-center justify-center"><span className="text-white rotate-45 font-semibold text-2xl">B</span></div>

               <div className="flex flex-col items-start">
                <h1 className="text-lg font-medium">Bitcoin</h1>
                <p className="text-sm">BTC</p>
               </div>
             </div>
             <div className="">
              <div className="flex flex-col items-end">
                <h2 className="text-md font-medium font-sans">69,300 USD</h2>
                <p className=" text-deleteRed">-0.5%</p>
              </div>
             </div>
           </div>
        </div>
        <div className="pb-4">
           <div className="flex justify-between items-center w-full">
             <div className="flex items-center gap-2">
              {/* image */}
              <div className="w-11 h-11 bg-green-800 rounded-full flex items-center justify-center"><span className="text-white font-semibold text-2xl">E</span></div>

               <div className="flex flex-col items-start">
                <h1 className="text-lg font-medium">Ethereum</h1>
                <p className="text-sm">ETH</p>
               </div>
             </div>
             <div className="">
              <div className="flex flex-col items-end">
                <h2 className="text-md font-medium font-sans">3,845 USD</h2>
                <p className=" text-deleteRed">-2.45%</p>
              </div>
             </div>
           </div>
        </div>
        <div className="pb-4">
           <div className="flex justify-between items-center w-full">
             <div className="flex items-center gap-2">
              {/* image */}
              <div className="w-11 h-11 bg-blue-400 rounded-full flex items-center justify-center"><span className="text-white font-semibold text-2xl">T</span></div>

               <div className="flex flex-col items-start">
                <h1 className="text-lg font-medium">Tether usd</h1>
                <p className="text-sm">USDT</p>
               </div>
             </div>
             <div className="">
              <div className="flex flex-col items-end">
                <h2 className="text-md font-medium font-sans">1 USD</h2>
                <p className=" text-green-700">+0.25%</p>
              </div>
             </div>
           </div>
        </div>
        <div className="pb-4">
           <div className="flex justify-between items-center w-full">
             <div className="flex items-center gap-2">
              {/* image */}
              <div className="w-11 h-11 bg-black rounded-full flex items-center justify-center"><span className="text-white rotate-90 font-semibold text-2xl">X</span></div>

               <div className="flex flex-col items-start">
                <h1 className="text-lg font-medium">Ripple</h1>
                <p className="text-sm">XPR</p>
               </div>
             </div>
             <div className="">
              <div className="flex flex-col items-end">
                <h2 className="text-md font-medium font-sans">63,300 USD</h2>
                <p className=" text-green-700">+0.05%</p>
              </div>
             </div>
           </div>
        </div>
      </div>

      <div className=" bg-white w-full rounded-xl px-4 pt-6 text-[#000] mt-4">
        <div className="flex w-full items-center justify-between pb-6">
          <h1 className="font-semibold text-lg">Transactions</h1>
          <Link to='/wallet-home'><span className="text-sm font-medium text-grey">View All</span></Link>
        </div>
        {/* crypto cards */}
        <div className="pb-4">
           <div className="flex justify-between items-center w-full">
             <div className="flex items-center gap-2">
              {/* image */}
              <div className="w-11 h-11 bg-yellow-500 rounded-full flex items-center justify-center"><span className="text-white rotate-45 font-semibold text-2xl">B</span></div>

               <div className="flex flex-col items-start">
                <h1 className="text-lg font-semibold">Bitcoin</h1>
                <p className="text-sm">BTC</p>
               </div>
             </div>
             <div className="font-medium">Deposit</div>
             <div className="">
              <div className="flex flex-col items-end">
                <h2 className="text-md font-semibold  text-green-800">+0.021BTC</h2>
                <p className=" text-grey text-sm">Mar 7,24</p>
              </div>
             </div>
           </div>
        </div>
        <div className="pb-4">
           <div className="flex justify-between items-center w-full">
             <div className="flex items-center gap-2">
              {/* image */}
              <div className="w-11 h-11 bg-yellow-500 rounded-full flex items-center justify-center"><span className="text-white rotate-45 font-semibold text-2xl">B</span></div>

               <div className="flex flex-col items-start">
                <h1 className="text-lg font-semibold">Bitcoin</h1>
                <p className="text-sm">BTC</p>
               </div>
             </div>
             <div className="font-medium">Deposit</div>
             <div className="">
              <div className="flex flex-col items-end">
                <h2 className="text-md font-semibold  text-green-800">+0.08BTC</h2>
                <p className=" text-grey text-sm">Mar 7,24</p>
              </div>
             </div>
           </div>
        </div>
        <div className="pb-4">
           <div className="flex justify-between items-center w-full">
             <div className="flex items-center gap-2">
              {/* image */}
              <div className="w-11 h-11 bg-green-800 rounded-full flex items-center justify-center"><span className="text-white font-semibold text-2xl">E</span></div>

               <div className="flex flex-col items-start">
                <h1 className="text-lg font-semibold">Ethereum</h1>
                <p className="text-sm">ETH</p>
               </div>
             </div>
             <div className="font-medium">Withdrawal</div>
             <div className="">
              <div className="flex flex-col items-end">
                <h2 className="text-md font-semibold  text-deleteRed">-57.7ETH</h2>
                <p className=" text-grey text-sm">Mar 7,24</p>
              </div>
             </div>
           </div>
        </div>
        <div className="pb-4">
           <div className="flex justify-between items-center w-full">
             <div className="flex items-center gap-2">
              {/* image */}
              <div className="w-11 h-11 bg-black rounded-full flex items-center justify-center"><span className="text-white rotate-90 font-semibold text-2xl">X</span></div>

               <div className="flex flex-col items-start">
                <h1 className="text-lg font-semibold">Ripple</h1>
                <p className="text-sm">XPR</p>
               </div>
             </div>
             <div className="font-medium">Deposit</div>
             <div className="">
              <div className="flex flex-col items-end">
                <h2 className="text-md font-semibold  text-green-800">+2XPR</h2>
                <p className=" text-grey text-sm">Mar 7,24</p>
              </div>
             </div>
           </div>
        </div>
        <div className="pb-4">
           <div className="flex justify-between items-center w-full">
             <div className="flex items-center gap-2">
              {/* image */}
              <div className="w-11 h-11 bg-blue-400 rounded-full flex items-center justify-center"><span className="text-white font-semibold text-2xl">T</span></div>

               <div className="flex flex-col items-start">
                <h1 className="text-lg font-semibold">Tether usd</h1>
                <p className="text-sm">USDT</p>
               </div>
             </div>
             <div className="font-medium">Deposit</div>
             <div className="">
              <div className="flex flex-col items-end">
                <h2 className="text-md font-semibold text-green-800">0.1USDT</h2>
                <p className=" text-grey text-sm">Mar 7,24</p>
              </div>
             </div>
           </div>
        </div>
        
        <div className="pb-4">
           <div className="flex justify-between items-center w-full">
             <div className="flex items-center gap-2">
              {/* image */}
              <div className="w-11 h-11 bg-black rounded-full flex items-center justify-center"><span className="text-white rotate-90 font-semibold text-2xl">X</span></div>

               <div className="flex flex-col items-start">
                <h1 className="text-lg font-semibold">Ripple</h1>
                <p className="text-sm">XPR</p>
               </div>
             </div>
             <div className="font-medium">Withdrawal</div>
             <div className="">
              <div className="flex flex-col items-end">
              <h2 className="text-md font-semibold  text-deleteRed">-0.03XPR</h2>
                <p className=" text-grey text-sm">Mar 7,24</p>
              </div>
             </div>
           </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default WalletPageContainer