import React, { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashBoardSideNav from "../../../components/DashBoardSideNav/DashBoardSideNav";
import DashBoardTopHeader from "../../../components/DashBoardTopHeader/DashBoardTopHeader";

type DashboardLayoutProps = {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [showNav, setShowNav] = useState(false);
  const [activeLinkText, setActiveLinkText] = useState("");
  const location = useLocation();

  const toggleNav = () => {
    setShowNav((prevShowNav) => !prevShowNav);
  };
  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case "/dashboard-home":
        setActiveLinkText("Home");
        break;
      case "/dashboard-buy":
        setActiveLinkText("Buy Assets");
        break;
      case "/dashboard-sell":
        setActiveLinkText("Sell Assets");
        break;
      case "/dashboard-swapcoin":
        setActiveLinkText("Swap Coin");
        break;
      case "/dashboard-cards":
        setActiveLinkText("Cards");
        break;
      case "/dashboard-wallet":
        setActiveLinkText("Wallet");
        break;
      case "/dashboard-transactions":
        setActiveLinkText("Transactions");
        break;
      case "/dashboard-settings":
        setActiveLinkText("Settings");
        break;
      default:
        setActiveLinkText("");
    }
  }, [location.pathname]);

  return (
    <section className="bg-white lg:bg-[#f7f7f7] text-dark flex-1 h-full">
      <div>
        <DashBoardTopHeader
          showNav={showNav}
          toggleNav={toggleNav}
          activeLinkText={activeLinkText}
          setActiveLinkText={setActiveLinkText}
        />
        <DashBoardSideNav
          showNav={showNav}
          setActiveLinkText={setActiveLinkText}
          setShowNav={setShowNav}
        />
        <div className="pt-[6rem] largeDevice:ml-[274px]">
          {children}
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
