import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles/footer-style.module.css";
import { AddCircle, RemoveCircle } from "@material-ui/icons";
import shoeicon from "../assets/img/black.png";

export default function CartItem({cartItem}) {
  const [num, setNum] = useState(1);

  const incQuantity = () => {
    setNum(num + 1);
  };

  const decQuantity = () => {
    if (num > 0) setNum(num - 1);
  };

  return (
    <div>
      <Row>
        <Col md={3}>
          <img src={shoeicon} alt="icon" style={{ width: "150px" }} />
        </Col>
        <Col md={3} className="align-self-center">
          <Row>
            <Col>
              <h5 className={`${styles["custom-font-bold"]}`}>{cartItem.name}</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>{cartItem.desc}</p>
            </Col>
          </Row>
        </Col>
        <Col md={2} className="align-self-center">
          <h5 className={`${styles["custom-font-bold"]}`}>{cartItem.price}</h5>
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
          <h5 className={`${styles["custom-font-bold"]} ${styles["price-item"]}`}>{ num * cartItem.price}</h5>
        </Col>
      </Row>
    </div>
  );
}
