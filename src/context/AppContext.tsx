import React, { createContext, Dispatch, SetStateAction, useState, useContext, useEffect } from "react";
import axios from 'axios';
import { giftCards, giftCardType } from "../utilities/giftcardUtilities";
import { CoinData } from "../utilities/coinDataUtilities";

type AppContextProps = {
  cards: giftCardType[];
  setCards: Dispatch<SetStateAction<giftCardType[]>>;
  data: CoinData[];
  currencyRate: number;
  loading: boolean;
  children: React.ReactNode;
  fetchData: () => void;
};

export const AppContext = createContext({} as AppContextProps);

export const useApi = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApi must be used within an ApiProvider');
  }
  return context;
};

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<CoinData[]>([]);
  const [cards, setCards] = useState<giftCardType[]>([]);
  const [currencyRate, setCurrencyRate] = useState<number>(1);
  const [filteredData, setFilteredData] = useState<CoinData[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const [coinDataRes, currencyRateRes] = await Promise.all([
        axios.get<CoinData[]>(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selectedCurrency.toLowerCase()}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
        ),
        axios.get(`https://v6.exchangerate-api.com/v6/f37ca771bb207d4e21c89669/latest/USD=${selectedCurrency}`)
      ]);

      setData(coinDataRes.data);
      setFilteredData(coinDataRes.data);
      setCurrencyRate(currencyRateRes.data.rate);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedCurrency]);

  return (
    <AppContext.Provider
      value={{
        cards,
        setCards,
        data,
        currencyRate,
        loading,
        fetchData,
        children
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
