import React, { useEffect, useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import styles from "../styles/footer-style.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { algo, enc } from "crypto-js";
import CartItem from "../components/CartItem";
import {useStore} from "../store"


export default function Cart() {
  const [state, dispath] = useStore()
  const [listOrder, setListOrder] = useState(state.orders)
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
      <div className={styles["page-content"]}>
        <div className={styles["cart-content-div"]}>
          <Container className={`${styles["cart-container"]} h-100 pt-3 pb-3`}>
            <Row className="h-100">
              <Col
                md={9}
                style={{ backgroundColor: "white" }}
                className={`${styles["cart-left-side"]} ps-5 pe-3  flex-column d-flex h-100`}
              >
                <h3 className={`${styles["shopping-cart"]} mt-3`}>Shopping Cart </h3>
                <hr></hr>
                {listOrder.length === 0? <div className="mt-2 h100"> <h3>Empty Cart!</h3></div>:
                <div className={`${styles["list-item-cart"]} flex-grow-1`}>
                  {listOrder.map((orderItem) => {
                    return <CartItem cartItem={orderItem} />;
                  })}
                </div>
                }
              </Col>
              <Col
                md={3}
                style={{ backgroundColor: "#C4C4C4" }}
                className={`${styles["cart-right-side"]} flex-column d-flex h-100`}
              >
                <h3 className={`${styles["order-summary"]} mt-3 mb-5 text-center`}>
                  Order Summary
                </h3>
                <Row>
                  <Col>
                    <h5 className={`${styles["order-summary-bold"]}`}>
                      {listOrder.length} items
                    </h5>
                  </Col>
                  <Col className={`${styles["summary-align-right"]}`}>
                    <h5 className={`${styles["order-summary-bold"]}`}>
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
                  <Col className={`${styles["summary-align-right"]}`}>
                    <h5 className={`${styles["order-summary-bold"]}`}>No Discount</h5>
                  </Col>
                </Row>
                <hr></hr>
                <Row>
                  <Col>
                    <h6>Discount</h6>
                  </Col>
                  <Col className={`${styles["summary-align-right"]}`}>
                    <h5 className={`${styles["order-summary-bold"]}`}>0</h5>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h6>Shipping Fee</h6>
                  </Col>
                  <Col className={`${styles["summary-align-right"]}`}>
                    <h5 className={`${styles["order-summary-bold"]}`}>0</h5>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h6>Total</h6>
                  </Col>
                  <Col cclassName={`${styles["summary-align-right"]}`}>
                    <h5 className={`${styles["order-summary-bold"]}`}>
                      {listOrder.reduce((x, y) => x + y.price, 0)} vnd
                    </h5>
                  </Col>
                </Row>
                <Row className="flex-grow-1">
                  <Col className="text-center align-self-end">
                    <Button
                      className={`${styles["cart-confirm-button"]} mb-4`}
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
  );
}
