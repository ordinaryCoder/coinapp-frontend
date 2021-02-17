import React from "react";
import { Col, Row } from "reactstrap";
import { ICyptoData } from "../pages/DashboardList";
import "../pages/Dashboard.css";

interface IDashboardListItem {
  item: ICyptoData;
}

export const DashboardListItem = (props: IDashboardListItem) => {
  console.log("dashboard item", props.item);

  const priceChange = (newPrice: string, oldPrice: string) => {
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

  function getColor(newPrice: string, oldPrice: string) {
    let priceChange = parseFloat(newPrice) - parseFloat(oldPrice);
    if (priceChange < 0) return "neg-change";
    else return "pos-change";
  }

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
    <Row id="single-list-wrapper" className=" d-flex m-auto p-15">
      <Col id="logo-wrapper" xs="2">
        <img
          id="coin-logo"
          className="coin-logo mr-auto"
          src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
          alt="coin logo"
        />
      </Col>

      <Col id="cypto-name" xs="5">
        <h2>
          {props.item.rank}. {props.item.id}
          <span>({props.item.symbol})</span>
        </h2>
        <p>${roundOff(props.item.marketCapUsd?.toString())}</p>
      </Col>

      <Col id="crypto-rate" xs="5" className="ml-auto d-block">
        <p className="text-right">
          ${parseFloat(props.item.priceUsd.toString()).toFixed(2)}
        </p>
        <div id="price-change" className="d-flex">
          <p
            className={getColor(
              props.item?.vwap24Hr?.toString(),
              props.item?.priceUsd?.toString()
            )}
          >
            $
            {priceChange(
              props.item?.vwap24Hr?.toString(),
              props.item?.priceUsd?.toString()
            )}
            ({parseFloat(props.item.changePercent24Hr?.toString()).toFixed(2)}%)
          </p>
        </div>
      </Col>
    </Row>
  );
};
