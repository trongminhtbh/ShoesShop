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
                  <p>
                    Established in 2010, starting from a small shop. After more
                    than ten years of operation, Shoes Shop has had a large
                    number of trusted customers and has become one of the famous
                    fashion shoe brands in the Ho Chi Minh City area and the
                    southern provinces. Over the years, with the trust of
                    customers, Shoes Shop has continuously won different titles
                    voted by consumers.
                  </p>
                </div>
              </Col>
              <Col md={6} className="flex-column d-flex h-100">
                <Row className={`${styles["about-us-title"]}`}>
                  <h3>Our Story</h3>
                </Row>
                <Row className="flex-grow-1">
                  <Col className="align-self-end">
                    <div className={`${styles["story-2"]} ms-auto`}>
                      <p>
                        Our customers are people who love to own the latest,
                        modern fashion shoes combined with sophistication and
                        elegance. With many years of experience in the
                        development process, we are constantly creating and
                        innovating models, always bringing to the market the
                        most diverse and fashionable shoe models combined with
                        sustainable materials suitable for many classes users,
                        suitable for many purposes. Fashion shoes Shoes Shop
                        proudly beautifies Vietnamese women, helping customers
                        affirm their personal style. In addition, when customers
                        come to Shoes Shop fashion leather shoes, they also get
                        the best after-sales service with a long-term warranty.
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
