// lessons/l4_friendly.js
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
        },
        {
            prompt: "If you want to show multiple Swedish cities from an API and update the page for each, which pattern is most readable?",
            options: [
                "async function + await + forEach",
                "nested callbacks",
                "setTimeout loops",
                "synchronous fetch"
            ],
            correctAnswer: "async function + await + forEach",
        },
        {
            prompt: "You fetch data but the server is slow. Which type of JS behavior ensures the page doesn’t freeze?",
            options: ["Asynchronous", "Synchronous", "Blocking", "Immediate"],
            correctAnswer: "Asynchronous",
        },
        {
            prompt: "After fetching JSON of Swedish cities, you want only cities with population over 100,000. Which array method is best?",
            options: ["filter()", "map()", "reduce()", "forEach()"],
            correctAnswer: "filter()",
        },
        {
            prompt: "You want to display the top 5 largest lakes in Sweden from API data. Which combination is correct?",
            options: [
                "fetch -> await -> sort -> slice -> forEach -> display",
                "fetch -> map -> reduce -> display",
                "fetch -> console.log only",
                "fetch -> JSON.stringify -> display"
            ],
            correctAnswer: "fetch -> await -> sort -> slice -> forEach -> display",
        },
        {
            prompt: "Sometimes APIs fail or return unexpected data. Which JS feature lets you handle both success and failure gracefully?",
            options: ["try...catch", "if...else", "switch", "while"],
            correctAnswer: "try...catch",
        }
    ],
    practice: {
        title: "Project: Swedish Cities Info Fetcher",
        instructions: `
Create an interactive page that:
1. Fetches Swedish city data from a mock API (or a static JSON file).
2. Displays city name, population, and a fun fact.
3. Allows users to filter cities with population over 100,000.
4. Handles errors gracefully if data cannot be fetched.
`,
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Swedish Cities API</title>
</head>
<body>
  <h1>Swedish Cities</h1>
  <ul id="cityList"></ul>

  <script>
    async function loadCities() {
      try {
        const response = await fetch('cities.json'); // mock API
        const cities = await response.json();
        const list = document.getElementById('cityList');

        cities
          .filter(city => city.population > 100000)
          .forEach(city => {
            const li = document.createElement('li');
            li.textContent = \`\${city.name} - \${city.population} people. Fun fact: \${city.fact}\`;
            list.appendChild(li);
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
    minigame: {
            gameType: 'code-typer',
            title: "Challenge 4: Good Morning",
            prompt: "Make a paragraph that says 'God morgon' (Good morning). When clicked, it alerts 'Good morning!'.",
            solution: `<p onclick="alert('Good morning!')">God morgon</p>`
        },
};

