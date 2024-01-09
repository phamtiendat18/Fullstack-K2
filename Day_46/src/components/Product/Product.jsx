import React, { useEffect, useRef } from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import {
  getProductDetail,
  postProduct,
} from "../../redux/slices/productsSlice";
import { Link, useNavigate } from "react-router-dom";
const Product = ({ id, image, name, price }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let idApi = useRef(id);
  const handleClick = () => {
    dispatch(getProductDetail(id));
    navigate(`/detail/:${id}`);
  };
  const addToCart = () => {
    dispatch(postProduct(id));
  };
  return (
    <div className="product-item">
      <div className="product-header">
        <img className="product-image" src={image} onClick={handleClick} />
        <h3 className="product-name">{name}</h3>
      </div>
      <div className="product-info">
        <h3 className="product-price">${price.toLocaleString("de-DE")}</h3>
        <button className="add-btn" onClick={addToCart}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Product;
