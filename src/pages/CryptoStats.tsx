import React from "react";
import { Container, Row } from "reactstrap";
import { Header } from "../component/Header";
import "./CryptoStats.css";
import {
  IDashboardListItem,
  getColor,
  priceChange,
} from "../component/DashboardListItem";

export const CryptoStats = (props: IDashboardListItem) => {
  return (
    <Container className="p-15">
      <Header handleClickLeftIcon={() => {}} />
      <Row id="curr-value">
        <div>
          <p>{props.item?.priceUsd?.toString()}</p>
          <span>
            <img
              src={`https://static.coincap.io/assets/icons/${props.item.symbol.toLowerCase()}@2x.png`}
              alt="coin-logo"
            />
          </span>
        </div>
        <p
          className={getColor(
            props.item?.vwap24Hr?.toString(),
            props.item?.priceUsd?.toString()
          )}
        >
          {priceChange(
            props.item?.vwap24Hr?.toString(),
            props.item?.priceUsd?.toString()
          )}
          ({parseFloat(props.item.changePercent24Hr?.toString()).toFixed(2)}%)
        </p>
      </Row>
    </Container>
  );
};
