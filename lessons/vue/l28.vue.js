// lessons/vue/l18.emit_events.js
const lessonContent = {
    title: "Level 18: Component Communication (Emitting Events)",

    // Quiz about custom events and emitting
    questions: [
        {
            prompt: "What mechanism is used to communicate from a child component back up to its parent component?",
            options: [
                "Using props",
                "Calling a parent method directly",
                "Emitting a custom event",
                "Using a computed property"
            ],
            correctAnswer: "Emitting a custom event",
        },
        {
            prompt: "What is the Vue built-in method used by a child component to trigger a custom event?",
            options: ["this.callParent()", "this.$emit()", "this.trigger()", "this.send()"],
            correctAnswer: "this.$emit()",
        },
        {
            prompt: "How does a parent component 'listen' for an emitted event from its child?",
            options: [
                "Using the @ symbol followed by the event name (e.g., @my-event)",
                "By defining a watch on the child component's props",
                "By using a global event bus",
                "It cannot listen to child events"
            ],
            correctAnswer: "Using the @ symbol followed by the event name (e.g., @my-event)",
        },
        {
            prompt: "What is a recommended practice when defining event names?",
            options: ["Use PascalCase (e.g., MyEvent)", "Use snake_case (e.g., my_event)", "Use kebab-case (e.g., my-event)", "Use only capital letters"],
            correctAnswer: "Use kebab-case (e.g., my-event)",
        },
        {
            prompt: "Can data be passed along when a child component emits an event?",
            options: ["No, events only signal a change", "Yes, as arguments to the $emit call", "Only if the data is a prop", "Only with VueX"],
            correctAnswer: "Yes, as arguments to the $emit call",
        }
    ],

    // Minigame
    minigame: {
        gameType: 'code-typer',
        title: "Challenge 12: Fika Clicker",
        prompt: "Create a button component. When clicked, it must emit an event called 'fika-time'. The parent listens for 'fika-time' and increments a 'fikaCount' counter. Display the counter.",
        solution: `<div id="app12">
  <fika-button @fika-time="fikaCount++"></fika-button>
  <p>Fika Taken: {{ fikaCount }}</p>
</div>
<script>
const { createApp } = Vue;

const FikaButton = {
  template: \`<button @click="$emit('fika-time')">Take Fika Break ☕</button>\`
};

createApp({
  data() {
    return {
      fikaCount: 0
    }
  }
})
  .component('fika-button', FikaButton) 
  .mount("#app12");
</script>`
    },

    // Practice project
    practice: {
        title: "Project: Interactive Fika Menu (Component Events)",
        instructions: `
            <p>The goal is to enhance the phrase card project by making the cards interactive, using the **emit** pattern to send data from child to parent.</p>
            <ol>
                <li>Define a reusable component named <code>menu-item</code> that accepts <code>name</code> (string) and <code>price</code> (number) as props.</li>
                <li>The component should display the item's name and price in Swedish Krona (SEK).</li>
                <li>Inside the <code>menu-item</code> component, include an "Order" button.</li>
                <li>When the "Order" button is clicked, the component must use <code>this.$emit()</code> to emit a custom event called <code>order-item</code>.</li>
                <li>The **data** passed along with the <code>order-item</code> event must be the item's <code>name</code>.</li>
                <li>In the root Vue instance, listen for the <code>@order-item</code> event and use a method to add the received item name to a reactive array called <code>orderList</code>.</li>
                <li>Display the final <code>orderList</code> in the parent component.</li>
            </ol>
        `,
        defaultCode: `<!DOCTYPE html>
<html lang="sv">
<head>
<meta charset="UTF-8">
<title>Vue Component Events Menu</title>
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
<style>
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    background: #E0F7FA; /* Light Blue Background */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 20px;
  }

  #app {
    width: 100%;
    max-width: 800px;
    padding: 30px;
  }
  
  .menu-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-bottom: 30px;
  }

  /* Styling for the MenuItem component */
  .menu-item {
    width: 200px;
    padding: 15px;
    border-radius: 8px;
    background: #FFD54F; /* Swedish Yellow */
    border: 3px solid #005CBF; /* Swedish Blue */
    box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .item-name {
    font-size: 22px;
    font-weight: bold;
    color: #005CBF;
    margin-bottom: 5px;
  }
  
  .item-price {
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
  }
  
  .menu-item button {
    background: #005CBF;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .menu-item button:hover {
    background: #003F80;
  }
  
  .order-summary {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
  
  .order-summary h2 {
    color: #005CBF;
    border-bottom: 2px solid #FFD54F;
    padding-bottom: 10px;
  }
  
  .order-summary ul {
    list-style: none;
    padding: 0;
  }
  
  .order-summary li {
    padding: 5px 0;
    font-size: 16px;
  }
</style>
</head>
<body>
<div id="app">
  <h1 style="color: #005CBF;">Fika Kiosk Menu ☕🍰</h1>
  
  <!-- Menu Items: Render components using v-for -->
  <div class="menu-grid">
    <!-- Listening for the custom event 'order-item' and calling a method -->
    <menu-item 
      v-for="(item, index) in menu" 
      :key="index"
      :name="item.name"
      :price="item.price"
      @order-item="addItemToOrder">
    </menu-item>
  </div>
  
  <!-- Order Summary -->
  <div class="order-summary">
    <h2>Your Order (Beställning)</h2>
    <ul v-if="orderList.length > 0">
      <li v-for="(item, index) in orderList" :key="index">
        {{ index + 1 }}. {{ item }}
      </li>
    </ul>
    <p v-else style="font-style: italic;">Nothing ordered yet. Click an item!</p>
    <p style="font-weight: bold; margin-top: 15px;">Total Items: {{ orderList.length }}</p>
  </div>
</div>
<script>
const { createApp } = Vue;

// 1. Define the reusable Child Component
const MenuItem = {
  // Define props
  props: ['name', 'price'],
  
  // Define the events this component can emit (optional but recommended in production)
  emits: ['order-item'],

  // Define the method to handle the click and emit the event
  methods: {
    handleOrder() {
      // 2. Use this.$emit() to send an event named 'order-item'
      // The second argument is the data being passed back to the parent
      this.$emit('order-item', this.name);
    }
  },

  // Define the component's structure
  template: \`
    <div class="menu-item">
      <div>
        <div class="item-name">{{ name }}</div>
        <div class="item-price">{{ price }} SEK</div>
      </div>
      <!-- 3. Attach the method to the button click -->
      <button @click="handleOrder">Order (Beställ)</button>
    </div>
  \`
};

// 4. Create the Root Application
createApp({
  data() {
    return {
      menu: [
        { name: 'Kanelbulle', price: 25 },
        { name: 'Kaffe', price: 30 },
        { name: 'Chokladboll', price: 22 },
        { name: 'Smörgås', price: 45 }
      ],
      // The reactive array to hold the ordered items
      orderList: [] 
    }
  },
  methods: {
    // 5. This method is called by the parent when it receives the 'order-item' event
    addItemToOrder(itemName) {
      // The itemName argument receives the data passed from the $emit call in the child
      this.orderList.push(itemName);
      console.log(\`Item ordered: \${itemName}\`);
    }
  }
})
  // Register the component globally
  .component('menu-item', MenuItem)
  .mount('#app');
</script>
</body>
</html>`
    }
};