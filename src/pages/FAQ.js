import React from "react";
import styles from "../styles/footer-style.module.css";
import "bootstrap/dist/css/bootstrap.css";

export default function FAQ() {
  return (
    <div className={`p-5 ${styles["about-us-title"]}`}>
      <h3 style={{ textAlign: "left" }}>Question and Answer</h3>
      <p style={{ textAlign: "justify" }}>
        <h5 style={{ fontWeight: "bold" }}>
          How long can I receive it from the time I place an order?
        </h5>
        <p>
          If in the inner city of Hanoi and Ho Chi Minh, customers will receive
          the goods within 24 hours from the date of the confirmation call or
          text, unless the order is not in stock. ShoesShop will be sent from a
          warehouse operating in another province. time will be 2-3 days. If in
          another province, customers will receive the goods in 2-3 days.
          Pre-orders will be notified of the delivery date in each program.
          However, currently due to the influence of the Covid-19 epidemic, the
          delivery time in some places may be longer than expected, we hope for
          your understanding!
        </p>
      </p>
      <p style={{ textAlign: "justify" }}>
        <h5 style={{ fontWeight: "bold" }}>How can I track my order?</h5>
        <p>
          Customers can inbox ShoesShop fanpage with order code or order phone
          number, customer care will send customers the bill of lading code as
          soon as possible.
        </p>
      </p>
      <p style={{ textAlign: "justify" }}>
        <h5 style={{ fontWeight: "bold" }}>ShoesShop's delivery time frame?</h5>
        <p>
          ShoesShop delivers office hours, some areas can support evening
          delivery for customers. ShoesShop does not commit to being able to
          support 100% delivery cases, but ShoesShop will certainly do
          everything possible to support customers.
        </p>
      </p>
      <p style={{ textAlign: "justify" }}>
        <h5 style={{ fontWeight: "bold" }}>
          If I exchange goods at the warehouse, is there a shipping charge?
        </h5>
        <p>
          No. ShoesShop always supports customers with the best experience,
          customers can notify ShoesShop about the exchange status of their
          orders. ShoesShop will be ready-made, customers just need to visit the
          warehouse and exchange goods immediately.
        </p>
      </p>
      <p style={{ textAlign: "justify" }}>
        <h5 style={{ fontWeight: "bold" }}>
          I return the item, how does ShoesShop refund me?
        </h5>
        <p>
          At ShoesShop, as soon as there is a request for a refund, we will
          refund the customer within 24 hours, the goods will be received back
          later.
        </p>
      </p>
      <p style={{ textAlign: "justify" }}>
        <h5 style={{ fontWeight: "bold" }}>
          I want to cancel a prepaid order?
        </h5>
        <p>
          Currently, ShoesShop cannot automatically refund customers. Customers
          fill out information here or inbox Fanpage or call hotline 1900272737,
          ShoesShop will refund money within 24 hours after receiving the
          information.
        </p>
      </p>
    </div>
  );
}
