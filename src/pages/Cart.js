import React, { useEffect, useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import styles from "../styles/footer-style.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { algo, enc } from "crypto-js";
import CartItem from "../components/CartItem";
import { useStore } from "../store";

export default function Cart() {
  const [state, dispath] = useStore();
  const [shipFee, setShipFee] = useState(0);
  const [address, setAddress] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    fetch(
      "https://pacific-ridge-30189.herokuapp.com/customer?id=" +
        String(state.login._id)
    )
      .then((response) => response.json())
      .then((data) => {
        setAddress(data.delivery_info);
      });
  });
  let path = '[{"address":"66 Trần Não, Quận 2, TP. Hồ Chí Minh"}, {"address":"' + address + '"}]';
  path = encodeURI(path);
  console.log("https://apistg.ahamove.com/v1/order/estimated_fee?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhaGEiLCJ0eXAiOiJ1c2VyIiwiY2lkIjoiODQ5MDg4NDIyODAiLCJzdGF0dXMiOiJPTkxJTkUiLCJlb2MiOiJ0ZXN0QGdtYWlsLmNvbSIsIm5vYyI6IkRyaW5raWVzIFRlc3QgQWNjb3VudCIsImN0eSI6IlNHTiIsImFjY291bnRfc3RhdHVzIjoiQUNUSVZBVEVEIiwiZXhwIjoxNjM3MDYwNjIwLCJwYXJ0bmVyIjoidGVzdF9rZXkiLCJ0eXBlIjoiYXBpIn0.0JcO9Pjag39247XB2hAjxivKyOjt2HeVQZgvwyh5tQ4&service_id=SGN-BIKE&requests=[]&order_time=0&path=" + path);
  useEffect(() => {
    fetch(
      "https://apistg.ahamove.com/v1/order/estimated_fee?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhaGEiLCJ0eXAiOiJ1c2VyIiwiY2lkIjoiODQ5MDg4NDIyODAiLCJzdGF0dXMiOiJPTkxJTkUiLCJlb2MiOiJ0ZXN0QGdtYWlsLmNvbSIsIm5vYyI6IkRyaW5raWVzIFRlc3QgQWNjb3VudCIsImN0eSI6IlNHTiIsImFjY291bnRfc3RhdHVzIjoiQUNUSVZBVEVEIiwiZXhwIjoxNjM3MDYwNjIwLCJwYXJ0bmVyIjoidGVzdF9rZXkiLCJ0eXBlIjoiYXBpIn0.0JcO9Pjag39247XB2hAjxivKyOjt2HeVQZgvwyh5tQ4&service_id=SGN-BIKE&requests=[]&order_time=0&path=" + path
    )
      .then((response) => response.json())
      .then((data) => {
        setShipFee(data.total_price);
      });
  });

  useEffect(() => {
    setTotalPrice(state.orders.reduce((x, y) => x + y.price, shipFee));
  }, [state.orders, shipFee]);

  function Payment() {
    let requestId = "MOMO" + new Date().getTime();
    const requestOptions = {
      method: "GET",
    };
    fetch("http://localhost:3003/momo?requestId=" + requestId + "&totalPrice=" + String(totalPrice), requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location = data;
      });
  }
  console.log(state.orders);
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
              <h3 className={`${styles["shopping-cart"]} mt-3`}>
                Shopping Cart{" "}
              </h3>
              <hr></hr>
              {state.orders.length === 0 ? (
                <div className="mt-2 h100">
                  {" "}
                  <h3>Empty Cart!</h3>
                </div>
              ) : (
                <div className={`${styles["list-item-cart"]} flex-grow-1`}>
                  {state.orders
                    .reduce((listOrders, item) => {
                      if (listOrders.indexOf(item) === -1) {
                        listOrders.push(item);
                      }
                      return listOrders;
                    }, [])
                    .map((orderItem) => {
                      return (
                        <CartItem key={orderItem._id} cartItem={orderItem} />
                      );
                    })}
                </div>
              )}
            </Col>
            <Col
              md={3}
              style={{ backgroundColor: "#C4C4C4" }}
              className={`${styles["cart-right-side"]} flex-column d-flex h-100`}
            >
              <h3
                className={`${styles["order-summary"]} mt-3 mb-5 text-center`}
              >
                Order Summary
              </h3>
              <Row>
                <Col>
                  <h5 className={`${styles["order-summary-bold"]}`}>
                    {state.orders.length} items
                  </h5>
                </Col>
                <Col className={`${styles["summary-align-right"]}`}>
                  <h5 className={`${styles["order-summary-bold"]}`}>
                    {" "}
                    {state.orders.reduce((x, y) => x + y.price, 0)}
                  </h5>
                </Col>
              </Row>
              <hr></hr>
              <Row>
                <Col>
                  <h6>Discount Code</h6>
                </Col>
                <Col className={`${styles["summary-align-right"]}`}>
                  <h5 className={`${styles["order-summary-bold"]}`}>
                    No Discount
                  </h5>
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
                  <h5 className={`${styles["order-summary-bold"]}`}>{shipFee} vnd</h5>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h6>Total</h6>
                </Col>
                <Col className={`${styles["summary-align-right"]}`}>
                  <h5 className={`${styles["order-summary-bold"]}`}>
                    {totalPrice} vnd
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
