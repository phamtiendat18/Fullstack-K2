import React from "react";

export const TodoItem = ({ todo }) => {
  return (
    <div className="item">
      <span className="todo-name">{todo}</span>
      <div className="actions">
        <button className="edit-btn">Sửa</button>
        <button className="destroy-btn">Xóa</button>
      </div>
    </div>
  );
};
