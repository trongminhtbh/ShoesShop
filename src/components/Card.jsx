import React from "react";

import shoes from "../assets/img/black.png"

function Card({listShoes}) {
    return (
        
    <div className="card-item d-flex flex-row">
        <div className="card-img ">
            <img src={shoes} alt=""></img>
        </div>
        <div className="card-content d-flex flex-column">
            <div className="card-content-header">
                {listShoes.name}
            </div>
            <div className="card-content-star star-rating">
                <input type="radio" id= {"5-stars-"+listShoes.id} name="rating" value="5" />
                <label for={"5-stars-"+listShoes.id} class="star">&#9733;</label>
                <input type="radio" id={"4-stars-"+listShoes.id} name="rating" value="4" />
                <label for={"4-stars-"+listShoes.id} class="star">&#9733;</label>
                <input type="radio" id={"3-stars-"+listShoes.id} name="rating" value="3" />
                <label for={"3-stars-"+listShoes.id} class="star">&#9733;</label>
                <input type="radio" id={"2-stars-"+listShoes.id} name="rating" value="2" />
                <label for={"2-stars-"+listShoes.id} class="star">&#9733;</label>
                <input type="radio" id={"1-stars-"+listShoes.id} name="rating" value="1" />
                <label for={"1-stars-"+listShoes.id} class="star">&#9733;</label>
            </div>

            <div className="card-content-price">
                Price: <span>{listShoes.price}</span>
            </div>
            <div className="card-content-desc">
                Description: <span>{listShoes.desc}</span>
            </div>
            <button >Details</button>
        </div>
    </div>
    )
};
export default Card;