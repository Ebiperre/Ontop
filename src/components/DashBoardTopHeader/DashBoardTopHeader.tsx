import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../../src/assets/icons/logo_without_text.svg'
import axios from "axios";
import "../DashBoardTopHeader/DashBoardTopHeader.css";

const DashBoardTopHeader = ({
  showNav,
  toggleNav,
  activeLinkText,
}) => {
  const assetRef = useRef(null);
  const [showAsset, setShowAsset] = useState(false);
  const [coins, setCoins] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [toggleNotification, setToggleNotification] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Handle click outside the div to hide it
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (assetRef.current && !assetRef.current.contains(e.target)) {
        setShowAsset(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleDivClick = () => {
    setShowAsset(!showAsset);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  const fetchCoins = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page: 100,
            page: 1,
            sparkline: false,
          },
        }
      );
      setCoins(response.data);
    } catch (error) {
      console.error("Error fetching coins:", error);
    }
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredCoins([]);
    } else {
      const filtered = coins.filter((coin) => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        return (
          coin.name.toLowerCase().includes(lowerCaseQuery) ||
          coin.symbol.toLowerCase().includes(lowerCaseQuery)
        );
      });
      setFilteredCoins(filtered);
    }
  }, [searchQuery, coins]);

  const handleLinkClick = (coinId) => {
    setShowAsset(false);
    handleSelectCoin(coinId);
    setSearchQuery("");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  const totalPages = Math.ceil(transactionHistory.length / itemsPerPage);

  const handleClickNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handleClickPrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const renderTransactions = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const reversedTransactions = [...transactionHistory].reverse();

    return reversedTransactions
      .slice(startIndex, endIndex)
      .map((transaction) => (
        <li
          key={transaction._id}
          className="border-[1px] border-[rgb(46,52,59)] w-[85%] mx-auto mt-[20px] rounded-[10px] p-[10px]"
          style={{ color: transaction.status === "failed" ? "red" : "green" }}
        >
          <span
            className={`${transaction.messageStatus === "failed"
              ? "text-red-500"
              : "text-green-500"
              } block mb-[5px] capitalize`}
          >
            {transaction.messageStatus}
          </span>

          <span className="text-dark2 block mb-[5px]">
            {transaction.message}
          </span>

          <span
            className={`${transaction.messageStatus === "failed"
              ? "text-red-500"
              : "text-green-500"
              } block mb-[5px]`}
          >
            {new Date(transaction.date).toLocaleString()}
          </span>
        </li>
      ));
  };

  return (
    <section>
      <nav className="fixed z-40 font-author">
        <div className="bg-white text-dark generalDevice:w-[100%] h-[70px] border-b-[1px] border-b-[#d8d8d8] fixed largeDevice:left-[274px] largeDevice:right-0 flex items-center justify-between px-4">
          <div className="largeDevice:hidden mt-[15px]">
            <img src={logo} alt="logo" className="w-full h-full block pr-4" />
          </div>

          <div className="generalDevice:hidden">
            <p className="text-5xl opacity-35 font-author font-bold text-dark2">
              {activeLinkText || "Coin"}
            </p>
          </div>

          <div className="generalDevice:hidden flex gap-[20px]">
            <div
              className={`${showAsset} flex items-center gap-[10px] bg-[#f7f7f7] border  rounded-t-[5px] h-[35px] rounded-b-[5px]`}
              onClick={handleDivClick}
            >
              <i className="fa-solid fa-magnifying-glass pl-5"></i>
              <input
                type="text"
                className="border-none outline-none w-[100%] bg-[#f7f7f7] h-[30px]"
                placeholder="Search for assets"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <NavLink to="/wallet-settings">
              <div className="flex items-center justify-end mr-5 gap-[10px] bg-[#f7f7f7  rounded-t-[5px] w-[150px] rounded-b-[5px] py-[3px] cursor-pointer">
                <div className="w-10 h-10 flex justify-center items-center cursor-pointer">
                  <img
                    src="https://ise-admin-dashboard-frontend.vercel.app/static/media/amirahTemi.bbf53a86315b6bcff637525e5cf7a4fc.svg"
                    alt="user"
                    className="block w-[100%] h-full rounded-full object-cover"
                  />
                </div>
                <p
                  className="capitalize font-author"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "100px",
                  }}
                >
                  Kizitech
                </p>
              </div>
            </NavLink>

            <div
              className="cursor-pointer mt-[8px] relative"
              onClick={() => {
                setToggleNotification(true);
              }}
            >
              <abbr title="Notification">
                <i className="fa-regular fa-bell text-xl"></i>
              </abbr>

              {unreadCount > 0 && (
                <div className="absolute top-[-5px] left-[16px]">
                  <p className="text-xs">{unreadCount}</p>
                </div>
              )}
            </div>

            <div
              className="cursor-pointer mt-[8px]"
              onClick={() => { }}
            >
              <abbr title="Logout">
                <i className="fa-solid fa-arrow-right-from-bracket text-xl"></i>
              </abbr>
            </div>
          </div>

          <div className="largeDevice:hidden flex gap-[20px] items-center">
            <div className="cursor-pointer" onClick={handleDivClick}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            <NavLink to="/wallet-settings">
              <div className="bg-orange3 w-[28px] h-[28px] rounded-full flex justify-center items-center cursor-pointer text-sm">

                <div className="w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
                  <img
                    src="https://ise-admin-dashboard-frontend.vercel.app/static/media/amirahTemi.bbf53a86315b6bcff637525e5cf7a4fc.svg"
                    alt="user"
                    className="block w-[100%] h-[30px] rounded-full object-cover"
                  />
                </div>
              </div>
            </NavLink>

            <div
              className="cursor-pointer relative"
              onClick={() => {
                setToggleNotification(true);
              }}
            >
              <abbr title="Notification">
                <i className="fa-regular fa-bell"></i>
              </abbr>

              {unreadCount > 0 && (
                <div className="absolute top-[-5px] left-[12px]">
                  <p className="text-xs">{unreadCount}</p>
                </div>
              )}
            </div>

            <div className="cursor-pointer text-xl relative mr-[10px]">
              <i
                className={`${showNav ? "hidden" : "block"
                  } fa-solid fa-bars-staggered absolute top-[-10px] left-[-7px]`}
                onClick={toggleNav}
              ></i>
              <i
                className={`${showNav ? "block text-orange" : "hidden"
                  } fa-solid fa-xmark absolute top-[-10px] left-[-5px] font-[600]`}
                onClick={toggleNav}
              ></i>
            </div>
          </div>
        </div>

        <div
          ref={assetRef}
          className={`${showAsset ? "block" : "hidden"
            } fixed top-[70px] w-[100%] largeDevice:w-[274px] h-[100%] largeDevice:h-auto aboveBonusDevice:right-[25%] aboveBonusDevice:top-[115px]`}
        >
          <div className="flex items-center gap-[10px] w-[95%] mx-auto h-[50px] mt-[15px] largeDevice:hidden
           border-[1px] border-[#d8d8d8]  rounded-t-[15px] largeDevice:right-[265px] bg-white m-5">
            <i className="fa-solid fa-magnifying-glass pl-5"></i>
            <input
              type="text"
              className={`outline-none w-[100%] rounded-b-[8px] rounded-t-[8px]`}
              placeholder="Search for assets"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <i
              className={`fa-solid fa-xmark font-[600] pr-5 cursor-pointer`}
              onClick={() => {
                setShowAsset(false);
              }}
            ></i>
          </div>

          <div className="m-5 border border-t-0 -mt-5 p-5 rounded-b-[15px]  md:bg-white md:rounded-2xl md:border-t">
            <p className="mb-5">Assets</p>
            {filteredCoins.length > 0 ? (
              <ul>
                {filteredCoins.map((coin) => (
                  <li key={coin.id}>
                    <Link
                      to={`/coin/${coin.id}`}
                      className="flex items-center gap-[5px] mb-[20px] cursor-pointer"
                      onClick={() => {
                        setShowAsset(false);
                        handleSelectCoin(coin.name);
                        handleLinkClick(coin.id);
                        setSearchQuery("");
                      }}
                    >
                      <img
                        src={coin.image}
                        alt={coin.name}
                        className="w-[25px]"
                      />
                      <span className="capitalize text-base">
                        {coin.name}
                      </span>
                      <span className="uppercase text-sm text-dark2 font-[600]">
                        {coin.symbol}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-orange py-20 aboveBonusDevice:py-5">View all assets 🪙</p>
            )}
          </div>
        </div>

        <div
          className={`${toggleNotification ? "block" : "hidden"
            } fixed top-[70px] w-[100%] aboveBonusDevice:w-[500px] h-[100%] aboveBonusDevice:h-[500px] aboveBonusDevice:right-[15px]`}
        >
          <div className="flex justify-between items-center px-[20px] pt-[20px] pb-[10px] m-5  border-[1px] border-#d8d8d8] rounded-t-[15px] bg-white">
            <div
              className="text-xl cursor-pointer"
              onClick={() => { }}
            >
              <p>Mark as read</p>
            </div>

            <div
              className="text-xl text-orange"
              onClick={() => {
                setToggleNotification(false);
              }}
            >
              <i className="fa-solid fa-xmark font-[600] pr-[5px] cursor-pointer"></i>
            </div>
          </div>
          {transactionHistory.length === 0 ? (
            <div className="flex justify-center items-center py-20 mx-5 -mt-5 border-[1px] border-#d8d8d8] border-t-0 rounded-b-[15px]">
              <p className="text-dark2 font-[600]">
                No Notification Yet
              </p>
            </div>
          ) : (
            <div>
              <div className="h-[470px] aboveBonusDevice:h-[350px] mb-[20px]">
                <ul className="h-full overflow-y-auto side-bar-container">
                  {renderTransactions()}
                </ul>
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center my-[10px]">
                  <button
                    onClick={handleClickPrev}
                    disabled={currentPage === 1}
                    className="mr-2 px-[30px] py-2 bg-purple2 text-white rounded cursor-pointer"
                  >
                    Prev
                  </button>
                  <button
                    onClick={handleClickNext}
                    disabled={currentPage === totalPages}
                    className="ml-2 px-[30px] py-2 bg-purple2 text-white rounded cursor-pointer"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </section>
  );
};

export default DashBoardTopHeader;
