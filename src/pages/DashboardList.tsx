import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { Button, Container, Input, InputGroup, Row } from "reactstrap";
import { DashboardListItem } from "../component/DashboardListItem";
import { Header } from "../component/Header";
import { IoMdStats } from "react-icons/io";
import "./Dashboard.css";
import { useHistory } from "react-router-dom";
import { Footer } from "../component/Footer";

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

const List = () => {
  const history = useHistory();
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

  const sortByVol = () => {
    let tempList = [...cryptoList];
    console.log("temp", tempList);
    tempList.sort(
      (a, b) =>
        parseFloat(b?.volumeUsd24Hr.toString()) -
        parseFloat(a?.volumeUsd24Hr.toString())
    );
    setCyptos(tempList);
  };

  const sortByRank = () => {
    let tempList = [...cryptoList];
    console.log("Rank", tempList);
    tempList.sort(
      (a, b) => parseFloat(a?.rank.toString()) - parseFloat(b?.rank.toString())
    );
    setCyptos(tempList);
  };

  const sort24HourChange = () => {
    let tempList = [...cryptoList];
    console.log("24 Hour Change", tempList);
    tempList.sort(
      (a, b) =>
        parseFloat(b?.vwap24Hr?.toString()) -
        parseFloat(a?.vwap24Hr?.toString())
    );
    setCyptos(tempList);
  };

  const handleSearchClick = () => {
    setSearch(!optSearch);
  };

  const handleStatClick = () => {
    history.push("/market");
  };

  const Search = (
    <InputGroup className="p-15">
      <Input
        className="bg"
        style={{ paddingLeft: "5px" }}
        onChange={(evt) => searchCoins(evt.target.value)}
        id="search-box"
        placeholder="Search"
      />
    </InputGroup>
  );

  const Sort = (
    <Row id="sort-wrapper" className="d-flex">
      <Button onClick={sortByRank}>Rank</Button>
      <Button onClick={sortByVol}>Volume</Button>
      <Button onClick={sort24HourChange}>24 Hours</Button>
    </Row>
  );

  return (
    <Container className="j-even p-15">
      <Header
        leftIcon={<BiSearchAlt size={20} onClick={handleSearchClick} />}
        title={"Coin Market"}
        rightIcon={<IoMdStats size={20} onClick={handleStatClick} />}
      />
      {optSearch ? Search : Sort}
      {cryptoList.length > 0 &&
        cryptoList.map((item) => (
          <DashboardListItem key={item.id.toString()} item={item} />
        ))}

      <Footer />
    </Container>
  );
};

export default List;
