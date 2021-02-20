import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { Header } from "../component/Header";
import "./CryptoStats.css";
import {
  getColor,
  IDashboardListItem,
  priceChange,
} from "../component/DashboardListItem";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ICyptoData } from "./DashboardList";
import { AiOutlineExpandAlt, AiOutlineLineChart } from "react-icons/ai";
import Chart from "../component/Chart";

export const CryptoStats = () => {
  const { id } = useParams<{ id: string }>();
  const [cryptoStats, setStats] = useState<ICyptoData>({
    id: "",
    rank: "",
    symbol: "",
    name: "",
    supply: "",
    maxSuppy: "",
    marketCapUsd: "",
    VolumeUsd24Hr: "",
    priceUsd: "",
    changePercent24Hr: "",
    vwap24Hr: "",
  });

  console.log("crypto stats");
  useEffect(() => {
    axios
      .get(`https://api.coincap.io/v2/assets/${id}`)
      .then((res) => {
        console.log("response Cyrpto Stats", res);
        setStats(res.data.data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);
  return (
    <Container className="p-15">
      <Header handleClickLeftIcon={() => {}} />
      <Row id="curr-value">
        <div>
          <p>$ {parseFloat(cryptoStats?.priceUsd.toString()).toFixed(2)}</p>
          <span id="stats-coin-wrapper">
            <img
              id="stat-coin-logo"
              className="coin-logo mr-auto"
              src={`https://static.coincap.io/assets/icons/${cryptoStats?.symbol.toLowerCase()}@2x.png`}
              alt="coin-logo"
            />
          </span>
        </div>
        <p
          className={getColor(
            cryptoStats?.vwap24Hr?.toString(),
            cryptoStats?.priceUsd?.toString()
          )}
        >
          {priceChange(
            cryptoStats?.vwap24Hr?.toString(),
            cryptoStats?.priceUsd?.toString()
          )}
          ({parseFloat(cryptoStats?.changePercent24Hr.toString()).toFixed(2)}
          %)
        </p>
      </Row>
      <Row id="graph-opt-wrapper" className="d-flex">
        <Button>Global Average</Button>
        <Button>
          <AiOutlineLineChart />
        </Button>
        <Button>
          <AiOutlineExpandAlt />
        </Button>
      </Row>

      <Chart />

      <Row className="d-flex">
        <Col id="mkt-det-wrapper">
          <div id="market-details">
            <p className="mkt-dt-title">Market Cap</p>
            <p className="mkt-dt-content">
              {/* {parseFloat(cryptoStats?.maxSuppy.toString()).toFixed(2)}
              {cryptoStats?.symbol.toString()} */}
            </p>
          </div>
          <div id="market-details">
            <p className="mkt-dt-title">Available Supply</p>
            <p className="mkt-dt-content">
              {parseFloat(
                cryptoStats?.supply.toString()
              ).toLocaleString(undefined, { maximumFractionDigits: 2 })}{" "}
              {cryptoStats.symbol}
            </p>
          </div>
          <div id="market-details">
            <p className="mkt-dt-title">Low (24 hours)</p>
            <p className="mkt-dt-content">
              {parseFloat(
                cryptoStats?.vwap24Hr.toString()
              ).toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </p>
          </div>
        </Col>
        <Col id="mkt-det-wrapper">
          <div id="market-details">
            <p className="mkt-dt-title">Volume (24 hours)</p>
            <p className="mkt-dt-content">
              {/* {parseFloat(cryptoStats?.VolumeUsd24Hr.toString()).toFixed(2)}
              {cryptoStats.symbol} */}
            </p>
          </div>
          <div id="market-details">
            <p className="mkt-dt-title">Total Supply</p>
            <p className="mkt-dt-content">
              {/* {parseFloat(cryptoStats?.maxSuppy.toString()).toFixed(2)}
              {cryptoStats.symbol} */}
            </p>
          </div>

          <div id="market-details">
            <p className="mkt-dt-title">High (24 hours)</p>
            <p className="mkt-dt-content">
              {parseFloat(
                cryptoStats?.changePercent24Hr.toString()
              ).toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
