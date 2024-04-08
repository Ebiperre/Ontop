import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
// import LineChart from '../../../components/CryptoLineGraph';
import LineGraph from "../../../components/lineGraph";

interface CoinData {
  id: string;
  symbol: string;
  current_price: number;
  image: string;
  name: string;
  numericValue: string;
  ath_change_percentage: number;
  max_supply: number;
  price_change_percentage_24h: number;
  atl: number;
}

const SellCoinDataContianer: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const navigate = useNavigate();
  const [data, setData] = useState<CoinData[]>([]);
  const [amount, setAmount] = useState()
  const [filteredData, setFilteredData] = useState<CoinData[]>([]);
  const [currencyRate, setCurrencyRate] = useState<number>(1);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');
  const [rawAmount, setRawAmount] = useState('');
  const [formattedAmount, setFormattedAmount] = useState('');
  const [dollarInActiveCoin, setDollarInActiveCoin] = useState('');
  const [btnDisable, setBtnDisable] = useState(true);
  const [ifNumber, setIfNumber] = useState<number>();

  useEffect(() => {
    axios
      .get(`https://v6.exchangerate-api.com/v6/f37ca771bb207d4e21c89669/latest/USD=${selectedCurrency}`)
      .then((res) => {
        setCurrencyRate(res.data.rate);
        console.log(formattedAmountInSelectedCurrency)

      })
      .catch((error) => {
        console.log(error);

      });

    axios
      .get<CoinData[]>(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selectedCurrency.toLowerCase()}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((res) => {
        setData(res.data);
        setFilteredData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);

      });
  }, [selectedCurrency]);

  const { sellCoinCardId } = useParams<{ sellCoinCardId: string }>();

  const activeCoin = filteredData.find((coin) => coin.id === sellCoinCardId);
  const textColor = activeCoin?.ath_change_percentage > 0 ? 'green' : 'red';


  const amountInUSD = activeCoin?.current_price;
  const amountInSelectedCurrency = amountInUSD * currencyRate;

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
  };

  const ActiveCoinInDollars = activeCoin?.current_price

  const handleAmountChange = (event: any) => {
    const rawValue = event.target.value;
    const numericValue = parseFloat(rawValue.replace(/[^\d.]/g, ''));
    const limitedNumericValue = parseFloat(numericValue.toFixed(0));
    let formattedValue = limitedNumericValue.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    if (limitedNumericValue % 1 === 0) {
      formattedValue = formattedValue.replace(/\.00$/, '');
    }

    setRawAmount(rawValue);
    setFormattedAmount(formattedValue);


    if (activeCoin && activeCoin.current_price) {
      let ActiveCoinValue = numericValue / activeCoin.current_price;
      setDollarInActiveCoin(ActiveCoinValue.toFixed(8));
    }
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(rawAmount);
    console.log(formattedAmount);
  };

  const priceChangePercentage = activeCoin?.price_change_percentage_24h;
  const athChangePercentColor = activeCoin?.ath_change_percentage;
  const atl = activeCoin?.atl;






    return (
      <>

      <main className="pt-[3rem] md:pt-[6rem] pb-[2rem] flex flex-col gap-8 items-center justify-center">
        <section className="w-full flex items-center justify-center">
          <div className="flex border flex-col text-start items-start justify-center gap-6 px-8 bg-white text-dark2 w-[96%] h-32 rounded-2xl">

            <div className="flex gap-4">
              <img className="h-8" src={activeCoin?.image} alt="" />
              <h1 className="font-semibold text-3xl uppercase">
                {activeCoin?.symbol}/ {selectedCurrency}
              </h1>
            </div>
            <div className="flex gap-4">
              <select onChange={(e) => handleCurrencyChange(e.target.value)} value={selectedCurrency}>
                <option value="USD">USD</option>
                <option value="NGN">NGN</option>
              </select>
              <p className="text-xl font-medium">
                {formattedAmountInSelectedCurrency}
              </p>
            </div>

          </div>
        </section>

        <section className="h-[30%] w-[96%] flex-wrap items-start justify-center flex gap-6">
          <div className="flex lg:flex-1 flex-col gap-4 border rounded-2xl flex-1 lg:max-w-[20vw] overflow-hidden h-full min-h-[50vh] bg-white p-4">
            <div className="flex items-center h-8 w-full border-b border-l-grey pb-2 pl-4 text-xl font-medium text-grey">
              Sell
            </div>
            <form className="flex flex-col gap-4 justify-start items-start" onSubmit={handleSubmit}>
              <div className="flex items-center justify-start gap-2">
                <img className="h-8 object-contain" src={activeCoin?.image} alt="" />
                <p>{activeCoin?.name}</p>
              </div>

              <div className="w-full">

                <div className="flex border rounded-lg py-1">
                  <input
                    className="outline-none border-none px-4 h-full w-full overflow-hidden"
                    value={formattedAmount}
                    type="text"
                    onChange={handleAmountChange}
                  />

                </div>

                <div className="text-left">
                  <p>Value of one dollar in
                    <span className="font-medium ml-2">
                      {activeCoin?.symbol}: {""}

                      {dollarInActiveCoin}
                    </span>
                  </p>

                </div>

                <button disabled={btnDisable} type="submit" className="flex items-center mt-4 justify-center font-semibold text-white py-2 w-20 rounded-lg border-none bg-orange">
                  Buy
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-col gap-6 w-full lg:flex-1 md:h-[200vh] lg:h-[80vh]  h-[80vh]">
            <div className=" hidden md:flex border rounded-2xl overflow-hidden w-full md:flex-1 lg:h-[100vh] xl:h-[60%] bg-white">
              <div className="min-h-full py-6 w-full bg-white hidden md:flex justify-center items-center overflow-hidden">

                <LineGraph activeCoin={activeCoin} ></LineGraph>

              </div>
            </div>

            <div className="flex flex-col text-left border rounded-2xl w-full md:w-full min-h-[20%] p-4 bg-white">
              <div className="border-b text-left grid grid-cols-[1fr,_1fr_50px] md:grid-cols-[repeat(3,_1fr)_70px] items-start border-transparent md:px-4 gap-12">
                <p>Max supply</p>
                <p>Price Change (24hrs)
                </p>
                <p className="hidden md:block whitespace-nowrap">All Time High</p>
                <p>All time low</p>
              </div>

              <div className=" whitespace-nowrap text-left grid grid-cols-[1fr,_1fr_50px] md:grid-cols-[repeat(3,_1fr)_70px] items-start border-transparent md:px-4 gap-12">
                <p>
                  {activeCoin?.max_supply}
                </p>
                <p className={priceChangePercentage > 0 ? "text-green" : "text-red-600"}>
                  {priceChangePercentage}%
                </p>

                <p className={athChangePercentColor > 0 ? "text-green" : "text-red-600"}>
                  {athChangePercentColor}%
                </p>

                <p className={atl > 0 ? "text-green" : "text-red-600"}>
                  {atl}
                </p>
              </div>

            </div>
          </div>

        </section>

        <div className="text-left flex items-center w-[96%] pl-6 h-12 bg-white rounded-xl">
          Need help with your transaction? <a className="text-orange hover:text-orange2 pl-2" href="" target='blank'>Contact Us</a>
        </div>

      </main >


    </>

        )
        
}



export default SellCoinDataContianer;