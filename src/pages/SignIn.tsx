import React, { useState } from "react";
import { Form, Input } from "reactstrap";
import { Button } from "reactstrap";
import "./SignIn.css";
import firebase from "../firebase";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import coinapp from './../assets/images/coinapp.png';
import { Container, Row, Col } from 'reactstrap';








export const Signin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')






  const handlesignin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    setEmail("");
    setPassword("");





    console.log(email);
    console.log(password);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        toast.success('user signed in successfully', { position: toast.POSITION.TOP_RIGHT, autoClose: 1000 })
        console.log("emptyone", user)


        // this.props.history.push('/');
      })
      .catch((error) => {
        //this.setState({ error: error });
        toast.error('sign up to signup', { position: toast.POSITION.BOTTOM_CENTER, autoClose: 1000 })



        console.log("signin error", error.message);
      });








  }

  return (
    <div style={{ height: "100vh" }}>
      <Container style={{ height: "100vh", minWidth: "200px", maxWidth: "420px" }} >
        <Row className="">
          <Col lg="12" md="12" sm="12">
            <div className="align-center">
              <div className=" adjustcentertwo">
                <p className="headersignin">sign up </p>
                <img src={coinapp} className="imagesignin" />

                <h1 className="mainheading">Welcome back! </h1>
                <h1 className="mainheadingtwo">You've been missed</h1>
                <div>

                  <Input
                    type="email"
                    name="email"
                    value={email}

                    placeholder="Enter your email address"
                    className="emailid"
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    type="password"
                    name="password"
                    value={password}

                    placeholder="Enter your password"
                    className="password"
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <p className="forgotpass">Forget password?</p>


                </div>
              </div>
            </div>

          </Col>
          <Col>
            <Button color="primary" className="signinbutton" onClick={handlesignin} >
              Sign in
              </Button>
          </Col>
        </Row>

      </Container>

    </div>
  );
};
