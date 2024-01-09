import React, { useState } from "react";
import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  return (
    <div className="counter">
      <button className="decrement" onClick={() => setCount(count - 1)}>
        -
      </button>
      <span className="count">{count}</span>
      <button className="increment" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
};

export default Counter;
