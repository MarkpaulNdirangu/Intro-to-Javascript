// Part 1: Variable Declarations and Conditionals
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');
let tasks = [];
const maxTasks = 10;

// Part 2: Custom Functions
function addTask() {
    const taskText = taskInput.value.trim();
    
    // Conditional to check if input is valid and task limit not exceeded
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    if (tasks.length >= maxTasks) {
        alert(`Maximum ${maxTasks} tasks allowed!`);
        return;
    }

    // Create task object
    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(task);
    renderTasks();
    updateTaskCount();
    taskInput.value = '';
}

function toggleTaskCompletion(taskId) {
    // Find task and toggle completion status
    tasks = tasks.map(task => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    renderTasks();
}

// Part 3: Loop Examples
function renderTasks() {
    // Clear existing list (For loop example)
    taskList.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        li.innerHTML = `
            ${task.text}
            <button onclick="toggleTaskCompletion(${task.id})">
                ${task.completed ? 'Undo' : 'Complete'}
            </button>
        `;
        taskList.appendChild(li);
    }

    // ForEach loop to log tasks to console
    tasks.forEach(task => {
        console.log(`Task: ${task.text}, Completed: ${task.completed}`);
    });
}

function clearTasks() {
    tasks = [];
    renderTasks();
    updateTaskCount();
}

// Part 4: DOM Interactions
function updateTaskCount() {
    // DOM Interaction 1: Update task count display
    taskCount.textContent = `Total Tasks: ${tasks.length}`;
}

// DOM Interaction 2: Add event listener for Enter key
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// DOM Interaction 3: Initialize display on page load
document.addEventListener('DOMContentLoaded', () => {
    renderTasks();
    updateTaskCount();
});
