import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FiCopy } from "react-icons/fi";
import { IoIosSettings } from "react-icons/io";
import { TiDocument } from "react-icons/ti";
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

  return (
    <Row className="list-footer">
      {showAdd && CoinSetting}
      <div className="setfooter">
        <FiCopy className="copyicon" />
        <TiDocument className="documenticon" />
        <BsFillPlusCircleFill onClick={addTransaction} className="plusicon" />
        <AiOutlineStar className="staricon" />
        <IoIosSettings className="iossettingicon" />
      </div>
    </Row>
  );
};
