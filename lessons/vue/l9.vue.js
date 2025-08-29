// lessons/l6_vue_quiz.js
const lessonContent = {
    title: "Level 6: Advanced Vue.js Interactive Projects",
    
    // Quiz questions for L6 (more advanced Vue topics)
    questions: [
        {
            prompt: "Which Vue 3 feature allows you to define reactive state outside components?",
            options: ["Composition API", "Options API", "v-for", "v-model"],
            correctAnswer: "Composition API",
        },
        {
            prompt: "Which function from the Composition API creates reactive objects?",
            options: ["reactive()", "ref()", "computed()", "watch()"],
            correctAnswer: "reactive()",
        },
        {
            prompt: "Which function is used to track a single reactive value in Composition API?",
            options: ["ref()", "reactive()", "watch()", "provide()"],
            correctAnswer: "ref()",
        },
        {
            prompt: "How do you create a computed property using Composition API?",
            options: ["computed(() => ...)", "methods: {}", "data()", "watch()"],
            correctAnswer: "computed(() => ...)",
        },
        {
            prompt: "Which Composition API function allows you to react to changes in a reactive property?",
            options: ["watch()", "ref()", "reactive()", "v-bind"],
            correctAnswer: "watch()",
        }
    ],

    // Practice project
    practice: {
        title: "Project: Advanced Swedish Cities Dashboard",
        instructions: `
Create a Vue 3 app that:
1. Displays a list of Swedish cities with name, population, and a fun fact.
2. Includes a search box and filter by population.
3. Uses reactive state and computed properties.
4. Shows fun facts when clicking on cities.
5. Bonus: highlight largest cities dynamically.
        `,
        defaultCode: `<!DOCTYPE html>
<html lang="sv">
<head>
  <meta charset="UTF-8">
  <title>Advanced Swedish Cities Dashboard</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
</head>
<body style="font-family:sans-serif; text-align:center; padding:50px; background-color:#e0f7fa;">

  <div id="app">
    <h1>Swedish Cities Dashboard</h1>
    <input v-model="search" placeholder="Search cities" style="margin-bottom:20px; padding:5px;" />
    <input type="number" v-model.number="minPopulation" placeholder="Min population" style="margin-bottom:20px; padding:5px;" />
    
    <ul>
      <li v-for="city in filteredCities" :key="city.name" @click="showFact(city)">
        <strong>{{ city.name }}</strong> - {{ city.population }} people
      </li>
    </ul>
  </div>

  <script>
    const { createApp, reactive, computed } = Vue;

    createApp({
      setup() {
        const state = reactive({
          search: '',
          minPopulation: 0,
          cities: [
            { name: 'Stockholm', population: 975904, fact: 'Capital city of Sweden.' },
            { name: 'Gothenburg', population: 580000, fact: 'Located on the west coast.' },
            { name: 'Malmö', population: 340000, fact: 'Connected to Copenhagen via the Öresund bridge.' },
            { name: 'Uppsala', population: 233000, fact: 'Home to a famous university.' }
          ]
        });

        const filteredCities = computed(() => {
          return state.cities.filter(city =>
            city.name.toLowerCase().includes(state.search.toLowerCase()) &&
            city.population >= state.minPopulation
          );
        });

        function showFact(city) {
          alert('Fun fact: ' + city.fact);
        }

        return { ...state, filteredCities, showFact };
      }
    }).mount('#app');
  </script>

</body>
</html>`
    },

    // Minigame: Vue 3 lakes challenge
    minigame: {
        title: "Challenge: Advanced Swedish Lakes Dashboard",
        prompt: `
Use Vue 3 to create an interactive lakes dashboard:
- Display lake name, size, and fun fact.
- Filter lakes by minimum size.
- Highlight lakes starting with 'S'.
- Clicking a lake shows its fun fact.
- Use reactive state, computed properties, and methods.
        `,
        draggableTags: [
            "reactive",
            "ref",
            "computed",
            "watch",
            "v-for",
            "v-bind",
            "v-model",
            "v-if",
            "methods",
            "click event"
        ],
        solution: `// Example solution:
const { createApp, reactive, computed } = Vue;

createApp({
  setup() {
    const state = reactive({
      minSize: 0,
      lakes: [
        { name: 'Siljan', size: 290, fact: 'Famous for summer vacations.' },
        { name: 'Storsjön', size: 464, fact: 'Has a legendary sea monster.' },
        { name: 'Vättern', size: 1910, fact: 'Second largest lake in Sweden.' },
        { name: 'Mälaren', size: 1140, fact: 'Located near Stockholm.' }
      ]
    });

    const filteredLakes = computed(() =>
      state.lakes
        .filter(lake => lake.size >= state.minSize)
        .sort((a,b) => b.size - a.size)
    );

    function showFact(lake) {
      alert('Fun fact: ' + lake.fact);
    }

    return { ...state, filteredLakes, showFact };
  }
}).mount('#lakes-app');`
    },

    cutsceneUrl: null
};
