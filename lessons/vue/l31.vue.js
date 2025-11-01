// lessons/vue/l20.dynamic-components.js
const lessonContent = {
    title: "Level 20: Dynamic Components & <keep-alive>",

    questions: [
        {
            prompt: "What does the <component> tag allow you to do in Vue?",
            options: [
                "Render components conditionally at runtime",
                "Define CSS classes",
                "Create a global event bus",
                "Render raw HTML"
            ],
            correctAnswer: "Render components conditionally at runtime",
        },
        {
            prompt: "Which prop is required by <component> to switch components?",
            options: [
                ":is",
                ":to",
                "v-ref",
                "v-slot"
            ],
            correctAnswer: ":is",
        },
        {
            prompt: "What does <keep-alive> do when wrapping a dynamic component?",
            options: [
                "Caches inactive components to preserve state",
                "Automatically refreshes the component",
                "Makes the component reactive",
                "Pre-renders the component on the server"
            ],
            correctAnswer: "Caches inactive components to preserve state",
        },
        {
            prompt: "Which lifecycle hook is triggered when a component wrapped in <keep-alive> becomes active again?",
            options: [
                "mounted",
                "activated",
                "created",
                "destroyed"
            ],
            correctAnswer: "activated",
        },
        {
            prompt: "Dynamic Component Tip",
            options: "To render a component dynamically, pass the component’s name or object to the <component :is='...'> attribute.",
            correctAnswer: false
        },
        {
            prompt: "keep-alive Cache Note",
            options: "<keep-alive> only works with component instances, not regular HTML elements.",
            correctAnswer: true
        }
    ],

    minigame: {
        gameType: "code-typer",
        title: "Challenge 14: Simple Dynamic View Switcher",
        prompt: "Create two components, 'HomeView' and 'ProfileView'. Use <component :is> to switch between them via a button.",
        solution: `<div id="app14">
  <button @click="current = 'HomeView'">Home</button>
  <button @click="current = 'ProfileView'">Profile</button>

  <keep-alive>
    <component :is="current"></component>
  </keep-alive>
</div>

<script>
const { createApp } = Vue;

const HomeView = { template: '<h2>Welcome Home</h2>' };
const ProfileView = { template: '<h2>User Profile Loaded</h2>' };

createApp({
  data() {
    return { current: 'HomeView' }
  },
  components: { HomeView, ProfileView }
}).mount('#app14');
</script>`
    },

    practice: {
        title: "Project: Tabbed Content Viewer",
        instructions: `
            <ol>
              <li>Create three components: <code>TabAbout</code>, <code>TabContact</code>, and <code>TabFAQ</code>.</li>
              <li>Use <code><component :is></code> to switch between them.</li>
              <li>Wrap the dynamic component in <code><keep-alive></code> so tab state stays when switching.</li>
              <li>Create simple buttons to swap the active tab.</li>
            </ol>
        `,
        defaultCode: `<!DOCTYPE html>
<html>
<head>
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
</head>
<body>
<div id="app">
  <button @click="current = 'TabAbout'">About</button>
  <button @click="current = 'TabContact'">Contact</button>
  <button @click="current = 'TabFAQ'">FAQ</button>

  <keep-alive>
    <component :is="current"></component>
  </keep-alive>
</div>

<script>
const { createApp } = Vue;

const TabAbout = { template: '<p>About section content.</p>' };
const TabContact = { template: '<p>Contact section content.</p>' };
const TabFAQ = { template: '<p>FAQ section content.</p>' };

createApp({
  data() {
    return { current: 'TabAbout' }
  },
  components: { TabAbout, TabContact, TabFAQ }
}).mount('#app');
</script>
</body>
</html>`
    }
};
