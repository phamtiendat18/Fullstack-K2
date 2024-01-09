import { config } from "./config.js";
import { client } from "./client.js";

const { SERVER_API } = config;

const overlay = document.querySelector(".overlay");

const container = document.querySelector(".container");
const todoMain = container.querySelector(".todo-main");
const searchForm = todoMain.querySelector(".search-form");
const searchWrapper = searchForm.querySelector(".search-wrapper");
const inputSearch = searchWrapper.querySelector(".search");
const btnSearch = searchWrapper.querySelector(".btn-search");
const btnAdd = searchForm.querySelector(".btn-add");
const btnCompleted = container.querySelector(".btn-completed");
const arrowIcon = btnCompleted.querySelector(".arrow-icon");
const addForm = document.querySelector(".add-form");
const inputTodo = addForm.querySelector(".add-todo");
const btnSave = addForm.querySelector(".btn-save");
const btnCancel = addForm.querySelector(".btn-cancel");
const todoList = container.querySelector(".todo-list");

const postTodos = async () => {
  const { response } = await client.post("/todos", {
    content: `${inputTodo.value}`,
    complete: false,
  });
};
const getTodos = async () => {
  const { response } = await client.get("/todos");
};
const putTodos = async () => {
  const { response } = await client.put("/todo", {
    content: `${inputTodo.value}`,
  });
};
const deleteTodos = async (id) => {
  const { response } = await client.delete(`/todos/${id}`);
  await renderTodos();
};
function showAddForm() {
  overlay.classList.add("show");
  addForm.classList.add("show");
  inputTodo.value = "";
}
function closeAddForm() {
  overlay.classList.remove("show");
  addForm.classList.remove("show");
}
btnAdd.addEventListener("click", showAddForm);
btnCancel.addEventListener("click", closeAddForm);
btnSave.addEventListener("click", () => {
  if (inputTodo.value.trim()) {
    postTodos();
    closeAddForm();
    renderTodos();
  }
});

const controllerActions = async () => {
  const todosEl = [...todoList.querySelectorAll(".todo")];
  todosEl.forEach((todo) => {
    const id = todo.dataset.id;
    const content = todo.querySelector(".content").innerText;
    const actions = todo.querySelector(".actions");
    const btnDelete = actions.querySelector(".btn-delete");
    const btnEdit = actions.querySelector(".btn-edit");
    btnDelete.addEventListener("click", () => {
      deleteTodos(id);
    });
    btnEdit.addEventListener("click", () => {
      showAddForm();
      inputTodo.value = content;
      putTodos();
    });
  });
};

const renderTodos = async () => {
  const { data: todos } = await client.get("/todos");
  let html = todos.map((todo) => {
    return `
            <div class="todo" data-id=${todo.id}>
                <p class="content">${todo.content}</p>
                  <div class="actions">
                    <button class="btn-delete">
                      <i class="fa-regular fa-trash-can"></i>
                    </button>
                    <button class="btn-edit">
                      <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button class="btn-complete">
                      <i class="fa-solid fa-check-to-slot"></i>
                    </button>
                  </div>
            </div>
  `;
  });
  todoList.innerHTML = html;
  controllerActions();
};
renderTodos();
