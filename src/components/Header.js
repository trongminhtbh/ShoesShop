import { Navbar, Container, Nav, Button } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles/footer-style.module.css";
import { Search, ShoppingCart, AccountCircle } from "@material-ui/icons";
import shoeicon from "../assets/img/logo1.png";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "../pages/Product";
import User from "../pages/user";
import Service from "../pages/service";
import Cart from "../pages/Cart";
import Homepage from "../pages/Homepage";
import RegisterPage from "../pages/Register";
import AboutUs from "../pages/AbousUs"

function Header(props) {
  const { showPage } = props;
  return (
    <div className={styles["header"]}>
      <Router>
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
                <Nav.Link  href="/home">
                  BRANDS
                </Nav.Link>
              </div>
              <div className={styles["menu-item"]}>
                <Nav.Link
                  href="/register"
                >
                  REGISTER
                </Nav.Link>
              </div>
              <div className={styles["menu-item"]}>
                <Nav.Link
                  href="/product"
                >
                  PRODUCT
                </Nav.Link>
              </div>
              <div className={styles["menu-item"]}>
                <Nav.Link
                  href="/service"
                >
                  SERVICE
                </Nav.Link>
              </div>
              <div className={styles["menu-item"]}>
                <Nav.Link
                  href="/about"
                >
                  ABOUT US
                </Nav.Link>
              </div>
              <div className={`${styles["other-icon"]} align-self-end`}>
                <Button variant={"link"} style={{ margin: "0px 5px" }}>
                  <Search style={{ fill: "#FB4B29" }}></Search>
                </Button>
                <Button
                  variant={"link"}
                  href = "/cart"
                  style={{ margin: "0px 5px" }}
                >
                  <ShoppingCart style={{ fill: "#FB4B29" }}></ShoppingCart>
                </Button>
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

          <Switch>
            <Route path="/home" exact>
                <Homepage />
            </Route>

            <Route path="/product" exact>
                <Product />
            </Route>

            <Route path="/service" exact>
                <Service />
            </Route>
            <Route path="/about" exact>
                <AboutUs />
            </Route>
            <Route path="/user" exact>
                <User />
            </Route>

            <Route path="/cart" exact >
                <Cart />
            </Route>

            <Route path="/register" exact >
                <RegisterPage  />
            </Route>
            <Route path="/" exact >
                <Homepage  />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Header;
