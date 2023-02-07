import React from "react";
import { useContext } from "react";
import { COUNTER_CONTEXT } from "../App";
import Child from "./Child";

const Parent = () => {
  const { count } = useContext(COUNTER_CONTEXT);
  return (
    <div>
      <h1>{count}</h1>
      <Child />
    </div>
  );
};

export default Parent;
