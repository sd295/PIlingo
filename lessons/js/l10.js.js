// lessons/l6_friendly.js
const lessonContent = {
    title: "Level 6: JS AJAX, Real-Time Updates & Charts",
    questions: [
        {
            prompt: "AJAX allows your page to get data from a server without reloading. Imagine fetching Sweden’s weather for Stockholm without refreshing. Which JS method can you use?",
            options: ["fetch()", "alert()", "console.log()", "prompt()"],
            correctAnswer: "fetch()",
        },
        {
            prompt: "When you fetch data and want to update the page immediately, which concept are you using?",
            options: ["Real-time updates", "Synchronous loading", "Static rendering", "Page refresh"],
            correctAnswer: "Real-time updates",
        },
        {
            prompt: "You fetched JSON of Swedish cities and want to show the population as a bar chart. Which JS library is simple for charts?",
            options: ["Chart.js", "jQuery", "React", "D3.js (advanced)"],
            correctAnswer: "Chart.js",
        },
        {
            prompt: "You have an array of cities with population. To extract the populations for a chart, which method is best?",
            options: ["map()", "filter()", "reduce()", "forEach()"],
            correctAnswer: "map()",
        },
        {
            prompt: "To keep the chart up-to-date every 5 seconds with latest data, which function can help?",
            options: ["setInterval()", "setTimeout()", "requestAnimationFrame()", "clearInterval()"],
            correctAnswer: "setInterval()",
        },
        {
            prompt: "Sweden has many lakes. You want to display only lakes with area over 100 km² in a chart. Which array method helps filter them?",
            options: ["filter()", "map()", "forEach()", "sort()"],
            correctAnswer: "filter()",
        },
        {
            prompt: "If fetching fails because the server is down, which JS feature lets you handle the error gracefully?",
            options: ["try...catch", "if...else", "switch", "alert()"],
            correctAnswer: "try...catch",
        },
        {
            prompt: "You want to display both city names and populations on a chart. Which approach is easiest for Chart.js?",
            options: ["Separate arrays for labels and data", "Single string", "Nested objects not supported", "One object per chart"],
            correctAnswer: "Separate arrays for labels and data",
        },
        {
            prompt: "Sometimes the API returns a slow response. To prevent the page from freezing, what type of JS behavior is used?",
            options: ["Asynchronous", "Synchronous", "Blocking", "Immediate"],
            correctAnswer: "Asynchronous",
        },
        {
            prompt: "You want the chart to highlight the largest Swedish city automatically. Which JS method can help you find the max value?",
            options: ["Math.max(...array.map(city => city.population))", "array.max()", "Math.maximum()", "for loop only"],
            correctAnswer: "Math.max(...array.map(city => city.population))",
        }
    ],
    practice: {
        title: "Project: Swedish Cities Population Chart",
        instructions: `
1. Create a static JSON file or mock API with Swedish cities and populations.
2. Fetch the data dynamically using fetch().
3. Use Chart.js to display a bar chart of population vs city.
4. Update the chart every 10 seconds automatically.
5. Highlight the city with the largest population in a different color.
`,
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Swedish Cities Chart</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
  <h1>Swedish Cities Population</h1>
  <canvas id="cityChart" width="600" height="400"></canvas>

  <script>
    async function fetchCities() {
      try {
        const response = await fetch('cities.json'); // mock API
        const cities = await response.json();
        return cities;
      } catch(e) {
        console.error('Failed to fetch cities', e);
        return [];
      }
    }

    async function drawChart() {
      const cities = await fetchCities();
      const labels = cities.map(c => c.name);
      const data = cities.map(c => c.population);
      const maxPop = Math.max(...data);

      const ctx = document.getElementById('cityChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Population',
            data: data,
            backgroundColor: data.map(p => p === maxPop ? 'red' : 'blue')
          }]
        },
        options: {
          responsive: true,
          animation: { duration: 500 }
        }
      });
    }

    drawChart();
    setInterval(drawChart, 10000); // update every 10 seconds
  </script>
</body>
</html>`
    },
    minigame: {
        title: "Challenge: Interactive Swedish Lakes Chart",
        prompt: `
1. Fetch a list of 10 Swedish lakes with their area.
2. Filter only lakes over 100 km².
3. Display them in a bar chart using Chart.js.
4. Update the chart automatically every 5 seconds.
5. Highlight the largest lake in a different color.
`,
        draggableTags: [
            "fetch()",
            "await",
            "response.json()",
            "filter()",
            "map()",
            "Math.max(...)",
            "Chart.js",
            "setInterval()",
            "canvas",
            "backgroundColor array"
        ],
        solution: `// Example solution: 
// Fetch lake data, filter, map for labels and data, find max for color, draw Chart.js bar chart, update every 5 seconds.`
    }
};


