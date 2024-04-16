import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';

export default function LineGraph() {
  const [graphData, setGraphData] = useState([]);
  const { CoinCardId } = useParams();


  useEffect(() => {
    fetchData(CoinCardId);
  }, [CoinCardId]);

  const fetchData = async (coin: string | undefined) => {
    try {
      const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart/?vs_currency=usd&days=7`);
      console.log('API Response:', res.data);

      const formattedData = res.data.prices.map((price: [any, any]) => {
        const [timestamp, p] = price;
        return {
          Date: new Date(timestamp),
          Price: p,
        };
      });
      console.log('Formatted Data:', formattedData);
      setGraphData(formattedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="flex-1 p-8 ">
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={graphData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" />
          <YAxis domain={['auto', 'auto']} />

          <Tooltip />
          <Area
            type="monotone"
            dataKey="Price"
            stroke="#ffaa0e"
            strokeWidth={1.5}
            fill={`url(#orangeGradient)`}
            className="shadow-lg shadow-orange"
          />
          <defs>
            <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffaa0e" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
