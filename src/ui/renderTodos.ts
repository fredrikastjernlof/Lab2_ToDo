import type { Todo } from "../models/Todo";

// Rendera lista med ToDo´s 
export function renderTodos(
    todos: Todo[], 
    todoListElement: HTMLUListElement,
    onTodoCompleted: (index: number) => void
): void {

    todoListElement.innerHTML = "";

    // Loopa genom varje ToDo
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.textContent = `${todo.task} (prio: ${todo.priority}) ${todo.completed ? "✅" : ""}`;
        
        const button = document.createElement("button");
        button.textContent = "Check!";

        button.addEventListener("click", () => {
            onTodoCompleted(index);
        });

        li.appendChild(button);
        todoListElement.appendChild(li);
    });
}