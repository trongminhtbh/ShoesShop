import React, { useEffect } from "react";
import { useState } from "react";
import { useStore, actions } from "./store";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import User from "./pages/User"
import {ShoeApiClient} from "./pages/admin/helpers"
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App = () => {
  const [state, dispatch] = useStore()
  const [listShoes, setListShoes] = useState([])

  useEffect(() => {
    (async function () {
      const shoes = await ShoeApiClient.findAll();
      if (shoes) {
        setListShoes(shoes)
      }
    })();
  }, [])
  state.listShoes = listShoes;

  return (
    <div className="App">
      <Router>
        { window.location.pathname.substring(1,6) !== "admin"?
        <Header />: <div></div>
}
        <Section listShoes={listShoes} />
        <Footer />
      </Router>
    </div>
  );
};

export default App;