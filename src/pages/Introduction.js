import React from "react";
import styles from "../styles/footer-style.module.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Introduction() {
  return (
    <div className={`p-5 ${styles["about-us-title"]}`}>
        <h3 style={{textAlign:"left"}}>Introduction</h3>
      <p style={{textAlign:"justify"}}>
        Welcome to the ShoesShop platform (the "Site"). Please read the
        following Terms of Service carefully before using this Site or opening a
        ShoesShop account ("Account") so that you are aware of your legal rights
        and obligations with respect to ShoesShop Southeast Asia Limited and its
        affiliates and subsidiaries (individually and collectively, "ShoesShop",
        "we", "us" or "our"). The "Services" we provide or make available
        include (a) the Site, (b) the services provided by the Site and by
        ShoesShop client software made available through the Site, and (c) all
        information, linked pages, features, data, text, images, photographs,
        graphics, music, sounds, video (including live streams), messages, tags,
        content, programming, software, application services (including, without
        limitation, any mobile application services) or other materials made
        available through the Site or its related services ("Content"). Any new
        features added to or augmenting the Services are also subject to these
        Terms of Service. These Terms of Service govern your use of Services
        provided by ShoesShop.
      </p>
      <p style={{textAlign:"justify"}}>
        The Services include an online platform service that provides a place
        and opportunity for the sale of goods between the buyer (“Buyer”) and
        the seller (“Seller”) (collectively “you”, “Users” or “Parties”). The
        actual contract for sale is directly between Buyer and Seller and
        ShoesShop is not a party to that or any other contract between Buyer and
        Seller and accepts no obligations in connection with any such contract.
        Parties to such transaction will be entirely responsible for the sales
        contract between them, the listing of goods, warranty of purchase and
        the like. ShoesShop is not involved in the transaction between Users.
        ShoesShop may or may not pre-screen Users or the Content or information
        provided by Users. ShoesShop reserves the right to remove any Content or
        information posted by you on the Site in accordance to Section 6.4
        herein. ShoesShop cannot ensure that Users will actually complete a
        transaction.
      </p>
      <p style={{textAlign:"justify"}}>
        Before becoming a User of the Site, you must read and accept all of the
        terms and conditions in, and linked to, these Terms of Service and you
        must consent to the processing of your personal data as described in the
        Privacy Policy linked hereto.
      </p>

      <p style={{textAlign:"justify"}}>
        ShoesShop reserves the right to change, modify, suspend or discontinue
        all or any part of this Site or the Services at any time or upon notice
        as required by local laws. ShoesShop may release certain Services or
        their features in a beta version, which may not work correctly or in the
        same way the final version may work, and we shall not be held liable in
        such instances. ShoesShop may also impose limits on certain features or
        restrict your access to parts of, or the entire, Site or Services in its
        sole discretion and without notice or liability.
      </p>

      <p style={{textAlign:"justify"}}>
        ShoesShop reserves the right to refuse to provide you access to the Site
        or Services or to allow you to open an Account for any reason.
      </p>
    </div>
  );
}
