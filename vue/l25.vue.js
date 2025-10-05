// lessons/vue/l7.fika_tasks.js
const lessonContent = {
    title: "Level 7: Fika Task Manager (Vue.js)",
    questions: null,
    minigame: null,
    cutsceneUrl: null,
    code: null, // Project code is contained within the 'practice' block
    practice: {
        title: "Project: Fika Preparation List",
        instructions: `
            <p>Welcome to the Fika Task Manager project! Fika is a Swedish tradition of taking a coffee and snack break. We'll use Vue.js to manage our prep list.</p>
            <ol>
                <li>Implement a new task input field using the <code>v-model</code> directive.</li>
                <li>Use a method to add new tasks to the reactive list.</li>
                <li>Use <code>v-for</code> to render the list of tasks.</li>
                <li>Add a button to mark tasks as complete and another to delete them.</li>
                <li>**Key Concept:** Implement **Computed Properties** to filter the task list by "All," "Active," and "Completed."</li>
            </ol>
        `,
        defaultCode: `<!DOCTYPE html>
<html lang="sv">
<head>
<meta charset="UTF-8">
<title>Fika Task Manager</title>
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
<style>
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    background: #E0F7FA; /* Light Blue Background */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 20px;
  }

  #app {
    width: 100%;
    max-width: 500px;
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }

  h1 {
    color: #005CBF; /* Swedish Blue */
    text-align: center;
    margin-bottom: 25px;
  }
  
  .add-task {
    display: flex;
    margin-bottom: 20px;
  }
  
  .add-task input {
    flex-grow: 1;
    padding: 10px;
    border: 2px solid #FFD54F; /* Swedish Yellow */
    border-radius: 5px 0 0 5px;
    font-size: 16px;
  }
  
  .add-task button {
    background: #005CBF; /* Swedish Blue */
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    transition: background 0.3s;
  }

  .add-task button:hover {
    background: #003F80;
  }
  
  .task-list {
    list-style: none;
    padding: 0;
  }
  
  .task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #eee;
    font-size: 16px;
    color: #333;
  }

  .task-item.done span {
    text-decoration: line-through;
    color: #999;
  }

  .task-item button {
    margin-left: 8px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: opacity 0.3s;
    opacity: 0.8;
  }
  
  .task-item button:hover {
    opacity: 1;
  }

  .toggle-btn {
    background: #FFD54F; /* Swedish Yellow */
    color: #005CBF;
  }

  .delete-btn {
    background: #F44336;
    color: white;
  }

  .filters {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 10px;
  }
  
  .filters button {
    padding: 8px 15px;
    border: 1px solid #005CBF;
    background: white;
    color: #005CBF;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .filters button.active {
    background: #005CBF;
    color: white;
  }
</style>
</head>
<body>
<div id="app">
  <h1>Fika Preparation List ☕🇸🇪</h1>
  
  <!-- v-model for two-way data binding on the input -->
  <div class="add-task">
    <input type="text" 
           v-model.trim="newTask" 
           @keyup.enter="addTask"
           placeholder="What's needed for Fika?"
    >
    <button @click="addTask">Add Task</button>
  </div>

  <!-- Filters -->
  <div class="filters">
    <!-- Click to change the 'filter' data property -->
    <button :class="{active: filter === 'all'}" @click="filter = 'all'">All</button>
    <button :class="{active: filter === 'active'}" @click="filter = 'active'">Active</button>
    <button :class="{active: filter === 'done'}" @click="filter = 'done'">Completed</button>
  </div>

  <!-- v-for renders the computed property filteredTasks -->
  <ul class="task-list">
    <li v-for="task in filteredTasks" 
        :key="task.id" 
        :class="['task-item', {done: task.done}]">
      <span>{{ task.text }}</span>
      <div>
        <!-- Method to toggle the 'done' state -->
        <button class="toggle-btn" @click="toggleDone(task)">
          {{ task.done ? 'Undo' : 'Complete' }}
        </button>
        <!-- Method to remove the task -->
        <button class="delete-btn" @click="removeTask(task.id)">
          Delete
        </button>
      </div>
    </li>
    <!-- Conditional rendering with v-if/v-else -->
    <li v-if="filteredTasks.length === 0" class="task-item" style="justify-content: center; color: #999;">
        No tasks here! Time for Fika!
    </li>
  </ul>
  
  <p style="text-align: center; margin-top: 20px; color: #666;">
    Tasks remaining: {{ activeTaskCount }}
  </p>
</div>
<script>
const { createApp } = Vue;

createApp({
  data() {
    return {
      // Data for the new task input
      newTask: '', 
      // Array of tasks, the core reactive state
      tasks: [
        { id: 1, text: 'Brew fresh coffee', done: false },
        { id: 2, text: 'Buy Kanelbullar (cinnamon buns)', done: false },
        { id: 3, text: 'Set out small plates', done: true }
      ],
      // Filter state
      filter: 'all' // 'all', 'active', 'done'
    }
  },
  methods: {
    addTask() {
      if (this.newTask.length === 0) return;

      this.tasks.push({
        // Simple way to ensure a unique ID for the key
        id: Date.now(), 
        text: this.newTask,
        done: false
      });
      this.newTask = ''; // Clear the input field
    },
    toggleDone(task) {
      // Toggles the 'done' state directly on the reactive object
      task.done = !task.done;
    },
    removeTask(id) {
      // Replaces the tasks array with a new one (excluding the task with the given id)
      this.tasks = this.tasks.filter(t => t.id !== id);
    }
  },
  // NEW CONCEPT: Computed Properties
  computed: {
    filteredTasks() {
      // Returns a filtered version of the tasks list based on the 'filter' data state
      switch (this.filter) {
        case 'active':
          return this.tasks.filter(t => !t.done);
        case 'done':
          return this.tasks.filter(t => t.done);
        case 'all':
        default:
          return this.tasks;
      }
    },
    activeTaskCount() {
      // Another computed property to display the number of active tasks
      return this.tasks.filter(t => !t.done).length;
    }
  }
}).mount('#app');
</script>
</body>
</html>`
    }
};