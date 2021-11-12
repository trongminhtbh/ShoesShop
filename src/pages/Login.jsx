import React, { useEffect } from "react";
import logo1 from "../assets/img/logo1.png";

function LoginPage(props) {
  const {signUpPage, forgotPage} = props
    return (
      <div className="container-fluild login-container">
      <div className="form-login">
        <div className="img-frame">
          <img src={logo1} alt=""/>
          <h2>LOGIN SITE</h2>
        </div>
        <form action="">
          <div className="email-input input-item">
            <i className= "fa fa-phone"></i>
            <input
              type="text"
              placeholder="Phone"
              id="usernameInput"
              required
            />
          </div>
          <div className="password-input input-item">
            <i className="fa fa-lock"></i>
            <input type="password" placeholder="Password" id="passwordInput" />
          </div>
  
          <button type="submit">Login</button>
          <span onClick = {forgotPage}><a href="#forgot">Forgot password?</a></span>
          <span onClick = {signUpPage}><a href="#signup">Sign Up?</a></span>
        </form>
      </div>
    </div>
    );
  }

export default LoginPage;