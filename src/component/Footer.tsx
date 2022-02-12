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
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from "react-toastify";


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

  };

  const removeFromFav = () => {
    props.handleAddToFav(false);

  };
  const footerhandle = () => {

    window.scrollTo(0, 0)

  }
  const copyhandle = () => {
    toast.success("URL copied successfully", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 5000,
    });
  }

  const starhandle = () => {
    window.scrollTo(0, 0)
  }

  return (
    <Row className="list-footer">
      {showAdd && CoinSetting}
      <div className="setfooter">
        <Link to="/list">
          <FiCopy className="copyicon" />
        </Link>


        <CopyToClipboard text={window.location.href}>
          <TiDocument className="documenticon" onClick={copyhandle} />
        </CopyToClipboard>


        <BsFillPlusCircleFill onClick={addTransaction} className="plusicon" />

        {props.inStats ? (
          !props.inFav ? (
            <AiOutlineStar className="staricon" onClick={addToFav} />
          ) : (
            <MdStars onClick={removeFromFav} />
          )
        ) : (
          <Link to="/favourite">
            <AiOutlineStar className="staricon" onClick={starhandle} />
          </Link>
        )}

        <Link to="/Settings" onClick={footerhandle}>
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
