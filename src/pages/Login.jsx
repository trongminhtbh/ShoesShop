import React, { useState } from "react";
import logo1 from "../assets/img/logo1.png";

function LoginPage(props) {
  const {signUpPage, forgotPage} = props
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [result, setResult] = useState("")
  
  const sendRequest = (e) => {
    e.preventDefault();
    let bodyContent = JSON.stringify({
      email: email,
      password: password
    })
    fetch ("https://pacific-ridge-30189.herokuapp.com/user/login", {
       method: "POST",
       headers: {
        "Content-Type": "application/json",
      },
       body: bodyContent,
      }).then((response) => response.json())
      .then((data) => setResult(data));
  }
    return (
      <div className="container-fluild login-container">
        <div className="form-login">
          <div className="img-frame">
            <img src={logo1} alt=""/>
            <h2>LOGIN SITE</h2>
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
    
            <button onClick = {sendRequest} type="submit">Login</button>
            <span onClick = {forgotPage}><a href="#forgot">Forgot password?</a></span>
            <span onClick = {signUpPage}><a href="#signup">Sign Up?</a></span>
          </form>
        </div>
    </div>
    );
  }

export default LoginPage;