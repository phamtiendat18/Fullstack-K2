import React, { useEffect, useState } from "react";
import EditForm from "./EditForm";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import apiKey from "../Api/apiKey";
import { client } from "../Api/client";
import Welcome from "./Welcome/Welcome";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  let email = localStorage.getItem("email");
  const [name, setName] = useState("");
  if (!email) {
    email = window.prompt("Nhập email của bạn !", "example@example.com");
  }
  const Loading = (flag) => {
    setIsLoading(flag);
    return isLoading;
  };
  const getApiKey = async (email) => {
    const { response, data } = await apiKey(email);
    if (response.ok) {
      Loading(false);
      setName(email.split("@")[0]);

      localStorage.setItem("email", email);
      getTodo();
    } else {
      setTimeout(() => {
        alert("Email của bạn không đúng rồi :(, thử lại nha !");
      }, 2000);
    }
  };
  const getTodo = async () => {
    const { response, data } = await client.get("/todos");
    setTodos(data.data.listTodo);
  };

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo._id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo._id === id ? { ...todo, isCompeted: !todo.isCompleted } : todo
      )
    );
  };

  const editTodo = (id) => {
    setIsEditing(!isEditing);
    setTodos(
      todos.map((todo) =>
        todo._id === id ? { ...todo, isEditing: isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo._id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  useEffect(() => {
    getApiKey(email);
  }, []);
  return (
    <>
      {isLoading ? <Welcome name={name} /> : null}
      <div className="todo-list">
        <h1>Liệt kê công việc !</h1>
        <TodoForm getTodo={getTodo} />
        {todos.length === 0 ? (
          <h1>Không có todo nào !</h1>
        ) : (
          todos.map((todo) =>
            todo.isEditing ? (
              <EditForm
                key={todo._id}
                getTodo={getTodo}
                editTodo={editTask}
                task={todo}
              />
            ) : (
              <Todo
                key={todo._id}
                task={todo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                toggleComplete={toggleComplete}
                getTodo={getTodo}
              />
            )
          )
        )}
      </div>
    </>
  );
};

export default TodoList;
