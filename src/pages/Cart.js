import React, { useEffect, useState } from "react";
import { Container, Col, Row, Button, Modal, ProgressBar } from "react-bootstrap";
import styles from "../styles/footer-style.module.css";
import "bootstrap/dist/css/bootstrap.css";
import CartItem from "../components/CartItem";
import { useStore } from "../store";

export default function Cart() {
  const [state, dispath] = useStore();
  const [shipFee, setShipFee] = useState(0);
  const [discount, setDiscount] = useState("Select");
  const [discountPrice, setDiscountPrice] = useState(0);
  const [discountList, setDiscountList] = useState([]);
  const [address, setAddress] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [momo, setMomo] = useState("false");
  const [modal, setModal] = useState(false);

  const handleCloseModal = () => setModal(false);
  const handleShowModal = () => setModal(true);

  function handleMomo(event) {
    setMomo(event.target.value);
  }

  function handleSubmitAddress(event) {
    event.preventDefault();
    setAddress(event.target.receiveAddr.value);
  }

  function handleDiscount(event) {
    setDiscount(event.target.value);
  }

  useEffect(() => {
    fetch("https://pacific-ridge-30189.herokuapp.com/discount/list")
      .then((response) => response.json())
      .then((data) => {
        data.map((item) => {
          let startDateParts = item.start_time.split("/");
          let startDateObject = new Date(
            +startDateParts[2],
            startDateParts[1] - 1,
            +startDateParts[0]
          );
          let endDateParts = item.end_time.split("/");
          let endDateObject = new Date(
            +endDateParts[2],
            endDateParts[1] - 1,
            +endDateParts[0]
          );          
          if (startDateObject <= Date.now() && endDateObject >= Date.now() && item.quantity > 0) {         
            setDiscountList(discountList => [
              ...discountList,
              { code: item.code, discountValue: item.discount_value },
            ]);            
            return true;
          } else return false;
        });
      });
  }, [state.login._id]);

  useEffect(() => {
    if (state.login._id) {
      fetch(
        "https://pacific-ridge-30189.herokuapp.com/customer?id=" +
          String(state.login._id)
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.delivery_info !== undefined) setAddress(data.delivery_info);
        });
    }
  }, [state.login._id]);

  useEffect(() => {
    if (state.login._id && address.length !== 0) {
      fetch(
        "https://apistg.ahamove.com/v1/order/estimated_fee?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhaGEiLCJ0eXAiOiJ1c2VyIiwiY2lkIjoiODQ4Mzk5MDgyMDYiLCJzdGF0dXMiOiJPTkxJTkUiLCJlb2MiOm51bGwsIm5vYyI6IkFoYW1vdmUgVGVzdCBDcmVhdGUgVXNlciIsImFjY291bnRfc3RhdHVzIjoiQUNUSVZBVEVEIiwiZXhwIjoxNjM4MDg5MDg1LCJwYXJ0bmVyIjoidGVzdF9rZXkiLCJ0eXBlIjoiYXBpIn0.t5rTtTpvGlPlje6gaveSr3STnaamjtTWbFEqf7KN4_4&service_id=SGN-BIKE&requests=[]&order_time=0&path=" +
          encodeURI(
            '[{"address":"268 Lý Thường Kiệt, Phường 14, Quận 10, TP. Hồ Chí Minh"}, {"address":"' +
              address +
              '"}]'
          )
      )
        .then((response) => response.json())
        .then((data) => {
          data.http_code !== undefined ? alert("Invalid address. Please re-enter your shipping address") : setShipFee(data.total_price);
        });
    }
  }, [address, state.login._id]);

  useEffect(() => {
    let listItemNoDiscountPrice = state.orders.filter((item) => item.discount_price === undefined);
    let listItemHaveDiscountPrice = state.orders.filter((item) => item.discount_price > 0);
    let totalItemNoDiscounrPrice = listItemNoDiscountPrice.reduce((x, y) => x + y.origin_price,
    0);
    let totalItemHaveDiscounrPrice = listItemHaveDiscountPrice.reduce((x, y) => x + y.discount_price,
    0);
    // let priceBeforeDiscount = state.orders.reduce(
    //   (x, y) => x + y.price,
    //   shipFee
    // );
    let discountObject = discountList.filter((item) => item.code === discount);
    let discountPriceTotal =
      discountObject.length !== 0
        ? discountObject[0].discountValue / 100 * (totalItemNoDiscounrPrice + totalItemHaveDiscounrPrice) 
        : 0;
    setDiscountPrice(discountPriceTotal);
    setTotalPrice(totalItemNoDiscounrPrice + totalItemHaveDiscounrPrice + shipFee - discountPriceTotal);
  }, [state.orders, shipFee, discount]);

  function Notice() {
    alert("Please login to order shoe");
  }

  function OrderSuccess() {
    if (shipFee === 0) alert("Please update delivery infomation in account");
    else {
      handleShowModal();
      let itemList = state.orders.map((item) => {
        if (item.discount_price > 0)
          return {
            _id: item._id,
            name: item.name,
            price: item.discount_price,
            link: item.link,
          };
        else
          return {
            _id: item._id,
            name: item.name,
            price: item.origin_price,
            link: item.link,
          };
      });
      const bodyRequest = JSON.stringify({
        state: "Waiting",
        discount_code: discount !== "Select" && discount !== "Empty" ? discount : "", 
        user_id: state.login._id,
        payment_method: "Cash",
        detail: "Chi tiet don hang",
        items: itemList,
        total: totalPrice,
        order_date: new Date().toLocaleDateString(),
      });
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: bodyRequest,
      };
      console.log(bodyRequest);
      fetch("https://pacific-ridge-30189.herokuapp.com/order", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          window.location = "http://localhost:3000/order-success/" + data._id;
        });
    }
  }

  function Payment() {
    if (shipFee === 0) alert("Please update delivery infomation in account");
    else {
      handleShowModal();
      let requestId = 0;
      let itemList = state.orders.map((item) => {
        if (item.discount_price > 0)
          return {
            _id: item._id,
            name: item.name,
            price: item.discount_price,
            link: item.link,
          };
        else
          return {
            _id: item._id,
            name: item.name,
            price: item.origin_price,
            link: item.link,
          };
      });
      const bodyRequest = JSON.stringify({
        state: "Pending",
        discount_code: discount !== "Select" && discount !== "Empty" ? discount : "", 
        user_id: state.login._id,
        payment_method: "Momo",
        detail: "Chi tiet don hang",
        items: itemList,
        total: totalPrice,
        order_date: new Date().toLocaleDateString(),
      });
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: bodyRequest,
      };

      fetch("https://pacific-ridge-30189.herokuapp.com/order", requestOptions)
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          console.log(data["_id"]);
          requestId = data["_id"];
          fetch(
            "https://quiet-retreat-13947.herokuapp.com/momo?requestId=" +
              requestId +
              "&totalPrice=" +
              String(totalPrice)
          )
            .then((response) => response.json())
            .then((data) => {
              if (data.includes("http")) window.location = data;
            });
        });
    }
  }
  return (
    <div className={styles["page-content"]}>
      <Modal show={modal} onHide={handleCloseModal}>
        <Modal.Header>
          <Modal.Title>Waiting for order...</Modal.Title>
        </Modal.Header>
        <Modal.Body><ProgressBar animated now={100} /></Modal.Body>
      </Modal>
      <div className={styles["cart-content-div"]}>
        <Container className={`${styles["cart-container"]} h-100 pt-3 pb-3`}>
          <Row className="h-100">
            <Col
              md={9}
              style={{ backgroundColor: "white" }}
              className={`${styles["cart-left-side"]} ps-5 pe-3  flex-column d-flex h-100`}
            >
              <h3 className={`${styles["shopping-cart"]} mt-3`}>
                Shopping Cart{" "}
              </h3>
              <hr></hr>
              {state.orders.length === 0 ? (
                <div className="mt-2 h-100">
                  {" "}
                  <h3>Empty Cart!</h3>
                </div>
              ) : (
                <div className={`${styles["list-item-cart"]} flex-grow-1`}>
                  {state.orders
                    .reduce((listOrders, item) => {
                      if (listOrders.indexOf(item) === -1) {
                        listOrders.push(item);
                      }
                      return listOrders;
                    }, [])
                    .map((orderItem) => {
                      return (
                        <CartItem key={orderItem._id} cartItem={orderItem} />
                      );
                    })}
                </div>
              )}
              <hr></hr>
              <form onSubmit={handleSubmitAddress} className={`mb-3`}>
                <Row>
                  <Col md={3} className="align-self-center">
                    <h6 className="mb-0">Receiving address</h6>
                  </Col>
                  <Col md={7} className="align-self-center">
                    <input
                      type="text"
                      name="receiveAddr"
                      id="receiveAddr"
                      defaultValue={address}
                      size="50"
                    />
                  </Col>
                  <Col md={2}>
                    <Button
                      type="submit"
                      className={`${styles["cart-address-button"]}`}
                    >
                      Deliver here
                    </Button>
                  </Col>
                </Row>
              </form>
            </Col>
            <Col
              md={3}
              style={{ backgroundColor: "#C4C4C4" }}
              className={`${styles["cart-right-side"]} flex-column d-flex h-100`}
            >
              <h3
                className={`${styles["order-summary"]} mt-3 mb-5 text-center`}
              >
                Order Summary
              </h3>
              <Row>
                <Col>
                  <h5 className={`${styles["order-summary-bold"]}`}>
                    {state.orders.length} items
                  </h5>
                </Col>
                <Col className={`${styles["summary-align-right"]}`}>
                  <h5 className={`${styles["order-summary-bold"]}`}>
                    {" "}
                    {totalPrice - shipFee + discountPrice}
                  </h5>
                </Col>
              </Row>
              <hr></hr>
              <Row>
                <Col>
                  <h6>Discount Code</h6>
                </Col>
                <Col style={{ textAlign: "right" }}>
                  <select
                    value={discount}
                    onChange={handleDiscount}
                    defaultValue={"Select"}
                    style={{ backgroundColor: "#C4C4C4" }}
                    className={styles["payment-method"]}
                  >
                    <option value="Select" className={styles["payment-method"]}>
                      Select code
                    </option>
                    {discountList.length === 0 ? (
                      <option
                        value="Empty"
                        className={styles["payment-method"]}
                      >
                        Empty
                      </option>
                    ) : (
                      discountList.map((item, idx) => (
                        <option
                          value={item.code}
                          className={styles["payment-method"]}
                          key={idx}
                        >
                          {item.code}
                        </option>
                      ))
                    )}
                  </select>
                </Col>
              </Row>
              <hr></hr>
              <Row>
                <Col>
                  <h6>Discount</h6>
                </Col>
                <Col className={`${styles["summary-align-right"]}`}>
                  <h5 className={`${styles["order-summary-bold"]}`}>
                    {discountPrice}
                  </h5>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h6>Shipping Fee</h6>
                </Col>
                <Col className={`${styles["summary-align-right"]}`}>
                  <h5 className={`${styles["order-summary-bold"]}`}>
                    {shipFee} vnd
                  </h5>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h6>Payment Method</h6>
                </Col>
                <Col style={{ textAlign: "right" }}>
                  <select
                    value={momo}
                    onChange={handleMomo}
                    style={{ backgroundColor: "#C4C4C4" }}
                    className={styles["payment-method"]}
                  >
                    <option value="true" className={styles["payment-method"]}>
                      Momo
                    </option>
                    <option value="false" className={styles["payment-method"]}>
                      Cash
                    </option>
                  </select>
                </Col>
              </Row>
              <hr></hr>
              <Row>
                <Col>
                  <h6>Total price</h6>
                </Col>
                <Col className={`${styles["summary-align-right"]}`}>
                  <h5 className={`${styles["order-summary-bold"]}`}>
                    {isNaN(totalPrice) ? 0 : totalPrice} vnd
                  </h5>
                </Col>
              </Row>
              <Row className="flex-grow-1">
                <Col className="text-center align-self-end">
                  <Button
                    className={`${styles["cart-confirm-button"]} mb-4`}
                    onClick={
                      state.login._id
                        ? momo === "true"
                          ? Payment
                          : OrderSuccess
                        : Notice
                    }
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
  );
}
