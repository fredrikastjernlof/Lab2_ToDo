import './style.css';
import { TodoStorage } from './services/TodoStorage';
import { TodoList } from './models/TodoList';
import { renderTodos } from './ui/renderTodos';

const storage = new TodoStorage();
const todoList = new TodoList(storage);

const form = document.getElementById("todo-form") as HTMLFormElement;
const taskInput = document.getElementById("task-input") as HTMLInputElement;
const priorityInput = document.getElementById("priority-input") as HTMLSelectElement;
const errorMessage = document.getElementById("error-message") as HTMLParagraphElement;
const todoListElement = document.getElementById("todo-list") as HTMLUListElement;
const completedListElement = document.getElementById("completed-list") as HTMLUListElement;
const clearCompletedButton = document.getElementById("clear-completed-btn") as HTMLButtonElement;

function updateUI() {
  renderTodos(
    todoList.getTodos(),
    todoListElement,
    completedListElement,
    (index) => {
      todoList.markTodoCompleted(index);
      updateUI();
    },
    (index) => {
      todoList.deleteTodo(index);
      updateUI();
    }
  );
}

updateUI();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const task = taskInput.value;
  const priority = Number(priorityInput.value);

  const isAdded = todoList.addTodo(task, priority);


  // Tar bort gamla error-klasser först
  taskInput.classList.remove("input-error");
  priorityInput.classList.remove("input-error");

  if (!isAdded) {
    errorMessage.textContent = "Kontrollera att alla fält är korrekt ifyllda.";

    if (task.trim() === "") {
      taskInput.classList.add("input-error");
    }

    if (!priority || priority < 1 || priority > 3) {
      priorityInput.classList.add("input-error");
    }
  } else {
    errorMessage.textContent = "";
  }

  console.log("Added:", isAdded);
  console.log("ToDo´s now:", todoList.getTodos());

  if (isAdded) {
    taskInput.value = "";
    priorityInput.value = "";
    updateUI();
  }

})