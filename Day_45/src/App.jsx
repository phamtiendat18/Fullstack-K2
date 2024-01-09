import React, { useState } from "react";
import "./css/App.css";
import InputNumber from "./components/InputNumber";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import { useSelector } from "react-redux";

const App = () => {
  const [remainTime, setReMainTime] = useState();
  const getRemainTime = (times) => {
    setReMainTime(times);
  };
  return (
    <ChakraProvider>
      <Header remainTimes={remainTime} />
      <InputNumber onRemainTimes={getRemainTime} />
    </ChakraProvider>
  );
};

export default App;
