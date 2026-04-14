import './style.css';
import { TodoStorage } from './services/TodoStorage';
import { TodoList } from './models/TodoList';

const storage = new TodoStorage();
const todoList = new TodoList (storage);

// Kolla vad som laddas från localStorage
console.log('getTodos():', todoList.getTodos());
console.log('Lägg till giltig todo:', todoList.addTodo('Plugga TS', 1));
console.log('Lägg till tom todo:', todoList.addTodo(' ', 2));
console.log('Ogiltig prioritering:', todoList.addTodo('Test', 5));
console.log('Efter addTodo:', todoList.getTodos());

todoList.markTodoCompleted(2);
console.log("Efter markTodoCompleted:", todoList.getTodos());