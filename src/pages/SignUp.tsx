import React, { useState } from "react";
import { Input } from "reactstrap";
import { Button } from "reactstrap";
import "./SignUp.css";
import firebase from "../firebase";
import { db } from '../firebase';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import coinapp from './../assets/images/coinapp.png';
import { Container, Row, Col } from 'reactstrap';
import { Link, useHistory } from "react-router-dom";



toast.configure()
export const Signup = () => {
  const history = useHistory();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handlesignup = (e: { preventDefault: () => void; }) => {
    e.preventDefault()

    db.collection("posts").add({
      email: email,
      password: password,
    })
      .then(() => {
        // alert("successfully Logged In");
      })
      .catch((error) => {
        // alert(error.message);
      });
    setEmail("");
    setPassword("");
    console.log(email);
    console.log(password);
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then((user) => {
    //     console.log(user)
    //     // this.props.history.push('/');
    //   })
    //   .catch((error) => {
    //     //this.setState({ error: error });
    //     console.log("signin error", error);
    //   });
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        toast.success('sign up successfully', { position: toast.POSITION.TOP_RIGHT, autoClose: 5000 })
        console.log("emptyone", user)
        history.push("/Signin")
      })
      .catch((error) => {
        toast.error('sign up failed empty field', {

          position: toast.POSITION.BOTTOM_RIGHT, autoClose: 5000,
        })
        console.log("signin error", error.message);
      });
  }
  return (
    <div style={{ height: "100vh" }} >
      <Container style={{ height: "100vh", minWidth: "200px", maxWidth: "420px" }} >
        <Row className="myrowtwo">
          <Col lg="12" md="12" sm="12" className="px-0">
            <div className="align-center">
              <div className="adjustcentersignup">
                <p className="headersignup"><Link to={'/Signin'} className="lickclasssignup">sign in</Link></p>
                <img src={coinapp} className="imagesignup" />
                <h1 className="subheadersup">Lets create your</h1>
                <h1 className="subheadertwosup">coinapp account</h1>
                <div>
                  <Input
                    type="email"
                    value={email}
                    autoComplete="off"
                    placeholder="Enter your email address"
                    className="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    type="password"
                    value={password}
                    placeholder="Enter your password"
                    className="passwordsignup"
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <p className="footer">
                    By signing up you accept the Terms of Service and{" "}
                  </p>
                  <p className="footertwo">Service and Privacy Policy.</p>
                </div>
              </div>
            </div>
            <Col className="mycoltwo">
              <Button color="primary" className="signupbutton" onClick={handlesignup}>
                Sign up
               </Button>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
