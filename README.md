https://todo-list-task-management.netlify.app/

To-Do List Project Report
1. Introduction:
The To-Do List project is a web-based application designed to help users manage their daily tasks. It enables users to add, delete, mark tasks as complete, search task and reorder tasks via drag-and-drop functionality. The project includes an intuitive user interface, real-time search, task creation timestamps, and drag-and-drop task reordering.
This report provides an overview of the project’s purpose, development, key features, and code functionality.

2. Project Overview:
- Purpose:
The primary purpose of the To-Do List application is to create a user-friendly interface for task management. The features implemented enhance productivity and allow users to have an organized approach toward managing their daily activities.
- Target Audience:
This project is suitable for users who need a lightweight, web-based task manager without the need for database storage or backend complexity. It’s targeted at individuals looking for a simple solution to manage their tasks and prioritize their work.
 
3. Features of the To-Do List Application:
- Task Creation and Input Toggle:
Users can add new tasks by clicking on the "Add Task" button. The input field appears dynamically, allowing users to enter the new task's description. When a task is added, the input field automatically disappears, minimizing clutter on the screen. Additionally, users can add tasks by pressing the "Enter" key.

- Real-time Search Functionality:
The real-time search functionality allows users to filter through tasks by entering keywords in the search input field. As users type, tasks that don’t match the search term are hidden, helping them quickly find specific tasks.

- Task Deletion:
Each task comes with a delete button ("x") that appears when hovering over the task. This feature ensures that the list remains clean, and users can quickly remove tasks that are no longer relevant.

- Task Completion Toggle:
Tasks can be marked as completed by clicking on the task text. Completed tasks are visually indicated by a strikethrough effect. This feature allows users to keep track of their progress.

- Task Creation Date and Time:
For better task management, each task shows its creation date and time. This feature allows users to track when a specific task was added, helping with time management and prioritization.

- Drag-and-Drop Task Reordering:
One of the standout features is the drag-and-drop functionality. Users can reorder tasks simply by dragging and dropping them to their preferred position. This feature enhances the flexibility of task management by allowing users to prioritize tasks dynamically.
 
4. Development Process:
- HTML Structure:
The HTML structure of the project provides a clean and minimalistic user interface. The core elements include a header with the title, an "Add Task" button, a task input field, a search bar, and an unordered list where tasks are displayed.

- CSS Styling:
The CSS for the project focuses on creating a modern, responsive design with light colours. The styling includes hover effects, dynamic input field appearances, and responsive task lists.

- JavaScript Functionality:
JavaScript is responsible for making the application dynamic. The script controls task creation, deletion, completion, drag-and-drop reordering, and filtering. Event listeners are added to buttons and inputs to handle user interaction, while tasks are dynamically created and manipulated using the DOM.
Key functions include:
•	Task Creation: Creates new task list items dynamically and appends them to the list.
•	Drag-and-Drop: Handles task reordering, allowing users to drag tasks and place them in a new order.
•	Search Filter: Filters tasks based on user input in real-time.

5. Conclusion:
The To-Do List project demonstrates core JavaScript, HTML, and CSS principles, providing a functional and interactive task management system. The features like drag-and-drop reordering, task completion, search, and task creation timestamps make it a comprehensive yet simple application. While it serves its intended purpose well, there is room for further development and enhancements, especially in areas like persistence, UI/UX improvements, and expanded task management features.
