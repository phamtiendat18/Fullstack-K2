import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import { useLayoutEffect, useEffect } from "react";
import { checkLoginSlice } from "./redux/slices/checkLoginSlice";
import { getColumn } from "./redux/slices/columnSlice";
import { getApi, getTask } from "./redux/slices/taskSlice";
import { client } from "./API/client";

const { updateLogin } = checkLoginSlice.actions;
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("apiKey")) {
      client.setApiKey(localStorage.getItem("apiKey"));
      dispatch(getColumn());
      dispatch(getTask());
      dispatch(updateLogin(true));
    } else {
      dispatch(updateLogin(false));
    }
  }, []);
  const isLogin = useSelector((state) => {
    return state.isLogin.checkLogin;
  });
  return <div>{isLogin ? <Home /> : <Login />}</div>;
};

export default App;
