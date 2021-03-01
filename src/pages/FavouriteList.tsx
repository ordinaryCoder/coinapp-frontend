import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { Button, Container, Input, InputGroup, Row } from "reactstrap";
import { DashboardListItem } from "../component/DashboardListItem";
import { Header } from "../component/Header";
import { IoMdStats } from "react-icons/io";
import "./Dashboard.css";
import { useHistory } from "react-router-dom";
import { Footer } from "../component/Footer";
import { FavouriteListItem } from "../component/FavouriteList";

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

const FavouriteCoinList = () => {
  const history = useHistory();
  const [FavList, setFav] = useState<ICyptoData[]>([]);
  const [optSearch, setSearch] = useState(false);
  const [searchList, setSearchList] = useState<ICyptoData[]>([]);

  useEffect(() => {
    axios
      .get("https://api.coincap.io/v2/assets?limit=5")
      .then((response) => {
        console.log("dashboard data", response.data);
        setFav(response.data.data);
      })
      .catch((err) => {
        console.log("Dashboard error ", err);
      });
  }, []);

  const searchCoins = (searchItem: String) => {
    console.log("onchange", searchItem);
    axios
      .get(`https://api.coincap.io/v2/assets?search=${searchItem}&limit=2`)
      .then((response) => {
        console.log("search response", response);
        setFav(response.data.data);
      })
      .catch((err) => {
        console.log("Search component", err);
      });
  };

  const sortByVol = () => {
    let tempList = [...FavList];
    console.log("temp", tempList);
    tempList.sort(
      (a, b) =>
        parseFloat(b?.volumeUsd24Hr.toString()) -
        parseFloat(a?.volumeUsd24Hr.toString())
    );
    setFav(tempList);
  };

  const sortByAlphabets = () => {
    let tempList = [...FavList];
    console.log("Rank", tempList);
    tempList.sort((a: any, b: any) =>
      a?.id.toLowerCase().localeCompare(b?.id.toLowerCase())
    );
    setFav(tempList);
  };

  const sort24HourChange = () => {
    let tempList = [...FavList];
    console.log("24 Hour Change", tempList);
    tempList.sort(
      (a, b) =>
        parseFloat(b?.vwap24Hr?.toString()) -
        parseFloat(a?.vwap24Hr?.toString())
    );
    setFav(tempList);
  };

  const handleSearchClick = () => {
    setSearch(!optSearch);
  };

  const handleDelete = () => {
    alert("coin deleted");
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
      <Button onClick={sortByAlphabets}>Alphabetical</Button>
      <Button onClick={sortByVol}>Volume</Button>
      <Button onClick={sort24HourChange}>24 Hours</Button>
    </Row>
  );

  return (
    <Container className="j-even p-15">
      <Header
        leftIcon={<RiDeleteBinLine onClick={handleDelete} />}
        title={"Favourite Coin"}
        rightIcon={<BiSearchAlt onClick={handleSearchClick} />}
      />
      {optSearch ? Search : Sort}
      {FavList.length > 0 && optSearch === false
        ? FavList.map((item) => (
            <FavouriteListItem key={item.id.toString()} item={item} />
          ))
        : searchList.map((item) => (
            <FavouriteListItem key={item.id.toString()} item={item} />
          ))}

      <Footer />
    </Container>
  );
};

export default FavouriteCoinList;
