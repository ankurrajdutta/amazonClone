import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./Login.css";
import { registerWithEmailAndPassword,logInWithEmailAndPassword } from "../firebase.js";


function Login() {
  const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const signIn = (event) => {
    event.preventDefault();
    let response=logInWithEmailAndPassword(email,password);
     if (response) {
       navigate("/");
     }
  };

  const register = (event) => {
    event.preventDefault();
    let response = registerWithEmailAndPassword(email, password);
    if (response) {
      navigate("/");
    }
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://img.etimg.com/thumb/msid-59738992,width-640,resizemode-4,imgsize-25499/amazon.jpg"
        ></img>
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          ></input>
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          ></input>
          <button type="submit" onClick={signIn} className="login_signInButton">
            Sign In
          </button>
        </form>
        <p>By signing-in you agree to the MY Conditions</p>
        <button onClick={register} className="login_registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
