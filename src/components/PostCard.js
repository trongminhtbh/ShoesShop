import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import shoeicon from "../assets/img/Untitled1.png";
import styles from "../styles/footer-style.module.css";

function PostCard(props) {
  return (
    <div className={styles["post-card"]}>
      <Card className={styles["round-border-post"]}>
        <Card.Img
          variant="top"
          src={shoeicon}
          className="justify-content-md-center"
          style={{ borderTopLeftRadius: "30px", borderTopRightRadius: "30px" }}
        />
        <Card.Body>
          <div className={styles["post-content"]}>
            <Card.Title style={{ fontFamily: "'Fredoka One', cursive" }}>
              {props.title}
            </Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              {props.children}
            </Card.Text>
          </div>
          <Button className={styles["detail-btn"]}>Detail</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PostCard;
