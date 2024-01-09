import React, { useState } from "react";
import Image from "./Image";
import { useDispatch, useSelector } from "../core/hook";

const Product = ({ name, src, price, id, quantity, products, onSetData }) => {
  const priceVN = price.toLocaleString("de-DE");
  const { carts } = useSelector();
  const dispatch = useDispatch();
  const handleAdd = () => {
    localStorage.setItem("carts", JSON.stringify(carts));
    const index = carts.findIndex((item) => {
      return item.productId === id;
    });
    if (index === -1) {
      dispatch({
        type: "add/product",
        payload: {
          name: name,
          productId: id,
          price: price,
          left: quantity,
          quantity: 1,
        },
      });
    } else {
      carts[index].quantity += 1;
      carts[index].left -= 1;
      dispatch({
        type: "update/quantity",
      });
    }
  };
  return (
    <div className="product-item">
      <Image imgClass="product-image" src={src} />
      <span className="product-name">{name}</span>
      <div className="product-footer">
        <span className="price">{`${priceVN} VNĐ`}</span>
        <button className="add-btn" onClick={handleAdd}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
