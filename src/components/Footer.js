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
import shoeicon from "../assets/img/logo1.png";

function Footer() {
  return (
    <div className={styles["footer"]}>
      <Container>
        <Row style={{textAlign:"center"}}>
          <Col>
            <div className={styles["shop"]}>
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
          <Col>
            <h4>CONTACT</h4>
            <table>
              <tbody>
                <tr>
                  <td>
                    <LocationOn />
                  </td>
                  <td>
                    <div>
                      268 Ly Thuong Kiet, Ward 15, District 10 <br/>Ho Chi Minh City
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Email />
                  </td>
                  <td>
                    <div>amazingshoes@gmailcom</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Phone />
                  </td>
                  <td>
                    <div>1900545454</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
          <Col>
            <h4>SERVICE INFO</h4>
            <div>Introduce</div>
            <div>Policy</div>
            <div>Contact</div>
            <div>FAQ</div>
            <div>Information Security</div>
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
