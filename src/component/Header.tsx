import React from "react";
import { Col, Row } from "reactstrap";
import { BiSearchAlt } from "react-icons/bi";
import { IoMdStats } from "react-icons/io";
import "./Header.css";

export const Header = () => {
  return (
    <Row id="header-wrapper" className="d-flex">
      <Col className="mr-auto">
        <BiSearchAlt />
      </Col>

      <Col id="header-title" className="m-auto f-14">
        Coin Market
      </Col>
      <Col className="ml-auto">
        <IoMdStats />
      </Col>
    </Row>
  );
};
