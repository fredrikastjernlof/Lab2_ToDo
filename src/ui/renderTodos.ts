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

    const sortedTodos = [...todos].sort((a, b) => a.priority - b.priority);

    // Loopa genom varje ToDo
    sortedTodos.forEach((todo) => {
        const li = document.createElement("li");
        li.textContent = `${todo.task} (prio: ${todo.priority})`;

        const targetList = todo.completed ? completedListElement : todoListElement;

        if (!todo.completed) {
            const button = document.createElement("button");
            button.textContent = "Klar";

            button.addEventListener("click", () => {
                onTodoCompleted(todo.id);
            });

            li.appendChild(button);
        }

        // Radera klargjord todo
        if (todo.completed) {
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Ta bort";

            deleteButton.addEventListener("click", () => {
                onTodoDeleted(todo.id);
            });

            li.appendChild(deleteButton);
        }

        targetList.appendChild(li);
    });
}