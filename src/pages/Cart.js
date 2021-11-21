import React, { useEffect, useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import styles from "../styles/footer-style.module.css";
import "bootstrap/dist/css/bootstrap.css";
import momoicon from "../assets/img/MoMo.png";
import CartItem from "../components/CartItem";
import { Redirect } from "react-router-dom";
import { useStore } from "../store";

export default function Cart() {
  const [state, dispath] = useStore();
  const [shipFee, setShipFee] = useState(0);
  const [address, setAddress] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [momo, setMomo] = useState("false");

  function handleMomo(event) {
    setMomo(event.target.value);
  }
  useEffect(() => {
    if (state.login._id) {
      fetch(
        "https://pacific-ridge-30189.herokuapp.com/customer?id=" +
          String(state.login._id)
      )
        .then((response) => response.json())
        .then((data) => {
          setAddress(data.delivery_info);
        });
    }
  });
  let path = address
    ? '[{"address":"66 Trần Não, Quận 2, TP. Hồ Chí Minh"}, {"address":"' +
      address +
      '"}]'
    : "";
  path = encodeURI(path);
  useEffect(() => {
    if (state.login._id) {
      fetch(
        "https://apistg.ahamove.com/v1/order/estimated_fee?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhaGEiLCJ0eXAiOiJ1c2VyIiwiY2lkIjoiODQ5MDg4NDIyODAiLCJzdGF0dXMiOiJPTkxJTkUiLCJlb2MiOiJ0ZXN0QGdtYWlsLmNvbSIsIm5vYyI6IkRyaW5raWVzIFRlc3QgQWNjb3VudCIsImN0eSI6IlNHTiIsImFjY291bnRfc3RhdHVzIjoiQUNUSVZBVEVEIiwiZXhwIjoxNjM3MDYwNjIwLCJwYXJ0bmVyIjoidGVzdF9rZXkiLCJ0eXBlIjoiYXBpIn0.0JcO9Pjag39247XB2hAjxivKyOjt2HeVQZgvwyh5tQ4&service_id=SGN-BIKE&requests=[]&order_time=0&path=" +
          path
      )
        .then((response) => response.json())
        .then((data) => {
          setShipFee(data.total_price);
        });
    }
  });

  useEffect(() => {
    setTotalPrice(state.orders.reduce((x, y) => x + y.price, shipFee));
  }, [state.orders, shipFee]);

  function Notice () {
    alert("Please login to order shoe");
  }

  function OrderSuccess() {
    const bodyRequest = JSON.stringify({
      state: "waiting",
      user_id: state.login._id,
      detail: "Chi tiet don hang",
      items: state.orders,
      total: totalPrice,
      order_date: new Date().toLocaleDateString(),
    });
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: bodyRequest,
    };
    console.log(bodyRequest);
    fetch("https://pacific-ridge-30189.herokuapp.com/order", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location = "http://localhost:3000/order-success";
      });
  }

  function Payment() {
    let requestId = 0;
    const bodyRequest = JSON.stringify({
      state: "waiting",
      user_id: state.login._id,
      detail: "Chi tiet don hang",
      items: state.orders,
      total: totalPrice,
      order_date: new Date().toLocaleDateString(),
    });
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: bodyRequest,
    };

    fetch("https://pacific-ridge-30189.herokuapp.com/order", requestOptions)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data["_id"]);
        requestId = data["_id"];
        fetch(
          "https://quiet-retreat-13947.herokuapp.com/momo?requestId=" +
            requestId +
            "&totalPrice=" +
            String(totalPrice)
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.includes("http")) window.location = data;
          });
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
                  <h5 className={`${styles["order-summary-bold"]}`}>
                    {shipFee} vnd
                  </h5>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h6>Payment Method</h6>
                </Col>
                <Col style={{ textAlign: "right" }}>
                  <select
                    value={momo}
                    onChange={handleMomo}
                    style={{ backgroundColor: "#C4C4C4" }}
                    className={styles["payment-method"]}
                  >
                    <option value="true" className={styles["payment-method"]}>
                      Momo
                    </option>
                    <option value="false" className={styles["payment-method"]}>
                      Cash
                    </option>
                  </select>
                </Col>
              </Row>
              <hr></hr>
              <Row>
                <Col>
                  <h6>Total price</h6>
                </Col>
                <Col className={`${styles["summary-align-right"]}`}>
                  <h5 className={`${styles["order-summary-bold"]}`}>
                    {isNaN(totalPrice) ? 0 : totalPrice} vnd
                  </h5>
                </Col>
              </Row>
              <Row className="flex-grow-1">
                <Col className="text-center align-self-end">
                  <Button
                    className={`${styles["cart-confirm-button"]} mb-4`}
                    onClick={state.login._id ? (momo === "true" ? Payment : OrderSuccess) : Notice}
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
