// lessons/l4_vue_quiz.js
const lessonContent = {
    title: "Level 4: JS Async & APIs",
    questions: [
        {
            prompt: "Sometimes data isn’t available immediately, like waiting for a ferry to Gotland. In JS, which keyword marks a function as asynchronous?",
            options: ["async", "await", "then", "defer"],
            correctAnswer: "async",
        },
        {
            prompt: "Inside an async function, which keyword pauses execution until a promise resolves?",
            options: ["await", "async", "then", "pause"],
            correctAnswer: "await",
        },
        {
            prompt: "You want to get weather data for Stockholm from an API. Which JS method initiates the HTTP request?",
            options: ["fetch()", "XMLHttpRequest()", "axios()", "request()"],
            correctAnswer: "fetch()",
        },
        {
            prompt: "Sweden has thousands of lakes. If you fetch a list of lakes from an API and want to convert the response to a JS object, which method do you use?",
            options: ["response.json()", "JSON.parse()", "JSON.stringify()", "Object.fromJSON()"],
            correctAnswer: "response.json()",
        },
        {
            prompt: "You call `fetch('api/stockholm')` and want to handle errors if the request fails. Which method is used for promises?",
            options: [".then()", ".catch()", ".finally()", ".error()"],
            correctAnswer: ".catch()",
        }
        // You can add more quiz questions as needed
    ],

    // PRACTICE: Interactive project for Level 4
    practice: {
        title: "Project: Swedish Cities Info Fetcher",
        instructions: `
Create an interactive page that:
1. Fetches Swedish city data from a mock API (or a static JSON file).
2. Displays city name, population, and a fun fact.
3. Allows users to filter cities with population over 100,000.
4. Handles errors gracefully if data cannot be fetched.
5. Bonus: add a search box to filter cities by name.
        `,
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Swedish Cities API</title>
</head>
<body>
  <h1>Swedish Cities</h1>
  <input type="text" id="search" placeholder="Filter cities by name" />
  <ul id="cityList"></ul>

  <script>
    async function loadCities() {
      try {
        const response = await fetch('cities.json'); // mock API
        const cities = await response.json();
        const list = document.getElementById('cityList');
        const searchInput = document.getElementById('search');

        function render(filteredCities) {
          list.innerHTML = '';
          filteredCities.forEach(city => {
            const li = document.createElement('li');
            li.textContent = \`\${city.name} - \${city.population} people. Fun fact: \${city.fact}\`;
            list.appendChild(li);
          });
        }

        render(cities.filter(city => city.population > 100000));

        searchInput.addEventListener('input', () => {
          const filtered = cities.filter(city =>
            city.name.toLowerCase().includes(searchInput.value.toLowerCase()) &&
            city.population > 100000
          );
          render(filtered);
        });

      } catch (error) {
        console.error('Failed to load cities', error);
      }
    }

    loadCities();
  </script>
</body>
</html>`
    },

    // MINIGAME: Fun interactive challenge
    minigame: {
        title: "Challenge: Interactive Swedish Lakes Fetcher",
        prompt: `
Fetch a list of Swedish lakes from a mock API.
- Sort them by size descending.
- Display only lakes larger than 100 km².
- Highlight lakes starting with 'S'.
- Handle errors gracefully.
- Bonus: let users click a lake to see a fun fact about it.
        `,
        draggableTags: [
            "fetch()",
            "await",
            "response.json()",
            "filter()",
            "sort()",
            "forEach()",
            "try...catch",
            "document.createElement()",
            "appendChild()",
            "classList.add()",
            "addEventListener()"
        ],
        solution: `// Example solution:
async function loadLakes() {
  try {
    const res = await fetch('lakes.json'); // mock API
    const lakes = await res.json();
    const list = document.getElementById('lakeList');

    lakes
      .filter(lake => lake.size > 100)
      .sort((a,b) => b.size - a.size)
      .forEach(lake => {
        const li = document.createElement('li');
        li.textContent = \`\${lake.name} - \${lake.size} km²\`;
        if(lake.name.startsWith('S')) li.classList.add('highlight');

        // Bonus: show fun fact on click
        li.addEventListener('click', () => alert(\`Fun fact: \${lake.fact}\`));
        list.appendChild(li);
      });
  } catch (e) {
    console.error('Error fetching lakes', e);
  }
}
loadLakes();`
    },

    cutsceneUrl: null
};
