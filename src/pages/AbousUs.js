import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import styles from "../styles/footer-style.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import avatar from "../assets/img/avt.jpg";
import avatar1 from "../assets/img/147144.png";

export default function AboutUs() {
  return (
    <div className={styles["page-content"]}>
      <div className={`${styles["our-customer"]} pt-3 pb-3`}>
        <div className={`${styles["our-customer-content"]} h-100`}>
          <Container className="h-100">
            <Row className="h-100">
              <Col md={6}>
                <div className={`${styles["story-1"]}`}>
                  <img
                    src={avatar}
                    alt="avatar"
                    className={`${styles["avt-about"]}`}
                  />
                  <h6>Nguyen Manh Linh</h6>
                  <p>
                    "A fantastic organisation! Great cutomer support from
                    beginning to end of the process. The team are really
                    informed and go the extra mile at every stage. I would
                    recommend them unreservedly. Information was accurate,
                    responses to queries were turned around very fast."
                  </p>
                </div>
              </Col>
              <Col md={6} className="flex-column d-flex h-100">
                <Row className={`${styles["about-us-title"]}`}>
                  <h3>Our Customer</h3>
                </Row>
                <Row className="flex-grow-1">
                  <Col className="align-self-end">
                    <div className={`${styles["story-2"]} ms-auto`}>
                      <img
                        src={avatar1}
                        alt="avatar"
                        className={styles["avt-about"]}
                      />
                      <h6>Le Hoai Nam</h6>
                      <p>
                        "Great service, efficient communication and a really
                        easy way to get a mortgage with lots of help and support
                        to get the right deal. My supporter was helpful. Answers
                        were clear and where necessary detailed enough for us to
                        make informed decisions quickly."
                      </p>
                    </div>
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
