import { useEffect, useState } from "react";
// import classes from "./DashboardHomePage.module.css";
import classes from "./DashboardHomePageContainer.module.css"
import axios from "axios";
import noResultImage from "../../../../assets/images/undraw_crypto_portfolio_2jy5.svg";
import { useNavigate } from "react-router-dom";

type DashboardHomePageContainerProps = {
  id: string
}

const DashboardHomePageContainer = ({ element }: any) => {

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [visibleItems, setVisibleItems] = useState(8);
  const textColor = element?.ath_change_percentage > 0 ? 'green' : 'red';
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();



  const handleSeeMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 8);
  };

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then(async (res) => {
        await setData(res.data);
        await setFilteredData(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      });
  }, []);


  const handleSearch = (e: string) => {
    const inputValue = e.target.value;
    const exData = [...data];
    setSearchInput(inputValue);

    const newData = exData.filter((ex) => {
      return ex.id.startsWith(inputValue.toLowerCase());
    });
    setFilteredData(newData);
  }

  return (
    <>
      <section className="px-4 flex flex-col gap-4">
        <div className="flex items-start font-semibold">
          <h3 className="text-grey text-4xl">
            Dashboard
          </h3>

        </div>

        <div className="flex items-center justify-start text-dark2 w-full rounded-[1rem] min-h-36 gap-4 md:px-0 overflow-scroll md:overflow-scroll">
          <div className="bg-greyWhite2 rounded-xl font-semibold md:flex-1 flex flex-col justify-between py-4 items-start h-28 border-r px-6">
            <div className="flex font-medium w-full justify-between ">
              <p>
                Balance
              </p>
              <p>
                %22.0
              </p>
            </div>


            <p className="text-2xl">
              $77,000.00
            </p>
          </div>


          <div className="bg-greyWhite2 rounded-xl font-semibold md:flex-1 flex flex-col justify-between py-4 items-start h-28 border-r px-6">
            <div className="flex font-medium w-full justify-between ">
              <p>
                Balance
              </p>
              <p>
                %22.0
              </p>
            </div>


            <p className="text-2xl">
              $77,000.00
            </p>
          </div>

          <div className="bg-greyWhite2 rounded-xl font-semibold md:flex-1 flex flex-col justify-between py-4 items-start h-28 border-r px-6">
            <div className="flex font-medium w-full justify-between ">
              <p>
                Balance
              </p>
              <p>
                %22.0
              </p>
            </div>


            <p className="text-2xl">
              $77,000.00
            </p>
          </div>

          <div className="bg-greyWhite2 rounded-xl font-semibold md:flex-1 flex flex-col justify-between py-4 items-start h-28 border-r px-6">
            <div className="flex font-medium w-full justify-between ">
              <p>
                Balance
              </p>
              <p>
                %22.0
              </p>
            </div>


            <p className="text-2xl">
              $77,000.00
            </p>
          </div>
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
            <div className="border-b text-left grid grid-cols-[1fr,_1fr_50px] md:grid-cols-[repeat(3,_1fr)_70px] items-start border-transparent pt-10 md:px-4 pb-2 gap-12">
              <p>Name</p>
              <p>Price</p>
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
                  <p>{element.current_price} $</p>
                  <p style={{ color: textColor }} className="flex md:hidden flex-1 gap-2">{element.ath_change_percentage} %</p>
                </div>
                <p style={{ color: textColor }} className="hidden md:flex flex-1 gap-2">{element.ath_change_percentage} %</p>
                <div className="flex gap-2">
                  <button onClick={()=> navigate(`/wallet-buy/${element.id}`)} className="h-7 w-14 bg-green rounded text-sm text-white font-medium">
                    Buy
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


    </>
  )
}

export default DashboardHomePageContainer