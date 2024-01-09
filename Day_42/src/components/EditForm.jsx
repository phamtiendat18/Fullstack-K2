import React, { useState } from "react";
import { client } from "../Api/client";

const EditForm = ({ editTodo, task, getTodo }) => {
  const [todo, setTodo] = useState(task.todo);

  const handleSubmit = async (e) => {
    // prevent default action
    e.preventDefault();
    const { response } = await client.patch(`/todo/${task._id}`, {
      todo: todo,
    });
    // edit todo
    editTodo(todo, task._id);
    getTodo();
  };
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="todo-input"
        placeholder="Update todo..."
      />
      <button type="submit" className="todo-btn">
        Update
      </button>
    </form>
  );
};

export default EditForm;
