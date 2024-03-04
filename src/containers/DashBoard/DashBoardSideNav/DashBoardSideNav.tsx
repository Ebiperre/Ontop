import React, { useState } from "react";
import logo from "../../../../src/assets/icons/logo_with_left_text.svg"
import "../DashBoardSideNav/DashBoardSideNav.css";
import { NavLink } from "react-router-dom"
import { MdCardGiftcard, MdOutlineAdminPanelSettings, MdSpaceDashboard } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaCreditCard } from "react-icons/fa";
import { PiSwapBold } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { TfiLayoutListThumb } from "react-icons/tfi";
// import Logout from "../../Pages/LogOut/Logout";

type DashBoardSideNavProps = {
  showNav: boolean;
  setActiveLinkText: string;
  setShowNav: boolean;
};

const DashBoardSideNav = ({ showNav, setActiveLinkText, setShowNav }: DashBoardSideNavProps) => {
  return (
    <>
      <aside
        className={`${showNav ? "" : "generalDevice:right-[-100%]"
          } side-bar-container bg-[#f7f7f7] font-author text-left text-dark h-full min-h-full w-full max-w-[274px] overflow-auto fixed z-50 generalDevice:top-[70px] generalDevice:right-0 transition-all duration-[1s] ease-in-out`}
      >
        <div>
          <img
            src={logo}
            alt="logo"
            className="w-[150px] generalDevice:hidden block pr-[10px]"
          />
        </div>

        <div className="">
          <p className="text-[rgb(124,138,150)] text-sm ml-5 mb-[20px] smallDevice:mt-[20px]">
            Dashboard
          </p>

          <div className="mb-[40px] smallerDevice:mb-[15px]">
            <ul className="flex flex-col gap-[20px] smallDevice:gap-[25px] smallerDevice:gap-[10px]">
              <NavLink
                to="/wallet-home"
                className={`side-btn w-[80%] mx-auto `}
                onClick={() => {
                  handleNavLinkClick("Home");
                  setActiveLinkText("Home");
                }}
              >
                <li
                  className={`text-[18px] font-normal flex items-center gap-2 cursor-pointer pl-3 pr-8 py-2 rounded transition-all duration-[2s] ease-in-out`}
                >
                  <MdSpaceDashboard /> Home
                </li>
              </NavLink>

              <NavLink
                to="/wallet-buy"
                className={`side-btn w-[80%] mx-auto`}
                onClick={() => {
                  handleNavLinkClick("Buy Assets");
                  setActiveLinkText("Buy Assets");
                }}
              >
                <li
                  className={`text-[18px] font-normal flex items-center gap-2 cursor-pointer  pl-3 pr-8 py-2 transition-all duration-[2s] ease-in-out`}
                >
                  <FaCreditCard /> Buy Assets
                </li>
              </NavLink>

              <NavLink
                to="/wallet-sell"
                className={`side-btn w-[80%] mx-auto `}
                onClick={() => {
                  handleNavLinkClick("Sell Assets");
                  setActiveLinkText("Sell Assets");
                }}
              >
                <li
                  className={` text-[18px] font-normal flex items-center gap-2 cursor-pointer pl-3 pr-8 py-2 rounded transition-all duration-[2s] ease-in-out`}
                >
                  <AiOutlineTransaction /> Sell
                  Assets
                </li>
              </NavLink>

              <NavLink
                to="/wallet-swapcoin"
                className={`side-btn w-[80%] mx-auto `}
                onClick={() => {
                  handleNavLinkClick("Swap Coin");
                  setActiveLinkText("Swap Coin");
                }}
              >
                <li
                  className={`text-[18px] font-normal flex items-center gap-2 cursor-pointer pl-3 pr-8 py-2 rounded transition-all duration-[2s] ease-in-out`}
                >
                  <PiSwapBold /> Swap Coin
                </li>
              </NavLink>

              <NavLink
                to="/wallet-cards"
                className={`side-btn w-[80%] mx-auto `}
                onClick={() => {
                  handleNavLinkClick("Cards");
                  setActiveLinkText("Cards");
                }}
              >
                <li
                  className={`text-[18px] font-normal flex items-center gap-2 cursor-pointer  pl-3 pr-8 py-2 rounded transition-all duration-[2s] ease-in-out`}
                >
                  <MdCardGiftcard /> Gift Cards
                </li>
              </NavLink>

              <NavLink
                to="/wallet-wallet"
                className={`side-btn w-[80%] mx-auto `}
                onClick={() => {
                  handleNavLinkClick("Wallet");
                  setActiveLinkText("Wallet");
                }}
              >
                <li
                  className={`text-[18px] font-normal flex items-center gap-2 cursor-pointer  pl-3 pr-8 py-2 rounded transition-all duration-[2s] ease-in-out`}
                >
                  <IoWalletOutline /> Wallet
                </li>
              </NavLink>

              <NavLink
                to="/wallet-transactions"
                className={`side-btn w-[80%] mx-auto `}
                onClick={() => {
                  handleNavLinkClick("Transactions");
                  setActiveLinkText("Transactions");
                }}
              >
                <li
                  className={`text-[18px] font-normal flex items-center gap-2 cursor-pointer  pl-3 pr-8 py-2 rounded transition-all duration-[2s] ease-in-out`}
                >
                  <TfiLayoutListThumb /> Transactions
                </li>
              </NavLink>
            </ul>
          </div>

          <div>
            <p className="text-[rgb(124,138,150)] text-sm ml-5 mb-[20px] smallerDevice:mb-[5px]">
              Account
            </p>

            <div className="pb-[40px]">
              <ul className="flex flex-col gap-[15px] smallerDevice:gap-[0px]">
                <NavLink
                  to="/wallet-settings"
                  className={`side-btn w-[80%] mx-auto `}
                  onClick={() => {
                    handleNavLinkClick("Settings");
                    setActiveLinkText("Settings");
                  }}
                >
                  <li
                    className={`text-[18px] font-normal flex items-center gap-2 cursor-pointer  pl-3 pr-8 py-2 rounded transition-all duration-[2s] ease-in-out`}
                  >
                    <MdOutlineAdminPanelSettings /> Settings
                  </li>
                </NavLink>

                <li
                  className={`text-[18px] font-normal flex items-center gap-2 cursor-pointer  px-[5px] py-[10px] transition-all duration-[2s] ease-in-out largeDevice:hidden`}
                  onClick={() => {
                    // setCloseLogout(true);
                    setShowNav(false);
                  }}
                >
                  Logout{" "}
                  <i className="fa-solid fa-arrow-right-from-bracket pl-[10px]"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>

      <div className="">
        {/* <Logout closeLogout={closeLogout} handleLogout={handleLogout} /> */}
      </div>
    </>
  );
};

export default DashBoardSideNav;
