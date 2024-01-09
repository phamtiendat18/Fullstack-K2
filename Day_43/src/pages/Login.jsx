import React, { useEffect, useState } from "react";
import "../css/Login.css";
import { client } from "../server/client";
import { config } from "../server/config";
import apiKey from "../server/apiKey";
const { LIMIT } = config;
const Login = ({ onGetEmail, onGetDatas }) => {
  const [email, setEmail] = useState("phamtiendat2002nd@gmail.com");

  // useEffect(() => {

  //   localStorage.clear();
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { response } = await apiKey(email);
    if (response.status === 200) {
      const nameUser = email.split("@")[0];
      alert(`Chào mừng ${nameUser} đã quay trở lại`);
      localStorage.setItem("email", email);
      onGetEmail(true);
      const query = { limit: LIMIT };
      getProducts(query);
    } else {
      onGetEmail(false);
      setEmail("");
    }
  };
  const getProducts = async (query = {}) => {
    const queryString = new URLSearchParams(query).toString();
    const { data } = await client.get(`/products?${queryString}`);
    const products = data.data;
    onGetDatas(products);
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <div className="login-page">
        <div className="wrapper">
          <h2>Đăng nhập</h2>
          <form className="login" onSubmit={handleSubmit}>
            <input
              className="email"
              type="email"
              placeholder={"example@example.com"}
              onChange={handleChange}
              value={email}
            />
            <button className="login-btn">Đăng nhập</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
