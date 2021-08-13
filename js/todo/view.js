export default class View {
  constructor(tasks) {
    tasks.forEach((task) => this.renderTasks(task));
  }

  elements = {
    input: document.getElementById('newTask'),
    form: document.getElementById('form'),
    taskList: document.getElementById('taskList'),
  };

  renderTasks(task) {
    let complitClass = '';
    let checked = '';

    if (task.status === 'done') {
      complitClass = 'completed';
      checked = 'checked';
    }

    const taskHTML = `
      <li class="todo-item" data-id='${task.id}'>
        <label class="todo-item-label">
          <input class="checkbox" type="checkbox" ${checked}/>
          <span class='${complitClass}'>${task.text}</span>
          <button class="btn btn-secondary btn-sm" data-delete>Удалить</button>
        </label>
      </li>`;

    this.elements.taskList.insertAdjacentHTML('beforeend', taskHTML);
  }

  chengeStatus(task) {
    const taskElement = this.elements.taskList.querySelector(
      `[data-id="${task.id}"]`,
    );
    const taskTextElement = taskElement.querySelector('span');

    if (task.status === 'done') {
      taskTextElement.classList.add('completed');
    } else {
      taskTextElement.classList.remove('completed');
    }
  }

  deleteTask(task) {
    const taskElement = this.elements.taskList.querySelector(
      `[data-id="${task.id}"]`,
    );
    taskElement.remove();
  }

  clearInput() {
    this.elements.input.value = '';
  }
}
