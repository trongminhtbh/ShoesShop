import React from "react";
import { useState, useEffect } from "react";
import LoginPage from "./Login";
import SignUpPage from "./Signup";
import ForgotPasswordPage from "./Resetpassword";

function RegisterPage(params) {
    const [showSignIn, setShowSignIn] = useState(true);
    const [showSignUp, setShowSignUp] = useState(false);
    const [showForgot, setShowForgot] = useState(false);

    const showSignUpPage = () => {
        setShowSignUp(true)
        setShowSignIn(false)
        setShowForgot(false)
    }
    const showSignInPage = () => {
        setShowSignUp(false)
        setShowSignIn(true)
        setShowForgot(false)
    }
    const showForgotPage = () => {
        setShowSignUp(false)
        setShowSignIn(false)
        setShowForgot(true)
    }
    return (
        <div className="register">
            {showSignIn && <LoginPage signUpPage = {showSignUpPage} forgotPage = {showForgotPage}/>}
            {showSignUp && <SignUpPage signInPage = {showSignInPage}/>}
            {showForgot && <ForgotPasswordPage signInPage = {showSignInPage}/>}
        </div>
    )
}

export default RegisterPage