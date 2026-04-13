import './style.css';
import { TodoStorage } from './services/TodoStorage';
import { TodoList } from './models/TodoList';

const storage = new TodoStorage();
const todoList = new TodoList (storage);

// Kolla vad som laddas från localStorage
console.log('TodoList:', todoList);
console.log('Direkt från storage:', storage.loadTodos());
console.log('getTodos():', todoList.getTodos());