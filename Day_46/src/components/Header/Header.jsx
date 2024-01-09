import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/"}>
        <h1 className="logo">SOPI</h1>
      </Link>
      <button className="btn-cart">
        <Link to={"/cart"}>Cart</Link>
      </button>
    </div>
  );
};

export default Header;
