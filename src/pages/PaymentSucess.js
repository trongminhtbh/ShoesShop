import React from "react";
import success from "../assets/img/success.png";
import { NavLink } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles/footer-style.module.css";

export default function PaymentSuccess() {
  return (
    <div className={`${styles["page-content"]}`}>
      <Container fluid style={{height:"100%"}}>
        <Row style={{height:"100%"}}>
          <Col xs={4}></Col>
          <Col xs={4} className={`align-self-center text-center`}>
            <img src={success} alt="Success icon" width="100px" />
            <h5>Successful payment for the order</h5>
            <NavLink to="/home" className="btn btn-primary">
              Go to Homepage
            </NavLink>
          </Col>
          <Col xs={4}></Col>
        </Row>
      </Container>
    </div>
  );
}
