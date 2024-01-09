import React, { useState } from "react";
import { client } from "../Api/client";

const TodoForm = ({ getTodo }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = async (e) => {
    // prevent default action
    e.preventDefault();
    if (todo) {
      const { response, data } = await client.post("/todos", {
        todo: todo,
        isCompleted: false,
      });
      // add todo
      // clear form after submission
      setTodo("");
      getTodo();
    }
  };
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="todo-input"
        placeholder="Thêm công việc mới..."
      />
      <button className="todo-btn">Thêm mới</button>
    </form>
  );
};

export default TodoForm;
