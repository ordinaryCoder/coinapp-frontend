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
import { connect, useDispatch } from "react-redux";
import { realtime } from "../firebase";
import { setCryptoObj, setFavList } from "../reducer/FavList/action";
import ReactPaginate from "react-paginate";
import { constants } from "node:os";

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

const List = (props: any) => {
  console.log("props in list", props);
  const dispatch = useDispatch();
  const history = useHistory();
  const [cryptoList, setCyptos] = useState<ICyptoData[]>([]);
  const [optSearch, setSearch] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (props.uid) {
      realtime
        .ref("fav-list/")
        .child(props.uid)
        .on("value", (snap) => {
          console.log("snap of Dashboard", snap.val());
          if (snap.val() !== null) {
            let fav = [];
            fav = snap.val();
            console.log("crypto obj in dashboard list", fav);
            const bitVal = Object.values(fav);
            console.log(typeof bitVal, ` Values: ${bitVal} bitVal`);
            dispatch(setCryptoObj(fav));
            dispatch(setFavList(bitVal));
          }
        });
    }
  }, [props.uid]);
  useEffect(() => {
    console.log("offset value", offset);
    axios
      .get(`https://api.coincap.io/v2/assets?limit=10&offset=${offset}`)
      .then((response) => {
        console.log("dashboard data", response.data);
        setCyptos(response.data.data);
      })
      .catch((err) => {
        console.log("Dashboard error ", err);
      });
  }, [offset]);

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

  const handlePageClick = (evt: any) => {

    setOffset(10 * (evt.selected));
    window.scrollTo(0, 0)
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

      <Row id="dashboard-content">
        {optSearch ? Search : Sort}
        {cryptoList.length > 0 &&
          cryptoList.map((item) => (
            <DashboardListItem key={item.id.toString()} item={item} />
          ))}

        {cryptoList.length > 0 ? <div className="pagiclass">
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={166}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </div> : null}
      </Row>
      <Footer inStats={false} inFav={false} />
    </Container>
  );
};

const mapStateToProps = (store: any) => ({
  uid: store.userReducer.uid,
});

export default connect(mapStateToProps, {})(List);
