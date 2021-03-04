import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FiCopy } from "react-icons/fi";
import { IoIosSettings } from "react-icons/io";
import { TiDocument } from "react-icons/ti";
import { Link } from "react-router-dom";
import { Row } from "reactstrap";
import "../pages/Settings";
import { MdStars } from "react-icons/md";
import { connect } from "react-redux";

const CoinSetting = () => {
  return (
    <div>
      <div className="setfooter">Coin Setting + Add New Transaction</div>
    </div>
  );
};

export const Footer = (props: any) => {
  const [showAdd, setShow] = useState(false);

  const addTransaction = () => {
    console.log("click add transaction");
    setShow(!showAdd);
  };

  const addToFav = () => {
    props.handleAddToFav(true);
    alert("added to Favourite");
  };

  const removeFromFav = () => {
    props.handleAddToFav(false);
    alert("removed from Favourite");
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

        {props.inStats ? (
          !props.inFav ? (
            <AiOutlineStar className="staricon" onClick={addToFav} />
          ) : (
            <MdStars onClick={removeFromFav} />
          )
        ) : (
          <Link to="/favourite">
            <AiOutlineStar className="staricon" />
          </Link>
        )}

        <Link to="/Settings">
          <IoIosSettings className="iossettingicon" />
        </Link>
      </div>
    </Row>
  );
};

const mapStateToProps = (state: any) => ({
  ...state,
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
