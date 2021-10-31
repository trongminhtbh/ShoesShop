import { Container, Row, Col, Carousel, Nav } from "react-bootstrap";
import { StarHalf, Star } from "@material-ui/icons";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/footer-style.css";
import Footer from "../components/Footer.js";
import React ,{ useState } from "react";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import LargeNikeIcon from "../assets/img/large-nike.png";
import LargeNikeIcon1 from "../assets/img/black.png";
import LargeNikeIcon2 from "../assets/img/blue.png";
import ProductCard from "../components/ProductCard";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Homepage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="App">
      <Header></Header>
      <Container fluid className="fit-screen">
        <Row>
          <Col md={2} className="align-self-center">
            <Nav className="ms-auto flex-column">
              <div className="menu-item-homepage active-item">
                <Nav.Link href="#">NIKE</Nav.Link>
              </div>
              <div className="menu-item-homepage inactive-item">
                <Nav.Link href="#">ADIDAS</Nav.Link>
              </div>
              <div className="menu-item-homepage inactive-item">
                <Nav.Link href="#">OTHER</Nav.Link>
              </div>
            </Nav>
          </Col>
          <Col md={10}>
            <Row>
              <Col md={8}>
                <Carousel
                  interval={null}                  
                  indicators={false} 
                  controls={false}            
                  style={{textAlign:"center"}}
                  fade
                  activeIndex={index} 
                  onSelect={handleSelect}
                >
                  <Carousel.Item >
                    <img src={LargeNikeIcon} style={{ width: "80%" }} alt="asd"/>
                  </Carousel.Item>
                  <Carousel.Item >
                    <img src={LargeNikeIcon1} style={{ width: "80%" }} alt="asd"/>
                  </Carousel.Item>
                  <Carousel.Item >
                    <img src={LargeNikeIcon2} style={{ width: "80%" }} alt="asd"/>
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col md={4}>
                <div className="h-100 d-flex flex-column">
                  <Row>
                    <h2 className="overlay-text">AMAZING SHOES?</h2>
                    <h4 className="overlay-text">Let us show you!!!</h4>
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
                        style={{textAlign:"center"}}
                        activeIndex={index} 
                        onSelect={handleSelect}
                      >
                        <Carousel.Item >
                          <h4 style={{ color: "white" }}>NIKE AIR MAX III</h4>
                          <div className="rate-price">
                            <div style={{ display: "inline-block" }}>
                              <Star style={{ fill: "#FDC733" }}></Star>
                              <Star style={{ fill: "#FDC733" }}></Star>
                              <Star style={{ fill: "#FDC733" }}></Star>
                              <Star style={{ fill: "#FDC733" }}></Star>
                              <StarHalf style={{ fill: "#FDC733" }}></StarHalf>
                            </div>
                            <div
                              style={{
                                display: "inline-block",
                                color: "#FDC733",
                                fontFamily: "'Fredoka One', cursive",
                                fontSize: "20px",
                              }}
                            >
                              &nbsp;| $ 180
                            </div>
                          </div>
                        </Carousel.Item>
                        <Carousel.Item >
                          <h4 style={{ color: "white" }}>NIKE AIR MAX III</h4>
                          <div className="rate-price">
                            <div style={{ display: "inline-block" }}>
                              <Star style={{ fill: "#FDC733" }}></Star>
                              <Star style={{ fill: "#FDC733" }}></Star>
                              <Star style={{ fill: "#FDC733" }}></Star>
                              <Star style={{ fill: "#FDC733" }}></Star>
                              <StarHalf style={{ fill: "#FDC733" }}></StarHalf>
                            </div>
                            <div
                              style={{
                                display: "inline-block",
                                color: "#FDC733",
                                fontFamily: "'Fredoka One', cursive",
                                fontSize: "20px",
                              }}
                            >
                              &nbsp;| $ 180
                            </div>
                          </div>
                        </Carousel.Item>
                        <Carousel.Item>
                          <h4 style={{ color: "white" }}>NIKE AIR MAX III</h4>
                          <div className="rate-price">
                            <div style={{ display: "inline-block" }}>
                              <Star style={{ fill: "#FDC733" }}></Star>
                              <Star style={{ fill: "#FDC733" }}></Star>
                              <Star style={{ fill: "#FDC733" }}></Star>
                              <Star style={{ fill: "#FDC733" }}></Star>
                              <StarHalf style={{ fill: "#FDC733" }}></StarHalf>
                            </div>
                            <div
                              style={{
                                display: "inline-block",
                                color: "#FDC733",
                                fontFamily: "'Fredoka One', cursive",
                                fontSize: "20px",
                              }}
                            >
                              &nbsp;| $ 180
                            </div>
                          </div>
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col md={3}></Col>
          <Col md={9}>
          <OwlCarousel items={3} className="owl-theme" loop nav margin={8} dots={false}>
            <div>
              <ProductCard></ProductCard>
            </div>
            <div>
              <ProductCard></ProductCard>
            </div>
            <div>
              <ProductCard></ProductCard>
            </div>
            <div>
              <ProductCard></ProductCard>
            </div>            
          </OwlCarousel>
          </Col>
        </Row>
      </Container>
      <Container>
        <h3 className="homepage-topic">HOTEST</h3>
        <h6 className="homepage-topic">The hotest model in our store</h6>
        <Container className="product-container1">
          <OwlCarousel items={3} className="owl-theme" loop nav margin={8}>
            <div>
              <ProductCard></ProductCard>
            </div>
            <div>
              <ProductCard></ProductCard>
            </div>
            <div>
              <ProductCard></ProductCard>
            </div>
            <div>
              <ProductCard></ProductCard>
            </div>            
          </OwlCarousel>
        </Container>
        <h3 className="homepage-topic">BEST SELLER</h3>
        <h6 className="homepage-topic">
          The best model in our store in a month
        </h6>
        <Container className="product-container1">
          <OwlCarousel items={3} className="owl-theme" loop nav margin={8}>
            <div>
              <ProductCard></ProductCard>
            </div>
            <div>
              <ProductCard></ProductCard>
            </div>
            <div>
              <ProductCard></ProductCard>
            </div>
            <div>
              <ProductCard></ProductCard>
            </div>            
          </OwlCarousel>
        </Container>
        <h3 className="homepage-topic">POST</h3>
        <h6 className="homepage-topic">
          The newest posts from our store and brand
        </h6>
        <Container className="inner-container">
        <OwlCarousel items={3} className="owl-theme" loop nav margin={8}>
            <div>
              <PostCard></PostCard>
            </div>
            <div>
              <PostCard></PostCard>
            </div>
            <div>
              <PostCard></PostCard>
            </div>
            <div>
              <PostCard></PostCard>
            </div>            
          </OwlCarousel>
        </Container>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default Homepage;
