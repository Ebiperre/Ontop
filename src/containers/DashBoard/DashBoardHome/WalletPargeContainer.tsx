import { Link } from "react-router-dom"
import { BiMoneyWithdraw } from "react-icons/bi";
import { RiHandCoinLine } from "react-icons/ri";
import { TbCoins } from "react-icons/tb";
import { LuBitcoin } from "react-icons/lu";
import { SiEthereum } from "react-icons/si";
import { SiTether } from "react-icons/si";
import { FiPlus } from "react-icons/fi";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { useState } from "react";
import { IconType } from "react-icons/lib";

type TransDetails = {
   length: number;
   map(arg0: (data: TransDetails) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
   coinFullName: string;
   coinName: string;
   transType: string;
   percent: string;
   date: string;
   img: Element | IconType;
 }


const transactionData: TransDetails[] = [
  {
    coinFullName: 'Bitcoin',
    coinName: 'BTC',
    transType: 'Deposit',
    percent: '+0.021BTC',
    date: 'Mar 7,24',
    img: <LuBitcoin />,
  },
  {
    coinFullName: 'Bitcoin',
    coinName: 'BTC',
    transType: 'Deposit',
    percent: '+0.08BTC',
    date: 'Mar 7,24',
    img: <LuBitcoin />
  },
  {
    coinFullName: 'Ethereum',
    coinName: 'ETH',
    transType: 'Withdrawal',
    percent: '-57.7ETH',
    date: 'Mar 7,24',
    img: <SiEthereum />
  },
  {
    coinFullName: 'Ripple',
    coinName: 'XPR',
    transType: 'Deposit',
    percent: '+2XPR',
    date: 'Mar 7,24',
    img: 'X'
  },
  {
    coinFullName: 'Tether usd',
    coinName: 'USDT',
    transType: 'Deposit',
    percent: '0.1USDT',
    date: 'Mar 7,24',
    img: <SiTether />
  },
  {
    coinFullName: 'Ripple',
    coinName: 'XPR',
    transType: 'Withdrawal',
    percent: '-0.03XPR',
    date: 'Mar 7,24',
    img: 'X'
  },
]

const typeColors: { [key: string]: string } = {
  Withdrawal: 'deleteRed',
  Deposit: 'green',
};

// would remove this later
const coinColors: { [key: string]: string } = {
  XPR: 'black',
  USDT: 'green',
  BTC: 'yellow-500',
  ETH: 'green',
};



const WalletPageContainer: React.FC = () => {
  const [showBalance, setShowBalance] = useState(true);
  // const [TransType, setTransType] = useState('Deposit');



 

  return (
    <div className="w-full relative">
     <div className="lg:px-4 lg:pt-20">
     <div className=" sticky w-full top-16 z-10 bg-white lg:static lg:border lg:rounded-md lg:mx-0 py-4 flex flex-col tablet:pb-0  tablet:grid tablet:grid-cols-2 tablet:item-center tablet:justify-center mediumDevice:px-2 lg:grid lg:grid-cols-2 ">
     <div className="mb-4 mx-4 overflow-hidden ">
        <div className=" bg-dark2 text-white rounded-md w-full  mb-4">
          <div className="flex relative">
            <div className="px-4 py-3 text-start">
              <h4 className="text-sm pb-2">Your <span className="font-semibold">Balance</span></h4>
              <div className="flex items-center gap-3 pb-2">
                <h1 className=" font-sans text-2xl font-extrabold">{showBalance ?<div className=""> $24,899.<span className=" text-slate-400">00</span> </div>: <span>******</span> }
                {/* <select name="crypto" id="1" className=" text-gray-700 text-sm pl-1 outline-none">
                  <option value="BTC">BTC</option>
                  <option value="ETH">ETH</option>
                  <option value="BNB">BNB</option>
                  <option value="USDT">USDT</option>
                </select> */}
                </h1>
                {/* <span className=" rotate-90 ">icon</span> */}
              </div>
              <div className="flex items-center gap-6">
                <div className="">{showBalance ? <h5 className="font-sans text-md font-semibold text-grey2">0.00<span className="pl-1">USD</span></h5> : <span className="mr-9">*****</span> }</div>
                <div className=" cursor-pointer text-lg" onClick={() => setShowBalance(!showBalance)}>{showBalance ? <BiShow /> : <BiHide /> }</div>
              </div>
            </div>
           <div className="absolute bottom-3 right-4">
             <div className="border border-orange rounded-full w-8 h-8 flex justify-center items-center text-lg font-semibold text-white"><FiPlus /></div>
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
      
     <div className=" w-full text-center">
     <div className="flex gap-10 items-center justify-center text-center h-[116px] rounded-md mb-4 tablet:border lg:border tablet:mr-3 lg:mr-3">
        <Link to='/dashboard-buy' className="flex flex-col items-center font-semibold">
           <div className="w-14 h-14 rounded-full rounded-tl-full rounded-bl-full rounded-tr-3xl  text-lg bg-[#FFFFFF] border border-gray-400 font-bold flex items-center justify-center cursor-pointer">
           <TbCoins />
           </div>
           Buy
        </Link>
        <Link to='/dashboard-withdraw' className="flex flex-col items-center font-semibold">
           <div className="w-14 h-14 rounded-full rounded-tl-full rounded-bl-full rounded-br-3xl  text-lg  bg-[#FFFFFF] border border-gray-400 font-bold flex items-center justify-center md:cursor-pointer">
           <BiMoneyWithdraw className="t"/>
           </div>
           Withdraw
        </Link>
        <Link to='/dashboard-sell' className="flex flex-col items-center font-semibold">
           <div className="w-14 h-14 rounded-full rounded-tl-3xl rounded-tr-full rounded-br-full  text-lg bg-[#FFFFFF] border border-gray-400 font-bold flex items-center justify-center md:cursor-pointer">
           <RiHandCoinLine />
           </div>
           Sell
        </Link>
      </div>
     </div>
       <hr className="bg-gray-400 mx-4 tablet:hidden lg:grid lg:col-span-2"/>
     </div>
      <div className=" flex flex-col-reverse w-full xl:px-2 xl:grid xl:grid-cols-3 xl:pb-4 gap-4">
       <div className=" bg-white w-full rounded-xl px-4 pt-6 xl:col-span-2 text-[#000] mt-4 mediumDevice:px-6 ">
        <div className="flex w-full items-center justify-between pb-6 ">
          <h1 className="font-semibold text-lg">Transactions</h1>
          <Link to='/dashboard-transactions'><span className="text-sm font-medium text-grey">View All</span></Link>
        </div>
        {/* crypto cards */}
        {transactionData.map((data: TransDetails) => (
          <div className="pb-4 border-b mb-2">
          <div className="justify-between items-center w-full grid grid-cols-4 tablet:grid-cols-3  xl:grid xl:grid-cols-3">
            <div className="flex items-center gap-2 col-span-2 tablet:col-auto">
             {/* image */}
             <div className={`w-11 h-11 bg-${coinColors[data.coinName]} rounded-full flex items-center justify-center`}><span className="text-white font-semibold text-2xl">{data.img}</span></div>

              <div className="flex flex-col items-start">
              <h1 className="text-lg font-semibold">{data.coinFullName}</h1>
               <p className="text-sm">{data.coinName}</p>
              </div>
            </div>
            <div className="font-medium ">{data.transType}</div>
            <div className="">
             <div className="flex flex-col items-end">
               <h2 className={`text-md font-semibold  text-${typeColors[data.transType]}`}>{data.percent}</h2>
               <p className=" text-grey text-sm">{data.date}</p>
             </div>
            </div>
          </div>
       </div>
        ))}

        {transactionData.length === 0 && (
          <div className="">
            <h1>No transaction DATA</h1>
          </div>
        )}
        </div>

        <div className=" w-full rounded-xl px-4 xl:border pt-6 xl:pb-2 tablet:pt-0 text-[#000] mt-4 mediumDevice:px-6 ">
        <div className="flex w-full items-center justify-between pb-6">
          <h1 className="font-semibold text-lg">Token market</h1>
          <Link to='/dashboard-home'><span className="text-sm font-medium text-grey">View All</span></Link>
        </div>
        {/* crypto cards */}
        {/* <div className="pb-4">
           <div className="flex justify-between items-center w-full">
             <div className="flex items-center gap-2">
               
              <div className="w-11 h-11 bg-yellow-500 rounded-full flex items-center justify-center"><span className="text-white font-semibold text-2xl"><LuBitcoin /></span></div>

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
        </div> */}
        {/* <div className="pb-4">
           <div className="flex justify-between items-center w-full">
             <div className="flex items-center gap-2">
             
              <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center"><span className=" text-green font-semibold text-2xl"><SiEthereum /></span></div>

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
        </div> */}
        {/* <div className="pb-4">
           <div className="flex justify-between items-center w-full">
             <div className="flex items-center gap-2">
              
              <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center"><span className="text-green font-semibold text-2xl"><SiTether /></span></div>

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
        </div> */}
        {/* <div className="pb-4">
           <div className="flex justify-between items-center w-full">
             <div className="flex items-center gap-2">
           
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
        </div> */}

        <div className="flex items-center lg:grid lg:grid-cols-2 xl:col-span-2 xl:grid-cols-1 justify-start text-dark2 w-full rounded-[1rem] min-h-36 gap-4 md:px-0 overflow-scroll md:overflow-scroll">
          <div className="bg-greyWhite2 w-full rounded-xl font-semibold md:flex-1 flex flex-col justify-between py-4 items-start h-28 border-r px-6">
            <div className="flex font-medium w-full justify-between ">
              <p>
                BTC
              </p>
              <p className=" text-green text-sm">+0.05%</p>
            </div>


            <p className="text-2xl">
              $77,000.00
            </p>
            {/* <div className="flex flex-col justify-between items-center w-full">
             <div className="flex items-center gap-2">
           
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center"><span className="text-white rotate-90 font-semibold text-xl">X</span></div>

               <div className="flex item-center gap-8 items-start">
                <p className="text-sm">XPR</p>
                <p className=" text-green text-sm">+0.05%</p>
               </div>
             </div>
             <div className="mt-6">
              <div className="flex flex-col items-end">
                <h2 className="text-md font-medium text-2xl">63,300 USD</h2>
              </div>
             </div>
            </div> */}
          </div>


          <div className="bg-[#ffd993e7] rounded-xl font-semibold md:flex-1 flex flex-col justify-between py-4 items-start h-28 border-r px-6">
            <div className="flex font-medium w-full justify-between ">
              <p>
                ETH
              </p>
              <p className=" text-green text-sm">+0.05%</p>
            </div>


            <p className="text-2xl">
              $77,000.00
            </p>
          </div>

          <div className="bg-[#94e5cec7] rounded-xl font-semibold md:flex-1 flex flex-col justify-between py-4 items-start h-28 border-r px-6">
            <div className="flex font-medium w-full justify-between ">
              <p>
                XPR
              </p>
              <p className=" text-green text-sm">+0.05%</p>
            </div>


            <p className="text-2xl">
              $77,000.00
            </p>
          </div>

          <div className="bg-[#e0eaff] rounded-xl font-semibold md:flex-1 flex flex-col justify-between py-4 items-start h-28 border-r px-6">
            <div className="flex font-medium w-full justify-between ">
              <p>
                USDT
              </p>
              <p className=" text-green text-sm">+0.05%</p>
            </div>


            <p className="text-2xl">
              $77,000.00
            </p>
          </div>
        </div>
      </div>
      </div>
     </div>
    </div>
  )
}

export default WalletPageContainer