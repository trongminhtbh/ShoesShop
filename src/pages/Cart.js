import React, { useEffect, useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "../styles/footer-style.css";
import "bootstrap/dist/css/bootstrap.css";
import { algo, enc } from "crypto-js";
import CartItem from "../components/CartItem";

export default function Cart({ listOrder }) {
  let total = 50000;
  const [momo, setMomo] = useState("No request");
  function Payment() {
    let partnerCode = "MOMO";
    let accessKey = "F8BBA842ECF85";
    let secretkey = "K951B6PE1waDMi640xX08PD3vg6EkVlz";
    let requestId = partnerCode + new Date().getTime();
    let orderId = requestId;
    let orderInfo = "pay with MoMo";
    let redirectUrl = "https://momo.vn";
    let ipnUrl = "https://momo.vn";
    // let ipnUrl = redirectUrl = "https://webhook.site/454e7b77-f177-4ece-8236-ddf1c26ba7f8";
    let amount = "50000";
    let requestType = "captureWallet";
    let extraData = "email=nghia.tran.179@hcmut.edu.vn"; //pass empty value if your merchant does not have stores

    //before sign HMAC SHA256 with format
    //accessKey=$accessKey&amount=$amount&extraData=$extraData&ipnUrl=$ipnUrl&orderId=$orderId&orderInfo=$orderInfo&partnerCode=$partnerCode&redirectUrl=$redirectUrl&requestId=$requestId&requestType=$requestType
    let rawSignature =
      "accessKey=" +
      accessKey +
      "&amount=" +
      amount +
      "&extraData=" +
      extraData +
      "&ipnUrl=" +
      ipnUrl +
      "&orderId=" +
      orderId +
      "&orderInfo=" +
      orderInfo +
      "&partnerCode=" +
      partnerCode +
      "&redirectUrl=" +
      redirectUrl +
      "&requestId=" +
      requestId +
      "&requestType=" +
      requestType;
    //puts raw signature
    console.log("--------------------RAW SIGNATURE----------------");
    console.log(rawSignature);
    let signature = algo.HMAC.create(algo.SHA256, secretkey)
      .update(rawSignature)
      .finalize()
      .toString(enc.Hex);
    console.log("--------------------SIGNATURE----------------");
    console.log(signature);
    const requestBody = JSON.stringify({
      partnerCode: partnerCode,
      accessKey: accessKey,
      requestId: requestId,
      amount: amount,
      orderId: orderId,
      orderInfo: orderInfo,
      redirectUrl: redirectUrl,
      ipnUrl: ipnUrl,
      extraData: extraData,
      requestType: requestType,
      signature: signature,
      lang: "en",
    });
    console.log(requestBody);
    console.log(Buffer.byteLength(requestBody));
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        "Content-Length": Buffer.byteLength(requestBody)
      },
      body: requestBody
    };
    //
    // fetch("https://test-payment.momo.vn/v2/gateway/api/create", requestOptions)
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    postData("https://test-payment.momo.vn/v2/gateway/api/create", requestOptions);
  }

  async function postData(url = " ", requestOptions) {
    const res = await fetch(url, requestOptions);
    return res.json();
  }

  return (
    <div>
      <div className="header-and-content">
        <div className="cart-content-div">
          <Container className="cart-container h-100 pt-3 pb-3">
            <Row className="h-100">
              <Col
                md={9}
                style={{ backgroundColor: "white" }}
                className="ps-5 pe-3 cart-left-side flex-column d-flex h-100"
              >
                <h3 className="shopping-cart mt-3">Shopping Cart </h3>
                <hr></hr>
                <div className="list-item-cart flex-grow-1">
                  {listOrder.map((orderItem) => {
                    return <CartItem cartItem={orderItem} />;
                  })}
                </div>
              </Col>
              <Col
                md={3}
                style={{ backgroundColor: "#C4C4C4" }}
                className="cart-right-side flex-column d-flex h-100"
              >
                <h3 className="order-summary mt-3 mb-5 text-center">
                  Order Summary
                </h3>
                <Row>
                  <Col>
                    <h5 className="order-summary-bold">
                      {listOrder.length} items
                    </h5>
                  </Col>
                  <Col className="summary-align-right">
                    <h5 className="order-summary-bold">
                      {" "}
                      {listOrder.reduce((x, y) => x + y.price, 0)}
                    </h5>
                  </Col>
                </Row>
                <hr></hr>
                <Row>
                  <Col>
                    <h6>Discount Code</h6>
                  </Col>
                  <Col className="summary-align-right">
                    <h5 className="order-summary-bold">No Discount</h5>
                  </Col>
                </Row>
                <hr></hr>
                <Row>
                  <Col>
                    <h6>Discount</h6>
                  </Col>
                  <Col className="summary-align-right">
                    <h5 className="order-summary-bold">0</h5>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h6>Total</h6>
                  </Col>
                  <Col className="summary-align-right">
                    <h5 className="order-summary-bold">
                      {listOrder.reduce((x, y) => x + y.price, 0)} vnd
                    </h5>
                  </Col>
                </Row>
                <Row className="flex-grow-1">
                  <Col className="text-center align-self-end">
                    <Button
                      className="cart-confirm-button mb-4"
                      onClick={Payment}
                    >
                      Confirm
                    </Button>
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
