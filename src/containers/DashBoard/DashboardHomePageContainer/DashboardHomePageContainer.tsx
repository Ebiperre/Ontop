import { useEffect, useState } from "react";
import classes from "./DashboardHomePageContainer.module.css";
import axios from "axios";
import noResultImage from "../../../assets/images/undraw_crypto_portfolio_2jy5.svg";
import { useNavigate } from "react-router-dom";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import statData from "../../../utilities/statData";

type CoinData = {
  id: string;
  name: string;
  image: string;
  current_price: number;
  ath_change_percentage: number;
  amountInUSD: number;
}

const DashboardHomePageContainer: React.FC = ({ element }: any) => {

  const [data, setData] = useState<CoinData[]>([]);
  const [filteredData, setFilteredData] = useState<CoinData[]>([]);
  const [displayedData, setDisplayedData] = useState([]);
  const [currencyRate, setCurrencyRate] = useState<number>(1);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');
  const [searchInput, setSearchInput] = useState('');
  const [visibleItems, setVisibleItems] = useState(8);
  const textColor = element?.ath_change_percentage > 0 ? 'green' : 'red';
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [showBalance, setShowBalance] = useState(true);

  const handleSeeMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 8);
  };

  const amountInUSD = element?.current_price;
  const amountInSelectedCurrency = amountInUSD * currencyRate;

  useEffect(() => {
    axios
      .get<CoinData[]>(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selectedCurrency.toLowerCase()}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((res) => {
        setData(res.data);
        setFilteredData(res.data);
        setLoading(false);
        localStorage.setItem('coinData', JSON.stringify(res.data));
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        const storedData = localStorage.getItem('coinData');
        if (storedData) {
          setData(JSON.parse(storedData));
          setFilteredData(JSON.parse(storedData));
          setLoading(false);
        }else{
          setLoading(true)
        }
      });

    axios
      .get(`https://v6.exchangerate-api.com/v6/f37ca771bb207d4e21c89669/latest/USD=${selectedCurrency}`)
      .then((res) => {
        setCurrencyRate(res.data.rate);
      })
      .catch((error) => {
        console.log(error);
        console.log(formattedAmountInSelectedCurrency)
      });
  }, [selectedCurrency, data]);


  const formattedAmountInUSD = amountInUSD?.toLocaleString(undefined, {
    style: 'currency',
    currency: 'USD',
  });

  const formattedAmountInSelectedCurrency = amountInSelectedCurrency?.toLocaleString(undefined, {
    style: 'currency',
    currency: selectedCurrency,
  });

  const handleCurrencyChange = (newCurrency: string) => {
    setSelectedCurrency(newCurrency);
    selectedCurrency === '₦'
  };


  const handleSearch = (e: any) => {
    const inputValue = e.target.value;
    const exData = [...data];
    setSearchInput(inputValue);

    const newData = exData.filter((ex) => {
      return ex.id.startsWith(inputValue.toLowerCase());
    });
    setFilteredData(newData);
  }

  return (
    <section className="pt-[3rem] px-4 pb-4 flex flex-col gap-4 dashboard_home">
      <div className="flex items-start font-semibold">
        <h3 className="text-grey text-4xl">
          Dashboard
        </h3>

      </div>

      <div className="flex items-center justify-start text-dark2 w-full rounded-[1rem] min-h-36 gap-4 md:px-0 overflow-scroll md:overflow-scroll">

        {statData.map((item, index) => (
          <div key={index}>
            <div className="hide-scrollbar bg-greyWhite2 rounded-xl font-semibold md:flex-1 min-w-60 flex flex-col justify-between py-4 items-start h-32 border-r px-6">
              <div className="flex font-medium w-full justify-between ">
                <p>
                  {item.title}
                </p>
                <p>
                  {item.rate}
                </p>
              </div>


              <div className="flex justify-between items-center w-full">
                <h1 className="font-sans text-2xl font-extrabold">
                  {showBalance ? (
                    <div className="">
                      {item.amount.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      })}
                    </div>
                  ) : (
                    <span>*****</span>
                  )}
                </h1>

                <div className=" cursor-pointer text-lg" onClick={() => setShowBalance(!showBalance)}>{showBalance ? <BiShow /> : <BiHide />}</div>
              </div>


            </div>
          </div>
        ))}
      </div>

      <section className="rounded-2xl bg-white md:p-8 mt-14">
        <div className={`${classes.grid_container} `}>
          <p className="text-lg font-medium">
            Market
          </p>

          <div className="border rounded-md overflow-hidden h-10 flex justify-between items-center px-4">
            <input value={searchInput} onChange={handleSearch} placeholder="Search Coin..." className="outline-none border-none flex flex-1 h-full" type="search" name="" id="" />
            <span className="material-symbols-outlined">
              search
            </span>

          </div>

          <span className="material-symbols-outlined flex justify-end items-center">
            more_horiz
          </span>
        </div>

        <section>
          <div className="border-b text-left grid grid-cols-[1fr,_1fr_50px] md:grid-cols-[repeat(3,_1fr)_70px] items-start border-[#c9c9c9] pt-10 md:px-4 pb-2 gap-12">
            <p>Name</p>
            <p>Price :{" "}
              <select className="py-2 px-2 rounded-md" onChange={(e) => handleCurrencyChange(e.target.value)} value={selectedCurrency}>
                <option value="USD">USD</option>
                <option value="NGN">NGN</option>
              </select>
            </p>
            <p className="hidden md:block">Change</p>
            <p>Trade</p>
          </div>



          {filteredData.slice(0, visibleItems).map((element) => (
            <div key={element.id} className="border-b border-transparent pt-10 md:px-4 pb-2 gap-2 grid grid-cols-[1fr,_1fr_50px] md:grid-cols-[repeat(3,_1fr)_70px] items-start text-left last:border-none">
              <div className="flex flex-1 text-sm gap-2">
                <img className="h-5 md:h-8 " src={element.image} alt="" />
                <p>{element.name}</p>
              </div>
              <div className="flex flex-col flex-1 gap-2 text-sm">
                <p>
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: selectedCurrency
                  }).format(element.current_price)}
                </p>

                <p style={{ color: textColor }} className="flex md:hidden flex-1 gap-2">{element.ath_change_percentage} %</p>
              </div>
              <p style={{ color: textColor }} className="hidden md:flex flex-1 gap-2">{element.ath_change_percentage} %</p>
              <div className="flex flex-wrap md:flex-nowrap gap-2">
                <button onClick={() => navigate(`/dashboard/buy/${element.id}`)} className="h-7 w-14 bg-green rounded text-sm text-white font-medium">
                  Buy
                </button>
                <button onClick={() => navigate(`/dashboard/sell/${element.id}`)} className="bg-deleteRed h-7 w-14 rounded text-sm text-white font-medium">
                  Sell
                </button>

              </div>
            </div>
          ))}

          {loading ? (
            <>
              <section className="w-full h-40 flex items-center justify-center">
                <div className="animate-spin rounded-full border-t-4 border-orange border-solid border-opacity-50 h-12 w-12"></div>
              </section>
            </>
          ) : (
            <>
              {filteredData.map(item => (
                <div key={item.id}></div>
              ))}
              {filteredData.length === 0 && (
                <>
                  <img className="h-[220px] w-full object-contain my-10" src={noResultImage} alt="Loading..." />
                  <p>No data found for "{searchInput}"</p>
                </>

              )}
            </>
          )}
          {filteredData.length > visibleItems && (
            <button onClick={handleSeeMore} className=" mt-10 w-fit border border-grey text-grey font-medium px-4 py-2 rounded">
              See More
            </button>
          )}

        </section>
      </section>
    </section>
  )
}

export default DashboardHomePageContainer