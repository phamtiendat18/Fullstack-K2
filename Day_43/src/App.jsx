import React, { useEffect, useLayoutEffect, useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { config } from "./server/config";
import apiKey from "./server/apiKey";
import { client } from "./server/client";

const App = () => {
  const [login, setLogin] = useState(false);
  const [datas, setDatas] = useState([]);
  const setEmail = (value) => {
    setLogin(value);
  };

  useLayoutEffect(() => {
    const emailLocal = localStorage.getItem("email");
    const apiKeyLocal = localStorage.getItem("apiKey");
    if (emailLocal && apiKeyLocal) {
      setLogin(true);
    } else {
      {
        setLogin(false);
      }
    }
  }, []);

  const checkLogin = async () => {
    const { LIMIT } = config;
    const emailUser = localStorage.getItem("email");
    if (emailUser) {
      const { response } = await apiKey(emailUser);
      if (response.status === 200) {
        setLogin(true);
        const nameUser = emailUser.split("@")[0];
        // alert(`Chào mừng ${nameUser} đã quay trở lại`);
        localStorage.setItem("email", emailUser);
        const query = { limit: LIMIT };
        getProducts(query);
      } else {
        setLogin(false);
      }
    }
  };
  const getProducts = async (query = {}) => {
    const queryString = new URLSearchParams(query).toString();
    const { data } = await client.get(`/products?${queryString}`);
    const products = data.data;
    setDatas(products);
  };

  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <div className="container">
      {login ? (
        <Home datas={datas} />
      ) : (
        <Login onGetEmail={setEmail} onGetDatas={setDatas} />
      )}
    </div>
  );
};

export default App;
