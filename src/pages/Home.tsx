import React from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import "./Home.css";
import coinapp from './../assets/images/coinapp.png'; 



const Home = () => {
  const history = useHistory();

  const handlesignin = () => {
    history.push("/signin");
  };
  const handlesignup = () => {
    history.push("/signup");
  };
  return (
    <>
    <div className="container">
      <div className="center">
        <div className="adjustcenter">
          <div className="images">
          <img src={coinapp} alt="mypic"  />
          </div>
          <h1 className="heading">Welcome to coinapp</h1>
          <p className="subheading">
            Craving for your favourite food? Takeaway{" "}
            <p className="childsubheading">
              will deliver it, wherever you are!
            </p>
          </p>
          <Button onClick={handlesignin} className="buttonsign">
            Sign in
          </Button>
          <Button onClick={handlesignup} className="buttonsignup">
            Sign up
          </Button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
