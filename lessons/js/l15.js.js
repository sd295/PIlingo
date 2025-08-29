// lessons/l8_friendly.js
const lessonContent = {
    title: "Level 8: JS Real APIs, Maps & Data Visualization",
    questions: [
        {
            prompt: "You want to show all major Swedish cities on a map. Which JS library is easiest for interactive maps?",
            options: ["Leaflet.js", "Chart.js", "jQuery", "D3.js"],
            correctAnswer: "Leaflet.js",
        },
        {
            prompt: "To get live weather for Stockholm, which JS approach is correct?",
            options: ["fetch() + async/await + API endpoint", "console.log()", "document.write()", "alert()"],
            correctAnswer: "fetch() + async/await + API endpoint",
        },
        {
            prompt: "You want to place markers on the map for each city. Which method does Leaflet.js provide?",
            options: ["L.marker([lat, lng]).addTo(map)", "map.addMarker()", "document.createElement('marker')", "new Marker()"],
            correctAnswer: "L.marker([lat, lng]).addTo(map)",
        },
        {
            prompt: "You fetch JSON data with cities and population. Which array method lets you show only cities with over 100,000 people?",
            options: ["filter()", "map()", "forEach()", "reduce()"],
            correctAnswer: "filter()",
        },
        {
            prompt: "To display city population as a dynamic chart next to the map, which library is simple for beginners?",
            options: ["Chart.js", "D3.js advanced", "Leaflet.js", "jQuery UI"],
            correctAnswer: "Chart.js",
        },
        {
            prompt: "You want a popup for each marker showing city name and fun fact. Which Leaflet method is used?",
            options: ["bindPopup()", "setPopup()", "showInfo()", "alert()"],
            correctAnswer: "bindPopup()",
        },
        {
            prompt: "To update map markers or charts automatically every 10 seconds, which JS function is ideal?",
            options: ["setInterval()", "setTimeout()", "requestAnimationFrame()", "clearInterval()"],
            correctAnswer: "setInterval()",
        },
        {
            prompt: "Sometimes the API returns null or errors. Which JS pattern handles this gracefully?",
            options: ["try...catch", "if...else only", "alert()", "console.log() only"],
            correctAnswer: "try...catch",
        },
        {
            prompt: "You want to store user preferences for map style or selected cities. Which storage API is best?",
            options: ["LocalStorage", "Cookies", "SessionStorage", "Database only"],
            correctAnswer: "LocalStorage",
        },
        {
            prompt: "If a city is clicked on the chart, you want to highlight it on the map. Which JS concept lets you connect chart and map?",
            options: ["Event listeners + DOM manipulation", "console.log()", "document.write()", "alert()"],
            correctAnswer: "Event listeners + DOM manipulation",
        }
    ],
    practice: {
        title: "Project: Interactive Swedish Map & Charts",
        instructions: `
1. Create a map of Sweden using Leaflet.js.
2. Fetch a real or mock API of Swedish cities (name, coordinates, population, fun fact).
3. Place markers on the map for each city with popups showing name and fun fact.
4. Display a chart (Chart.js) showing population of the cities.
5. Add filtering: only cities with population over 100,000.
6. Store user-selected cities or preferences in LocalStorage.
7. Update both map and chart automatically every 10 seconds.
8. Bonus: Add interactive dropdown to change map style (satellite, streets).
`,
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Sweden Map & Charts</title>
  <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <style>#map { height: 400px; }</style>
</head>
<body>
  <h1>Sweden Map & Cities</h1>
  <div id="map"></div>
  <canvas id="populationChart" width="600" height="400"></canvas>

  <script type="module">
    const map = L.map('map').setView([59.3293, 18.0686], 5); // center Sweden

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    async function fetchCities() {
      try {
        const res = await fetch('cities.json'); // mock API
        return await res.json();
      } catch (e) {
        console.error('Failed to fetch cities', e);
        return [];
      }
    }

    async function updateMapAndChart(){
      const cities = await fetchCities();
      const filtered = cities.filter(c => c.population > 100000);

      // Clear existing markers
      if(window.cityMarkers) window.cityMarkers.forEach(m => map.removeLayer(m));
      window.cityMarkers = [];

      // Add markers
      filtered.forEach(c => {
        const marker = L.marker([c.lat, c.lng]).addTo(map)
          .bindPopup(\`\${c.name} - Pop: \${c.population} <br> Fun: \${c.fact}\`);
        window.cityMarkers.push(marker);
      });

      // Update chart
      const ctx = document.getElementById('populationChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: filtered.map(c => c.name),
          datasets: [{
            label: 'Population',
            data: filtered.map(c => c.population),
            backgroundColor: filtered.map(c => 'blue')
          }]
        }
      });
    }

    updateMapAndChart();
    setInterval(updateMapAndChart, 10000);
  </script>
</body>
</html>`
    },
    minigame: {
        title: "Challenge: Interactive Sweden Map Dashboard",
        prompt: `
1. Fetch a list of Swedish cities with coordinates and population.
2. Display markers on the map using Leaflet.js.
3. Show city info in popups.
4. Display population chart with Chart.js.
5. Add filtering and automatic updates every 10 seconds.
6. Bonus: let users click a chart bar to highlight corresponding city on the map.
7. Store user-selected cities or chart preferences in LocalStorage.
`,
        draggableTags: [
            "fetch()",
            "await",
            "response.json()",
            "filter()",
            "map()",
            "Chart.js",
            "Leaflet.js",
            "setInterval()",
            "LocalStorage",
            "addEventListener('click')",
            "bindPopup()",
            "document.createElement()"
        ],
        solution: `// Example solution: Combine fetch, async/await, Leaflet markers, Chart.js, filter, setInterval for updates, LocalStorage for preferences, interactive chart/map connection.`
    }
};

export default lessonContent;
