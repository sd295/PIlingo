// lessons/vue/l21.transitions.js
const lessonContent = {
  title: "Level 21: Vue Transitions & Animations",
  questions: [
    {
      prompt: "What does the <transition> component in Vue do?",
      options: [
        "Fetch remote data",
        "Apply enter/leave animations to elements",
        "Register global components",
        "Optimize rendering performance"
      ],
      correctAnswer: "Apply enter/leave animations to elements"
    },
    {
      prompt: "Which CSS class is applied when an element begins to enter?",
      options: [
        "v-enter-from",
        "v-leave-from",
        "v-show-start",
        "v-transition"
      ],
      correctAnswer: "v-enter-from"
    },
    {
      prompt: "Which Vue directive commonly pairs with <transition> for toggling elements?",
      options: ["v-model", "v-if", "v-for", "v-bind"],
      correctAnswer: "v-if"
    },
    {
      prompt: "<transition> works by automatically applying:",
      options: [
        "Vue lifecycle hooks",
        "CSS transition classes",
        "Webpack plugins",
        "Server-side rendering"
      ],
      correctAnswer: "CSS transition classes"
    },
    {
      prompt: "Transition Fact",
      options: "Vue uses a consistent naming scheme (v-enter-from, v-enter-active, etc.) so transitions are predictable and framework-aware.",
      correctAnswer: true
    }
  ],

  minigame: {
    gameType: "code-typer",
    title: "Challenge 15: Fade Text Toggle",
    prompt: "Toggle text visibility with a fade animation using <transition> and v-if.",
    solution: `<div id="app21">
  <button @click="show = !show">Toggle</button>

  <transition name="fade">
    <p v-if="show">Hej från Sverige!</p>
  </transition>
</div>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
</style>

<script>
const { createApp } = Vue;
createApp({
  data() { return { show: true }; }
}).mount('#app21');
</script>`
  },

  practice: {
    title: "Project: Animated Notification Panel",
    instructions: `
      <ol>
        <li>Create a dismissible notification box.</li>
        <li>Use <code>v-if</code> to toggle it.</li>
        <li>Wrap the box in a <code>&lt;transition&gt;</code> with slide + fade animation.</li>
        <li>Style it like a small Swedish alert banner.</li>
      </ol>
    `,
    defaultCode: `<!DOCTYPE html>
<html>
<head>
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
<style>
body {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding-top: 40px;
  background: #F0F8FF;
  font-family: sans-serif;
}

/* transition classes */
.slidefade-enter-from,
.slidefade-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
.slidefade-enter-active,
.slidefade-leave-active {
  transition: all 0.35s ease;
}

.notice {
  background: #005CBF;
  color: white;
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  max-width: 300px;
}
button {
  margin-top: 10px;
  background: #FFD54F;
  color: #005CBF;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
</head>
<body>
<div id="app">
  <button @click="visible = !visible">
    Toggle Notification
  </button>

  <transition name="slidefade">
    <div v-if="visible" class="notice">
      Swedish Tip: Take a fika break today!
      <br>
      <button @click="visible = false">Dismiss</button>
    </div>
  </transition>
</div>

<script>
const { createApp } = Vue;

createApp({
  data() {
    return { visible: true };
  }
}).mount('#app');
</script>
</body>
</html>`
  }
};
