// Get elements
const inputField = document.getElementById('new-task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');
const searchTask = document.getElementById('search-tasks');

// Toggle input visibility
addTaskBtn.addEventListener('click', () => {
    if (inputField.style.display === 'none' || inputField.style.display === '') {
        inputField.style.display = 'block';
        inputField.focus();
    } else {
        inputField.style.display = 'none';
    }
});

// Add new item on 'Enter' keypress
inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addNewTask(inputField.value);
        inputField.value = ''; // Clear input field
        inputField.style.display = 'none'; // Hide input after adding
    }
});

//Search tasks
searchTask.addEventListener('keyup', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    document.querySelectorAll('li').forEach(task => {
        const taskText = task.querySelector('.task-text').textContent.toLowerCase();
        if (taskText.includes(searchTerm)) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
});

// Drag and Drop Handlers
let draggedItem = null;

function handleDragStart(e) {
    draggedItem = this;
    setTimeout(() => {
        this.style.display = 'none';
    }, 0); // Temporarily hide the dragged item
}

function handleDragOver(e) {
    e.preventDefault();
    const afterElement = getDragAfterElement(todoList, e.clientY);
    if (afterElement == null) {
        todoList.appendChild(draggedItem);
    } else {
        todoList.insertBefore(draggedItem, afterElement);
    }
}

function handleDrop() {
    this.style.display = 'block'; // Show the dropped item
    draggedItem = null; // Reset dragged item
}

function handleDragEnd() {
    this.style.display = 'block'; // Ensure dragged item is visible again
    draggedItem = null; // Reset dragged item
}

// Helper function to find where to insert dragged item
function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// Function to add a new task
function addNewTask(task) {
    if (task.trim() === '') return;

    const li = document.createElement('li');
    li.draggable = true; // Make the task draggable
    li.classList.add('draggable'); // Add class to make it identifiable during drag

    // Create a span for the task text
    const taskText = document.createElement('span');
    taskText.textContent = task;
    taskText.classList.add('task-text');

    // Create a span for the task created date and time
    const createdDate = document.createElement('span');
    const now = new Date();
    const formattedDate = now.toLocaleString(); // Format the current date and time
    createdDate.textContent = ` (Created: ${formattedDate})`;
    createdDate.className = 'task-date';

    // Mark as completed on click
    taskText.addEventListener('click', () => {
        taskText.classList.toggle('completed');
    });

    // Delete button (appears on hover)
    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = 'x';
    deleteBtn.className = 'delete';

    // Remove task on delete click
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent marking task complete
        li.remove();
    });

    // Append task text, created date, and delete button to the list item
    li.appendChild(taskText);
    li.appendChild(createdDate);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    // Set up drag and drop events
    li.addEventListener('dragstart', handleDragStart);
    li.addEventListener('dragover', handleDragOver);
    li.addEventListener('drop', handleDrop);
    li.addEventListener('dragend', handleDragEnd);
}
