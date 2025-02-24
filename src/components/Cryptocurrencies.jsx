import React, { useState, useEffect } from "react";
import millify from "millify";
import { Card, Input, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState("");
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    if (cryptoList?.data?.coins) {
      let filteredData = cryptoList.data.coins;

      if (searchItem) {
        filteredData = filteredData.filter((item) =>
          item.name.toLowerCase().includes(searchItem.toLowerCase())
        );
      }

      setCryptos(filteredData);
    }
  }, [cryptoList, searchItem]);

  if (isFetching) {
    return <Loader />;
  }

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Crypto Name"
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos.length > 0 ? (
          cryptos.map((currency) => (
            <Col
              xs={24}
              sm={12}
              lg={6}
              className="crypto-card"
              key={currency.uuid}
            >
              <Link to={`/crypto/${currency.uuid}`}>
                <Card
                  title={`${currency.rank}. ${currency.name}`}
                  hoverable
                  extra={
                    <img
                      className="crypto-image"
                      src={currency.iconUrl}
                      alt={currency.name}
                    />
                  }
                >
                  <p>Price: {millify(currency.price)}</p>
                  <p>MarketCap: {millify(currency.marketCap)}</p>
                  <p>Change: {millify(currency.change)}%</p>
                </Card>
              </Link>
            </Col>
          ))
        ) : (
          <p>No cryptocurrencies found.</p>
        )}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
