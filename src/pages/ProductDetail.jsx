import React, { useEffect, useState } from "react";
import Gradients from "../components/Gradients";
import ProductImages from "../components/ProductImages";
import Info from "../components/Info/Info";
import { Rating } from "react-simple-star-rating";
import logo from "../assets/img/logo.png";
import { useStore } from "../store";


const ProductDetail = ({ shoesItem }) => {
  var sizes, colors, shoes, gradients, shoeBackground, shoeHeight;
  var prevColor = "blue";
  var animateOrNot = true;
  const [state, dispatch] = useStore();
  const [rating, setRating] = useState(100); // initial rating value
  const [rated, setRated] = useState(false);
  const [comments, setComments] = useState([]);
  const [resetComment, setResetComment] = useState(false);
  const [userComment, setUserComment] = useState("");

  useEffect(() => {
    if(resetComment) {
      setTimeout(() => {
        setResetComment(false);
      }, 2000)
    }
  }, [resetComment])

  useEffect(() => {
    (async function () {
      let mounted = true;
      if(comments.length) return;
      async function GetComments() {
        const path =
          "https://pacific-ridge-30189.herokuapp.com/comment/?id=" + shoesItem._id;
        const response = await fetch(path)
          .then((response) => response.json())
          .catch((error) => console.log(error));
        return response;
      }
      const items = await GetComments();
      if (items && mounted) {
        setComments(items);
      }
      return () => mounted = false;
    })();
  }, [comments,shoesItem._id, resetComment]);



  const sendComment = (e) => {
    var bodyContent = JSON.stringify({
      owner: state.login.name,
      product_id: shoesItem._id,
      content: userComment
    });
    var url =
      "https://pacific-ridge-30189.herokuapp.com/comment/" 
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: bodyContent,
    });
    setTimeout(() => {
    setResetComment(true);
    setUserComment("");
    setComments([])
    }, 2000)
  }
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    setRated(true);
    // other logic
    var bodyContent = JSON.stringify({
      value: rate / 20,
    });
    var url =
      "https://pacific-ridge-30189.herokuapp.com/shoes/rating?id=" +
      shoesItem._id;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: bodyContent,
    });
  };
  function changeColor() {
    if (!animateOrNot) {
      console.log("waittttt");
      return;
    }
    var primary = this.getAttribute("primary");
    var color = this.getAttribute("color");
    var shoe = document.querySelector(`.shoe[color="${color}"]`);
    var gradient = document.querySelector(`.gradient[color="${color}"]`);
    var prevGradient = document.querySelector(
      `.gradient[color="${prevColor}"]`
    );

    // showing correct color
    colors.forEach((color) => color.classList.remove("active"));
    this.classList.add("active");

    // changing primary css variable
    document.documentElement.style.setProperty("--primary", primary);

    // showing correct img
    shoes.forEach((s) => s.classList.remove("show"));
    shoe.classList.add("show");

    // dealing with gradient
    gradients.forEach((g) => g.classList.remove("display", "behind"));
    prevGradient.classList.add("behind");
    gradient.classList.add("display");

    // logic
    prevColor = color;
    animateOrNot = false;

    // hack
    setTimeout(() => {
      animateOrNot = true;
    }, 800);
  }

  function changeSize() {
    sizes.forEach((size) => size.classList.remove("active"));
    this.classList.add("active");
  }

  const handleCheck = (e) => {
    console.log("hello");
  };

  // for responsive behaviour
  const changeHeight = () => {
    var x = window.matchMedia("(max-width:1000px)");

    !shoes ? (shoeHeight = 0) : (shoeHeight = shoes[0].offsetHeight);

    if (x.matches) {
      if (shoeHeight === 0) {
        try {
          setTimeout(changeHeight, 50);
        } catch (error) {
          alert("Something is Wrong!!");
        }
      }
      shoeBackground.style.height = `${shoeHeight * 0.9}px`;
    } else if (!!shoeBackground) {
      // go back to default
      shoeBackground.style.height = "475px";
    }
  };

  const ReviewSection = (
    <div className="Review">
      <div className="ReviewTitle">Rating</div>
      {!rated ? (
        <Rating
          onClick={handleRating}
          ratingValue={rating} /* Available Props */
        />
      ) : (
        <Rating onClick={handleRating} ratingValue={rating} readonly={true} />
      )}
      <div className="CommentSection">
        <div className="CommentTitle">Reviews {resetComment}</div>
        <div className="CommentContent">
          {comments.map((comment) => {
            return (
              <div className="userComment">
                <div className="userName"> {comment.owner}</div>
                <div className="userCommentContent">{comment.content}</div>
                <div className="commentTime">{comment.creat_at.split(' ')[0]}</div>
              </div>
            );
          })}
        </div>
        <div className="commentInput">
          <input
            placeholder="Typing comment"
            type="text"
            className="inputContent"
            onChange = {e => setUserComment(e.target.value)}
            value={userComment}
          />
          <button onClick={sendComment} type="submit">Send review </button>
        </div>
        <div className="alert">{resetComment && <span>Sent</span>}</div>
      </div>
    </div>
  );

  useEffect(() => {
    sizes = document.querySelectorAll(".size");
    colors = document.querySelectorAll(".color");
    shoes = document.querySelectorAll(".shoe");
    gradients = document.querySelectorAll(".gradient");
    shoeBackground = document.querySelector(".shoeBackground");

    colors.forEach((color) => color.addEventListener("click", changeColor));
    sizes.forEach((size) => size.addEventListener("click", changeSize));
    changeHeight();
  }, []);
  window.addEventListener("resize", changeHeight);

  return (
    <div className="Home">
      <div className="container1">
        <div className="card1">
          <div className="shoeBackground">
            <Gradients />

            <h1 className="nike">nike</h1>
            <img src={logo} alt="logo" className="logo" />
            <a href="/#" className="share">
              <i className="fas fa-share-alt"></i>
            </a>

            <ProductImages shoesItem={shoesItem} />
          </div>
          <Info shoesItem={shoesItem} />
        </div>
      </div>
      {ReviewSection}
    </div>
  );
};

export default ProductDetail;
