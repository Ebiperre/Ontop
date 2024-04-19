import React, { useState } from "react";
import logo from "../../../src/assets/icons/logo_without_text.png";
import {
  MdCardGiftcard,
  MdOutlineAdminPanelSettings,
  MdOutlinePayments,
  MdSpaceDashboard,
} from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaCreditCard } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";
import { TfiLayoutListThumb } from "react-icons/tfi";
import { useNavigate, useLocation } from "react-router-dom";

type DashBoardSideNavProps = {
  showNav: boolean;
  setActiveLinkText: React.Dispatch<React.SetStateAction<string>>;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const DashBoardSideNav = ({
  showNav,
  setShowNav,
}: DashBoardSideNavProps) => {
  const [navigationLinks] = useState([
    { to: "/dashboard/home", icon: <MdSpaceDashboard />, text: "Home" },
    { to: "/dashboard/buy", icon: <FaCreditCard />, text: "Buy Assets" },
    { to: "/dashboard/sell", icon: <AiOutlineTransaction />, text: "Sell Assets" },
    { to: "/dashboard/cards", icon: <MdCardGiftcard />, text: "Gift Cards" },
    { to: "/dashboard/wallet", icon: <IoWalletOutline />, text: "Wallet" },
    { to: "/dashboard/transactions", icon: <TfiLayoutListThumb />, text: "Transactions" },
    { to: "/dashboard/payments", icon: <MdOutlinePayments />, text: "Payments" },
    { to: "/dashboard/settings", icon: <MdOutlineAdminPanelSettings />, text: "Settings" },
  ]);

  const handleNavLinkClick = () => {
    setShowNav(false);
  };

  const navigate = useNavigate();
  const location = useLocation();


  return (
    <aside
      className={`${showNav ? "" : "generalDevice:right-[-100%]"
        } side-bar-container bg-white border-r border-r-[#d8d8d8] font-author text-left text-dark h-full min-h-full w-full lg:max-w-[274px] overflow-auto fixed z-50 generalDevice:top-[70px] generalDevice:right-0 transition-all duration-[500ms] ease-in-out`}
    >
      <div
        onClick={() => { navigate('/dashboard/home') }}
        className=" flex items-center pl-2.5 mt-5 mb-12 generalDevice:hidden">
        <img
          src={logo}
          alt="logo"
          className="w-10 h-10 object-cover"
        />
        <h1 className="text-orange font-semibold text-2xl ml-1.5"> ONTOP </h1>
      </div>

      <ul className="flex flex-col gap-[20px] mx-2.5 mt-10 lg:mr-7 smallDevice:gap-[25px] smallerDevice:gap-[10px]">
        {navigationLinks.map((link, index) => (
          <li
            key={index}
            className={`text-[18px] font-normal flex items-center gap-2 cursor-pointer pl-3 pr-8 py-2 rounded transition-all duration-[2s] ease-in-out ${location.pathname.includes(link.to) ? 'bg-orange text-white' : ''}`}
            onClick={() => {
              handleNavLinkClick()
              navigate(link.to)
            }}
          >
            {link.icon}
            {link.text}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default DashBoardSideNav;
