import React, { useEffect } from "react";
import { useState } from "react";
import ProductAndCart from "./pages/ProductAndCart";
import { useContext } from "react";
import { StoreContext } from "./store";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import "./App.scss";
const App = () => {
  const [state, dispath] = useContext(StoreContext)
  const [listShoes, setListShoes] = useState([])

  useEffect(() => {
      fetch('https://pacific-ridge-30189.herokuapp.com/shoes')
          .then(res => res.json())
          .then(listShoes => setListShoes(listShoes))
  }, [])
  state.listShoes = listShoes
  console.log(state.listShoes)
  return (
    <div className="App">
      <Header />
    </div>
  );
};

export default App;
