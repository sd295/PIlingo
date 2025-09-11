// lessons/l7_vue_quiz.js
const lessonContent = {
    title: "Level 7: Friendly Vue.js Practice",
    
    // Quiz: very simple and human-friendly
    questions: [
        {
            prompt: "Which directive shows or hides something based on a condition?",
            options: ["v-if", "v-for", "v-bind", "v-on"],
            correctAnswer: "v-if",
        },
        {
            prompt: "Which directive lets you repeat an element for every item in a list?",
            options: ["v-for", "v-if", "v-bind", "v-model"],
            correctAnswer: "v-for",
        },
        {
            prompt: "Which directive connects input fields to data?",
            options: ["v-model", "v-on", "v-bind", "v-show"],
            correctAnswer: "v-model",
        },
        {
            prompt: "How do you run code when a button is clicked?",
            options: ["v-on:click", "v-bind", "v-model", "v-for"],
            correctAnswer: "v-on:click",
        },
        {
            prompt: "Which Vue feature stores reactive data inside a component?",
            options: ["data()", "methods", "computed", "props"],
            correctAnswer: "data()",
        }
    ],

    // Practice: simple and friendly
    practice: {
        title: "Practice: Clickable Color Changer",
        instructions: `
Create a friendly Vue.js app:
1. Display a square box.
2. Add a button that changes the box color when clicked.
3. Use reactive data to store the current color.
4. Optional: add a second button to reset the color.
        `,
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Friendly Color Changer</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
</head>
<body style="font-family:sans-serif; text-align:center; padding:50px;">

  <div id="app">
    <h1>Color Box</h1>
    <div :style="{ width: '200px', height: '200px', backgroundColor: color, margin: '20px auto' }"></div>
    <button @click="changeColor" style="padding:10px 20px; margin-right:10px;">Change Color</button>
    <button @click="resetColor" style="padding:10px 20px;">Reset Color</button>
  </div>

  <script>
    const app = Vue.createApp({
      data() {
        return {
          color: 'lightblue'
        }
      },
      methods: {
        changeColor() {
          const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];
          this.color = colors[Math.floor(Math.random() * colors.length)];
        },
        resetColor() {
          this.color = 'lightblue';
        }
      }
    });

    app.mount('#app');
  </script>

</body>
</html>`
    },

    // Minigame: simple and fun
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
