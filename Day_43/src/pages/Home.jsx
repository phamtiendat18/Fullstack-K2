import React, { useState } from "react";
import Product from "../components/Product";
import "../css/Home.css";
import Cart from "../components/Cart";
import { useSelector } from "../core/hook";

const Home = ({ datas }) => {
  const { carts } = useSelector();
  let isCart = false;
  if (carts.length > 0) {
    isCart = true;
  }
  const [products, setProducts] = useState([]);
  // let carts = localStorage.getItem("carts");
  // if (!carts) {
  //   carts = localStorage.setItem("carts", JSON.stringify(products));
  //   // carts = JSON.stringify(products);
  // }
  // console.log("carts :", carts);
  return (
    <>
      <div className="products">
        <h2 style={{ fontSize: "3rem", marginBottom: 30, color: "white" }}>
          Chào mừng bạn đến với sopee
        </h2>
        <div className="wrapper">
          {datas ? (
            datas.map((data) => (
              <Product
                key={data._id}
                id={data._id}
                src={data.image}
                name={data.name}
                price={data.price}
                quantity={data.quantity}
                products={products}
                onSetData={setProducts}
              />
            ))
          ) : (
            <h1>xin lỗi</h1>
          )}
        </div>
      </div>
      <div className="cart">
        <h2>GIỎ HÀNG</h2>
        {isCart ? <Cart /> : <h3>Không có sản phẩm nào!</h3>}
      </div>
    </>
  );
};

export default Home;
