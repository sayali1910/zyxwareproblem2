type status = 'completed' | 'in progress' | 'not started'
class Task {
  name: string;
  description: string;
  dueDate: Date;
  status: status;

  constructor(name: string, description: string, dueDate: Date) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.status = 'not started';
  }
  setStatus(tobeMarkStatus:status) {
    this.status = tobeMarkStatus;
  }
}
class TodoList {
  name: string;
  description: string;
  tasks: Array<Task>;
  
  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
    this.tasks = [];
  }
  addTask(task: Task) {
    this.tasks.push(task);
  }
  editList(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
  deleteTask(task: Task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}

const myTodoList = new TodoList('My To-Do List', 'This is my to-do list'); 
myTodoList.addTask(new Task('Task 1', 'This is task 1', new Date())); 
myTodoList.addTask(new Task('Task 2', 'This is task 2', new Date())); 
myTodoList.addTask(new Task('Task 3', 'This is task 3', new Date()));
myTodoList.tasks[0].setStatus('completed'); 
myTodoList.tasks[0].setStatus('in progress'); 
console.log(myTodoList); 
