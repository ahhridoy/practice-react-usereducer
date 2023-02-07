import React from "react";

const Todo = ({ todo }) => {
  const { title, des } = todo;
  return (
    <div>
      <h2>{title}</h2>
      <p>{des}</p>
    </div>
  );
};

export default Todo;
