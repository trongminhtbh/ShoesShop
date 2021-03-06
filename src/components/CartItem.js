import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles/footer-style.module.css";
import { AddCircle, RemoveCircle } from "@material-ui/icons";
import { useStore } from "../store";
import { addItemToCart, removeItemCart } from "../store";

export default function CartItem({ cartItem }) {
  const [state, dispatch] = useStore();

  const handleAdd = () => {
    dispatch(addItemToCart(cartItem));
  };
  const handleRemove = () => {
    dispatch(removeItemCart(cartItem));
  };

  const num = state.orders.reduce((listOrders, item) => {
    if (item === cartItem) {
      listOrders.push(item);
    }
    return listOrders;
  }, []).length;

  const incQuantity = () => {
    if (num + 1 > cartItem.quantity) alert("Exceeded the number of products available. Can't order more");
    else handleAdd();
  };

  const decQuantity = () => {
    handleRemove();
  };

  return (
    <div>
      <Row>
        <Col md={3}>
          <img src={"http://localhost:3000/product-img/" + cartItem.link} alt="icon" style={{ width: "150px" }} />
        </Col>
        <Col md={3} className="align-self-center">
          <Row>
            <Col>
              <h5 className={`${styles["custom-font-bold"]}`}>
                {cartItem.name}
              </h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Size: {cartItem.size}, Color: {cartItem.color}
              </p>
            </Col>
          </Row>
        </Col>
        <Col md={2} className="align-self-center">
          <h5 className={`${styles["custom-font-bold"]}`}>
            {cartItem.discount_price > 0
              ? cartItem.discount_price
              : cartItem.origin_price}
          </h5>
        </Col>
        <Col md={2} className="align-self-center">
          <Button
            onClick={decQuantity}
            className="p-0 btn-light d-inline-block"
          >
            <RemoveCircle />
          </Button>
          <div className="d-inline-block w-50 text-center">
            <h5 className={`${styles["custom-font-bold"]}`}>{num}</h5>
          </div>
          <Button
            onClick={incQuantity}
            className="p-0 btn-light d-inline-block"
          >
            <AddCircle />
          </Button>
        </Col>
        <Col md={2} className="align-self-center">
          <h5
            className={`${styles["custom-font-bold"]} ${styles["price-item"]}`}
          >
            {cartItem.discount_price > 0
              ? cartItem.discount_price * num
              : cartItem.origin_price * num}
          </h5>
        </Col>
      </Row>
    </div>
  );
}
