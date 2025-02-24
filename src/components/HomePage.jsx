import React from "react";
import millify from "millify";
import { Typography, Statistic, Row, Col } from "antd";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Link } from "react-router-dom";
import Loader from "./Loader";
const { Title } = Typography;

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalstats = data?.data?.stats;
  if (isFetching) {
    return <Loader />;
  }
  console.log(data);
  return (
    <>
      <Title level={2} className="heading">
        Top Crypto Stats
      </Title>
      <Row gutter={(32, 32)}>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalstats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalstats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={`$${millify(globalstats.total24hVolume)}`}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total MarketCap"
            value={`$${millify(globalstats.totalMarketCap)}`}
          />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={globalstats.totalMarkets} />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Crypto Currencies in the World
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />

      {/* <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <News simplified /> */}
    </>
  );
};

export default HomePage;
