// 🧠 STEP 1: SELECT ELEMENTS FROM THE PAGE
// Select the input where users type their todo (id="todoInput")
// Select the button to add the todo (id="addBtn")
// Select the unordered list where todos will appear (id="todoList")

const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

// 💾 STEP 2: LOAD TODOS FROM LOCALSTORAGE
// Try to get the key "todos" from localStorage
// If it exists, parse the JSON string into an array
// If it doesn’t exist, start with an empty array
// Display any saved todos

let todos = JSON.parse(localStorage.getItem("todos")) || [];
renderTodos();

// 🎯 STEP 3: ADD A TODO
// When the user types something and clicks the button:
// - create a new todo string
// - add it to the todos array
// - save the updated array to localStorage
// - update the page and clear the input
addBtn.addEventListener("click", () => {
  const newTodo = todoInput.value.trim();
  if (newTodo !== "") {
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
    todoInput.value = "";
  }
});

// 🔄 STEP 4: RENDER TODOS
// - Clear the list
// - Loop through todos and create a <li> for each
// - Add a ❌ button to delete the todo

// function renderTodos() {
//     todoList.innerHTML = "";
//     todos.forEach((item, index) => {
//       newItem = document.createElement("li");
//       newItem.innerHTML = item;

//       xButton = document.createElement("button");
//       xButton.innerHTML = "❌";

//       todoList.appendChild(newItem);
//     });
// }

// <ul>
//   <li>iitem<button>❌</button></li>
//   <li>iitem</li><button>❌</button>
// </ul>

// <li>item</li>
// [item1, item2, item3]
// indexes: 0, 1, 2

function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((item, index) => {
    const newItem = document.createElement("li");
    newItem.textContent = item;
    const xButton = document.createElement("button");
    xButton.textContent = "❌";
    xButton.addEventListener("click", () => {
      todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(todos));
      renderTodos();
    });

    todoList.appendChild(xButton);
    todoList.appendChild(newItem);
  });
}
