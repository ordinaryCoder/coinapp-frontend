import React from "react";
import { Col, Row } from "reactstrap";
import { ICyptoData } from "../pages/DashboardList";

interface IDashboardListItem {
  item: ICyptoData;
}

export const DashboardListItem = (props: IDashboardListItem) => {
  console.log("dashboard item", props);
  return (
    <Row>
      <img src="" alt="" />
      <Row>
        <Col>{props.item.rank}</Col>
        <Col>{props.item.id}</Col>
        <Col>{props.item.symbol}</Col>
        <Col>$ {props.item.priceUsd}</Col>
      </Row>
      <Row>
        <Col>{props.item.marketCapUsd}</Col>
        <Col>{props.item.vwap24Hr}</Col>
        <Col>({props.item.changePercent24Hr})</Col>
      </Row>
    </Row>
  );
};
