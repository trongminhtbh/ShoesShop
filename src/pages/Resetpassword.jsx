import React, { useEffect } from "react";
import logo1 from "../assets/img/logo1.png";

function ResetPasswordPage(props) {
  const {signInPage} = props
    return (
      <div className="container-fluild login-container">
      <div className="form-login">
        <div className="img-frame">
          <img src={logo1} alt=""/>
          <h2>FORGOT PASSWORD SITE</h2>
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
  
          <button type="submit">Send</button>
          <span onClick = {signInPage}><a href="#login">Login</a></span>
        </form>
      </div>
    </div>
    );
  }

export default ResetPasswordPage;