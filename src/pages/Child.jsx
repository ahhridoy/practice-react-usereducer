import React from "react";
import { useContext } from "react";
import { COUNTER_CONTEXT } from "../App";

const Child = () => {
  const { count, setCount } = useContext(COUNTER_CONTEXT);
  return (
    <div className="box">
      <h1 className="count">{count}</h1>
      <button
        className="increment"
        onClick={() => setCount((prevState) => prevState + 1)}
      >
        Increment
      </button>
      <button
        className="decrement"
        onClick={() => setCount((prevState) => prevState - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

export default Child;
