import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import { ICyptoData } from "../pages/DashboardList";
import { Link } from "react-router-dom";
import axios from "axios";
import { setFavList } from "../reducer/FavList/action";

export interface IDashboardListItem {
  item: ICyptoData;
}

export function getColor(newPrice: string, oldPrice: string) {
  let priceChange = parseFloat(newPrice) - parseFloat(oldPrice);
  if (priceChange < 0) return "neg-change";
  else return "pos-change";
}

export const priceChange = (newPrice: string, oldPrice: string) => {
  let roundedNewprice = parseFloat(newPrice) - parseFloat(oldPrice);
  if (isNaN(roundedNewprice)) return "--";
  else if (roundedNewprice < 0.01 && roundedNewprice > -10)
    return roundedNewprice.toFixed(3);
  else if (roundedNewprice < 0.001 && roundedNewprice > -10)
    return roundedNewprice.toFixed(3);
  else if (roundedNewprice < 0.0001 && roundedNewprice > -10)
    return roundedNewprice.toFixed(4);
  else if (roundedNewprice < 0.00001 && roundedNewprice > -10)
    return roundedNewprice.toFixed(5);
  else return roundedNewprice.toFixed(2);
};

export const FavouriteListItem = (props: any) => {
  console.log("In Favalist Item,", props.id);
  const [favListItem, setFavListItem] = useState<ICyptoData>({
    id: "",
    rank: "",
    symbol: "",
    name: "",
    supply: "",
    maxSuppy: "",
    marketCapUsd: "",
    volumeUsd24Hr: "",
    priceUsd: "",
    changePercent24Hr: "",
    vwap24Hr: "",
  });

  useEffect(() => {
    axios
      .get(`https://api.coincap.io/v2/assets/${props.id}`)
      .then((res) => {
        console.log("response", res.data.data);
        setFavListItem(res.data.data);
        console.log("favListItem: ", favListItem);
      })
      .catch((err) => {
        console.log("Fav list Item Error", err);
      });
  }, [props.id]);

  function roundOff(labelValue: string) {
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e9
      ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(1) + " Billions"
      : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
        ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(1) + " Millions"
        : // Three Zeroes for Thousands
        Math.abs(Number(labelValue)) >= 1.0e3
          ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(1) + " K"
          : Math.abs(Number(labelValue)).toFixed(2);
  }

  return (
    <Link to={`/details/${props.id}`}>
      <Row id="single-list-wrapper" className=" d-flex m-auto pl-pr-15-pb-10">
        <Col id="logo-wrapper" xs="2">
          <img
            id="coin-logo"
            className="coin-logo mr-auto"
            src={`https://static.coincap.io/assets/icons/${favListItem?.symbol.toLowerCase()}@2x.png`}
            alt="coin logo"
          />
        </Col>

        <Col id="cypto-name" xs="5">
          <h2>
            {favListItem?.rank}. {favListItem?.id}
            <span>({favListItem?.symbol})</span>
          </h2>
          <p>${roundOff(favListItem?.marketCapUsd?.toString())}</p>
        </Col>

        <Col id="crypto-rate" xs="5" className="ml-auto d-block">
          <p className="text-right">
            ${parseFloat(favListItem?.priceUsd?.toString()).toFixed(2)}
          </p>
          <div id="price-change" className="d-flex">
            <p
              className={getColor(
                favListItem?.vwap24Hr?.toString(),
                favListItem?.priceUsd?.toString()
              )}
            >
              $
              {priceChange(
              favListItem?.vwap24Hr?.toString(),
              favListItem?.priceUsd?.toString()
            )}
              (
              {parseFloat(favListItem?.changePercent24Hr?.toString()).toFixed(
              2
            )}
              %)
            </p>
          </div>
        </Col>
      </Row>
    </Link>
  );
};
