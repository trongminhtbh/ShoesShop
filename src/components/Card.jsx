import React from "react";

import shoes from "../assets/img/black.png"
function Card() {
    return (
        
    <div className="card-item d-flex flex-row">
        <div className="card-img ">
            <img src={shoes} alt=""></img>
        </div>
        <div className="card-content d-flex flex-column">
            <div className="card-content-header">
                AIR MAX PEGASUS
            </div>
            <div className="card-content-star star-rating">
                <input type="radio" id="5-stars" name="rating" value="5" />
                <label for="5-stars" class="star">&#9733;</label>
                <input type="radio" id="4-stars" name="rating" value="4" />
                <label for="4-stars" class="star">&#9733;</label>
                <input type="radio" id="3-stars" name="rating" value="3" />
                <label for="3-stars" class="star">&#9733;</label>
                <input type="radio" id="2-stars" name="rating" value="2" />
                <label for="2-stars" class="star">&#9733;</label>
                <input type="radio" id="1-star" name="rating" value="1" />
                <label for="1-star" class="star">&#9733;</label>
            </div>

            <div className="card-content-price">
                Price: <span>14$</span>
            </div>
            <div className="card-content-desc">
                Description: <span>Thoai mai khi chay</span>
            </div>
            <button >Details</button>
        </div>
    </div>
    )
};
export default Card;