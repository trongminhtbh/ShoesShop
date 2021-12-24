import { Container, Row, Col, Carousel, Nav } from "react-bootstrap";
import { StarOutline, Star } from "@material-ui/icons";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles/footer-style.module.css";
import "../styles/carousel-custom.css";
import shoeicon1 from "../assets/img/Untitled1.png";
import shoeicon2 from "../assets/img/jason-markk-sneaker-cleaner-cleaning-white-leather-sneakers-common-projects-2.jpg";
import shoeicon3 from "../assets/img/00-500x500.jpg";
import shoeicon4 from "../assets/img/Sneaker_Care_Blog_2.jpg";
import React, { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import LargeNikeIcon from "../assets/img/large-nike.png";
import LargeNikeIcon1 from "../assets/img/black.png";
import LargeNikeIcon2 from "../assets/img/blue.png";
import ProductCard from "../components/ProductCard";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { ShoeApiClient } from "../pages/admin/helpers";
import { useStore } from "../store";

function Homepage(props) {
  const [index, setIndex] = useState(0);
  const [state, dispatch] = useStore();
  const [listShoes, setListShoes] = useState(state.listShoes);

  useEffect(() => {
    (async function () {
      const shoes = await ShoeApiClient.findAll();
      if (shoes) {
        setListShoes(shoes);
      }
    })();
  }, []);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Container fluid className={styles["fit-screen"]}>
        <Row>
          <Col md={2} className="align-self-center">
            <Nav className="ms-auto flex-column">
              <div
                className={`${styles["menu-item-homepage"]} ${styles["active-item"]}`}
              >
                <Nav.Link href="#">NIKE</Nav.Link>
              </div>
              <div
                className={`${styles["menu-item-homepage"]} ${styles["inactive-item"]}`}
              >
                <Nav.Link href="#">ADIDAS</Nav.Link>
              </div>
              <div
                className={`${styles["menu-item-homepage"]} ${styles["inactive-item"]}`}
              >
                <Nav.Link href="#">OTHER</Nav.Link>
              </div>
            </Nav>
          </Col>
          <Col md={9} className={styles["nike-box"]}>
            <Row>
              <Col md={8}>
                <Carousel
                  interval={null}
                  indicators={false}
                  controls={false}
                  style={{ textAlign: "center" }}
                  fade
                  activeIndex={index}
                  onSelect={handleSelect}
                >
                  <Carousel.Item>
                    <img
                      src={LargeNikeIcon}
                      style={{ width: "80%" }}
                      alt="asd"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={LargeNikeIcon1}
                      style={{ width: "80%" }}
                      alt="asd"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={LargeNikeIcon2}
                      style={{ width: "80%" }}
                      alt="asd"
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col md={4}>
                <div className="h-100 d-flex flex-column">
                  <Row>
                    <h2 className={styles["overlay-text"]}>AMAZING SHOES?</h2>
                    <h4 className={styles["overlay-text"]}>
                      Let us show you!!!
                    </h4>
                  </Row>
                  <Row className="flex-grow-1">
                    <Col className="align-self-end">
                      <Carousel
                        interval={null}
                        className="p-3"
                        indicators={false}
                        prevLabel={""}
                        nextLabel={""}
                        variant={"white"}
                        style={{ textAlign: "center" }}
                        activeIndex={index}
                        onSelect={handleSelect}
                      >
                        <Carousel.Item>
                          <h4 style={{ color: "white" }}>NIKE AIR MAX III</h4>
                          <div className={styles["rate-price"]}>
                            <div style={{ display: "inline-block" }}>
                              <Star style={{ fill: "#FDC733" }}></Star>
                              <Star style={{ fill: "#FDC733" }}></Star>
                              <Star style={{ fill: "#FDC733" }}></Star>
                              <Star style={{ fill: "#FDC733" }}></Star>
                              <StarOutline style={{ fill: "#FDC733" }}></StarOutline>
                            </div>
                            <div
                              style={{
                                display: "inline-block",
                                color: "#FDC733",
                                fontFamily: "'Fredoka One', cursive",
                                fontSize: "20px",
                              }}
                            >
                              &nbsp;| đ 750.000
                            </div>
                          </div>
                        </Carousel.Item>
                        <Carousel.Item>
                          <h4 style={{ color: "white" }}>NIKE FLY BY MID 2</h4>
                          <div className={styles["rate-price"]}>
                            <div style={{ display: "inline-block" }}>
                              <Star style={{ fill: "#FDC733" }}></Star>
                              <Star style={{ fill: "#FDC733" }}></Star>
                              <Star style={{ fill: "#FDC733" }}></Star>
                              <StarOutline style={{ fill: "#FDC733" }}></StarOutline>
                              <StarOutline style={{ fill: "#FDC733" }}></StarOutline>
                            </div>
                            <div
                              style={{
                                display: "inline-block",
                                color: "#FDC733",
                                fontFamily: "'Fredoka One', cursive",
                                fontSize: "20px",
                              }}
                            >
                              &nbsp;| đ 700.000
                            </div>
                          </div>
                        </Carousel.Item>
                        <Carousel.Item>
                          <h4 style={{ color: "white" }}>NIKE FLY BY MID 3</h4>
                          <div className={styles["rate-price"]}>
                            <div style={{ display: "inline-block" }}>
                              <Star style={{ fill: "#FDC733" }}></Star>
                              <Star style={{ fill: "#FDC733" }}></Star>
                              <Star style={{ fill: "#FDC733" }}></Star>
                              <Star style={{ fill: "#FDC733" }}></Star>
                              <StarOutline style={{ fill: "#FDC733" }}></StarOutline>
                            </div>
                            <div
                              style={{
                                display: "inline-block",
                                color: "#FDC733",
                                fontFamily: "'Fredoka One', cursive",
                                fontSize: "20px",
                              }}
                            >
                              &nbsp;| đ 800.000
                            </div>
                          </div>
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={1}></Col>
            </Row>
          </Col>
        </Row>
        <Row className="pt-3 mt-4">
          <Col md={3}></Col>
          <Col md={9}>
            <OwlCarousel
              items={3}
              className="owl-theme"
              loop
              nav
              margin={8}
              dots={false}
            >
              {listShoes.slice(0, 3).map((shoes) => {
                return <ProductCard key={shoes._id} shoesItem={shoes} />;
              })}
            </OwlCarousel>
          </Col>
        </Row>
      </Container>
      <Container>
        <h3 className={styles["homepage-topic"]}>HOTEST</h3>
        <h6 className={styles["homepage-topic"]}>
          The hotest model in our store
        </h6>
        <Container className={styles["product-container1"]}>
          <OwlCarousel items={3} className="owl-theme" loop nav margin={8}>
            {listShoes.slice(3, 9).map((shoes) => {
              return (
                <div key={shoes._id}>
                  <ProductCard shoesItem={shoes} />
                </div>
              );
            })}
          </OwlCarousel>
        </Container>
        <h3 className={styles["homepage-topic"]}>BEST SELLER</h3>
        <h6 className={styles["homepage-topic"]}>
          The best model in our store in a month
        </h6>
        <Container className={styles["product-container1"]}>
          <OwlCarousel items={3} className="owl-theme" loop nav margin={8}>
            {listShoes.slice(5, 14).map((shoes) => {
              return (
                <div key={shoes._id}>
                  <ProductCard shoesItem={shoes} />
                </div>
              );
            })}
          </OwlCarousel>
        </Container>
        <h3 className={styles["homepage-topic"]}>POST</h3>
        <h6 className={styles["homepage-topic"]}>
          The newest posts from our store and brand
        </h6>
        <Container className={styles["inner-container"]}>
          <OwlCarousel items={3} className="owl-theme" loop nav margin={8}>
            <div>
              <PostCard title="How to clean white shoes" img={shoeicon1}>
                No one buys white sneakers thinking they&apos;ll stay bright and
                grime-free forever, but when the inevitable spills, stains, and
                scuffs happen, it&apos;s only natural to hope you can restore
                them to their pristine state.
              </PostCard>
            </div>
            <div>
              <PostCard title="How to keep in shape for white sneakers" img={shoeicon2}>
                Do you know how to properly clean white sneakers to keep the
                stylish purity of the shoes while not affecting their
                durability?
              </PostCard>
            </div>
            <div>
              <PostCard title="7 best ways to preserve sports shoes" img={shoeicon4}>
                To help your sports shoes be used for a long time. ShoesShop
                offers the best way to store sports shoes to keep your shoes
                always at their best.
              </PostCard>
            </div>
            <div>
              <PostCard title="Sneaker care: Tips and products to use" img={shoeicon3}>
                Taking care of your sneakers, whether it be protecting or
                cleaning, is a must if you want them to last longer. Although it
                may seem like a lot of work, it actually only requires a couple
                of products that are quite accessible.
              </PostCard>
            </div>
          </OwlCarousel>
        </Container>
      </Container>
    </>
  );
}

export default Homepage;
