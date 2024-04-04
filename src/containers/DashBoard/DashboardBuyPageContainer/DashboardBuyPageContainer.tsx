import axios from "axios";
import { useEffect, useState } from "react";
import noResultImage from "../../../assets/images/undraw_crypto_portfolio_2jy5.svg";

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
    // Add more properties as needed based on the actual API response
}

export default function BuyContainer() {
    const [data, setData] = useState<CoinData[]>([]);
    const [visibleItems, setVisibleItems] = useState(8);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        axios
            .get(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
            )
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const filteredData = data.filter((coin) =>
        coin.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main className="pt-10">
            <input
                type="text"
                name=""
                id=""
                placeholder="Search coins..."
                onChange={handleSearch}
            />
            <section className="flex flex-wrap gap-4 w-full">
                {filteredData.slice(0, visibleItems).map((element) => (
                    <div key={element.id} className="p-2 border rounded-xl h-36 w-64">
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
                        <div>
                            <div>
                                <p className={element.ath_change_percentage > 0 ? "text-green" : "text-red-600"}>
{element.ath_change_percentage}%
                                </p>
                                <p>

                                </p>
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
                    <p className="mt-auto">See More ...</p>
                )}
            </section>
        </main>
    );
}
