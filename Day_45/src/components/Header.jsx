import React from "react";
import { useSelector } from "react-redux";
const Header = ({ remainTimes }) => {
  const value = useSelector((state) => state.value.value);
  const MAX_TIME = Math.ceil(Math.log2(value));

  return (
    <div>
      <h2>Chào mừng bạn đến với trò chơi đoán số!</h2>
      <h2>
        Còn {remainTimes}/{MAX_TIME} lần
      </h2>
      <h2>Bạn cần tìm kiếm một số từ 1 đến {value}</h2>
    </div>
  );
};

export default Header;
