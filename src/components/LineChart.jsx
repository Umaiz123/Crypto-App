import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const { Title: AntTitle } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  // Process coin history data into arrays for the chart
  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }

  // Prepare chart data
  const data = {
    labels: coinTimestamp, // X-axis labels (timestamps)
    datasets: [
      {
        label: `${coinName} Price in USD`, // Line label
        data: coinPrice, // Y-axis data (prices)
        fill: false, // No fill below the line
        backgroundColor: "#0071bd", // Line color
        borderColor: "#0071bd", // Line border color
        borderWidth: 2, // Line width
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false, // Set false to avoid starting from zero
      },
    },
  };

  return (
    <>
      <Row className="chart-header">
        <AntTitle level={2} className="chart-title">
          {coinName} Price Chart
        </AntTitle>
        <Col className="price-container">
          <AntTitle level={5} className="price-change">
            Change: {coinHistory?.data?.change}% {/* Change in price */}
          </AntTitle>
          <AntTitle level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice} {/* Current price */}
          </AntTitle>
        </Col>
      </Row>
      {/* Line chart */}
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
