import { saveTasks, loadTasks } from './storage.js';
import { renderTasks } from './taskManager.js';
import { debounce, throttle } from './utils.js';

const taskInput = document.getElementById('new-task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const searchInput = document.getElementById('search-input');
const clearAllBtn = document.getElementById('clear-all');
const categorySelect = document.getElementById('category-select');
const backToTopBtn = document.getElementById('back-to-top');

let tasks = loadTasks();
renderTasks(tasks);

addTaskBtn.addEventListener('click', () => {
  const text = taskInput.value.trim();
  const category = categorySelect.value;
  if (text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      category
    };
    tasks.push(newTask);
    saveTasks(tasks);
    renderTasks(tasks);
    taskInput.value = '';
  }
});

searchInput.addEventListener('input', debounce(() => {
  const query = searchInput.value.toLowerCase();
  const filtered = tasks.filter(task => task.text.toLowerCase().includes(query));
  renderTasks(filtered);
}, 300));

clearAllBtn.addEventListener('click', () => {
  if (confirm('Clear all tasks?')) {
    tasks = [];
    saveTasks(tasks);
    renderTasks(tasks);
  }
});

window.addEventListener('scroll', throttle(() => {
  backToTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
}, 200));

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

taskList.addEventListener('click', (e) => {
  const id = parseInt(e.target.dataset.id);
  if (e.target.classList.contains('delete')) {
    tasks = tasks.filter(t => t.id !== id);
  } else if (e.target.classList.contains('toggle')) {
    tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
  }
  saveTasks(tasks);
  renderTasks(tasks);
});
