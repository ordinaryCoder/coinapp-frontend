import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FiCopy } from "react-icons/fi";
import { IoIosSettings } from "react-icons/io";
import { TiDocument } from "react-icons/ti";
import { Link } from "react-router-dom";
import { Row } from "reactstrap";
import "../pages/Settings";

const CoinSetting = () => {
  return (
    <div>
      <div className="setfooter">Coin Setting + Add New Transaction</div>
    </div>
  );
};

export const Footer = () => {
  const [showAdd, setShow] = useState(false);

  const addTransaction = () => {
    console.log("clicke add transaction");
    setShow(!showAdd);
  };

  const addToFav = () => {
    alert("added to Favourite");
  };

  return (
    <Row className="list-footer">
      {showAdd && CoinSetting}
      <div className="setfooter">
        <Link to="/list">
          <FiCopy className="copyicon" />
        </Link>

        <TiDocument className="documenticon" />
        <BsFillPlusCircleFill onClick={addTransaction} className="plusicon" />
        <Link to="/favourite">
          <AiOutlineStar className="staricon" />
        </Link>

        <Link to="/Settings">
          <IoIosSettings className="iossettingicon" />
        </Link>
      </div>
    </Row>
  );
};
