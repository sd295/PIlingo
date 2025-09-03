// lessons/l10_vue_lifecycle.js
const lessonContent = {
    title: "Level 10: Vue Lifecycle & Watchers",

    // Quiz: lifecycle hooks + watchers
    questions: [
        {
            prompt: "Which lifecycle hook runs right after the component is added to the page?",
            options: ["mounted()", "created()", "updated()", "beforeUnmount()"],
            correctAnswer: "mounted()",
        },
        {
            prompt: "Which lifecycle hook is best for making an API request when a component is ready?",
            options: ["mounted()", "beforeMount()", "updated()", "beforeCreate()"],
            correctAnswer: "mounted()",
        },
        {
            prompt: "What does a watcher in Vue do?",
            options: [
                "Watches for changes in data and runs a function",
                "Renders child components",
                "Adds CSS transitions",
                "Fetches external scripts"
            ],
            correctAnswer: "Watches for changes in data and runs a function",
        },
        {
            prompt: "Which lifecycle hook runs before the component is destroyed?",
            options: ["beforeUnmount()", "unmounted()", "beforeCreate()", "created()"],
            correctAnswer: "beforeUnmount()",
        },
        {
            prompt: "Which is a better choice for computed values than watchers?",
            options: ["computed", "methods", "props", "slots"],
            correctAnswer: "computed",
        }
    ],

    // Practice project
    practice: {
        title: "Project: Vue Clock with Lifecycle",
        instructions: `
Let's build a simple clock using Vue.js lifecycle hooks:
1. Use <b>mounted()</b> to start a timer that updates the time every second.
2. Use <b>beforeUnmount()</b> to clear the timer when the component is removed.
3. Display the live time in the app.
4. Bonus: Add a watcher that alerts you when the hour changes.
        `,
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Vue Clock</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
</head>
<body style="font-family:sans-serif; text-align:center; padding:50px;">

  <div id="app">
    <h1>Vue Clock</h1>
    <h2>{{ time }}</h2>
  </div>

  <script>
    const app = Vue.createApp({
      data() {
        return {
          time: new Date().toLocaleTimeString(),
          timer: null
        }
      },
      mounted() {
        // Start clock
        this.timer = setInterval(() => {
          this.time = new Date().toLocaleTimeString();
        }, 1000);
      },
      beforeUnmount() {
        // Clean up timer
        clearInterval(this.timer);
      },
      watch: {
        time(newVal, oldVal) {
          if (new Date(newVal).getHours() !== new Date(oldVal).getHours()) {
            alert("The hour just changed!");
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
        title: "Challenge: Countdown Timer",
        prompt: `
Build a countdown timer using Vue:
- Use mounted() to start decreasing a number every second.
- Use beforeUnmount() to stop the countdown when removed.
- Watch the countdown and alert when it reaches 0.
- Bonus: Let the user reset the timer with a button.
        `,
        draggableTags: ["mounted()", "beforeUnmount()", "watch", "setInterval", "clearInterval", "methods"],
        solution: `const app = Vue.createApp({
  data() {
    return { count: 10, timer: null }
  },
  mounted() {
    this.timer = setInterval(() => {
      if (this.count > 0) this.count--;
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
  watch: {
    count(newVal) {
      if (newVal === 0) {
        alert("Countdown finished!");
      }
    }
  },
  methods: {
    reset() {
      this.count = 10;
    }
  }
});

app.mount('#app');`
    },

    cutsceneUrl: null
};
