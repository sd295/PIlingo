// lessons/vue/l24.transitions.js
const lessonContent = {
  title: "Level 24: Transitions & Animations",

  questions: [
    {
      prompt: "What does the <transition> component do?",
      options: [
        "Adds routing transitions",
        "Applies enter/leave CSS classes to animate elements",
        "Runs API calls during animation",
        "Enables teleport logic"
      ],
      correctAnswer: "Applies enter/leave CSS classes to animate elements"
    },
    {
      prompt: "Default transition class prefix in Vue:",
      options: [
        "fade-",
        "v-",
        "anim-",
        "vue-"
      ],
      correctAnswer: "v-"
    },
    {
      prompt: "Which directive triggers transitions?",
      options: [
        "v-show / v-if",
        "v-bind",
        "v-model",
        "v-html"
      ],
      correctAnswer: "v-show / v-if"
    },
    {
      prompt: "Vue transitions can be powered by CSS, JS hooks, or both.",
      options: ["True", "False"],
      correctAnswer: "True"
    },
    {
      prompt: "Tip",
      options: "Keep transitions subtle; short, easing animations feel more natural.",
      correctAnswer: true
    }
  ],

  minigame: {
    gameType: "code-typer",
    title: "Challenge 18: Fade Toggle",
    prompt: "Animate an element fading in and out on toggle.",
    solution: `<div id="app24">
  <button @click="show = !show">Toggle Box</button>

  <transition name="fade">
    <div v-if="show" class="box"></div>
  </transition>
</div>

<style>
.box {
  width: 120px;
  height: 120px;
  background: #005CBF;
  margin-top: 12px;
}
/* Vue default class hooks for 'fade' name */
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .35s ease;
}
</style>

<script>
const { createApp } = Vue;
createApp({
  data() { return { show: true }; }
}).mount('#app24');
</script>`
  },

  practice: {
    title: "Project: Swedish Winter Fade Scene",
    instructions: `
      <ol>
        <li>Create a button that toggles a winter scene (e.g., snow emoji or snowy text).</li>
        <li>Use <code><transition></code> with a custom class name.</li>
        <li>Apply a slow fade-in (500–900ms) and gentle fade-out.</li>
        <li>Use cool colors (blues, whites) in the content.</li>
      </ol>
    `,
    defaultCode: `<!DOCTYPE html>
<html>
<head>
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
<style>
body {
  font-family: sans-serif;
  background: #EAF6FF;
  display: flex;
  justify-content: center;
  padding-top: 40px;
}
button {
  cursor: pointer;
  padding: 8px 14px;
  background: #A7D8FF;
  border: none;
  border-radius: 6px;
  color: #005CBF;
}
.scene {
  margin-top: 18px;
  background: white;
  padding: 20px;
  border-radius: 12px;
  border: 2px solid #8EC9FF;
  font-size: 20px;
  text-align: center;
}

/* Winter fade class group */
.winter-enter-from, .winter-leave-to {
  opacity: 0;
}
.winter-enter-active, .winter-leave-active {
  transition: opacity .8s ease;
}
</style>
</head>
<body>
<div id="app">
  <button @click="show = !show">Toggle Winter Scene</button>

  <transition name="winter">
    <div v-if="show" class="scene">
      ❄️ Snow is falling over Sverige ❄️
    </div>
  </transition>
</div>

<script>
const { createApp } = Vue;

createApp({
  data() {
    return { show: true };
  }
}).mount('#app');
</script>
</body>
</html>`
  }
};
