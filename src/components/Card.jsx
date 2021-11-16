import React, {useState} from "react";

import shoes from "../assets/img/blue.png"
import ProductDetail from "../pages/ProductDetail"
import { Row, Col, Button, Modal } from "react-bootstrap";

function Cards({shoesItem, addItemToCart}) {
    const [show, setShow] = useState(false);
    const [showDetail, setShowDetail] = useState(true)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        
    <div className="card-item d-flex flex-row">
        <div className="card-img ">
            <img src={shoesItem.link} alt=""></img>
        </div>
        <div className="card-content d-flex flex-column">
            <div className="card-content-header">
                {shoesItem.name}
            </div>

            <div className="card-content-price">
                Price: <span>{shoesItem.price}</span>
            </div>
            <div className="card-content-desc">
                Description: 
                <div>{shoesItem.description}</div>
            </div>
            <Button variant="primary" onClick={handleShow}>
                Detail
            </Button>
        </div>

        <Modal dialogClassName='modal-90w'  show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body >
                {showDetail && <ProductDetail addItemToCart = {addItemToCart} shoesItem = {shoesItem}/>}
            </Modal.Body>
        </Modal>
    </div>
    )
};
export default Cards;