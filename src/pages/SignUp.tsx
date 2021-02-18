import React, { useState } from "react";
import { Form, Input } from "reactstrap";
import { Button } from "reactstrap";
import "./SignUp.css";
import firebase from "../firebase";
import { db } from '../firebase';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


toast.configure()
export const Signup = () => {

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
        toast.success('sign up successfully', { position: toast.POSITION.TOP_RIGHT, autoClose: 1000 })
        console.log("emptyone", user)

      })
      .catch((error) => {
        toast.error('sign up failed empty field', { position: toast.POSITION.BOTTOM_CENTER, autoClose: 1000 })

        console.log("signin error", error.message);

      });





  }
  return (
    <div className="background">

      <p className="header">sign in</p>

      <h1 className="subheadersup">Lets create your</h1>
      <h1 className="subheadertwosup">coinapp account</h1>

      <Form onSubmit={handlesignup}>
        <Input
          type="email"
          name="email"
          value={email}

          autoComplete="off"
          placeholder="Enter your email address"
          className="email"

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
        <p className="footer">
          By signing up you accept the Terms of Service and{" "}
        </p>
        <p className="footertwo">Privacy Policy.</p>
        <Button color="primary" className="signupbutton" >
          Sign up
        </Button>


      </Form>

    </div>


  );
};
