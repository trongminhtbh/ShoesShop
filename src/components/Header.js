import { Navbar, Container, Nav, Button, Row } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles/footer-style.module.css";
import { Search, ShoppingCart, AccountCircle } from "@material-ui/icons";
import shoeicon from "../assets/img/logo1.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useStore } from "../store";

function Header(props) {
  const { showPage } = props;
  const [state, dispatch] = useStore();

  return (
    <div className={styles["header"]}>
      <Navbar absolute="top" className={styles["color-nav"]} variant="dark">
        <Container fluid>
          <NavLink to="/home">
            <img
              alt=""
              src={shoeicon}
              width="75"
              height="45"
              className="d-inline-block align-top"
            />
            {""}
          </NavLink>
          <Nav className="ms-auto">
            <div className={`${styles["menu-item"]} align-self-center`}>
              <NavLink to="/home" className={styles["nav-link"]}>
                BRANDS
              </NavLink>
            </div>
            {!state.login._id && (
              <div className={`${styles["menu-item"]} align-self-center`}>
                <NavLink to="/register" className={styles["nav-link"]}>
                  REGISTER
                </NavLink>
              </div>
            )}
            <div className={`${styles["menu-item"]} align-self-center`}>
              <NavLink to="/product" className={styles["nav-link"]}>
                PRODUCT
              </NavLink>
            </div>
            <div className={`${styles["menu-item"]} align-self-center`}>
              <NavLink to="/service" className={styles["nav-link"]}>
                SERVICE
              </NavLink>
            </div>
            <div className={`${styles["menu-item"]} align-self-center`}>
              <NavLink to="/about" className={styles["nav-link"]}>
                ABOUT US
              </NavLink>
            </div>
            <div className={`${styles["other-icon"]} align-self-end`}>
              <Button variant={"link"} style={{ margin: "0px 5px" }}>
                <Search style={{ fill: "#FB4B29" }}></Search>
              </Button>
              <NavLink to="cart">
                <Button variant={"link"} style={{ margin: "0px 5px" }}>
                  <ShoppingCart style={{ fill: "#FB4B29" }}></ShoppingCart>
                </Button>
              </NavLink>
              <Button variant={"link"} style={{ margin: "0px 5px" }}>
                <NavLink to="/user">
                  <AccountCircle
                    href="/user"
                    style={{ fill: "white" }}
                  ></AccountCircle>
                </NavLink>
              </Button>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
