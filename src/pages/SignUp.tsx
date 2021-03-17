import React, { useState } from "react";
import { Form, Input } from "reactstrap";
import { Button } from "reactstrap";
import "./SignUp.css";
import firebase, { realtime } from "../firebase";
import { db } from "../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import coinapp from "./../assets/images/coinapp.png";
import { Container, Row, Col } from "reactstrap";
import { Link, useHistory } from "react-router-dom";

toast.configure();
export const Signup = () => {
  const history = useHistory();
  const [profile, setProfile] = useState({
    email: "",
    firstName: "",
    lastName: "",
  });
  const [password, setPassword] = useState("")

  const handleChange = (evt: any) => {
    evt.preventDefault();
    setProfile((prevState: any) => ({
      ...prevState,
      [evt.target.name]: evt.target.value,
    }));
  };

  const handlesignup = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // db.collection("posts").add({
    //   email: profile.email,
    //   password: profile.password,
    // });
    // console.log(profile.email);
    // console.log(profile.password);

    firebase
      .auth()
      .createUserWithEmailAndPassword(profile.email, password)
      .then((user) => {
        console.log("emptyone", user);
        realtime
          .ref("users")
          .child(`${user?.user?.uid}`)
          .set(profile)
          .then((res) => {
            console.log("after user profile creation", res);
            realtime
              .ref("user-settings")
              .child(`${user?.user?.uid}`)
              .set({
                General: {
                  currencyPref: "USD",
                  Notifications: {
                    pushNotify: "",
                    eodPortPolioUpdate: "",
                    newReleaseAvail: "",
                    others: "",
                  },
                },
              })
              .then((res) => {
                console.log("after setting creation", res);
                history.push("/Signin");
                toast.success("sign up successfully", {
                  position: toast.POSITION.TOP_RIGHT,
                  autoClose: 5000,
                });
              })
              .catch((err) => {
                console.log("Setting creation error", err);
              });
          })
          .catch((err: any) => {
            console.log("user Creation errors", err);
          });
      })
      .catch((error) => {
        toast.error(error.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 5000,
        });
        console.log("signin error", error.message);
      });
  };
  return (
    <div style={{ height: "100vh" }}>
      {/* <Container
        style={{ height: "100vh", minWidth: "200px", maxWidth: "420px" }}>

        <Row className="myrowtwo">
          <Col lg="12" md="12" sm="12" className="px-0"></Col> */}
      <Container
      >

        <Row >
          <Col >
            <div className="align-center">
              <div className="adjustcentersignup">
                <p className="headersignup">
                  <Link to={"/Signin"} className="lickclasssignup">
                    sign in
                  </Link>
                </p>
                <img src={coinapp} className="imagesignup" />
                <h1 className="subheadersup">Lets create your</h1>
                <h1 className="subheadertwosup">coinapp account</h1>
                <Form>
                  <Input
                    name="email"
                    type="email"
                    value={profile.email}
                    autoComplete="off"
                    placeholder="Enter your email address"
                    className="email"
                    onChange={handleChange}
                  />
                  <Input
                    name="password"
                    type="password"
                    value={password}
                    placeholder="Enter your password"
                    className="passwordsignup"
                    autoComplete="off"
                    onChange={(evt) => setPassword(evt.target.value)}
                  />
                  <p className="footer">
                    By signing up you accept the Terms of Service and
                  </p>
                  <p className="footertwo"> Privacy Policy.</p>
                </Form>
              </div>
            </div>
            <Col className="mycoltwo">
              <Button
                color="primary"
                className="signupbutton"
                onClick={handlesignup}
              >
                Sign up
              </Button>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
