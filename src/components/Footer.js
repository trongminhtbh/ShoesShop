import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles/footer-style.module.css";
import {
  Facebook,
  Instagram,
  LocationOn,
  Email,
  Phone,
  Copyright,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import shoeicon from "../assets/img/logo1.png";

function Footer() {
  return (
    <div className={styles["footer"]}>
      <Container fluid>
        <Row>
          <Col md={1}></Col>
          <Col md={3} className="text-center">
            <div className={`${styles["shop"]}`}>
              <div className={styles["shop-inline"]}>
                <img src={shoeicon} alt="Shoe icon" width="70px" />
              </div>
              <div className={styles["shop-inline"]}>
                <h2>AMAZING SHOES</h2>
              </div>
            </div>
            <div className={styles["social-network"]}>
              <div className={styles["shop-inline"]}>
                <h4>Find us on</h4>
              </div>
              <div className={styles["shop-inline"]}>
                {" "}
                <Facebook />
                <Instagram />
              </div>
            </div>
          </Col>
          <Col md={1}></Col>
          <Col md={3}>
            <h4 className="text-center">CONTACT</h4>
            <table className="justify-content-center m-0">
              <tbody>
                <tr>
                  <td>
                    <LocationOn />
                  </td>
                  <td>
                    <div className="ps-3">
                      268 Ly Thuong Kiet, Ward 15, District 10, Ho Chi Minh City
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Email />
                  </td>
                  <td>
                    <div className="ps-3">amazingshoes@gmailcom</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Phone />
                  </td>
                  <td>
                    <div className="ps-3">1900545454</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
          <Col md={1}></Col>
          <Col md={3}>
            <h4>SERVICE INFO</h4>
            <div className={styles["footer-link-page"]}>
              <Link to="/introduction">Introduce</Link>
            </div>
            <div className={styles["footer-link-page"]}>
              <Link to="/policy">Policy</Link>
            </div>
            <div className={styles["footer-link-page"]}>
              <Link to="/">Contact</Link>
            </div>
            <div className={styles["footer-link-page"]}>
              <Link to="/faq">FAQ</Link>
            </div>
            <div className={styles["footer-link-page"]}>
              <Link to="/info-security">Information Security</Link>
            </div>
          </Col>
        </Row>
        <Row>
          <div className={styles["cp-right"]}>
            <Copyright />
            2021
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
