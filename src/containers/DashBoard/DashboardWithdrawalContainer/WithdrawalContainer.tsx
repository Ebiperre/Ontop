import { useState } from "react";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { TbCurrencyNaira } from "react-icons/tb";
import Modal from "../../../components/Modal";
import { FiPlus } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";




const WithdrawalContainer = () => {
  const [showBalance, setShowBalance] = useState(true);

  const [isOpen, setIsOpen] = useState(false);

  // Utils
  // const closeDisclaimers = [
  //     "Deleting your account will revoke your access to the platform.",
  //     "Any associated roles and permissions will be removed.",
  //     "You will no longer be able to log in or perform any actions.",
  //     "Please not that the account can not be retrived after deletion"
  // ];

  // const handleCloseModal = () => {
  //     setIsOpen(false);
  // };

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
          <div className="text-start px-4 tablet:px-16 mediumDevice:px-16 flex  flex-col justify-between gap-40">
           <div className="flex flex-col gap-8">
           <div className="w-full">
              <h1 className="font-bold text-xl">Amount</h1>
              <input type="number" inputMode='numeric' pattern="[0-9]*" placeholder="2,000" className="rounded-md border w-full p-2"/>
              <div className="flex items-center">Max daily amount - <span className="flex items-center"><TbCurrencyNaira /><p className="font-bold pb-1">5,000,000.00</p></span></div>
            </div>
            <div className="">
              <h1 className="font-bold text-xl">Payment method</h1>
              {/* <input type="number" className="rounded-md border w-full p-2"/> */}
              <input aria-disabled onClick={() => setIsOpen(!isOpen)} placeholder="Select a payment method"  className="rounded-md border w-full p-2" />
            </div>
           </div>
           <div className="flex items-center justify-center">
            <button
                  className="w-full tracking-wide font-semibold bg-orange text-white py-4 px-6 rounded-lg hover:bg-orange3 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <span>Withdraw</span>
                </button>
           </div>
           
          </div>
        </div>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div>
          <div className="pb-6">
            <h1 className="font-semibold text-xl pb-2">Select payment method</h1>
          </div>
          <Link to={'/dashboard-transactions/payments'} className="">
            <div className="flex items-center w-full gap-4">
              <div className=" flex items-center justify-center w-8 h-8  tablet:w-12 tablet:h-12 bg-gray-400 rounded-md">
               <FiPlus className="text-2xl tablet:text-4xl" />
              </div>
              <div className="w-full">
                <div className="flex items-center justify-between">
                  <h2 className="pb-1">Add new payment method</h2>
                  <MdKeyboardArrowRight />
                </div>
                 <hr />
              </div>
            </div>
          </Link>
        </div>
      </Modal>
    </>
  );
};

export default WithdrawalContainer;
