import React, { useEffect, useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import styles from "../styles/footer-style.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { algo, enc } from "crypto-js";
import CartItem from "../components/CartItem";
import { useContext } from "react";
import { StoreContext } from "../store";

export default function Cart() {
  const [state, dispath] = useContext(StoreContext)
  const [listOrder, setListOrder] = useState(state.order)
  function Payment() {
    let requestId = "MOMO" + new Date().getTime();
    let orderId = requestId;
    const requestOptions = {
      method: "GET",
    };
    fetch("http://localhost:3003", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location = data;
      });
  }

  return (
    <div>
      <div className="header-and-content">
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
                  {listOrder.map((orderItem) => {
                    return <CartItem cartItem={orderItem} />;
                  })}
                </div>
              </Col>
              <Col
                md={3}
                style={{ backgroundColor: "#C4C4C4" }}
                className="cart-right-side flex-column d-flex h-100"
              >
                <h3 className="order-summary mt-3 mb-5 text-center">
                  Order Summary
                </h3>
                <Row>
                  <Col>
                    <h5 className="order-summary-bold">
                      {listOrder.length} items
                    </h5>
                  </Col>
                  <Col className="summary-align-right">
                    <h5 className="order-summary-bold">
                      {" "}
                      {listOrder.reduce((x, y) => x + y.price, 0)}
                    </h5>
                  </Col>
                </Row>
                <hr></hr>
                <Row>
                  <Col>
                    <h6>Discount Code</h6>
                  </Col>
                  <Col className="summary-align-right">
                    <h5 className="order-summary-bold">No Discount</h5>
                  </Col>
                </Row>
                <hr></hr>
                <Row>
                  <Col>
                    <h6>Discount</h6>
                  </Col>
                  <Col className="summary-align-right">
                    <h5 className="order-summary-bold">0</h5>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h6>Total</h6>
                  </Col>
                  <Col className="summary-align-right">
                    <h5 className="order-summary-bold">
                      {listOrder.reduce((x, y) => x + y.price, 0)} vnd
                    </h5>
                  </Col>
                </Row>
                <Row className="flex-grow-1">
                  <Col className="text-center align-self-end">
                    <Button
                      className="cart-confirm-button mb-4"
                      onClick={Payment}
                    >
                      Confirm
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
