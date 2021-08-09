import Model from "./model.js";

const model = new Model();

console.log(model);
model.addTask("что - то");
model.addTask("что - то");
model.addTask("чтото");
console.log(model);

model.doneTask(model.tasks[0]);
console.log(model.tasks);

model.removeTask(model.tasks[1]);
console.log(model.tasks);
