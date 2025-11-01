// lessons/vue/l22.provide_inject.js
const lessonContent = {
  title: "Level 22: Provide & Inject (Dependency Sharing)",

  questions: [
    {
      prompt: "What are provide/inject used for in Vue?",
      options: [
        "To animate components",
        "To pass data deeply without prop drilling",
        "To create global state like Vuex",
        "To watch DOM events directly"
      ],
      correctAnswer: "To pass data deeply without prop drilling"
    },
    {
      prompt: "Which option is correct for defining shared data?",
      options: [
        "data() { return { provide: {} }}",
        "provide() { return { message: 'Hej' }}",
        "inject() { return { message: 'Hej' }}",
        "useProvide() { return message }"
      ],
      correctAnswer: "provide() { return { message: 'Hej' }}"
    },
    {
      prompt: "How do child components access provided values?",
      options: [
        "props",
        "data",
        "inject",
        "ref"
      ],
      correctAnswer: "inject"
    },
    {
      prompt: "Provide/inject should be used primarily for:",
      options: [
        "Parent → child event communication",
        "Styling CSS via JS",
        "Long-distance component communication",
        "Replacing props entirely"
      ],
      correctAnswer: "Long-distance component communication"
    },
    {
      prompt: "Usage Note",
      options: "Provide/inject is not a replacement for props in most cases; use it when props become cumbersome across many layers.",
      correctAnswer: true
    }
  ],

  minigame: {
    gameType: "code-typer",
    title: "Challenge 16: Shared Greeting",
    prompt: "Provide a greeting in a parent and display it inside a nested child using inject.",
    solution: `<div id="app22">
  <parent-box></parent-box>
</div>

<script>
const { createApp } = Vue;

const Child = {
  inject: ['greeting'],
  template: '<p>{{ greeting }}</p>'
};

const ParentBox = {
  components: { Child },
  provide() { return { greeting: 'Hej från Sverige!' } },
  template: '<div><Child /></div>'
};

createApp({ components: { ParentBox } }).mount('#app22');
</script>`
  },

  practice: {
    title: "Project: Nordic Theme Provider",
    instructions: `
      <ol>
        <li>Create a parent component that uses <code>provide()</code> to share:</li>
        <ul>
          <li>a string theme name (e.g., 'Swedish Blue')</li>
          <li>a color value (e.g., '#005CBF')</li>
        </ul>
        <li>Create two nested components that inject these values.</li>
        <li>Display the theme name and apply the color style dynamically.</li>
        <li>Make one nested component two levels deep to show convenience of provide/inject.</li>
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
  background: #F4FAFF;
  padding-top: 40px;
  font-family: sans-serif;
}
.card {
  padding: 18px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  margin-bottom: 12px;
}
</style>
</head>
<body>
<div id="app">
  <theme-provider></theme-provider>
</div>

<script>
const { createApp } = Vue;

const DeepChild = {
  inject: ['themeName', 'themeColor'],
  template: \`
    <div class="card" :style="{border: '2px solid ' + themeColor}">
      <strong>Deep Child Theme:</strong> {{ themeName }}
    </div>
  \`
};

const Child = {
  components: { DeepChild },
  inject: ['themeName', 'themeColor'],
  template: \`
    <div>
      <div class="card" :style="{background: themeColor, color: 'white'}">
        Child Theme: {{ themeName }}
      </div>
      <DeepChild />
    </div>
  \`
};

const ThemeProvider = {
  components: { Child },
  provide() {
    return {
      themeName: 'Swedish Blue Theme',
      themeColor: '#005CBF'
    };
  },
  template: \`
    <div>
      <h2>Theme Provider</h2>
      <Child />
    </div>
  \`
};

createApp({
  components: { ThemeProvider }
}).mount('#app');
</script>
</body>
</html>`
  }
};
