const lessonContent = {
  title: "Level 15: Vue Lifecycle Hooks (Swedish Theme)",
  
  // Quiz about Vue lifecycle hooks
  questions: [
    {
      prompt: "What is the purpose of Vue lifecycle hooks?",
      options: [
        "To execute code at specific stages of a component’s life",
        "To style components with CSS",
        "To replace computed properties",
        "To load Vue faster"
      ],
      correctAnswer: "To execute code at specific stages of a component’s life",
    },
    {
      prompt: "Which lifecycle hook runs **after the component is mounted**?",
      options: ["created()", "mounted()", "updated()", "beforeUnmount()"],
      correctAnswer: "mounted()",
    },
    {
      prompt: "Which hook runs **before a component is removed from the DOM**?",
      options: ["mounted()", "updated()", "beforeUnmount()", "created()"],
      correctAnswer: "beforeUnmount()",
    },
    {
      prompt: "Which hook is ideal for fetching initial data?",
      options: ["mounted()", "updated()", "beforeUnmount()", "unmounted()"],
      correctAnswer: "mounted()",
    },
    {
      prompt: "Which hook runs **every time reactive data changes**?",
      options: ["updated()", "created()", "mounted()", "beforeUnmount()"],
      correctAnswer: "updated()",
    }
  ],

  // Practice project
  practice: {
    title: "Project: Fika Counter with Lifecycle Alerts",
    instructions: `
Let's build a lifecycle-aware app!
- Track coffee and buns inputs.
- Use <b>mounted()</b> to show "Welcome to Fika! 🇸🇪" when app starts.
- Use <b>updated()</b> to warn if coffee > 5 or buns > 5.
- Use <b>beforeUnmount()</b> to show an alert "Bye! Come back soon!"
`,
    defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Lifecycle Example</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
</head>
<body style="font-family:sans-serif; text-align:center; padding:40px; background:#FFDD00; color:#005BAC;">
  <div id="app">
    <h1>☕🍩 Fika Tracker 🇸🇪</h1>
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
      mounted() {
        this.message = "Welcome to Fika! 🇸🇪";
      },
      updated() {
        if(this.coffee > 5) {
          this.message = "Careful, too much coffee! ☕";
        } else if(this.buns > 5) {
          this.message = "That’s a lot of kanelbullar! 🍩";
        } else {
          this.message = "Enjoy your Fika!";
        }
      },
      beforeUnmount() {
        alert("Bye! Come back soon!");
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
    title: "Challenge 9: Lifecycle Button",
    prompt: "On mount, show 'Hello!'. On button click, change background to yellow. On unmount, alert 'Bye!'.",
    solution: `<div id="app9">
<button @click="changeBg" :style="{background: bg}">Click me</button>
</div>
<script>
const { createApp } = Vue;
createApp({
  data() { return { bg: "white" } },
  mounted() { console.log("Hello!"); },
  methods: { changeBg() { this.bg = "yellow"; } },
  beforeUnmount() { alert("Bye!"); }
}).mount("#app9");
</script>`
  }
};
