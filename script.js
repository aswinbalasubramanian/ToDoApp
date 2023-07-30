class TodoList {
    constructor() {
      this.tasks = [];
      this.addTask = this.addTask.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }
  
    init() {
      const addTaskButton = document.getElementById('add-task');
      addTaskButton.addEventListener('click', this.addTask);
    
      const taskInput = document.getElementById('new-task');
      taskInput.addEventListener('keypress', this.handleKeyPress);
    
      this.displayTasks();
    }
  
    addTask() {
      const taskInput = document.getElementById('new-task');
      const taskText = taskInput.value.trim();
    
      if (taskText !== '') {
        this.tasks.push({
          text: taskText,
          completed: false
        });
        console.info('Tasks->'+this.tasks);
        taskInput.value = '';
        this.displayTasks();
      }
    }
  
    displayTasks() {
      const taskList = document.getElementById('task-list');
      taskList.innerHTML = '';
    
      this.tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = task.text;
    
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
          this.removeTask(index);
        });
    
        const markCompleteButton = document.createElement('button');
        markCompleteButton.textContent = 'Mark Complete';
        markCompleteButton.addEventListener('click', () => {
          this.toggleCompletion(index);
        });
    
        listItem.appendChild(removeButton);
        listItem.appendChild(markCompleteButton);
    
        if (task.completed) {
          listItem.style.textDecoration = 'line-through';
        }
    
        taskList.appendChild(listItem);
      });
    }
  
    removeTask(index) {
      this.tasks.splice(index, 1);
      this.displayTasks();
    }
  
    toggleCompletion(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
      this.displayTasks();
    }
  
    handleKeyPress(event) {
      if (event.key === 'Enter') {
        this.addTask();
      }
    }
  }
  
  const todoList = new TodoList();
  todoList.init();
  