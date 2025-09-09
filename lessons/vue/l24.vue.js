const lessonContent = {
  title: "Level 16: Vue Computed & Watchers Together (Swedish Theme)",

  // Quiz about computed properties + watchers
  questions: [
    {
      prompt: "What is the main difference between computed properties and watchers?",
      options: [
        "Computed properties return a value based on dependencies; watchers run side effects",
        "Computed properties run side effects; watchers return values",
        "They are exactly the same",
        "Computed properties are slower than watchers"
      ],
      correctAnswer: "Computed properties return a value based on dependencies; watchers run side effects",
    },
    {
      prompt: "Which is best for expensive calculations you need often?",
      options: ["watch", "computed", "methods{}", "data()"],
      correctAnswer: "computed",
    },
    {
      prompt: "Which is better for reacting to changes with side effects (like alerts)?",
      options: ["watch", "computed", "methods{}", "props"],
      correctAnswer: "watch",
    },
    {
      prompt: "Can computed properties depend on other computed properties?",
      options: ["Yes", "No", "Only in Vue 3", "Only with watchers"],
      correctAnswer: "Yes",
    },
    {
      prompt: "Can watchers access both old and new values?",
      options: ["Yes", "No", "Only in computed", "Only on mount"],
      correctAnswer: "Yes",
    }
  ],

  // Practice project


  // Minigame
  minigame: {
    gameType: 'code-typer',
    title: "Challenge 10: Total Alert",
    prompt: "Create two number inputs. Show total. Alert if total > 10. Also warn individually if coffee >5 or buns >5.",
    solution: `<div id="app10">
<label>Coffee: <input type="number" v-model="coffee"></label><br>
<label>Buns: <input type="number" v-model="buns"></label><br>
<h2>Total: {{ total }}</h2>
<h2>{{ message }}</h2>
</div>
<script>
const { createApp } = Vue;
createApp({
  data() { return { coffee:0, buns:0, message:"" } },
  computed: { total() { return this.coffee + this.buns; } },
  watch: {
    coffee(val){ if(val>5) this.message="Too much coffee! ☕"; },
    buns(val){ if(val>5) this.message="Too many buns! 🍩"; },
    total(val){ if(val>10) alert("Total > 10!"); }
  }
}).mount("#app10");
</script>`
  }
};
