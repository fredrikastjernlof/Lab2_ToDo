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
        li.classList.add("todo-item");
        li.textContent = `${todo.task} (prio: ${todo.priority})`;

        const targetList = todo.completed ? completedListElement : todoListElement;

        if (todo.completed) {
            li.classList.add("completed");
        } else {
            li.classList.add(`priority-${todo.priority}`);
        }

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

    // Om inga aktiva todos finns
    if (todoListElement.children.length === 0) {
        const li = document.createElement("li");
        li.classList.add("empty-state");
        li.textContent = "Du har inte lagt till några ToDo´s ännu";
        todoListElement.appendChild(li);
    }

    // Om inga klara todos finns
    if (completedListElement.children.length === 0) {
        const li = document.createElement("li");
        li.classList.add("empty-state");
        li.textContent = "Inga slutförda ToDo´s än";
        completedListElement.appendChild(li);
    }

}

