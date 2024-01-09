import React, { Component } from "react";
import { TodoItem } from "./TodoItem";

export default class TodosForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addForm: {
        id: 0,
        todo: "",
      },
      todoList: [],
    };
  }
  setID = () => {
    this.setState({ id: this.state.addForm.id + 2 });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ id: this.state.addForm.id + 1 });
    const { todo, id } = this.state.addForm;
    console.log(id);

    this.setState({ todoList: [...this.state.todoList, todo] });
  };
  handleChange = (e) => {
    this.setState({
      addForm: { ...this.state.addForm, [e.target.name]: e.target.value },
    });
  };

  render() {
    const { todoList } = this.state;
    return (
      <div>
        <form className="todos-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="new-todo"
            placeholder="Thêm mới công việc..."
            name="todo"
            onChange={this.handleChange}
          />
          <button className="add-btn">Thêm mới</button>
        </form>
        <div className="todo-list">
          {todoList.map((item) => (
            <React.Fragment key={item.id}>
              <TodoItem data={item} />
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }
}
