// lessons/l2_vue_quiz.js
const lessonContent = {
    title: "Level 2: Vue.js Basics Quiz",
    questions: [
        {
            prompt: "Which directive is used to display data in Vue templates?",
            options: ["{{ }}", "v-text", "v-html", "v-for"],
            correctAnswer: "{{ }}",
        },
        {
            prompt: "Which directive binds an input element to a data property?",
            options: ["v-model", "v-on", "v-bind", "v-if"],
            correctAnswer: "v-model",
        },
        {
            prompt: "Which directive repeats an element for each item in a list?",
            options: ["v-for", "v-if", "v-show", "v-bind"],
            correctAnswer: "v-for",
        },
        {
            prompt: "Which directive shows an element only if a condition is true?",
            options: ["v-if", "v-show", "v-for", "v-bind"],
            correctAnswer: "v-if",
        },
        {
            prompt: "Which directive listens to events, like clicks?",
            options: ["v-on", "v-bind", "v-model", "v-for"],
            correctAnswer: "v-on",
        },
        {
            prompt: "Where do you put your reactive data inside a Vue component?",
            options: ["data()", "methods", "computed", "mounted()"],
            correctAnswer: "data()",
        },
        {
            prompt: "Which property is used to define functions inside a Vue component?",
            options: ["methods", "data", "computed", "watch"],
            correctAnswer: "methods",
        },
        {
            prompt: "Which option is used for properties that automatically update when data changes?",
            options: ["computed", "methods", "watch", "data"],
            correctAnswer: "computed",
        },
        {
            prompt: "Which lifecycle hook runs after the component is added to the page?",
            options: ["mounted()", "created()", "beforeMount()", "updated()"],
            correctAnswer: "mounted()",
        },
        {
            prompt: "Which directive is used to bind HTML attributes dynamically?",
            options: ["v-bind", "v-for", "v-if", "v-on"],
            correctAnswer: "v-bind",
        }
    ],
    practice: null,
    minigame: null,
    cutsceneUrl: null
};
