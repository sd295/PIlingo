// lessons/l14_vue_watchers.js
const lessonContent = {
    title: "Level 14: Vue Watchers (Swedish Theme)",

    // Quiz about Vue watchers
    questions: [
        {
            prompt: "What is the main purpose of a Vue watcher?",
            options: [
                "To watch changes in a data property and run code",
                "To style elements with CSS",
                "To replace computed properties",
                "To load Vue faster"
            ],
            correctAnswer: "To watch changes in a data property and run code",
        },
        {
            prompt: "Where do you define watchers in a Vue component?",
            options: ["In methods{}", "In computed{}", "In watch{}", "In data()"],
            correctAnswer: "In watch{}",
        },
        {
            prompt: "When does a watcher run?",
            options: [
                "When you refresh the page",
                "When a specific data property changes",
                "Every second automatically",
                "Only on app mount"
            ],
            correctAnswer: "When a specific data property changes",
        },
        {
            prompt: "Which is better for calculations you need often: computed or watch?",
            options: ["watch", "computed", "methods{}", "props"],
            correctAnswer: "computed",
        },
        {
            prompt: "Which is better for reacting to a change with side effects (like console.log)?",
            options: ["watch", "computed", "data()", "methods{}"],
            correctAnswer: "watch",
        }
    ],

    // Practice project
    practice: {
        title: "Project: Coffee & Bun Watcher",
        instructions: `
Let's build a watcher app!
- Add two inputs: coffee cups and kanelbullar.
- Use <b>watch</b> to check when values change.
- If coffee > 5 → show message "Careful, too much coffee! ☕".
- If buns > 5 → show message "That’s a lot of kanelbullar! 🍩".
        `,
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Watcher Example</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
</head>
<body style="font-family:sans-serif; text-align:center; padding:40px; background:#FECB00; color:#005BAC;">

  <div id="app">
    <h1>☕🍩 Watch Your Fika 🇸🇪</h1>

    <label>Coffee cups: <input type="number" v-model="coffee"></label><br><br>
    <label>Kanelbullar: <input type="number" v-model="buns"></label><br><br>

    <h2>{{ message }}</h2>
  </div>

  <script>
    const app = Vue.createApp({
      data() {
        return {
          coffee: 0,
          buns: 0,
          message: ""
        }
      },
      watch: {
        coffee(newVal) {
          if (newVal > 5) {
            this.message = "Careful, too much coffee! ☕";
          }
        },
        buns(newVal) {
          if (newVal > 5) {
            this.message = "That’s a lot of kanelbullar! 🍩";
          }
        }
      }
    });
    app.mount('#app');
  </script>

</body>
</html>`
    },

    // Minigame
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
