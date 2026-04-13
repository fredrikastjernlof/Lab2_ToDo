import './style.css';
import { TodoStorage } from './services/TodoStorage';

const storage = new TodoStorage();

// Testdata
const testTodos = [
  { task: 'Test 1', completed: false, priority: 1 },
  { task: 'Test 2', completed: true, priority: 2 },
];

// Spara
storage.saveTodos(testTodos);
console.log('Sparat!');

// Ladda
const loadedTodos = storage.loadTodos();
console.log('Laddat:', loadedTodos);