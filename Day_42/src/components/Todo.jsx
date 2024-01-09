import React from "react";
import { client } from "../Api/client";

const Todo = ({ task, editTodo, toggleComplete, getTodo }) => {
  const handleDelete = async () => {
    const { response } = await client.delete(`/todos/${task._id}`);
    getTodo();
  };
  return (
    <div className="todo">
      <p
        className={`${task.isCompleted ? "completed" : "uncompleted"}`}
        onClick={() => toggleComplete(task._id)}
      >
        {task.todo}
      </p>
      <div>
        <button className="edit-icon" onClick={() => editTodo(task._id)}>
          Sửa
        </button>
        <button className="delete-icon" onClick={handleDelete}>
          Xóa
        </button>
      </div>
    </div>
  );
};

export default Todo;
