import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Row } from "reactstrap";
import { DashboardListItem } from "../component/DashboardListItem";
import "./Dashboard.css";

export type ICyptoData = {
  id: String;
  rank: String;
  symbol: String;
  name: String;
  supply: String;
  maxSuppy: String;
  marketCapUsd: String;
  VolumeUsd24Hr: String;
  priceUsd: String;
  changePercent24Hr: String;
  vwap24Hr: String;
};

const List = () => {
  const [cryptoList, setCyptos] = useState<ICyptoData[]>([]);

  useEffect(() => {
    axios
      .get("https://api.coincap.io/v2/assets")
      .then((response) => {
        console.log("dashboard data", response.data);
        setCyptos(response.data.data);
      })
      .catch((err) => {
        console.log("Dashboard error ", err);
      });
  }, []);

  return (
    <div className="bg">
      <Row>
        <Header />
      </Row>
      <Row>
        <Button>Rank</Button>
        <Button>Volume</Button>
        <Button>24 Hours</Button>
      </Row>
      <Row>
        {cryptoList.map((item) => (
          <DashboardListItem key={item.id.toString()} item={item} />
        ))}
      </Row>
      <Row>Footer</Row>
    </div>
  );
};

export default List;
