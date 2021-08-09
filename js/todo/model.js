export default class Model {
  constructor() {
    this.tasks = [];
  }

  addTask(taskText) {
    const newTask = {
      status: "active",
      text: taskText,
    };

    this.tasks.push(newTask);
  }

  doneTask(task) {
    task.status = "done";
  }

  removeTask(task) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }
}
