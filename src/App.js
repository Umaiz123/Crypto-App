import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Space, Typography, Layout } from "antd";
import {
  Exchanges,
  HomePage,
  News,
  Cryptocurrencies,
  CryptoDetails,
  NavBar,
} from "./components";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main">
        <Layout />
        <div className="routes">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/crypto/:coinId" element={<CryptoDetails />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            @CopyRight 2025
            <Link to="/">CryptoVerse Inc.</Link>
            <br />
            All Rights Reserved.
          </Typography.Title>
          <Space style={{ display: "flex", justifyContent: "center" }}>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
