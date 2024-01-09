import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { getProducts, postProduct } from "../../redux/slices/productsSlice";

const ProductDetail = () => {
  const { brand, category, description, image, name, price, quantity, _id } =
    useSelector((state) => {
      return state.products.productDetail;
    });
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <div className="product-detail">
        <img src={image} alt="" />
        <div className="description">
          <h2 className="brand">{brand}</h2>
          <h4 className="name">{name}</h4>
          <h3 className="price">${price}</h3>
          <h4>{description}</h4>
          <p>category: {category}</p>
          <div className="actions">
            <button>
              <Link to={"/"}>Go home</Link>
            </button>
            <button
              className="add-btn"
              onClick={() => dispatch(postProduct(_id))}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
