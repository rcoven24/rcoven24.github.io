class Task extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.taskCount = 0;
        this.render();
    }

    connectedCallback() {
        document.getElementById('add-task').addEventListener('click', this.addTask.bind(this));
        document.getElementById('remove-task').addEventListener('click', this.removeTask.bind(this));
    }

    disconnectedCallback() {
        document.getElementById('add-task').removeEventListener('click', this.addTask.bind(this));
        document.getElementById('remove-task').removeEventListener('click', this.removeTask.bind(this));
    }

    render() {
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .task-container {
                    margin: 10px 0;
                }
                .counter {
                    margin: 10px 0;
                    font-weight: bold;
                }
            </style>
            <div class="counter">Task count: <span id="task-count">0</span></div>
            <div id="tasks"></div>`;

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    addTask() {
        const tasks = ["Clean Bathroom",
        "Change Bed Sheets",
        "Dust Bedroom",
        "Fold Laundry",
        "Take out Garbage",
        "Clean Dishes",
        "Empty Laundry",
        "Mow Lawn",
        "Fill Laundry",
        "Put away Laundry",];
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task-container';
        taskDiv.textContent = tasks[Math.floor(Math.random() * tasks.length)];
        this.shadowRoot.getElementById('tasks').appendChild(taskDiv);
        this.taskCount++;
        this.updateCounter();
    }

    removeTask() {
        const taskDivs = this.shadowRoot.querySelectorAll('.task-container');
        if (taskDivs.length > 0) {
            taskDivs[taskDivs.length - 1].remove();
            this.taskCount--;
            this.updateCounter();
        }
    }

    updateCounter() {
        this.shadowRoot.getElementById('task-count').textContent = this.taskCount;
    }
}

customElements.define('todo-list', Task);
