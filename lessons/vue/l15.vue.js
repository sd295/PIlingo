// lessons/l9_vue_quiz.js
const lessonContent = {
    title: "Level 9: Vue.js Components & Props",
    
    // Quiz questions: component-focused
    questions: [
        {
            prompt: "Which feature allows you to pass data from a parent to a child component?",
            options: ["props", "$emit", "v-model", "computed"],
            correctAnswer: "props",
        },
        {
            prompt: "Which directive allows you to render child components multiple times from an array?",
            options: ["v-for", "v-if", "v-bind", "v-on"],
            correctAnswer: "v-for",
        },
        {
            prompt: "How does a child component communicate an event back to its parent?",
            options: ["$emit", "props", "methods", "computed"],
            correctAnswer: "$emit",
        },
        {
            prompt: "Which feature lets you insert custom HTML inside a child component from the parent?",
            options: ["slots", "props", "v-model", "watch"],
            correctAnswer: "slots",
        },
        {
            prompt: "Which Vue feature automatically recalculates a value when its dependencies change?",
            options: ["computed", "methods", "data()", "watch"],
            correctAnswer: "computed",
        }
    ],

    // Practice project
    practice: {
        title: "Project: Interactive Product List",
        instructions: `
Create a Vue.js app using components:
1. Create a parent component that holds a list of products (name, price).
2. Create a child component for each product to display name and price.
3. Allow a user to click a product to see details (e.g., description) using $emit.
4. Bonus: Use slots to customize product display.
        `,
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Product List</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
</head>
<body style="font-family:sans-serif; text-align:center; padding:50px;">

  <div id="app">
    <h1>Product List</h1>
    <product-item 
      v-for="product in products" 
      :key="product.name" 
      :product="product" 
      @show-details="showDetails">
      <template #extra>
        <small style="color:gray;">Click for more info!</small>
      </template>
    </product-item>
  </div>

  <script>
    const app = Vue.createApp({
      data() {
        return {
          products: [
            { name: 'Apple', price: '$1', description: 'Fresh and juicy' },
            { name: 'Banana', price: '$0.5', description: 'Rich in potassium' },
            { name: 'Orange', price: '$0.8', description: 'Sweet and tangy' }
          ]
        }
      },
      methods: {
        showDetails(product) {
          alert('Details: ' + product.description);
        }
      }
    });

    // Child component
    app.component('product-item', {
      props: ['product'],
      template: \`
        <div @click="$emit('show-details', product)" style="border:1px solid gray; padding:10px; margin:10px; cursor:pointer;">
          <h2>{{ product.name }} - {{ product.price }}</h2>
          <slot name="extra"></slot>
        </div>
      \`
    });

    app.mount('#app');
  </script>

</body>
</html>`
    },

    // Minigame: Component-based interactive list
    minigame: {
            gameType: 'code-typer',
            title: "Challenge 9: Friend",
            prompt: "Make 'Vän' (Friend). On click, alert 'Friend in English!'.",
            solution: `<div id="app9">
  <div @click="friend">Vän</div>
</div>
<script>
createApp({
  methods: {
    friend() { alert("Friend in English!"); }
  }
}).mount("#app9");
</script>`
        }
};
