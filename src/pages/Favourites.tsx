import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Input, InputGroup, Row } from "reactstrap";
import { DashboardListItem } from "../component/DashboardListItem";
import { Header } from "../component/Header";
import "./Dashboard.css";

export type ICyptoData = {
  id: String;
  rank: String;
  symbol: String;
  name: String;
  supply: String;
  maxSuppy: String;
  marketCapUsd: String;
  volumeUsd24Hr: String;
  priceUsd: String;
  changePercent24Hr: String;
  vwap24Hr: String;
};

const FavList = () => {
  const [cryptoList, setCyptos] = useState<ICyptoData[]>([]);
  const [optSearch, setSearch] = useState(false);

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

  const searchCoins = (searchItem: String) => {
    console.log("onchange", searchItem);
    axios
      .get(`https://api.coincap.io/v2/assets?search=${searchItem}`)
      .then((response) => {
        console.log("search response", response);
        setCyptos(response.data.data);
      })
      .catch((err) => {
        console.log("Search component", err);
      });
  };

  const clickSearch = () => {
    setSearch(!optSearch);
  };

  const Search = (
    <InputGroup className="p-15">
      <Input
        style={{ paddingLeft: "5px" }}
        onChange={(evt) => searchCoins(evt.target.value)}
        id="search-box"
        placeholder="Search"
      />
    </InputGroup>
  );

  const Sort = (
    <Row id="sort-wrapper" className="d-flex">
      <Button>Alphabetical</Button>
      <Button>Volume</Button>
      <Button>24 Hours</Button>
    </Row>
  );

  return (
    <Container className="j-even p-15">
      <Header leftIcon={""} title={""} rightIcon={""} />
      {optSearch ? Search : Sort}
      {cryptoList.length > 0 &&
        cryptoList.map((item) => (
          <DashboardListItem key={item.id.toString()} item={item} />
        ))}

      <Row className="list-footer">Footer</Row>
    </Container>
  );
};

export default FavList;
