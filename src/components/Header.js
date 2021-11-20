import { Navbar, Container, Nav, Button, Row } from "react-bootstrap";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles/footer-style.module.css";
import { Search, ShoppingCart, AccountCircle } from "@material-ui/icons";
import shoeicon from "../assets/img/logo1.png";
import { NavLink } from "react-router-dom";
import { useStore, logout } from "../store";

function Header(props) {
  const { showPage } = props;
  const [state, dispatch] = useStore();
  const handleLogout = () => {
    dispatch(logout())
  }
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
              <NavLink
                to="/home"
                className={styles["nav-link"]}
                activeStyle={{
                  color: "#fb4b29",
                  textDecoration: "underline",
                }}
              >
                BRANDS
              </NavLink>
            </div>

            <div className={`${styles["menu-item"]} align-self-center`}>
              <NavLink
                to="/product"
                className={styles["nav-link"]}
                activeStyle={{
                  color: "#fb4b29",
                  textDecoration: "underline",
                }}
              >
                PRODUCT
              </NavLink>
            </div>
            <div className={`${styles["menu-item"]} align-self-center`}>
              <NavLink
                to="/service"
                className={styles["nav-link"]}
                activeStyle={{
                  color: "#fb4b29",
                  textDecoration: "underline",
                }}
              >
                SERVICE
              </NavLink>
            </div>
            <div className={`${styles["menu-item"]} align-self-center`}>
              <NavLink
                to="/about"
                className={styles["nav-link"]}
                activeStyle={{
                  color: "#fb4b29",
                  textDecoration: "underline",
                }}
              >
                ABOUT US
              </NavLink>
            </div>
            <div
              className={`${styles["other-icon"]} ${styles["dropdownNghia"]} align-self-end dropdown`}
            >
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
                {state.login._id && (<span style={{textDecoration: "none", color: "white"}}>{state.login.name}</span>)}
              </Button>
              {!state.login._id && (
                <div className={`${styles["dropdown-contentNghia"]}`}>
                  <div className="text-center">
                    <NavLink
                      to="/login"
                      className={`${styles["account-box1"]}`}
                    >
                      LOGIN
                    </NavLink>
                  </div>
                  <div className="text-center">
                    <NavLink
                      to="/signup"
                      className={`${styles["account-box2"]}`}
                    >
                      SIGN UP
                    </NavLink>
                  </div>
                </div>
              )}
                {state.login._id && (
                <div className={`${styles["dropdown-contentNghia"]}`}>
                  <div className="text-center">
                    <NavLink onClick = {handleLogout}
                      to="/home"
                      className={`${styles["account-box12"]}`}
                    >
                      LOGOUT
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
