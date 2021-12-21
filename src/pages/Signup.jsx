import React, { useEffect, useState } from "react";
import logo1 from "../assets/img/logo1.png";
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from "react-router-dom";

function SignUpPage(props) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  
  const sendRequest = (e) => {
    e.preventDefault();
    let bodyContent = JSON.stringify({
      name: "",
      dob: "",
      phone: "",
      email: email,
      password: password
    })
    fetch ("https://pacific-ridge-30189.herokuapp.com/customer", {
       method: "POST",
       headers: {
        "Content-Type": "application/json",
      },
       body: bodyContent,
      })

      console.log("sendRequest")
  }
    return (
      <div className="container-fluild login-container">
      <div className="form-login">
        <div className="img-frame">
          <img src={logo1} alt=""/>
          <h2>SIGN UP SITE</h2>
        </div>
        <form action="">
          <div className="email-input input-item">
            <i className= "fa fa-envelope"></i>
            <input
              type="text"
              placeholder="Email"
              id="usernameInput"
              required
              onChange = {e => setEmail(e.target.value)}
            />
          </div>
          <div className="password-input input-item">
            <i className="fa fa-lock"></i>
            <input type="password" placeholder="Password" id="passwordInput" onChange = {e => setPassword(e.target.value)}/>
          </div>
  
          <button onClick = {sendRequest} type="submit"><NavLink to="/login">Sign up</NavLink></button>
          <span ><NavLink style={{color: "white", textDecoration: "none",}} to="/login">Already have account?</NavLink></span>
        </form>
      </div>
    </div>
    );
  }

export default SignUpPage;