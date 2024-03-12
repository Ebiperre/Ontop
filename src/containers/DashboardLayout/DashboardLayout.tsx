import React, { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashBoardSideNav from "../../components/DashBoardSideNav/DashBoardSideNav";
import DashBoardTopHeader from "../../components/DashBoardTopHeader/DashBoardTopHeader";

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
      case "/wallet-home":
        setActiveLinkText("Home");
        break;
      case "/wallet-buy":
        setActiveLinkText("Buy Assets");
        break;
      case "/wallet-sell":
        setActiveLinkText("Sell Assets");
        break;
      case "/wallet-swapcoin":
        setActiveLinkText("Swap Coin");
        break;
      case "/wallet-cards":
        setActiveLinkText("Cards");
        break;
      case "/wallet-wallet":
        setActiveLinkText("Wallet");
        break;
      case "/wallet-transactions":
        setActiveLinkText("Transactions");
        break;
      case "/wallet-settings":
        setActiveLinkText("Settings");
        break;
      default:
        setActiveLinkText("");
    }
  }, [location.pathname]);

  return (
    <section className="bg-white md:bg-[#f7f7f7] text-dark">
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
        <div className="pt-[100px] largeDevice:ml-[274px]">
          {children}
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;