import {
  Input,
  useToast,
  Button,
  Icon,
  position,
  theme,
  useColorMode,
} from "@chakra-ui/react";
import React, { useLayoutEffect, useRef, useState } from "react";
import SliderThumbWithTooltip from "./SliderThumbWithTooltip";
import { useSelector } from "react-redux";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
const InputNumber = ({ onRemainTimes }) => {
  const [placeholder, setPlaceholder] = useState("Hãy thử nhập vào 1 số");
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();
  const value = useSelector((state) => state.value.value);
  const maxDigits = String(value).length;
  const [valueInput, setValueInput] = useState("");
  const randomNumber = Math.ceil(Math.random() * value);
  let trueNumber = useRef(randomNumber);
  const MAX_TIME = Math.ceil(Math.log2(value));
  let times = useRef(MAX_TIME);
  const handleKey = (e) => {
    const keyCode = e.target.value;
    const keyValue = String.fromCharCode(keyCode);
    if (/e\+/.test(keyCode)) {
      e.preventDefault();
    }
  };
  const handleChange = (e) => {
    // console.log(e.keyCode);
    const re = /[0-9]/;
    let number = re.test(e.target.value);
    if (!number) {
      e.preventDefault();
    }

    // console.log(number);
    // console.log(String(e.target.value).match(/\d/g).length);
    // if (number < maxDigits) {
    //   setValueInput(e.target.value);
    // }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (+valueInput === trueNumber.current) {
      toast({
        title: "Bạn đã đoán đúng!",
        position: "top-right",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      trueNumber.current = randomNumber;
    } else {
      setPlaceholder(value);
      setValueInput("");
      toast({
        title: "Bạn đã đoán sai!",
        position: "top-right",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      if (times.current === 0) {
        toast({
          title: "Bạn đã hết lượt chơi!",
          position: "top-right",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        trueNumber.current = randomNumber;
        times.current = MAX_TIME;
      }
      times.current = times.current - 1;
      let timesRemain = times.current;
      onRemainTimes(timesRemain);
    }
  };
  useLayoutEffect(() => {}, [valueInput]);

  return (
    <div className="main-app">
      <Button
        style={{ position: "fixed", top: 20, right: 20 }}
        onClick={toggleColorMode}
      >
        {colorMode === "light" ? <Icon as={MoonIcon} /> : <Icon as={SunIcon} />}
      </Button>
      <SliderThumbWithTooltip />
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="input-value">Hãy thử nhập một số!</label>
        <Input
          placeholder={placeholder}
          type="number"
          size="md"
          width={1000}
          height={10}
          variant="outline"
          border="1px solid black"
          borderRadius={5}
          padding={4}
          id="input-value"
          onKeyDown={handleKey}
        />
      </form>
    </div>
  );
};

export default InputNumber;
