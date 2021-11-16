import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { StoreContext } from "./store";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App = () => {
  const [state, dispath] = useContext(StoreContext)
  const [listShoes, setListShoes] = useState([])

  useEffect(() => {
      fetch('https://pacific-ridge-30189.herokuapp.com/shoes')
          .then(res => res.json())
          .then(listShoes => setListShoes(listShoes))
  }, [])
  state.listShoes = listShoes
  console.log("rerender APP component")
  console.log(state.listShoes)

  return (
    <div className="App">
      <Router>
        <Header />
        <Section/>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
