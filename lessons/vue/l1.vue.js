// lessons/l1_vue_quiz.js
const lessonContent = {
    title: "Level 1: Vue.js Basics Quiz",
    questions: [
        {
            prompt: "In Vue.js, which option is used to define reactive data inside a component?",
            options: ["data()", "methods()", "computed()", "mounted()"],
            correctAnswer: "data()",
        },
        {
            prompt: "Which directive is used to bind text content in Vue templates?",
            options: ["v-text", "v-html", "v-bind", "v-for"],
            correctAnswer: "v-text",
        },
        {
            prompt: "How do you conditionally render an element in Vue?",
            options: ["v-if", "v-show", "v-for", "v-bind"],
            correctAnswer: "v-if",
        },
        {
            prompt: "Which directive is used to loop over a list in Vue?",
            options: ["v-for", "v-if", "v-bind", "v-on"],
            correctAnswer: "v-for",
        },
        {
            prompt: "How do you listen to DOM events in Vue templates?",
            options: ["v-on", "v-bind", "v-model", "v-text"],
            correctAnswer: "v-on",
        },
        {
            prompt: "Which lifecycle hook runs after the component is mounted to the DOM?",
            options: ["mounted()", "created()", "beforeMount()", "updated()"],
            correctAnswer: "mounted()",
        },
        {
            prompt: "Which directive is used for two-way data binding in Vue?",
            options: ["v-model", "v-bind", "v-text", "v-on"],
            correctAnswer: "v-model",
        },
        {
            prompt: "Where do you define methods in a Vue component?",
            options: ["methods", "data", "computed", "watch"],
            correctAnswer: "methods",
        },
        {
            prompt: "Which option is used for computed properties in Vue?",
            options: ["computed", "methods", "watch", "data"],
            correctAnswer: "computed",
        },
        {
            prompt: "Which Vue directive dynamically binds HTML attributes?",
            options: ["v-bind", "v-for", "v-if", "v-on"],
            correctAnswer: "v-bind",
        }
    ],
    practice: null, // pure quiz, no project
    minigame: null,
    cutsceneUrl: null
};
