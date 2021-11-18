import React, { useEffect } from "react";
import { useState } from "react";
import { useStore, actions } from "./store";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import User from "./pages/User"
<<<<<<< HEAD
import { ShoeApiClient } from "./pages/admin/helpers"
=======
import {ShoeApiClient} from "./pages/admin/helpers"
>>>>>>> d986c279e2f2768686329615e56dcbeceb8b75c1
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App = () => {
  const [state, dispatch] = useStore()
  const [listShoes, setListShoes] = useState([])

  useEffect(() => {
    (async function () {
<<<<<<< HEAD
      const shoes = await ShoeApiClient.findAll();
      if (shoes) {
        setListShoes(shoes)
      }
=======
        const shoes = await ShoeApiClient.findAll();
        if (shoes) {
          setListShoes(shoes)
        }
>>>>>>> d986c279e2f2768686329615e56dcbeceb8b75c1
    })();
  }, [])
  state.listShoes = listShoes;
  console.log("rerender APP component")
  console.log(state.listShoes)

  return (
    <div className="App">
      <Router>
        <Header />
<<<<<<< HEAD
        <Section listShoes={listShoes} />
        <Footer />
=======
        <Section listShoes = {listShoes}/>
        <Footer/>
>>>>>>> d986c279e2f2768686329615e56dcbeceb8b75c1
      </Router>
    </div>
  );
};

export default App;