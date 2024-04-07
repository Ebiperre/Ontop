import axios from "axios";
import { useEffect, useState } from "react";
import noResultImage from "../../../assets/images/undraw_crypto_portfolio_2jy5.svg";
import { useNavigate } from "react-router-dom";

interface CoinData {
    id: string;
    symbol: string;
    current_price: number;
    image: string;
    name: string;
    ath_change_percentage: number;
    max_supply: number;
    price_change_percentage_24h: number;
    atl: number;
    high_24h: number;
}

export default function BuyContainer() {
    const [data, setData] = useState<CoinData[]>([]);
    const [visibleItems, setVisibleItems] = useState(10);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
            )
            .then((res) => {
                setData(res.data);
                setLoading(false);
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    // Helper function to format numbers to nearest thousand, million, or billion
    const formatNumber = (num: number): string => {
        if (num >= 1000000000) {
            return (num / 1000000000).toFixed(2) + "B";
        }
        if (num >= 1000000) {
            return (num / 1000000).toFixed(2) + "M";
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(2) + "K";
        }
        return num.toString();
    };

    const filteredData = data.filter((coin) =>
        coin.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const loadMore = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 10);
    };

    return (
        <main className="pt-10">
            <section className=" flex flex-col gap-6 items-center justify-center px-4">



                <div className="bg-white border rounded-md overflow-hidden h-10 flex justify-between items-center px-4 flex-1 min-w-72">
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Search coins..."
                        className="outline-none border-none flex flex-1 h-full"
                        onChange={handleSearch}
                    />
                    <span className="material-symbols-outlined">
                        search
                    </span>
                </div>
                <section className="flex flex-wrap gap-6 items-center justify-center md:w-[90%] w-full">
                    {filteredData.slice(0, visibleItems).map((element) => (
                        <div onClick={() => navigate(`/dashboard-buy/${element.id}`)} key={element.id} className=" p-2 border rounded-xl h-36 flex-1 min-w-64 flex flex-col justify-between bg-white">
                            <div className="flex gap-2 items-center justify-start">
                                <img className="h-10 " src={element.image} alt="" />
                                <div className="flex flex-col items-start justify-center">
                                    <p className="uppercase font-semibold">
                                        {element.name}
                                    </p>
                                    <p className="uppercase font-medium">
                                        {element.symbol}
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-between text-sm">
                                <div className="flex flex-col text-left font-medium">
                                    <p>
                                        24h Volume
                                    </p>
                                    <div className="flex gap-2 ">
                                        <p>
                                            {formatNumber(element.high_24h)}
                                        </p>
                                        <p className={element.ath_change_percentage > 0 ? "text-green" : "text-red-600"}>
                                            {element.ath_change_percentage.toFixed(2)}%
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col text-left font-medium">
                                    <p>
                                        Price
                                    </p>
                                    <div className="flex gap-2 ">
                                        <p>
                                            {formatNumber(element.current_price)}
                                        </p>
                                        <p className={element.ath_change_percentage > 0 ? "text-green" : "text-red-600"}>
                                            {element.ath_change_percentage.toFixed(2)}%
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {loading ? (
                        <section className="w-full h-40 flex items-center justify-center">
                            <div className="animate-spin rounded-full border-t-4 border-orange border-solid border-opacity-50 h-12 w-12"></div>
                        </section>
                    ) : (
                        <>
                            {filteredData.length === 0 && (
                                <>
                                    <img
                                        className="h-[220px] w-full object-contain my-10"
                                        src={noResultImage}
                                        alt="No results found"
                                    />
                                    <p>No data found for "{searchQuery}"</p>
                                </>
                            )}
                        </>
                    )}
                    {filteredData.length > visibleItems && (
                        <button className="mt-auto" onClick={loadMore}>See More ...</button>
                    )}
                </section>
            </section>
        </main>
    );
}
