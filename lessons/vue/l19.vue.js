// lessons/l12_vue_events.js
const lessonContent = {
    title: "Level 12: Vue Events & Methods (Swedish Theme)",

    // Quiz about Vue events and methods
    questions: [
        {
            prompt: "Which symbol is used in Vue to listen to events?",
            options: ["#", "@", ":", "v-"],
            correctAnswer: "@",
        },
        {
            prompt: "What does @click do in Vue?",
            options: [
                "Adds CSS to the button",
                "Runs a method when the button is clicked",
                "Creates a loop",
                "Saves data to local storage"
            ],
            correctAnswer: "Runs a method when the button is clicked",
        },
        {
            prompt: "Where do we define methods in a Vue component?",
            options: ["In data()", "In mounted()", "In methods{}", "In v-for"],
            correctAnswer: "In methods{}",
        },
        {
            prompt: "Which event is used for typing in an input?",
            options: ["@type", "@press", "@input", "@text"],
            correctAnswer: "@input",
        },
        {
            prompt: "What is the main purpose of methods in Vue?",
            options: [
                "To store static values",
                "To style HTML elements",
                "To run actions when events happen",
                "To replace CSS"
            ],
            correctAnswer: "To run actions when events happen",
        }
    ],

    // Practice project
    practice: {
        title: "Project: Swedish Button Actions",
        instructions: `
Let’s build a little app with Swedish buttons.
- Add a button that says "Say Hej!" and shows "Hej från Sverige!" when clicked.
- Add another button that says "Say Hej då!" and shows "Hej då, vi ses!" when clicked.
- Use Vue <b>methods</b> and <b>@click</b> to control the actions.
        `,
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Swedish Buttons</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
</head>
<body style="font-family:sans-serif; text-align:center; padding:40px; background:#FECB00; color:#005BAC;">

  <div id="app">
    <h1>🇸🇪 Swedish Button Actions 🇸🇪</h1>

    <button @click="sayHej">Say Hej!</button>
    <button @click="sayHejDa">Say Hej då!</button>

    <h2>{{ message }}</h2>
  </div>

  <script>
    const app = Vue.createApp({
      data() {
        return {
          message: ""
        }
      },
      methods: {
        sayHej() {
          this.message = "Hej från Sverige!";
        },
        sayHejDa() {
          this.message = "Hej då, vi ses!";
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
        title: "Mini-Game: Count Your Kanelbullar",
        prompt: `
Make a button that increases the number of kanelbullar (cinnamon buns).
- Use a number in data (start at 0).
- When the button is clicked, increase the number.
- Show "You have X kanelbullar".
        `,
        draggableTags: ["@click", "methods{}", "data()", "p", "button"],
        solution: `
<button @click="count++">Add Kanelbulle</button>
<p>You have {{ count }} kanelbullar</p>
        `
    },

    cutsceneUrl: null
};
