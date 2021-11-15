import { Navbar, Container, Nav, Button } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles/footer-style.module.css";
import { Search, ShoppingCart, AccountCircle } from "@material-ui/icons";
import shoeicon from "../assets/img/logo1.png";

function Header(props) {
  const {shopingCart, productPage, homePage, aboutUsPage, ServicePage, userPage} = props
  return (
    <div className={styles["header"]}>
      <Navbar absolute="top" className={styles["color-nav"]} variant="dark">
        <Container fluid>
          <Navbar.Brand onClick={homePage} href="#home">
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
              <Nav.Link href="#home">BRANDS</Nav.Link>
            </div>
            <div className={styles["menu-item"]}>
              <Nav.Link href="#features">SALES</Nav.Link>
            </div>
            <div className={styles["menu-item"]}>
              <Nav.Link onClick={productPage} href="#product">PRODUCT</Nav.Link>
            </div>
            <div className={styles["menu-item"]}>
              <Nav.Link onClick={ServicePage} href="#service">SERVICE</Nav.Link>
            </div>
            <div className={styles["menu-item"]}>
              <Nav.Link onClick={aboutUsPage} href="#aboutus">ABOUT US</Nav.Link>
            </div>
            <div className={`${styles["other-icon"]} align-self-end`}>
              <Button variant={"link"} style={{ margin: "0px 5px" }}>
                <Search style={{ fill: "#FB4B29" }}></Search>
              </Button>
              <Button variant={"link"} onClick = {shopingCart} style={{ margin: "0px 5px" }}>
                <ShoppingCart style={{ fill: "#FB4B29" }}></ShoppingCart>
              </Button>
              <Button variant={"link"} style={{ margin: "0px 5px" }}>
                <AccountCircle onClick={userPage} style={{ fill: "white" }}></AccountCircle>
              </Button>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
