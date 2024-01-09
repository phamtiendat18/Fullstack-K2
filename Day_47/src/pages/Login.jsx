import React, { useState } from "react";
import { useDispatch } from "react-redux";
import apiKey from "../API/apiKey";
import { getApi, getTask } from "../redux/slices/taskSlice";
import { checkLoginSlice } from "../redux/slices/checkLoginSlice";
import { getColumn } from "../redux/slices/columnSlice";
const { updateLogin } = checkLoginSlice.actions;
const Login = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { response } = await apiKey(email);
    console.log(response);
    setEmail("");
    if (response.status === 200) {
      dispatch(getTask());
      dispatch(getColumn());
      dispatch(updateLogin(true));
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button>Login</button>
    </form>
  );
};

export default Login;
