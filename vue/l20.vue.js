// lessons/l13_vue_computed.js
const lessonContent = {
    title: "Level 13: Vue Computed Properties (Swedish Theme)",

    // Quiz about Vue computed properties
    questions: [
        {
            prompt: "What is a computed property in Vue?",
            options: [
                "A function that runs only once",
                "A value automatically updated when its data changes",
                "A CSS style rule",
                "A database property"
            ],
            correctAnswer: "A value automatically updated when its data changes",
        },
        {
            prompt: "Where do you define computed properties in Vue?",
            options: ["In methods{}", "In data()", "In computed{}", "In props{}"],
            correctAnswer: "In computed{}",
        },
        {
            prompt: "How are computed properties different from methods?",
            options: [
                "Computed properties are cached until dependencies change",
                "Methods always run again when called",
                "Computed is faster for reactive values",
                "All of the above"
            ],
            correctAnswer: "All of the above",
        },
        {
            prompt: "If you want to show the total cost of fika items, which is best?",
            options: ["computed{}", "methods{}", "data()", "watch{}"],
            correctAnswer: "computed{}",
        },
        {
            prompt: "Which syntax is correct?",
            options: [
                "computed: { total() { return this.price * this.qty } }",
                "compute: { total() { ... } }",
                "computed() { return this.total }",
                "computed: total { ... }"
            ],
            correctAnswer: "computed: { total() { return this.price * this.qty } }",
        }
    ],

    // Practice project
    practice: {
        title: "Project: Fika Price Calculator",
        instructions: `
Let’s build a fika price calculator!
- You have coffee (20 SEK each) and kanelbullar (15 SEK each).
- Let the user choose quantities with inputs.
- Use a <b>computed property</b> to show the total price automatically.
        `,
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Fika Calculator</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
</head>
<body style="font-family:sans-serif; text-align:center; padding:40px; background:#FECB00; color:#005BAC;">

  <div id="app">
    <h1>☕🍩 Fika Calculator 🇸🇪</h1>

    <label>Coffee (20 SEK): <input type="number" v-model="coffee"></label><br><br>
    <label>Kanelbullar (15 SEK): <input type="number" v-model="buns"></label><br><br>

    <h2>Total: {{ total }} SEK</h2>
  </div>

  <script>
    const app = Vue.createApp({
      data() {
        return {
          coffee: 0,
          buns: 0
        }
      },
      computed: {
        total() {
          return (this.coffee * 20) + (this.buns * 15);
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
        title: "Mini-Game: Smörgåsbord Calories",
        prompt: `
Create a Vue app that calculates calories:
- 1 meatball = 50 calories.
- 1 herring = 30 calories.
- Let the user enter how many they eat.
- Show the total calories using a computed property.
        `,
        draggableTags: ["v-model", "computed{}", "data()", "input", "{{ total }}"],
        solution: `
computed: {
  total() {
    return (this.meatballs * 50) + (this.herring * 30);
  }
}
        `
    },

    cutsceneUrl: null
};
