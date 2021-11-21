import React from "react";
import styles from "../styles/footer-style.module.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Policy() {
  return (
    <div className={`p-5 ${styles["about-us-title"]}`}>
      <h3 style={{ textAlign: "left" }}>Policy</h3>

      <p style={{ textAlign: "justify" }}>
        ShoesShop Guarantee is a service provided by ShoesShop or its authorised
        agent to protect purchases. To protect against the risk of liability,
        payment for purchases made to Seller using the Services will be held by
        ShoesShop or its authorised agent (“ShoesShop Guarantee Account”).
        Seller will not receive interest or other earnings from the sum you have
        paid into ShoesShop Guarantee Account.
      </p>

      <p style={{ textAlign: "justify" }}>
        After Buyer makes payment for his/her order (“Buyer’s Purchase Monies”),
        Buyer’s Purchase Monies will be held in ShoesShop Guarantee Account
        until:
      </p>
      <ul>
        <li>
          <p style={{ textAlign: "justify" }}>
            Buyer sends confirmation to ShoesShop that Buyer has received
            his/her goods, in which case, unless 11.2(d) applies, ShoesShop will
            release Buyer’s Purchase Monies (less the Seller’s proportion of the
            Shipping Fee (if applicable), Transaction Fee (defined below),
            Commission Fee (defined below) and (if applicable) the Cross Border
            Fee (defined below)) in ShoesShop Guarantee Account to Seller;
          </p>
        </li>
        <li>
          <p style={{ textAlign: "justify" }}>
            ShoesShop determines that Buyer’s application for a return of goods
            and/or refund is successful, in which case, unless 11.2(d) applies,
            ShoesShop will provide a refund to Buyer, subject to and in
            accordance with the Refunds and Return Policy;
          </p>
        </li>
        <li>
          <p style={{ textAlign: "justify" }}>
            such other time as ShoesShop reasonably determines that a
            distribution of Buyer’s Purchase Monies (less the Transaction Fee
            (defined below), Commission Fee (defined below) and (if applicable)
            the Cross Border Fee (defined below)) is appropriate, including,
            without limitation, where it deems reasonably necessary to comply
            with applicable law or a court order or to enforce these Terms of
            Service.
          </p>
        </li>
      </ul>

      <p style={{ textAlign: "justify" }}>
        Payments made through ShoesShop channels will be held in the ShoesShop
        Guarantee Account for a specified period of time (the “ShoesShop
        Guarantee Period”). To find out more about the ShoesShop Guarantee
        Period, please click this link. Buyer may apply for a one-time extension
        of ShoesShop Guarantee Period prior to the expiry of the applicable
        ShoesShop Guarantee Period, subject to and in accordance with the
        Refunds and Return Policy. Upon Buyer’s application, ShoesShop Guarantee
        Period may be extended for a maximum period of three (3) days unless
        ShoesShop in its sole discretion determines that a longer extension is
        appropriate or required.
      </p>

      <p style={{ textAlign: "justify" }}>
        If, for any reason, the Seller's bank account cannot be credited and/or
        the Seller cannot be contacted, ShoesShop will use reasonable endeavours
        to contact the Seller using the contact details provided by him/her. In
        the event that the Seller cannot be contacted and the Buyer’s Purchase
        Monies remain unclaimed for more than six (6) months after they become
        due to the Seller, ShoesShop will deal with such unclaimed Buyer's
        Purchase Monies in accordance with any applicable laws.
      </p>
      <p style={{ textAlign: "justify" }}>
        Seller/Buyer must be the beneficial owner of the Account and conduct
        transaction on the Site only on behalf of him or herself. ShoesShop may
        require Seller or Buyer to provide his or her personal data such as
        recent identity photograph, bank account details and/or any other such
        documentation necessary, for verification purposes, including
        verification required by third party payment processing and logistic
        service providers. Seller/Buyer hereby grants ShoesShop his/her consent
        to use or provide to third party his/her personal data to facilitate
        his/her use of the Site. Further, Seller/Buyer authorises ShoesShop to
        use his/her personal data to make any inquires we consider necessary to
        validate his/her identity with the appropriate entity such as his/her
        bank. For more information in relation to how ShoesShop handles your
        personal information, please visit our Privacy Policy page.
      </p>
    </div>
  );
}
