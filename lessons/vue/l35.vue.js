// lessons/vue/l23.teleport.js
const lessonContent = {
  title: "Level 23: Teleport (Render Content Outside Component Tree)",

  questions: [
    {
      prompt: "What does <teleport> allow you to do in Vue?",
      options: [
        "Move data to the server",
        "Render a component’s content in another part of the DOM",
        "Store values globally",
        "Animate components by default"
      ],
      correctAnswer: "Render a component’s content in another part of the DOM"
    },
    {
      prompt: "Which attribute tells <teleport> where to render its content?",
      options: [
        "to",
        "target",
        "dest",
        "slot"
      ],
      correctAnswer: "to"
    },
    {
      prompt: "A common real-world use case for teleport is:",
      options: [
        "API data fetching",
        "Modals, overlays, and tooltips",
        "Routing between pages",
        "Replacing Vuex"
      ],
      correctAnswer: "Modals, overlays, and tooltips"
    },
    {
      prompt: "Teleport keeps component reactivity even when moved.",
      options: ["True", "False"],
      correctAnswer: "True"
    },
    {
      prompt: "Teleport Tip",
      options: "Teleport only moves DOM placement, not component ownership, reactivity, or lifecycle.",
      correctAnswer: true
    }
  ],

  minigame: {
    gameType: "code-typer",
    title: "Challenge 17: Simple Teleported Popup",
    prompt: "Toggle a teleported popup panel from a button.",
    solution: `<div id="app23">
  <button @click="show = !show">Toggle Popup</button>

  <teleport to="body">
    <div v-if="show" style="position:fixed; top:20px; right:20px; background:#005CBF; color:white; padding:12px; border-radius:6px;">
      Hej! I'm teleported!
    </div>
  </teleport>
</div>

<script>
const { createApp } = Vue;
createApp({
  data() { return { show: false }; }
}).mount('#app23');
</script>`
  },

  practice: {
    title: "Project: Teleported Swedish Modal",
    instructions: `
      <ol>
        <li>Create a button that opens a modal.</li>
        <li>Use <code><teleport to="body"></code> to render the modal in <code>body</code>.</li>
        <li>Inside the modal, show a Swedish-themed message (e.g., fika or nature).</li>
        <li>Style the overlay to dim the background.</li>
        <li>Add a close button inside the modal.</li>
      </ol>
    `,
    defaultCode: `<!DOCTYPE html>
<html>
<head>
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
<style>
body {
  font-family: sans-serif;
  background: #F6FBFF;
  display: flex;
  justify-content: center;
  padding-top: 40px;
}
.overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.45);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background: #005CBF;
  color: white;
  padding: 25px;
  border-radius: 10px;
  width: 280px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
  text-align: center;
}
button {
  cursor: pointer;
  padding: 8px 14px;
  background: #FFD54F;
  border: none;
  border-radius: 6px;
  color: #005CBF;
}
</style>
</head>
<body>
<div id="app">
  <button @click="show = true">Open Swedish Modal</button>

  <teleport to="body">
    <div v-if="show" class="overlay">
      <div class="modal">
        <h3>Swedish Fika Time ☕🇸🇪</h3>
        <p>Take a moment. Slow down. Enjoy a bun.</p>
        <button @click="show = false">Close</button>
      </div>
    </div>
  </teleport>
</div>

<script>
const { createApp } = Vue;

createApp({
  data() {
    return { show: false };
  }
}).mount('#app');
</script>
</body>
</html>`
  }
};
