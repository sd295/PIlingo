// lessons/vue/l17.components_props.js
const lessonContent = {
    title: "Level 17: Component-Based Design (Props)",

    // Quiz about components and props
    questions: [
        {
            prompt: "What is the primary purpose of a Vue Component?",
            options: [
                "To manage global state",
                "To make UI parts reusable and self-contained",
                "To replace the need for methods",
                "To exclusively handle API calls"
            ],
            correctAnswer: "To make UI parts reusable and self-contained",
        },
        {
            prompt: "How do you pass data from a parent component to a child component?",
            options: ["v-model", "emits", "props", "watch"],
            correctAnswer: "props",
        },
        {
            prompt: "In a component definition, what property is used to declare the data that can be received from the parent?",
            options: ["data", "methods", "props", "computed"],
            correctAnswer: "props",
        },
        {
            prompt: "Can a Vue component have its own reactive data?",
            options: ["Yes, every component can", "No, only the root instance can have data", "Only if it has no props", "Only if it is a built-in component"],
            correctAnswer: "Yes, every component can",
        },
        {
            prompt: "What happens if a child component tries to directly change a prop received from its parent?",
            options: ["It works fine and updates the parent", "Vue throws a warning/error (It should be treated as read-only)", "It creates a computed property automatically", "It is converted into a local data property"],
            correctAnswer: "Vue throws a warning/error (It should be treated as read-only)",
        }
    ],

    // Minigame
    minigame: {
        gameType: 'code-typer',
        title: "Challenge 11: Swedish Hello Component",
        prompt: "Define a global component named 'SwedishHello'. It must accept a 'name' prop and display the greeting 'Hej, [name]! Välkommen. 🇸🇪'",
        solution: `<div id="app11">
  <swedish-hello name="Elsa"></swedish-hello>
  <swedish-hello name="Björn"></swedish-hello>
</div>
<script>
const { createApp } = Vue;

// 1. Define the component
const SwedishHello = {
  // 2. Declare the props it expects to receive
  props: ['name'],
  template: \`
    <p style="font-size: 20px; color: #005CBF;">
      Hej, {{ name }}! Välkommen. 🇸🇪
    </p>
  \`
};

createApp({})
  // 3. Register the component globally
  .component('SwedishHello', SwedishHello) 
  .mount("#app11");
</script>`
    },

    // Practice project
    practice: {
        title: "Project: Swedish Phrase Card Component",
        instructions: `
            <p>The goal is to build a reusable <code>PhraseCard</code> component to display Swedish vocabulary, practicing the use of **props**.</p>
            <ol>
                <li>Define a global Vue component named <code>phrase-card</code>.</li>
                <li>The component must declare and accept two **props**: <code>swedishPhrase</code> and <code>englishTranslation</code>.</li>
                <li>The component's template should display both props in a visually distinct way (like a small box).</li>
                <li>In the root Vue instance, use <code>v-for</code> to loop over the provided <code>phrases</code> array.</li>
                <li>For each phrase object, render an instance of the <code>phrase-card</code> component, passing the Swedish and English text using Vue's prop binding syntax (<code>:prop-name="..."</code>).</li>
            </ol>
        `,
        defaultCode: `<!DOCTYPE html>
<html lang="sv">
<head>
<meta charset="UTF-8">
<title>Vue Component Phrasebook</title>
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
<style>
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    background: #F8F8F8;
    font-family: Arial, sans-serif;
    padding: 20px;
  }

  #app {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    max-width: 800px;
  }
  
  /* Styling for the PhraseCard component */
  .phrase-card {
    width: 200px;
    padding: 15px;
    border-radius: 8px;
    background: #FFD54F; /* Swedish Yellow */
    border: 2px solid #005CBF; /* Swedish Blue */
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    text-align: center;
  }
  
  .swedish {
    font-size: 20px;
    font-weight: bold;
    color: #005CBF;
    margin-bottom: 5px;
  }
  
  .english {
    font-size: 16px;
    color: #333;
    font-style: italic;
    border-top: 1px dashed #005CBF;
    padding-top: 5px;
  }
</style>
</head>
<body>
<div id="app">
  <h1>Swedish Phrasebook 🇸🇪 (Component Example)</h1>
  
  <!-- Looping through the data and rendering the reusable component -->
  <!-- Note the use of :swedish-phrase="..." to bind the prop value -->
  <phrase-card 
    v-for="(phrase, index) in phrases" 
    :key="index"
    :swedish-phrase="phrase.sv"
    :english-translation="phrase.en">
  </phrase-card>
  
</div>
<script>
const { createApp } = Vue;

// 1. Define the reusable Component
const PhraseCard = {
  // 2. Declare the props the component accepts
  props: ['swedishPhrase', 'englishTranslation'],
  
  // 3. Define the component's structure and display the props
  template: \`
    <div class="phrase-card">
      <div class="swedish">{{ swedishPhrase }}</div>
      <div class="english">"{{ englishTranslation }}"</div>
      <span>...</span>
    </div>
  \`
};

// 4. Create the Root Application
createApp({
  data() {
    return {
      phrases: [
        { sv: 'Jag älskar dig', en: 'I love you' },
        { sv: 'Trevligt att träffas', en: 'Nice to meet you' },
        { sv: 'God kväll', en: 'Good evening' },
        { sv: 'En kopp kaffe, tack', en: 'A cup of coffee, please' },
        { sv: 'Var är toaletten?', en: 'Where is the toilet?' },
        { sv: 'Vi ses!', en: 'See you!' }
      ]
    }
  }
})
  // 5. Register the component globally so the root template can use it
  .component('phrase-card', PhraseCard)
  .mount('#app');
</script>
</body>
</html>`
    }
};