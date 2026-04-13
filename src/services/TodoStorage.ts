import type { Todo } from '../models/Todo';

// Klass som hanterar lagring av todos i localStorage
export class TodoStorage {
    private storageKey = 'todos';

    //Sparar todos i localStorage
    public saveTodos(todos: Todo[]): void {
        localStorage.setItem(this.storageKey, JSON.stringify(todos));
    }

    public loadTodos(): Todo[] {
        const data = localStorage.getItem(this.storageKey); //Laddar data från localStorage

        if (!data) { //Om det inte finns någon data, returnera en tom array
            return [];
        }
        try {
            const parsed: Todo[] = JSON.parse(data); //Försök att parsa datan
            return parsed;
        } catch { //Om det inte går att parsa, logga felet och returnera en tom array
            return [];      
        }
    }
}