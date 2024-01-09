import React from "react";
import "./Column.css";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Task from "../Task/Task";
import { addTask, taskSlice } from "../../redux/slices/taskSlice";
import {
  SortableContext,
  horizontalListSortingStrategy,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
const { addNewTask } = taskSlice.actions;
const Column = ({ column }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: column._id, data: { ...column } });
  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    height: "100%",
    opacity: isDragging ? 0.5 : undefined,
  };
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.taskList.tasks) || [];
  const list = tasks.filter((task) => task.column === column.title);
  const handleClickAddTask = () => {
    dispatch(
      addNewTask({
        content: `Task ${tasks.length + 1}`,
        columnName: column.columnName,
        column: column.title,
      })
    );
    const body = tasks.map((item) => {
      return {
        content: item.content,
        columnName: column.columnName,
        column: item.column,
      };
    });
    dispatch(addTask(body));
    // console.log(body);
  };

  return (
    <div
      className="column-task"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <div className="column-header">
        <h2>{column.columnName}</h2>
      </div>
      <SortableContext
        items={list ? list.map((task) => task._id) : []}
        strategy={verticalListSortingStrategy}
      >
        <div className="column-main">
          {list.map((item) => {
            return (
              <Task
                key={item._id}
                task={item}
                id={item._id}
                content={item.content}
              />
            );
          })}
        </div>

        <div
          className="column-footer"
          style={{ cursor: "pointer" }}
          onClick={handleClickAddTask}
        >
          + Add task
        </div>
      </SortableContext>
    </div>
  );
};

export default memo(Column);
