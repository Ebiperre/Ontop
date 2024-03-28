import React, { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { LinearScale, CategoryScale, LineController, PointElement, LineElement, Chart } from 'chart.js';
import 'chartjs-adapter-date-fns';

Chart.register(LinearScale, CategoryScale, LineController, PointElement, LineElement);

const LineChart = () => {
  const [chartData, setChartData] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiKey = "coinrankinga0251bbd5ea6bd70e9e953f4c5097519f0f19a74be339c9f"; 
    const fetchCoins = async () => {
      try {
        const response = await fetch(`https://api.coinranking.com/v2/coins`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': apiKey,
            'Access-Control-Allow-Origin': "*"
          }
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const jsonData = await response.json();
        console.log("API Response:", jsonData);
        
        if (jsonData && jsonData.data && jsonData.data.coins) {
          setChartData(jsonData.data.coins);
        } else {
          console.error("Invalid API response format");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchCoins();
  }, []);
  

  useEffect(() => {
    if (chartRef.current && chartRef.current.chartInstance) {
      chartRef.current.chartInstance.destroy();
    }
  }, [chartData]);

  console.log("chartData", chartData);

  const data = {
    labels: chartData.map(x => x.name),
    datasets: [{
      label: `${chartData.length} Coins Available`,
      data: chartData.map(x => x.price),
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          // Include a callback function for formatting ticks as needed
          callback: function(value, index, values) {
            return '$' + value; // Add currency symbol or any formatting you need
          }
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          fontSize: 10,
        },
      },
    },
  };
  
  return (
    <div className="flex flex-1 h-full">
      <Line
        ref={chartRef}
        data={data}
        height={400}
        options={options}
      />
    </div>
  );
};

export default LineChart;
