import { Navbar, Container, Nav, Button } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/footer-style.css";
import { Search, ShoppingCart, AccountCircle } from "@material-ui/icons";
import shoeicon from "../assets/img/logo1.png";

function Header() {
  return (
    <div className="header">
      <Navbar absolute="top" className="color-nav" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={shoeicon}
              width="75"
              height="45"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Nav className="ms-auto">
            <div className="menu-item">
              <Nav.Link href="#home">BRANDS</Nav.Link>
            </div>
            <div className="menu-item">
              <Nav.Link href="#features">SALES</Nav.Link>
            </div>
            <div className="menu-item">
              <Nav.Link href="#pricing">PRODUCT</Nav.Link>
            </div>
            <div className="menu-item">
              <Nav.Link href="#pricing">SERVICE</Nav.Link>
            </div>
            <div className="menu-item">
              <Nav.Link href="#pricing">ABOUT US</Nav.Link>
            </div>
            <div className="other-icon align-self-end">
              <Button variant={"link"} style={{ margin: "0px 5px" }}>
                <Search style={{ fill: "#FB4B29" }}></Search>
              </Button>
              <Button variant={"link"} style={{ margin: "0px 5px" }}>
                <ShoppingCart style={{ fill: "#FB4B29" }}></ShoppingCart>
              </Button>
              <Button variant={"link"} style={{ margin: "0px 5px" }}>
                <AccountCircle style={{ fill: "white" }}></AccountCircle>
              </Button>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
