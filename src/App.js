import React from "react";
import ProductDetail from "./pages/ProductDetail";
import LoginPage from "./pages/Login"
import SignUpPage from "./pages/Signup"
import ForgotPasswordPage from "./pages/Resetpassword"
import Product from "./pages/Product";
import "./App.scss";
const App = () => {
  return (
    <div className="App">
      <ProductDetail />
    </div>
  );
};

export default App;
