import type { Todo } from "../models/Todo";

// Rendera lista med ToDo´s 
export function renderTodos(
  todos: Todo[],
  todoListElement: HTMLUListElement,
  completedListElement: HTMLUListElement,
  onTodoCompleted: (index: number) => void,
  onTodoDeleted: (index: number) => void
): void {

    todoListElement.innerHTML = "";
    completedListElement.innerHTML = "";

    // Loopa genom varje ToDo
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.textContent = `${todo.task} (prio: ${todo.priority}) ${todo.completed ? "✅" : ""}`;

        const targetList = todo.completed ? completedListElement : todoListElement;

        if (!todo.completed) {
            const button = document.createElement("button");
            button.textContent = "Klar";

            button.addEventListener("click", () => {
                onTodoCompleted(index);
            });

            li.appendChild(button);
        }

        if (todo.completed) {
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Ta bort";

            deleteButton.addEventListener("click", () => {
                onTodoDeleted(index);
            });

            li.appendChild(deleteButton);
        }

        targetList.appendChild(li);
    });
}