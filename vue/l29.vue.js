// lessons/vue/l19.slots.js
const lessonContent = {
    title: "Level 19: Flexible Components (Slots)",

    // Quiz about slots
    questions: [
        {
            prompt: "What is the purpose of the <slot> element inside a component's template?",
            options: [
                "To define reactive data",
                "To pass properties from child to parent",
                "To render content passed from the parent component",
                "To define a local method"
            ],
            correctAnswer: "To render content passed from the parent component",
        },
        {
            prompt: "What are slots that have a 'name' attribute called (e.g., <slot name='header'>)?",
            options: ["Props Slots", "Named Slots", "Scoped Slots", "Default Slots"],
            correctAnswer: "Named Slots",
        },
        {
            prompt: "What Vue directive is used in the parent component to pass content to a named slot?",
            options: ["v-bind", "v-for", "v-slot", "v-model"],
            correctAnswer: "v-slot",
        },
        {
            prompt: "If a component has a <slot> with default content, when is that default content displayed?",
            options: ["When the parent does not pass any content for that slot", "When the parent passes content", "Never", "Only when a prop is missing"],
            correctAnswer: "When the parent does not pass any content for that slot",
        },
        {
            prompt: "Scoped Slots",
            options: "A more advanced type, Scoped Slots, allows the *child* component to provide data back to the *parent* component for use in the slot's template. This is commonly used in list components to allow the parent to customize how each list item is rendered.",
            correctAnswer: false
        },
        {
            prompt: "Slot Shorthand",
            options: "For cleaner template code, Vue provides a shorthand for the <code>v-slot:</code> directive. You can simply use <code>#</code> followed by the slot name, e.g., <code>v-slot:header</code> becomes <code>#header</code>.",
            correctAnswer: false
        },
        {
            prompt: "The Original Name",
            options: "When Vue was first being developed, it was briefly referred to as 'Seed' by its creator, Evan You. The final name 'Vue' was chosen because it's a short, French word meaning 'view' or 'sight,' reflecting its focus as the view layer of an application.",
            correctAnswer: true
        }
    
    ],

    // Minigame
    minigame: {
        gameType: 'code-typer',
        title: "Challenge 13: Simple Card Slot",
        prompt: "Create a component named 'SimpleCard' with a default slot. In the parent, use this component and pass the text 'Fika Time! 🇸🇪'.",
        solution: `<div id="app13">
  <!-- Passing the content "Fika Time! 🇸🇪" into the component -->
  <simple-card>Fika Time! 🇸🇪</simple-card>
</div>
<script>
const { createApp } = Vue;

const SimpleCard = {
  // The <slot> tag renders the content passed from the parent
  template: \`<div style="border: 1px solid #FFD54F; padding: 10px; background: #005CBF; color: white; border-radius: 5px;"><slot></slot></div>\`
};

createApp({})
  .component('simple-card', SimpleCard) 
  .mount("#app13");
</script>`
    },
    
    // Practice project
    practice: {
        title: "Project: Named Slots Recipe Layout (Swedish Kärleksmums)",
        instructions: `
            <p>The goal is to use **Named Slots** to create a structured and flexible recipe card component for a popular Swedish treat, *Kärleksmums* (Love Bites).</p>
            <ol>
                <li>Define a reusable component named <code>recipe-card</code>.</li>
                <li>The component's template must contain **three named slots**: <code>header</code>, <code>ingredients</code>, and <code>instructions</code>.</li>
                <li>In the root Vue instance, use the <code>recipe-card</code> component.</li>
                <li>Pass content to each of the three named slots using the <code>&lt;template v-slot:slotName&gt;</code> syntax (or the <code>#slotName</code> shorthand).</li>
                <li>The content for each slot should be distinct (e.g., an <code>&lt;h2&gt;</code> for the header, an <code>&lt;ul&gt;</code> for ingredients, and a <code>&lt;p&gt;</code> for instructions).</li>
            </ol>
        `,
        defaultCode: `<!DOCTYPE html>
<html lang="sv">
<head>
<meta charset="UTF-8">
<title>Vue Named Slots Recipe</title>
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
<style>
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    background: #EAF7E9; /* Soft background */
    font-family: 'Georgia', serif;
    padding: 20px;
  }

  #app {
    width: 100%;
    max-width: 600px;
  }
  
  .recipe-card {
    background: white;
    border: 5px solid #005CBF; /* Swedish Blue Border */
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 8px 15px rgba(0,0,0,0.2);
  }

  h1 {
    color: #FFD54F; /* Swedish Yellow Text */
    -webkit-text-stroke: 1px #005CBF;
    text-align: center;
    margin-bottom: 30px;
  }

  /* Slot specific styling */
  .card-header h2 {
    text-align: center;
    color: #388E3C; /* Green for food */
    margin-top: 0;
    font-size: 28px;
  }

  .card-ingredients {
    border-left: 5px solid #FFD54F;
    padding-left: 15px;
    margin-bottom: 20px;
  }

  .card-instructions {
    background: #F0F0F0;
    padding: 15px;
    border-radius: 6px;
    line-height: 1.6;
    font-size: 14px;
  }
</style>
</head>
<body>
<div id="app">
  <h1>Kärleksmums (Love Bites) Recipe 🇸🇪</h1>
  
  <!-- The main component instance -->
  <recipe-card>
    
    <!-- 1. Content for the 'header' slot (using the # shorthand) -->
    <template #header>
      <h2>Kärleksmums (Swedish Chocolate Cake)</h2>
    </template>
    
    <!-- 2. Content for the 'ingredients' slot -->
    <template v-slot:ingredients>
      <ul>
        <li>3 dl Flour</li>
        <li>2 dl Sugar</li>
        <li>2 tsp Vanilla Sugar</li>
        <li>100g Butter</li>
        <li>1 Egg</li>
      </ul>
      <p style="font-size: 14px; font-style: italic;">We need a strong cup of coffee too!</p>
    </template>
    
    <!-- 3. Content for the 'instructions' slot -->
    <template v-slot:instructions>
      <p>
        <strong>Bake:</strong> Mix all ingredients. Pour into a tray and bake at 175°C for 15 minutes. 
        <strong>Frost:</strong> Prepare the chocolate glaze and spread evenly.
        <strong>Serve:</strong> Cut into squares and enjoy with Fika!
      </p>
    </template>
    
    <!-- Content outside of a named slot goes to the default slot -->
    <p>Enjoy this delicious Swedish treat!</p>

  </recipe-card>
</div>
<script>
const { createApp } = Vue;

// 1. Define the reusable Component with Named Slots
const RecipeCard = {
  template: \`
    <div class="recipe-card">
      <div class="card-header">
        <!-- Named Slot for the Title -->
        <slot name="header"></slot>
      </div>
      
      <div class="card-ingredients">
        <h3>Ingredients:</h3>
        <!-- Named Slot for Ingredients -->
        <slot name="ingredients"></slot>
      </div>
      
      <div class="card-instructions">
        <h3>Instructions:</h3>
        <!-- Named Slot for Instructions -->
        <slot name="instructions"></slot>
      </div>
      
      <hr>
      <!-- Default Slot for any other content -->
      <slot></slot> 
    </div>
  \`
};

// 2. Create the Root Application
createApp({})
  // Register the component globally
  .component('recipe-card', RecipeCard)
  .mount('#app');
</script>
</body>
</html>`
    },
    
    
};