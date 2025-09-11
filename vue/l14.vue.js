// lessons/vue/l6.capstone2.js
const lessonContent = {
    title: "Level 6: Swedish Flip Cards (Vue.js)",
    questions: null,
    minigame: null,
    cutsceneUrl: null,

    practice: {
        title: "Project: Swedish Flip Cards",
        instructions: `
            <p>Welcome to the Vue.js Flip Cards project!</p>
            <ol>
                <li>Create multiple greeting cards for Swedish words.</li>
                <li>Each card should flip when clicked to show the English translation.</li>
                <li>Use Vue's reactive data and v-for for dynamic rendering.</li>
                <li>Style the cards with CSS to make them visually appealing.</li>
                <li>Add Swedish flag emojis 🇸🇪 on each card.</li>
            </ol>
        `,
        defaultCode: `<!DOCTYPE html>
<html lang="sv">
<head>
<meta charset="UTF-8">
<title>Swedish Flip Cards</title>
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
<style>
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #E0F7FA;
    font-family: Arial, sans-serif;
    flex-wrap: wrap;
  }
  .card-container {
    perspective: 1000px;
    margin: 10px;
  }
  .card {
    width: 200px;
    height: 150px;
    border-radius: 15px;
    cursor: pointer;
    transform-style: preserve-3d;
    transition: transform 0.6s;
  }
  .card.flipped {
    transform: rotateY(180deg);
  }
  .front, .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    text-align: center;
  }
  .front {
    background: #FFD54F;
    color: #005CBF;
  }
  .back {
    background: #4FC3F7;
    color: white;
    transform: rotateY(180deg);
  }
</style>
</head>
<body>

<div id="app">
  <div class="card-container" v-for="(g, index) in greetings" :key="index" @click="flipCard(index)">
    <div class="card" :class="{flipped: g.flipped}">
      <div class="front">{{ g.word }} 🇸🇪</div>
      <div class="back">{{ g.translation }}</div>
    </div>
  </div>
</div>

<script>
const { createApp } = Vue;

createApp({
  data() {
    return {
      greetings: [
        { word: 'Hej', translation: 'Hello', flipped: false },
        { word: 'Tack', translation: 'Thank you', flipped: false },
        { word: 'Välkommen', translation: 'Welcome', flipped: false },
        { word: 'God morgon', translation: 'Good morning', flipped: false },
        { word: 'God natt', translation: 'Good night', flipped: false },
        { word: 'Snälla', translation: 'Please', flipped: false }
      ]
    }
  },
  methods: {
    flipCard(index) {
      this.greetings[index].flipped = !this.greetings[index].flipped;
    }
  }
}).mount('#app');
</script>

</body>
</html>`
    }
};
