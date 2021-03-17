import React, { useEffect, useState } from "react";
import { Form, Input } from "reactstrap";
import { Button } from "reactstrap";
import "./SignIn.css";
import firebase, { realtime } from "../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import coinapp from "./../assets/images/coinapp.png";
import { Container, Row, Col } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUid } from "../reducer/user/actions";
export const Signin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlesignin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    console.log(email);
    console.log(password);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch(setUid(`${user.user?.uid}`));
        toast.success("user signed in successfully", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
        });
        console.log("emptyone", user.user);
        history.push("/list");
      })
      .catch((error) => {
        //this.setState({ error: error });
        toast.error(error.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 5000,
        });

        console.log("signin err cons", error.message);
      });
  };



  return (
    <div >
      <Container >


        <Row >
          <Col >
            <div className="align-center-in">
              <div className=" adjustcentertwo">
                <p className="headersignin">
                  <Link to={"/Signup"} className="linkclass">
                    sign up
                  </Link>{" "}
                </p>
                <img src={coinapp} className="imagesignin" />

                <h1 className="mainheading">Welcome back! </h1>
                <h1 className="mainheadingtwo">You've been missed</h1>
                <Form>
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
                  <p className="forgotpass">
                    {" "}
                    <Link to={"/ForgotPassword"} className="linkclassforogt">
                      Forget password?
                    </Link>
                  </p>
                </Form>
              </div>
            </div>
          </Col>
          <Col className="mycol">
            <Button
              color="primary"
              className="signinbutton"
              onClick={handlesignin}
            >
              Sign in
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
