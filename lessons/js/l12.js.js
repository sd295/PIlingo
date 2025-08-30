// lessons/l7_friendly.js
const lessonContent = {
    title: "Level 7: Full Interactive Swedish Dashboard",
    questions: [
        {
            prompt: "You want a dashboard showing both population and festival data for Swedish cities. Which JS feature lets you update multiple charts dynamically without refreshing?",
            options: ["fetch() + async + DOM updates", "console.log()", "alert()", "document.write()"],
            correctAnswer: "fetch() + async + DOM updates",
        },
        {
            prompt: "Users can select which chart to display. Which DOM method lets you detect the selection change?",
            options: ["addEventListener('change')", "onclick", "onhover", "onload"],
            correctAnswer: "addEventListener('change')",
        },
        {
            prompt: "You want to save the user’s preferred chart type so it loads next time. Which API is best?",
            options: ["LocalStorage", "Cookies", "SessionStorage", "Database only"],
            correctAnswer: "LocalStorage",
        },
        {
            prompt: "If one API call fails, but others succeed, which JS feature lets you handle each independently?",
            options: ["try...catch around individual calls", "one big try...catch", "alert()", "console.log() only"],
            correctAnswer: "try...catch around individual calls",
        },
        {
            prompt: "You need to highlight the largest city population on the chart. Which JS method finds the largest value in an array?",
            options: ["Math.max(...array.map(city=>city.population))", "array.max()", "reduce() only", "sort() only"],
            correctAnswer: "Math.max(...array.map(city=>city.population))",
        },
        {
            prompt: "You want the dashboard to update automatically every 10 seconds. Which function helps?",
            options: ["setInterval()", "setTimeout()", "requestAnimationFrame()", "clearInterval()"],
            correctAnswer: "setInterval()",
        },
        {
            prompt: "To display lakes over 100 km² with color coding, which combination works?",
            options: ["filter() + map() + Chart.js", "for loop only", "console.log()", "document.write()"],
            correctAnswer: "filter() + map() + Chart.js",
        },
        {
            prompt: "You allow users to add a new city through a form. Which class helps keep the city structure consistent?",
            options: ["City class with constructor", "Array only", "Object literal only", "Function only"],
            correctAnswer: "City class with constructor",
        },
        {
            prompt: "If you store cities in LocalStorage, what type do you need to convert objects to before saving?",
            options: ["JSON string", "Array", "Number", "Boolean"],
            correctAnswer: "JSON string",
        },
        {
            prompt: "To make charts interactive (hover, click), which library or feature is most useful?",
            options: ["Chart.js built-in interactivity", "console.log()", "alert()", "static images"],
            correctAnswer: "Chart.js built-in interactivity",
        }
    ],
    practice: {
        title: "Project: Swedish Dashboard",
        instructions: `
Create a complete dashboard that includes:
1. Two charts: one for city populations, one for lake areas.
2. Fetch data from static JSON files or mock APIs.
3. Highlight the largest city/lake automatically.
4. Allow users to add a new city with a form.
5. Save user-added cities in LocalStorage.
6. Update charts automatically every 10 seconds.
7. Allow user to select chart type (bar, line) with a dropdown.
`,
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Swedish Dashboard</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <style>
    li { cursor: pointer; }
    li.highlight { color: red; }
  </style>
</head>
<body>
  <h1>Swedish Dashboard</h1>

  <label for="chartType">Select chart type:</label>
  <select id="chartType">
    <option value="bar">Bar</option>
    <option value="line">Line</option>
  </select>

  <canvas id="cityChart" width="600" height="400"></canvas>
  <canvas id="lakeChart" width="600" height="400"></canvas>

  <h2>Add City</h2>
  <input type="text" id="cityName" placeholder="City Name">
  <input type="number" id="cityPop" placeholder="Population">
  <input type="text" id="cityFact" placeholder="Fun Fact">
  <button id="addCityBtn">Add City</button>

  <ul id="cityList"></ul>

  <script type="module">
    // City class
    class City {
      constructor(name, population, fact) {
        this.name = name;
        this.population = population;
        this.fact = fact;
      }
    }

    const cityChartCtx = document.getElementById('cityChart').getContext('2d');
    const lakeChartCtx = document.getElementById('lakeChart').getContext('2d');
    const cityList = document.getElementById('cityList');

    let cities = JSON.parse(localStorage.getItem('cities')) || [
      new City('Stockholm', 975904, '14 islands'),
      new City('Gothenburg', 583056, 'Canals'),
      new City('Malmö', 316588, 'Bridge to Copenhagen')
    ];

    // Add new city
    document.getElementById('addCityBtn').addEventListener('click', () => {
      const name = document.getElementById('cityName').value;
      const pop = parseInt(document.getElementById('cityPop').value);
      const fact = document.getElementById('cityFact').value;
      if(name && pop && fact){
        const newCity = new City(name, pop, fact);
        cities.push(newCity);
        localStorage.setItem('cities', JSON.stringify(cities));
        displayCities();
        drawCityChart();
      }
    });

    // Display cities list
    function displayCities(){
      cityList.innerHTML = '';
      cities.forEach(c => {
        const li = document.createElement('li');
        li.textContent = \`\${c.name} - \${c.population}. Fun fact: \${c.fact}\`;
        li.addEventListener('click', () => li.classList.toggle('highlight'));
        cityList.appendChild(li);
      });
    }

    // Draw city chart
    function drawCityChart(){
      const labels = cities.map(c => c.name);
      const data = cities.map(c => c.population);
      const maxPop = Math.max(...data);
      const type = document.getElementById('chartType').value;

      new Chart(cityChartCtx, {
        type: type,
        data: {
          labels: labels,
          datasets: [{
            label: 'Population',
            data: data,
            backgroundColor: data.map(p => p === maxPop ? 'red' : 'blue')
          }]
        },
        options: { responsive:true }
      });
    }

    // Mock lakes data
    const lakes = [
      { name:'Vänern', area: 5650 },
      { name:'Vättern', area: 1916 },
      { name:'Mälaren', area: 1140 },
      { name:'Stora Le', area: 460 },
      { name:'Siljan', area: 291 }
    ];

    function drawLakeChart(){
      const filtered = lakes.filter(l => l.area > 100);
      const labels = filtered.map(l => l.name);
      const data = filtered.map(l => l.area);
      const maxArea = Math.max(...data);

      new Chart(lakeChartCtx, {
        type: document.getElementById('chartType').value,
        data: {
          labels: labels,
          datasets: [{
            label: 'Area km²',
            data: data,
            backgroundColor: data.map(a => a === maxArea ? 'green' : 'lightblue')
          }]
        }
      });
    }

    document.getElementById('chartType').addEventListener('change', () => {
      drawCityChart();
      drawLakeChart();
    });

    function refreshCharts(){
      drawCityChart();
      drawLakeChart();
      displayCities();
    }

    refreshCharts();
    setInterval(refreshCharts, 10000); // update every 10 seconds
  </script>
</body>
</html>`
    },
    minigame: {
            gameType: 'code-typer',
            title: "Challenge 8: No",
            prompt: "Make a button 'Nej' (No). When clicked, change background to red.",
            solution: `<button onclick="this.style.background='red'">Nej</button>`
        },
};


