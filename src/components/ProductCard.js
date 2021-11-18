import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { AddCircle, StarHalf, Star } from "@material-ui/icons";
import styles from "../styles/footer-style.module.css";
import "bootstrap/dist/css/bootstrap.css";
import shoe from "../assets/img/shoe.png";
import { useStore, addItemToCart } from "../store";
import { NavLink } from "react-router-dom";

function ProductCard( props) {
  const {shoesItem} = props

  const [state, dispatch] = useStore()
  const handleAdd = () => {
    dispatch(addItemToCart(shoesItem))
  }
  return (
    <Card className={styles["round-border"]}>
      <Row>
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
            <Card.Img src={shoe} />
          </div>
        </Col>
        <Col md={7} className="p-0">
          <Card.Body className={styles["nopaddingleft"]}>
            <Card.Title className={styles["shoe-title"]}>
              {shoesItem.name}
            </Card.Title>
            <Card.Title className={styles["shoe-title"]}>
              <Star style={{ fill: "#FDC733" }}></Star>
              <Star style={{ fill: "#FDC733" }}></Star>
              <Star style={{ fill: "#FDC733" }}></Star>
              <Star style={{ fill: "#FDC733" }}></Star>
              <StarHalf style={{ fill: "#FDC733" }}></StarHalf>
            </Card.Title>
            <Card.Title className={styles["shoe-price"]}>
              {shoesItem.price}
            </Card.Title>
            <Card.Text style={{ textAlign: "left", marginBottom: "10px" }}>
              {shoesItem.desc}
            </Card.Text>
            <div
              className={styles["add-btn"]}
            >
              <NavLink to="/cart" onClick={handleAdd}>
                Add to card <AddCircle style={{ fill: "#FB4B29" }}></AddCircle>
              </NavLink>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default ProductCard;
