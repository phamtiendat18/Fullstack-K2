import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Counter from "../components/Counter/Counter";

const Cart = () => {
  const cart = useSelector((state) => {
    return state.products.cart;
  });
  return (
    <div className="cart">
      <h1>CART</h1>
      {cart.length ? (
        cart.map(
          ({
            brand,
            category,
            description,
            image,
            name,
            price,
            quantity,
            _id,
          }) => {
            return (
              <div className="item" key={Math.random()}>
                <div className="left-item">
                  <img src={image} />
                  <Counter />
                </div>
                <div className="right-item">
                  <span className="brand">{brand}</span>
                  <span className="name-product">{name}</span>
                  <p className="price-product">${price}</p>
                </div>
              </div>
            );
          }
        )
      ) : (
        <h2>Không có sản phẩm nào trong giỏ hàng</h2>
      )}
      <div className="actions">
        <button className="btn-home" style={{ margin: 20 }}>
          <Link to={"/"}>Go home</Link>
        </button>
        <button className="btn-checkout">
          <Link>Check out</Link>
        </button>
      </div>
    </div>
  );
};

export default Cart;
