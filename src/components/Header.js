import { Navbar, Container, Nav, Button } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles/footer-style.module.css";
import { Search, ShoppingCart, AccountCircle } from "@material-ui/icons";
import shoeicon from "../assets/img/logo1.png";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";


function Header(props) {
  const { showPage } = props;
  return (
    <div className={styles["header"]}>
        <Navbar absolute="top" className={styles["color-nav"]} variant="dark">
          <Container fluid>
            <Navbar.Brand onClick={() => showPage({ home: true })} href="#home">
              <img
                alt=""
                src={shoeicon}
                width="75"
                height="45"
                className="d-inline-block align-top"
              />{" "}
            </Navbar.Brand>
            <Nav className="ms-auto">
              <div className={styles["menu-item"]}>
                <NavLink to="/home">
                  BRANDS
                </NavLink>
              </div>
              <div className={styles["menu-item"]}>
                <NavLink
                  to="/register"
                >
                  REGISTER
                </NavLink>
              </div>
              <div className={styles["menu-item"]}>
                <NavLink
                  to="/product"
                >
                  PRODUCT
                </NavLink>
              </div>
              <div className={styles["menu-item"]}>
                <NavLink
                  to="/service"
                >
                  SERVICE
                </NavLink>
              </div>
              <div className={styles["menu-item"]}>
                <NavLink
                  to="/about"
                >
                  ABOUT US
                </NavLink>
              </div>
              <div className={`${styles["other-icon"]} align-self-end`}>
                <Button variant={"link"} style={{ margin: "0px 5px" }}>
                  <Search style={{ fill: "#FB4B29" }}></Search>
                </Button>
                <NavLink to= "cart">
                  <Button
                    variant={"link"}
                    style={{ margin: "0px 5px" }}
                  >
                    <ShoppingCart style={{ fill: "#FB4B29" }}></ShoppingCart>
                  </Button>
                </NavLink>
                <Button variant={"link"} style={{ margin: "0px 5px" }}>
                  <AccountCircle
                    href = "/user"
                    style={{ fill: "white" }}
                  ></AccountCircle>
                </Button>
              </div>
            </Nav>
          </Container>
        </Navbar>
    </div>
  );
}

export default Header;
