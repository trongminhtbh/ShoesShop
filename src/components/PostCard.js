import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import shoeicon from "../assets/img/Untitled1.png";

function PostCard() {
  return (
    <div className="post-card">
      <Card className="round-border">
        <Card.Img
          variant="top"
          src={shoeicon}
          className="justify-content-md-center"
          style={{ borderTopLeftRadius: "30px", borderTopRightRadius: "30px" }}
        />
        <Card.Body>
          <Card.Title style={{ fontFamily:"'Fredoka One', cursive" }}>How to clean white shoes</Card.Title>
          <Card.Text style={{ textAlign:"justify" }}>
            No one buys white sneakers thinking they&apos;ll stay bright and
            grime-free forever, but when the inevitable spills, stains, and
            scuffs happen, it&apos;s only natural to hope you can restore them to
            their pristine state.
          </Card.Text>
          <Button className="detail-btn">Detail</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PostCard;
