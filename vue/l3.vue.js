// lessons/l3_vue_quiz.js
const lessonContent = {
    title: "Level 3: Vue.js Intermediate Quiz",
    questions: [
        {
            prompt: "Which Vue feature allows a parent component to pass data to a child component?",
            options: ["props", "data", "methods", "computed"],
            correctAnswer: "props",
        },
        {
            prompt: "Which Vue option watches a property for changes and reacts to them?",
            options: ["watch", "computed", "methods", "mounted()"],
            correctAnswer: "watch",
        },
        {
            prompt: "How do you prevent a form submission from refreshing the page in Vue?",
            options: ["@submit.prevent", "@click.prevent", "v-on.prevent", "v-bind.prevent"],
            correctAnswer: "@submit.prevent",
        },
        {
            prompt: "Which directive allows you to bind a class dynamically based on data?",
            options: ["v-bind:class", "v-bind:style", "v-for", "v-if"],
            correctAnswer: "v-bind:class",
        },
        {
            prompt: "Which lifecycle hook runs when a component is created but before it is added to the DOM?",
            options: ["created()", "mounted()", "beforeMount()", "updated()"],
            correctAnswer: "created()",
        },
        {
            prompt: "Which Vue feature automatically caches computed values until their dependencies change?",
            options: ["computed", "methods", "watch", "data"],
            correctAnswer: "computed",
        },
        {
            prompt: "How do you emit a custom event from a child component to the parent?",
            options: ["this.$emit('eventName')", "this.emit('eventName')", "v-on:emit", "v-bind:event"],
            correctAnswer: "this.$emit('eventName')",
        },
        {
            prompt: "Which modifier stops an event from propagating to parent elements?",
            options: [".stop", ".prevent", ".self", ".capture"],
            correctAnswer: ".stop",
        },
        {
            prompt: "Which Vue directive allows conditional rendering of elements?",
            options: ["v-if", "v-show", "v-for", "v-bind"],
            correctAnswer: "v-if",
        },
        {
            prompt: "Which Vue directive is used to dynamically bind an attribute, like href or src?",
            options: ["v-bind", "v-for", "v-on", "v-model"],
            correctAnswer: "v-bind",
        }
    ],
    practice: null, // pure quiz
    minigame: {
            gameType: 'code-typer',
            title: "Challenge 3: Welcome",
            prompt: "Show 'Välkommen' (Welcome). On click, text turns blue.",
            solution: `<div id="app3">
  <h2 @click="makeBlue" :style="{color: color}">Välkommen</h2>
</div>
<script>
createApp({
  data() { return { color: "black" } },
  methods: {
    makeBlue() { this.color = "blue"; }
  }
}).mount("#app3");
</script>`
        }
};
