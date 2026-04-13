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

    //Läser todos
    public getTodos(): Todo[] {
        return this.todos;
    }
}