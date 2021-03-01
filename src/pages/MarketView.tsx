import React from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Col, Container, Row } from "reactstrap";
import Chart from "../component/CoinChart";
import { Header } from "../component/Header";
import { useHistory } from "react-router-dom";
import { IoMdStats } from "react-icons/io";

const MarketView = () => {
  const history = useHistory();

  const handleBackClick = () => {
    window.history.back();
  };

  const handleStatClick = () => {
    history.push("/list");
  };

  return (
    <div className="justify-content-center">
      <Container className="p-15">
        <Header
          leftIcon={<BiLeftArrowAlt size={20} onClick={handleBackClick} />}
          title={"Market Overview"}
          rightIcon={<IoMdStats size={20} onClick={handleStatClick} />}
        />
        <Row id="curr-value">
          <div>
            <p>$ 245.1151.111.221</p>
          </div>
          <p className="mkt-dt-title">10 October 2020 18:30:15</p>
        </Row>
        <Chart id={"bitcoin"} />
        <Row className="d-flex p-15">
          <Col id="mkt-det-wrapper">
            <div id="market-details">
              <p className="mkt-dt-title">Volume (24 hours)</p>
              <p className="mkt-dt-content">
                $10,555,111,554
                {/* {parseFloat(cryptoStats?.VolumeUsd24Hr.toString()).toFixed(2)}
              {cryptoStats.symbol} */}
              </p>
            </div>
          </Col>

          <Col id="mkt-det-wrapper">
            <div id="market-details">
              <p className="mkt-dt-title">BTC Dominance</p>
              <p className="mkt-dt-content">
                53.61%
                {/* {parseFloat(cryptoStats?.VolumeUsd24Hr.toString()).toFixed(2)}
              {cryptoStats.symbol} */}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MarketView;
