// lessons/vue/l8.recipe_tracker.js
const lessonContent = {
    title: "Level NaH: Swedish Recipe Tracker",
    questions: null,
    minigame: null,
    cutsceneUrl: null,
    code: null,

    practice: {
        title: "Project: Swedish Dish Checklist",
        instructions: `
            <p>We will build a small recipe ingredient checklist for a Swedish dish.</p>
            <ol>
                <li>Create an input field using <code>v-model</code> to add new ingredients.</li>
                <li>Render ingredient list with <code>v-for</code>.</li>
                <li>Add buttons to mark ingredients as "prepared" and remove them.</li>
                <li>Use a computed property to show ingredients left to prepare.</li>
                <li>Display a message when all ingredients are ready.</li>
            </ol>
        `,

        defaultCode: `<!DOCTYPE html>
<html lang="sv">
<head>
<meta charset="UTF-8">
<title>Swedish Recipe Tracker</title>
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
<style>
  body {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    background: #F4F9F9;
    font-family: sans-serif;
    padding-top: 30px;
  }
  #app {
    width: 420px;
    background: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 8px 15px rgba(0,0,0,0.1);
  }
  h1 {
    text-align: center;
    color: #005CBF;
    margin-bottom: 20px;
  }
  .add {
    display: flex;
    margin-bottom: 15px;
  }
  .add input {
    flex: 1;
    padding: 10px;
    border: 2px solid #FFD54F;
    border-right: none;
    border-radius: 6px 0 0 6px;
  }
  .add button {
    background: #005CBF;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 0 6px 6px 0;
    cursor: pointer;
  }
  ul {
    padding: 0;
    list-style: none;
  }
  li {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid #eee;
  }
  li.ready span {
    text-decoration: line-through;
    color: #777;
  }
  .btn {
    padding: 4px 8px;
    margin-left: 6px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
  .ready-btn { background: #FFD54F; }
  .delete-btn { background: #F44336; color: white; }
  .empty-msg {
    text-align: center;
    color: #666;
    margin-top: 15px;
  }
</style>
</head>
<body>
<div id="app">
  <h1>Swedish Recipe Checklist 🇸🇪</h1>

  <div class="add">
    <input v-model.trim="newItem"
           @keyup.enter="addItem"
           placeholder="Add ingredient...">
    <button @click="addItem">Add</button>
  </div>

  <ul>
    <li v-for="item in ingredients" :key="item.id" :class="{ready: item.ready}">
      <span>{{ item.name }}</span>
      <div>
        <button class="btn ready-btn" @click="toggle(item)">{{ item.ready ? 'Undo' : 'Ready' }}</button>
        <button class="btn delete-btn" @click="remove(item.id)">X</button>
      </div>
    </li>

    <li v-if="ingredients.length === 0" class="empty-msg">
      No ingredients yet!
    </li>
  </ul>

  <p style="text-align:center; margin-top:12px; color:#444;">
    Ingredients left: {{ remaining }}
  </p>

  <p v-if="remaining === 0 && ingredients.length > 0" class="empty-msg">
    All set! Time to cook!
  </p>
</div>

<script>
const { createApp } = Vue;

createApp({
  data() {
    return {
      newItem: '',
      ingredients: [
        { id: 1, name: 'Potatoes', ready: false },
        { id: 2, name: 'Lingonberry Jam', ready: false },
        { id: 3, name: 'Meatballs', ready: true }
      ]
    }
  },
  computed: {
    remaining() {
      return this.ingredients.filter(i => !i.ready).length;
    }
  },
  methods: {
    addItem() {
      if (!this.newItem) return;
      this.ingredients.push({
        id: Date.now(),
        name: this.newItem,
        ready: false
      });
      this.newItem = '';
    },
    toggle(item) {
      item.ready = !item.ready;
    },
    remove(id) {
      this.ingredients = this.ingredients.filter(i => i.id !== id);
    }
  }
}).mount('#app');
</script>
</body>
</html>`
    }
};
