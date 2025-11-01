// lessons/node/l5.germany_city_cards.js
const lessonContent = {
  title: "Level 5: Node.js – Multi-City Germany Explorer",

  questions: [
    {
      prompt: "How can you serve multiple cities on one page dynamically?",
      options: [
        "By hardcoding each city in HTML",
        "By looping through an array of city names and fetching data for each",
        "By using CSS grids only",
        "By creating multiple servers for each city"
      ],
      correctAnswer: "By looping through an array of city names and fetching data for each"
    },
    {
      prompt: "True or False: Node.js can fetch and display multiple API responses on a single HTML page.",
      options: ["True", "False"],
      correctAnswer: "True"
    }
  ],

  minigame: {
    gameType: "code-typer",
    title: "Challenge 5: Display 3 German Cities",
    prompt: "Create a Node.js server that shows cards for Berlin, Munich, and Hamburg with Wikipedia extracts and images.",
    solution: `const http = require('http');
const https = require('https');

const cities = ['Berlin', 'Munich', 'Hamburg'];

const fetchCityData = city => {
  return new Promise((resolve, reject) => {
    https.get(\`https://en.wikipedia.org/api/rest_v1/page/summary/\${city}\`, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve({
            name: city,
            extract: json.extract || 'No summary available.',
            image: json.thumbnail ? json.thumbnail.source : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Berlin_Skyline_Fernsehturm_2016.jpg/640px-Berlin_Skyline_Fernsehturm_2016.jpg'
          });
        } catch(e) { reject(e); }
      });
    }).on('error', err => reject(err));
  });
};

const server = http.createServer(async (req, res) => {
  try {
    const results = await Promise.all(cities.map(fetchCityData));

    const cityCards = results.map(city => \`
      <div class="card">
        <h2>\${city.name} 🇩🇪</h2>
        <img src="\${city.image}" alt="\${city.name}">
        <p>\${city.extract}</p>
      </div>
    \`).join('');

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(\`
      <html>
      <head>
        <title>Germany Explorer</title>
        <style>
          body { font-family: sans-serif; background: #f0f8ff; text-align: center; padding: 50px; }
          h1 { color: #005293; }
          .cards { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-top: 30px; }
          .card { background: white; padding: 20px; border-radius: 12px; width: 300px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
          img { width: 100%; border-radius: 8px; margin-bottom: 15px; }
          h2 { color: #005293; margin-bottom: 10px; }
          p { font-size: 16px; line-height: 1.5; }
        </style>
      </head>
      <body>
        <h1>Explore Germany 🇩🇪</h1>
        <div class="cards">
          \${cityCards}
        </div>
      </body>
      </html>
    \`);
  } catch(e) {
    res.writeHead(500);
    res.end('Error fetching city data: ' + e.message);
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});`
  },

  practice: {
    title: "Project: Germany Explorer – Multi-City Cards",
    instructions: `
      <ol>
        <li>Create a Node.js server that loops through an array of German cities (e.g., Berlin, Munich, Hamburg, Cologne).</li>
        <li>For each city, fetch the summary and image from Wikipedia.</li>
        <li>Render each city as a card with its name, flag, image, and description.</li>
        <li>Style the cards nicely using CSS flexbox or grid.</li>
        <li>Optional: Make it responsive for mobile and desktop.</li>
      </ol>
    `,
    defaultCode: `const http = require('http');
const https = require('https');

const cities = ['Berlin', 'Munich', 'Hamburg', 'Cologne'];

const fetchCityData = city => {
  return new Promise((resolve, reject) => {
    https.get(\`https://en.wikipedia.org/api/rest_v1/page/summary/\${city}\`, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve({
            name: city,
            extract: json.extract || 'No summary available.',
            image: json.thumbnail ? json.thumbnail.source : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Berlin_Skyline_Fernsehturm_2016.jpg/640px-Berlin_Skyline_Fernsehturm_2016.jpg'
          });
        } catch(e) { reject(e); }
      });
    }).on('error', err => reject(err));
  });
};

const server = http.createServer(async (req, res) => {
  try {
    const results = await Promise.all(cities.map(fetchCityData));

    const cityCards = results.map(city => \`
      <div class="card">
        <h2>\${city.name} 🇩🇪</h2>
        <img src="\${city.image}" alt="\${city.name}">
        <p>\${city.extract}</p>
      </div>
    \`).join('');

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(\`
      <html>
      <head>
        <title>Germany Explorer</title>
        <style>
          body { font-family: sans-serif; background: #f0f8ff; text-align: center; padding: 50px; }
          h1 { color: #005293; }
          .cards { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-top: 30px; }
          .card { background: white; padding: 20px; border-radius: 12px; width: 300px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
          img { width: 100%; border-radius: 8px; margin-bottom: 15px; }
          h2 { color: #005293; margin-bottom: 10px; }
          p { font-size: 16px; line-height: 1.5; }
        </style>
      </head>
      <body>
        <h1>Explore Germany 🇩🇪</h1>
        <div class="cards">
          \${cityCards}
        </div>
      </body>
      </html>
    \`);
  } catch(e) {
    res.writeHead(500);
    res.end('Error fetching city data: ' + e.message);
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});`
  }
};
