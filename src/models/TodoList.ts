import type { Todo } from './Todo';
import { TodoStorage } from '../services/TodoStorage';


export class TodoList {
    //Lista som håller alla Todos i minnet
    private todos: Todo[] = [];
    // Referens till storage-klassen som ansvarar för localStorage
    private storage: TodoStorage;

    // Constructor körs när man skapar en ny TodoList
    constructor(storage: TodoStorage) {
        // Tar emot en färdig storage-instans från main.ts och sparar den i klassen
        this.storage = storage;
        // Ladda sparade Todos direkt när klassen skapas
        this.todos = this.storage.loadTodos();
    }

    //Lägg till todos
    public addTodo(task: string, priority: number): boolean {
        const trimmedTask = task.trim(); //Tar bort mellanslag

        // Tom input blir ogiltig och returnerar false
        if (trimmedTask === '') {
            return false;
        }

        // Prioritering måste vara ett heltal och får ej vara mindre än 1 eller högre än 3. 
        if (!Number.isInteger(priority) || priority < 1 || priority > 3) {
            return false;
        }

        const newTodo: Todo = {
            task: trimmedTask,
            completed: false,
            priority: priority,
        };

        this.todos.push(newTodo);
        this.storage.saveTodos(this.todos);

        return true;
    }

    //Läser todos
    public getTodos(): Todo[] {
        return this.todos;
    }
}