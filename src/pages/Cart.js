import React from "react";
import Header from "../components/Header";
import { Container, Col, Row, Button } from "react-bootstrap";
import "../styles/footer-style.css";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";

export default function Cart() {
  return (
    <div>
      <div className="header-and-content">
        <Header />
        <div className="cart-content-div">
          <Container className="cart-container h-100 pt-3 pb-3">
            <Row className="h-100">
              <Col
                md={9}
                style={{ backgroundColor: "white" }}
                className="ps-5 pe-3 cart-left-side flex-column d-flex h-100"
              >
                <h3 className="shopping-cart mt-3">Shopping Cart </h3>
                <hr></hr>
                <div className="list-item-cart flex-grow-1">
                  <CartItem/>
                  <CartItem/>
                  <CartItem/>
                  <CartItem/>
                  <CartItem/>
                  <CartItem/>
                  <CartItem/>
                  <CartItem/>
                  <CartItem/>
                  <CartItem/>
                </div>
              </Col>
              <Col
                md={3}
                style={{ backgroundColor: "#C4C4C4" }}
                className="cart-right-side flex-column d-flex h-100"
              >
                <h3 className="order-summary mt-3 mb-5 text-center">Order Summary</h3>
                <Row>
                  <Col>
                    <h5 className="order-summary-bold">3 items</h5>
                  </Col>
                  <Col className="summary-align-right">
                    <h5 className="order-summary-bold">$ 567</h5>
                  </Col>
                </Row>
                <hr></hr>
                <Row>
                  <Col>
                    <h6>Discount Code</h6>
                  </Col>
                  <Col className="summary-align-right">
                    <h5 className="order-summary-bold">DIS20</h5>
                  </Col>
                </Row>
                <hr></hr>
                <Row>
                  <Col>
                    <h6>Discount</h6>
                  </Col>
                  <Col className="summary-align-right">
                    <h5 className="order-summary-bold">20%(100$)</h5>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h6>Total</h6>
                  </Col>
                  <Col className="summary-align-right">
                    <h5 className="order-summary-bold">$ 467</h5>
                  </Col>
                </Row>
                <Row className="flex-grow-1">
                  <Col className="text-center align-self-end">
                    <Button className="cart-confirm-button mb-4">Confirm</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
}
