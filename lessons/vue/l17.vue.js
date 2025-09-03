// lessons/l11_vue_forms.js
const lessonContent = {
    title: "Level 11: Vue Forms & v-model (Swedish Theme)",

    // Quiz about Vue forms and v-model
    questions: [
        {
            prompt: "Which directive in Vue is used to create two-way data binding in forms?",
            options: ["v-for", "v-model", "v-bind", "v-if"],
            correctAnswer: "v-model",
        },
        {
            prompt: "If you type in an input with v-model, what happens?",
            options: [
                "The input only changes visually",
                "The Vue data updates automatically",
                "It runs mounted()",
                "It reloads the page"
            ],
            correctAnswer: "The Vue data updates automatically",
        },
        {
            prompt: "Which form elements can use v-model?",
            options: ["input", "textarea", "select", "All of them"],
            correctAnswer: "All of them",
        },
        {
            prompt: "What happens if you use v-model on a checkbox?",
            options: [
                "It always returns true",
                "It binds the checked state to data",
                "It reloads the component",
                "It breaks the app"
            ],
            correctAnswer: "It binds the checked state to data",
        },
        {
            prompt: "What is the main benefit of v-model?",
            options: [
                "You don’t need event listeners for form inputs",
                "It makes the page colorful",
                "It imports external libraries",
                "It runs faster than mounted()"
            ],
            correctAnswer: "You don’t need event listeners for form inputs",
        }
    ],

    // Practice project
    practice: {
        title: "Project: Swedish Greetings Form",
        instructions: `
Let’s build a form where users can enter their name and favorite Swedish food.
- Use <b>v-model</b> to bind the input fields to Vue data.
- Show a greeting message: "Hej [name]!" (Hello [name]!).
- If they choose "Köttbullar" (meatballs) or "Kanelbulle" (cinnamon bun), show a fun message.
        `,
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Swedish Greetings</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
</head>
<body style="font-family:sans-serif; text-align:center; padding:40px; background:#006AA7; color:white;">

  <div id="app">
    <h1>🇸🇪 Welcome to Sweden! 🇸🇪</h1>
    <p>Enter your name:</p>
    <input v-model="name" placeholder="Skriv ditt namn" />

    <p>Pick your favorite Swedish food:</p>
    <select v-model="food">
      <option disabled value="">-- Choose one --</option>
      <option>Köttbullar</option>
      <option>Kanelbulle</option>
      <option>Gravlax</option>
    </select>

    <h2 v-if="name">Hej, {{ name }}!</h2>
    <p v-if="food === 'Köttbullar'">🥘 You chose Swedish meatballs, delicious!</p>
    <p v-if="food === 'Kanelbulle'">🥯 Cinnamon buns are a fika favorite in Sweden!</p>
    <p v-if="food === 'Gravlax'">🐟 Gravlax is a true Nordic delicacy!</p>
  </div>

  <script>
    const app = Vue.createApp({
      data() {
        return {
          name: "",
          food: ""
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
        title: "Mini-Game: Build Your Swedish Fika Form",
        prompt: `
Make a form where:
- Users can type a drink (ex: kaffe).
- Users can check a box if they want a kanelbulle.
- Use v-model to bind the input and checkbox.
- Show a message: "Your fika: [drink] + [bun/no bun]".
        `,
        draggableTags: ["v-model", "input", "checkbox", "data()", "p", "div"],
        solution: `
<input v-model="drink" placeholder="Drink" />
<label>
  <input type="checkbox" v-model="bun" /> Kanelbulle
</label>
<p>Your fika: {{ drink }} + {{ bun ? 'kanelbulle' : 'no bun' }}</p>
        `
    },

    cutsceneUrl: null
};
