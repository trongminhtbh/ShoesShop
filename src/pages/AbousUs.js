import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../styles/footer-style.css";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import avatar from "../assets/img/avt.jpg";

export default function AboutUs() {
  return (
    <div>
      <div className="header-and-content">
        <Header></Header>
        <div className="our-customer pt-3 pb-3">
          <div className="our-customer-content h-100">
            <Container className="h-100">
              <Row className="h-100">
                <Col md={6}>
                  <div className="story-1">
                    <img src={avatar} alt="avatar" className="avt-about" />
                    <h6>Power user</h6>
                    <p>
                      "El usuario que no necesita medicina habitualmente (sólo
                      para pequeñas enfermedades) pero conoce gente que sí,
                      aunque principalmente soporta el proyecto por la idea y la
                      misión. Tiene un estilo de vida saludable, alimentación".
                    </p>
                  </div>
                </Col>
                <Col md={6} className="flex-column d-flex h-100">
                  <Row className="about-us-title">
                    <h3>Our Customer</h3>
                  </Row>
                  <Row className="flex-grow-1">
                    <Col className="align-self-end">
                      <div className="story-2 ms-auto">
                        <img src={avatar} alt="avatar" className="avt-about" />
                        <h6>Power user</h6>
                        <p>
                          "El usuario que no necesita medicina habitualmente
                          (sólo para pequeñas enfermedades) pero conoce gente
                          que sí, aunque principalmente soporta el proyecto por
                          la idea y la misión. Tiene un estilo de vida
                          saludable, alimentación".
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
      <Footer></Footer>
    </div>
  );
}
