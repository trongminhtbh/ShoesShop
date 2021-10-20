import React, { useEffect } from "react";
import logo1 from "../assets/img/logo1.png";

function SignUpPage() {
    return (
      <div className="container-fluild login-container">
      <div className="form-login">
        <div className="img-frame">
          <img src={logo1} alt=""/>
          <h2>SIGN UP SITE</h2>
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
  
          <button type="submit">Confirm</button>
          <span><a href="">Already have account?</a></span>
        </form>
      </div>
    </div>
    );
  }

export default SignUpPage;