import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

interface CoinData {
  id: string;
  symbol: string;
  current_price: number;
  // Add more properties as needed based on the actual API response
}

const CoinCardContainer: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<CoinData[]>([]);
  const [filteredData, setFilteredData] = useState<CoinData[]>([]);
  const [currencyRate, setCurrencyRate] = useState<number>(1); // Default to 1:1 USD to Naira
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD'); // Default currency

  useEffect(() => {
    axios
      .get(`https://v6.exchangerate-api.com/v6/f37ca771bb207d4e21c89669/latest/USD=${selectedCurrency}`)
      .then((res) => {
        setCurrencyRate(res.data.rate); 
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

  const { CoinCardId } = useParams<{ CoinCardId: string }>();

  const activeCoin = filteredData.find((coin) => coin.id === CoinCardId);

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

  return (
    <>
      <div>
        <h1 className="font-semibold text-3xl uppercase">
          {activeCoin?.symbol}/ {selectedCurrency}
        </h1>
        <p>Amount in {selectedCurrency}: {formattedAmountInSelectedCurrency}</p>

        <select onChange={(e) => handleCurrencyChange(e.target.value)} value={selectedCurrency}>
          <option value="USD">USD</option>
          <option value="NGN">NGN</option>
        </select>
      </div>
    </>
  );
};

export default CoinCardContainer;
