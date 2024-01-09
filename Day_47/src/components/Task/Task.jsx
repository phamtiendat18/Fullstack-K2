import React from "react";
import "./Task.css";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
const Task = ({ task, id, content }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: id, data: { ...task } });
  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
      opacity: isDragging ? 0.5 : undefined,
  };
  return (
    <div
      className="task-item"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <p>{content}</p>
    </div>
  );
};

export default Task;
