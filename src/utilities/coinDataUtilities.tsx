export type CoinData = {
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
    // Add more properties as needed based on the actual API response
  }[]