// lessons/l1_swedish_quiz.js
const lessonContent = {
    title: "Level 1: Swedish Basics Quiz",
    questions: [
        {
            prompt: "How do you say 'Hello' in Swedish?",
            options: ["Hej", "Hallo", "Hola", "Bonjour"],
            correctAnswer: "Hej",
        },
        {
            prompt: "How do you say 'Thank you' in Swedish?",
            options: ["Tack", "Merci", "Danke", "Grazie"],
            correctAnswer: "Tack",
        },
        {
            prompt: "Which emoji represents Sweden?",
            options: ["🇸🇪", "🇳🇴", "🇫🇮", "🇩🇰"],
            correctAnswer: "🇸🇪",
        },
        {
            prompt: "What is the Swedish word for 'Good morning'?",
            options: ["God morgon", "Buenos días", "Guten Morgen", "Bonjour"],
            correctAnswer: "God morgon",
        },
        {
            prompt: "Which color is in the Swedish flag?",
            options: ["Blue", "Red", "Green", "Black"],
            correctAnswer: "Blue",
        }
    ],
    practice: null, // Level 1 is just a quiz, no separate project
    minigame: {
            gameType: 'code-typer',
            title: "Challenge 5: Good Night",
            prompt: "Show 'God natt' (Good night). On click, text turns purple.",
            solution: `<div id="app5">
  <p @click="night" :style="{color: color}">God natt</p>
</div>
<script>
createApp({
  data() { return { color: "black" } },
  methods: {
    night() { this.color = "purple"; }
  }
}).mount("#app5");
</script>`
        }
};
