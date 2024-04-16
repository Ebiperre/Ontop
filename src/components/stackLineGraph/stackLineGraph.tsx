import React, { useEffect, useState } from 'react';
import { LineChart, Line, ResponsiveContainer, YAxis } from 'recharts';
import axios from 'axios';
import "./stackLine.css"

export default function StackLineGraph({ coinId }: any) {
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    if (!coinId) return;

    axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart/?vs_currency=usd&days=0.05`)
      .then(response => {
        const formattedData = response.data.prices.map((price: [any, any]) => {
          const [timestamp, p] = price;
          return {
            Date: new Date(timestamp),
            Price: p,
          };
        });
        setGraphData(formattedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [coinId]);

  return (

    <>

      <div className="stack_line">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={graphData}>
            <Line type="monotone" dataKey="Price" stroke="#ffaa0e" strokeWidth={1} />
            <YAxis type="number" domain={['auto', 'auto']} />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </>

  );
}
