import React from "react";
import "./review.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewProduct = ({ product, delBtnHandler }) => {
  const { id, name, img, price, quantity, shipping } = product;
  return (
    <div className="review-cart">
      <img src={img} alt="" />
      <div className="review-detail">
        <p>{name}</p>
        <p className="small">
          Price: <span className="orange">${price}</span>
        </p>
        <p className="small">
          Quantity: <span className="orange">{quantity}</span>
        </p>
      </div>
      <button onClick={() => delBtnHandler(id)} className="btn">
        <FontAwesomeIcon className="del" icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default ReviewProduct;
