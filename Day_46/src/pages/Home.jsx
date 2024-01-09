import React, { useEffect } from "react";
import ProductList from "../components/ProductList/ProductList";
import Header from "../components/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <ProductList />
    </>
  );
};

export default Home;
