// lessons/l5_vue_quiz.js
const lessonContent = {
    title: "Level 5: Vue.js Interactive Projects",
    
    // Quiz questions for Level 5 (slightly more advanced)
    questions: [
        {
            prompt: "Which Vue feature allows components to reactively update when data changes?",
            options: ["Reactivity system", "Methods", "Props", "Directives"],
            correctAnswer: "Reactivity system",
        },
        {
            prompt: "How do you loop through a list of items in Vue templates?",
            options: ["v-for", "v-if", "v-bind", "v-on"],
            correctAnswer: "v-for",
        },
        {
            prompt: "Which directive binds an event handler to an element in Vue?",
            options: ["v-on", "v-bind", "v-model", "v-show"],
            correctAnswer: "v-on",
        },
        {
            prompt: "What directive is used for two-way data binding on inputs?",
            options: ["v-model", "v-bind", "v-for", "v-if"],
            correctAnswer: "v-model",
        },
        {
            prompt: "Which Vue feature allows child components to communicate with parents?",
            options: ["$emit", "props", "data()", "methods"],
            correctAnswer: "$emit",
        }
    ],

    // Practice project
    practice: {
        title: "Project: Interactive Swedish Cities Viewer",
        instructions: `
Create a Vue.js app that:
1. Displays a list of Swedish cities with name, population, and a fun fact.
2. Includes a search box to filter cities by name.
3. Highlights cities with population over 100,000.
4. Bonus: allow users to click a city to reveal its fun fact.
        `,
        defaultCode: `<!DOCTYPE html>
<html lang="sv">
<head>
  <meta charset="UTF-8">
  <title>Interactive Swedish Cities</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
</head>
<body style="font-family:sans-serif; text-align:center; padding:50px; background-color:#f0f8ff;">

  <div id="app">
    <h1>Swedish Cities</h1>
    <input v-model="search" placeholder="Search for a city" style="margin-bottom:20px; padding:5px;" />
    
    <ul>
      <li v-for="city in filteredCities" :key="city.name" @click="showFact(city)">
        <strong>{{ city.name }}</strong> - {{ city.population }} people
      </li>
    </ul>
  </div>

  <script>
    const app = Vue.createApp({
      data() {
        return {
          search: '',
          cities: [
            { name: 'Stockholm', population: 975904, fact: 'Capital city of Sweden.' },
            { name: 'Gothenburg', population: 580000, fact: 'Located on the west coast.' },
            { name: 'Malmö', population: 340000, fact: 'Connected to Copenhagen via the Öresund bridge.' },
            { name: 'Uppsala', population: 233000, fact: 'Home to a famous university.' }
          ]
        }
      },
      computed: {
        filteredCities() {
          return this.cities.filter(city =>
            city.name.toLowerCase().includes(this.search.toLowerCase())
          )
        }
      },
      methods: {
        showFact(city) {
          alert('Fun fact: ' + city.fact);
        }
      }
    });

    app.mount('#app');
  </script>

</body>
</html>`
    },

    // Minigame: lakes challenge
    minigame: {
        title: "Challenge: Interactive Swedish Lakes Viewer",
        prompt: `
Use Vue.js to create an interactive list of Swedish lakes:
- Display lake name and size.
- Sort lakes descending by size.
- Highlight lakes starting with 'S'.
- Clicking a lake shows a fun fact.
- Allow filtering by minimum size.
        `,
        draggableTags: [
            "v-for",
            "v-bind",
            "v-model",
            "v-if",
            "methods",
            "computed",
            "click event",
            "array.sort()",
            "array.filter()"
        ],
        solution: `// Example solution:
const app = Vue.createApp({
  data() {
    return {
      minSize: 0,
      lakes: [
        { name: 'Siljan', size: 290, fact: 'Famous for summer vacations.' },
        { name: 'Storsjön', size: 464, fact: 'Has a legendary sea monster.' },
        { name: 'Vättern', size: 1910, fact: 'Second largest lake in Sweden.' },
        { name: 'Mälaren', size: 1140, fact: 'Located near Stockholm.' }
      ]
    }
  },
  computed: {
    filteredLakes() {
      return this.lakes
        .filter(lake => lake.size >= this.minSize)
        .sort((a,b) => b.size - a.size)
    }
  },
  methods: {
    showFact(lake) {
      alert('Fun fact: ' + lake.fact);
    }
  }
});
app.mount('#lakes-app');`
    },

    cutsceneUrl: null
};
