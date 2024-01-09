import React, { useEffect } from "react";
import "./ProductList.css";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../../redux/slices/productsSlice";
import Product from "../Product/Product";
import Loading from "../Loading/Loading";
import { config } from "../../API/config";

const { PAGE_LIMIT } = config;
const ProductList = () => {
  const products = useSelector((state) => {
    return state.products.products;
  });
  const status = useSelector((state) => {
    return state.products.status;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    const query = {
      limit: PAGE_LIMIT,
      page: 1,
    };
    dispatch(getProducts(query));
  }, []);
  if (status === "pending") {
    return (
      <div className="wrapper">
        <Loading />
      </div>
    );
  }
  if (status === "success") {
    return (
      <>
        <h1 style={{ textAlign: "center", margin: 20 }}>PRODUCT LIST</h1>
        <div className="products-list">
          {products.map(({ _id, name, image, price }) => (
            <Product
              key={_id}
              id={_id}
              name={name}
              image={image}
              price={price}
            />
          ))}
        </div>
      </>
    );
  }
};

export default ProductList;
