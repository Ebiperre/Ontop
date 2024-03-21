import { useState } from "react";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

const WithdrawalContainer = () => {
  const [showBalance, setShowBalance] = useState(true);
  return (
    <>
      <div className="">
        <div className="">
          <div className="mb-4 overflow-hidden ">
            <div className=" bg-dark2 text-white w-full  mb-4">
              <div className="flex relative">
                <div className="px-4 py-3 text-start">
                  <h4 className="text-sm pb-2">
                    Avalable <span className="font-semibold">Balance</span>
                  </h4>
                  <div className="flex items-center gap-3 pb-2">
                    <h1 className=" font-sans text-2xl font-extrabold">
                      {showBalance ? (
                        <div className="">
                          $24,899.<span className=" text-slate-400">
                            00
                          </span>
                        </div>
                      ) : (
                        <span>******</span>
                      )}
                    </h1>
                    {/* <span className=" rotate-90 ">icon</span> */}
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="">
                      {showBalance ? (
                        <h5 className="font-sans text-md font-semibold text-grey2">
                          0.00<span className="pl-1">USD</span>
                        </h5>
                      ) : (
                        <span className="mr-9">*****</span>
                      )}
                    </div>
                    <div
                      className=" cursor-pointer text-lg"
                      onClick={() => setShowBalance(!showBalance)}
                    >
                      {showBalance ? <BiShow /> : <BiHide />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-start px-4 flex  flex-col justify-between gap-40">
           <div className="flex flex-col gap-8">
           <div className="w-full">
              <h1 className="font-bold text-2xl">Amount</h1>
              <input type="number" className="rounded-md border w-full p-2"/>
            </div>
            <div className="">
              <h1 className="font-bold text-2xl">Method of transaction</h1>
              <input type="number" className="rounded-md border w-full p-2"/>
            </div>
           </div>
           <div className="flex items-center justify-center">
            <button
                  onClick={() => {}}
                  className="w-full tracking-wide font-semibold bg-orange text-white py-4 px-6 rounded-lg hover:bg-orange3 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <span>Withdraw</span>
                </button>
           </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default WithdrawalContainer;
