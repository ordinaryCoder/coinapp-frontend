import React from "react";
import { Col, Row } from "reactstrap";

import "./Header.css";

interface HeaderProps {
  leftIcon: React.ReactNode;
  title: String;
  rightIcon: React.ReactNode;
}

export const Header = (props: HeaderProps) => {
  return (
    <Row id="header-wrapper" className="d-flex">
      <Col className="mr-auto"> {props.leftIcon}</Col>
      <Col id="header-title" className="m-auto f-14">
        {props.title.toString()}
      </Col>
      <Col className="ml-auto">{props.rightIcon}</Col>
    </Row>
  );
};
