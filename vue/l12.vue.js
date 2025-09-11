// lessons/l8_vue_quiz.js
const lessonContent = {
    title: "Level 8: Intermediate Vue.js Practice",
    
    // Quiz: slightly more challenging
    questions: [
        {
            prompt: "Which Vue feature automatically recalculates a value when its dependencies change?",
            options: ["computed", "methods", "data()", "watch"],
            correctAnswer: "computed",
        },
        {
            prompt: "How does a parent component pass data to a child component?",
            options: ["props", "$emit", "v-bind", "v-on"],
            correctAnswer: "props",
        },
        {
            prompt: "Which Vue directive listens to a click or other event?",
            options: ["v-on", "v-bind", "v-model", "v-for"],
            correctAnswer: "v-on",
        },
        {
            prompt: "Which feature allows watching a reactive property and running code when it changes?",
            options: ["watch", "computed", "methods", "props"],
            correctAnswer: "watch",
        },
        {
            prompt: "What directive is used to loop over an array and render a list?",
            options: ["v-for", "v-if", "v-bind", "v-model"],
            correctAnswer: "v-for",
        }
    ],

    // Practice: more interactive project
    practice: {
        title: "Project: Interactive Fruit List",
        instructions: `
Create a Vue.js app that:
1. Displays a list of fruits with name and color.
2. Allows adding new fruits with a form.
3. Filters fruits by color using a dropdown.
4. Bonus: highlight fruits with a certain letter (e.g., 'A').
        `,
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Fruit List</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
</head>
<body style="font-family:sans-serif; text-align:center; padding:50px;">

  <div id="app">
    <h1>Fruit List</h1>

    <input v-model="newFruitName" placeholder="Fruit name" style="margin-right:10px;"/>
    <input v-model="newFruitColor" placeholder="Fruit color"/>
    <button @click="addFruit" style="margin-left:10px;">Add Fruit</button>

    <div style="margin-top:20px;">
      <label>Filter by color:</label>
      <select v-model="filterColor">
        <option value="">All</option>
        <option>Red</option>
        <option>Green</option>
        <option>Yellow</option>
        <option>Orange</option>
      </select>
    </div>

    <ul style="margin-top:20px;">
      <li v-for="fruit in filteredFruits" :key="fruit.name" :style="{ fontWeight: fruit.name.startsWith('A') ? 'bold' : 'normal' }">
        {{ fruit.name }} - {{ fruit.color }}
      </li>
    </ul>
  </div>

  <script>
    const app = Vue.createApp({
      data() {
        return {
          newFruitName: '',
          newFruitColor: '',
          filterColor: '',
          fruits: [
            { name: 'Apple', color: 'Red' },
            { name: 'Banana', color: 'Yellow' },
            { name: 'Avocado', color: 'Green' }
          ]
        }
      },
      computed: {
        filteredFruits() {
          return this.fruits.filter(fruit => 
            !this.filterColor || fruit.color === this.filterColor
          );
        }
      },
      methods: {
        addFruit() {
          if(this.newFruitName && this.newFruitColor) {
            this.fruits.push({ name: this.newFruitName, color: this.newFruitColor });
            this.newFruitName = '';
            this.newFruitColor = '';
          }
        }
      }
    });

    app.mount('#app');
  </script>

</body>
</html>`
    },

    // Minigame: interactive color counter
    minigame: {
            gameType: 'code-typer',
            title: "Challenge 8: No",
            prompt: "Make 'Nej' (No). On click, background turns red.",
            solution: `<div id="app8">
  <button @click="stop" :style="{background: bg}">Nej</button>
</div>
<script>
createApp({
  data() { return { bg: "white" } },
  methods: {
    stop() { this.bg = "red"; }
  }
}).mount("#app8");
</script>`
        }
};
