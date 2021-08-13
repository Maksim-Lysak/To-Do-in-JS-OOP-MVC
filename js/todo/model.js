export default class Model {
  constructor() {
    this.tasks = [];
    this.loadToLocalStorage();
  }

  addTask(taskText) {
    let id = 1;

    if (this.tasks.length > 0) {
      id = this.tasks[this.tasks.length - 1]['id'] + 1;
    }

    const newTask = {
      status: 'active',
      text: taskText,
      id: id,
    };

    this.tasks.push(newTask);
    this.saveToLocalStorage();

    return newTask;
  }

  changeStatusTask(task) {
    if (task.status === 'active') {
      task.status = 'done';
    } else {
      task.status = 'active';
    }
    this.saveToLocalStorage();
  }

  findTask(id) {
    const task = this.tasks.find((task) => {
      if (task.id == id) {
        return true;
      }
    });
    return task;
  }

  removeTask(task) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  loadToLocalStorage() {
    const localData = localStorage.getItem('tasks');
    if (localData) {
      this.tasks = JSON.parse(localData);
    }
  }
}
