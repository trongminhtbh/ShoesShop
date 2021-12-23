import React, { useState } from "react";
import { Card, Row, Col, Modal, Button } from "react-bootstrap";
import { AddCircle, StarBorder, Star } from "@material-ui/icons";
import styles from "../styles/footer-style.module.css";
import "bootstrap/dist/css/bootstrap.css";
import ProductDetail from "../pages/ProductDetail";
import { useStore, addItemToCart } from "../store";
import { NavLink } from "react-router-dom";

function ProductCard(props) {
  const { shoesItem } = props;

  const [state, dispatch] = useStore();
  const [show, setShow] = useState(false);
  const [showDetail, setShowDetail] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAdd = () => {
    dispatch(addItemToCart(shoesItem));
  };
  return (
    <Card className={`${styles["round-border"]}`}>
      <Row className="h-100">
        <Col md={5}>
          <div
            style={{
              backgroundColor: "#D081A4",
              borderTopLeftRadius: "30px",
              borderBottomLeftRadius: "30px",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card.Img src={shoesItem.link} />
          </div>
        </Col>
        <Col md={7} className="p-0">
          <Card.Body className={styles["nopaddingleft"]}>
            <Card.Title className={styles["shoe-title"]}>
              {shoesItem.name}
            </Card.Title>

            {(Math.round(shoesItem.rating.value) === 1 && (
              <Card.Title className={styles["shoe-title"]}>
                <Star style={{ fill: "#FDC733" }}></Star>
                <StarBorder></StarBorder>
                <StarBorder></StarBorder>
                <StarBorder></StarBorder>
                <StarBorder></StarBorder>
              </Card.Title>
            )) ||
              (Math.round(shoesItem.rating.value) === 2 && (
                <Card.Title className={styles["shoe-title"]}>
                  <Star style={{ fill: "#FDC733" }}></Star>
                  <Star style={{ fill: "#FDC733" }}></Star>
                  <StarBorder></StarBorder>
                  <StarBorder></StarBorder>
                  <StarBorder></StarBorder>
                </Card.Title>
              )) ||
              (Math.round(shoesItem.rating.value) === 3 && (
                <Card.Title className={styles["shoe-title"]}>
                  <Star style={{ fill: "#FDC733" }}></Star>
                  <Star style={{ fill: "#FDC733" }}></Star>
                  <Star style={{ fill: "#FDC733" }}></Star>
                  <StarBorder></StarBorder>
                  <StarBorder></StarBorder>
                </Card.Title>
              )) ||
              (Math.round(shoesItem.rating.value) === 4 && (
                <Card.Title className={styles["shoe-title"]}>
                  <Star style={{ fill: "#FDC733" }}></Star>
                  <Star style={{ fill: "#FDC733" }}></Star>
                  <Star style={{ fill: "#FDC733" }}></Star>
                  <Star style={{ fill: "#FDC733" }}></Star>
                  <StarBorder></StarBorder>
                </Card.Title>
              )) ||
              (Math.round(shoesItem.rating.value) === 5 && (
                <Card.Title className={styles["shoe-title"]}>
                  <Star style={{ fill: "#FDC733" }}></Star>
                  <Star style={{ fill: "#FDC733" }}></Star>
                  <Star style={{ fill: "#FDC733" }}></Star>
                  <Star style={{ fill: "#FDC733" }}></Star>
                  <Star style={{ fill: "#FDC733" }}></Star>
                </Card.Title>
              ))}
            {shoesItem.discount_price > 0 ? (
              <Card.Title className={styles["shoe-price"]}>
                <s>{shoesItem.origin_price}</s> &ensp;
                {shoesItem.discount_price}
              </Card.Title>
            ) : (
              <Card.Title className={styles["shoe-price"]}>
                {shoesItem.origin_price}
              </Card.Title>
            )}
            <Card.Text style={{ textAlign: "left", marginBottom: "10px" }}>
              {shoesItem.desc}
            </Card.Text>
            <div className={styles["add-btn"]}>
              <Button
                onClick={handleShow}
                className={styles["home-add-button"]}
              >
                Add to card <AddCircle style={{ fill: "#FB4B29" }}></AddCircle>
              </Button>
            </div>
          </Card.Body>
          <Modal dialogClassName="modal-90w" show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              {showDetail && <ProductDetail shoesItem={shoesItem} />}
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </Card>
  );
}

export default ProductCard;
