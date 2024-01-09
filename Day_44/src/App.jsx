import React from "react";
import LoginPage from "./components/LoginPage";
import MainPage from "./components/MainPage";
import Loader from "./components/Loader";

const App = () => {
  return (
    <div className="container">
      <LoginPage />
      <MainPage />
    </div>
  );
};

export default App;
