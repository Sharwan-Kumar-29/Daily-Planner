const taskList = document.getElementById('task-list');

export function createTaskElement(task) {
  const taskDiv = document.createElement('div');
  taskDiv.className = 'task-item';
  if (task.completed) taskDiv.classList.add('completed');

  const span = document.createElement('span');
  span.textContent = `${task.text} (${task.category})`;

  const toggleBtn = document.createElement('button');
  toggleBtn.textContent = task.completed ? 'Undo' : 'Complete';
  toggleBtn.className = 'toggle';
  toggleBtn.dataset.id = task.id;

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.className = 'delete';
  delBtn.dataset.id = task.id;

  taskDiv.append(span, toggleBtn, delBtn);
  return taskDiv;
}

export function renderTasks(tasks) {
  taskList.innerHTML = '';
  tasks.forEach(task => {
    taskList.appendChild(createTaskElement(task));
  });
}
