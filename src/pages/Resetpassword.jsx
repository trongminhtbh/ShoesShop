import React, { useEffect } from "react";
import logo1 from "../assets/img/logo1.png";

function ResetPasswordPage(props) {
  const {signInPage} = props
  const [email, setEmail] = useState()
  const sendRequest = (e) => {
    e.preventDefault();
    let bodyContent = JSON.stringify({
      email: email
    })
    fetch ("https://pacific-ridge-30189.herokuapp.com/forgot", {
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
          <h2>FORGOT PASSWORD SITE</h2>
        </div>
        <form action="">
          <div className="email-input input-item">
            <i className= "fa fa-envelope"></i>
            <input
              type="email"
              placeholder="Email"
              id="usernameInput"
              required
              onChange = {e => setEmail(e.target.value)}
            />
          </div>
  
          <button onClick = {sendRequest} type="submit">Send</button>
          <span onClick = {signInPage}><a href="#login">Login</a></span>
        </form>
      </div>
    </div>
    );
  }

export default ResetPasswordPage;