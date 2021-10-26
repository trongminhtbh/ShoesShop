import React, {useState} from "react";

import shoes from "../assets/img/blue.png"
import ProductDetail from "../pages/ProductDetail"

const shoes1 = {
    name: "AIR MAX PEGASUS",
    id: 1,
    price: 500000,
    desc: "chay nhanh"
}
function Cards({listShoes}) {
    const [state1, setState1] = useState(1)
    
    const modal = () => {
        setState1( state1 + 1)
        console.log(state1);
    }
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
                <label htmlFor={"5-stars-"+listShoes.id} className="star">&#9733;</label>
                <input type="radio" id={"4-stars-"+listShoes.id} name="rating" value="4" />
                <label htmlFor={"4-stars-"+listShoes.id} className="star">&#9733;</label>
                <input type="radio" id={"3-stars-"+listShoes.id} name="rating" value="3" />
                <label htmlFor={"3-stars-"+listShoes.id} className="star">&#9733;</label>
                <input type="radio" id={"2-stars-"+listShoes.id} name="rating" value="2" />
                <label htmlFor={"2-stars-"+listShoes.id} className="star">&#9733;</label>
                <input type="radio" id={"1-stars-"+listShoes.id} name="rating" value="1" />
                <label htmlFor={"1-stars-"+listShoes.id} className="star">&#9733;</label>
            </div>

            <div className="card-content-price">
                Price: <span>{listShoes.price}</span>
            </div>
            <div className="card-content-desc">
                Description: 
                <div>{listShoes.desc}</div>
            </div>
            <button onClick = {modal}>Details</button>
        </div>
    </div>
    )
};
export default Cards;