// lessons/node/l2.germany_explorer.js
const lessonContent = {
  title: "Level 2: Node.js HTML Server – Explore Germany",

  questions: [
    {
      prompt: "Which Node.js module is commonly used to serve HTML pages?",
      options: ["fs", "http", "express", "path"],
      correctAnswer: "http"
    },
    {
      prompt: "How can you serve an image using a basic Node.js HTTP server?",
      options: [
        "Use HTML <img> in response body with online URL",
        "Only local files work automatically",
        "Node.js cannot serve images",
        "Use CSS background-image only"
      ],
      correctAnswer: "Use HTML <img> in response body with online URL"
    },
    {
      prompt: "True or False: You can have multiple routes in Node.js HTTP server.",
      options: ["True", "False"],
      correctAnswer: "True"
    }
  ],

  minigame: {
    gameType: "code-typer",
    title: "Challenge 2: Berlin Welcome Page",
    prompt: "Create a Node.js server that serves a simple HTML page with a greeting and an image of Berlin.",
    solution: `const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(\`
    <html>
      <head>
        <title>Explore Germany</title>
        <style>
          body { font-family: sans-serif; text-align: center; background: #f0f8ff; padding: 50px; }
          h1 { color: #005293; }
          img { max-width: 400px; border-radius: 10px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <h1>Hallo from Berlin! 🇩🇪</h1>
        <p>Discover Germany's capital city and its beautiful sights.</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Berlin_Skyline_Fernsehturm_2016.jpg/640px-Berlin_Skyline_Fernsehturm_2016.jpg" alt="Berlin Skyline">
      </body>
    </html>
  \`);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});`
  },

  practice: {
    title: "Project: German City Explorer",
    instructions: `
      <ol>
        <li>Create a Node.js server that serves HTML content.</li>
        <li>Include a heading welcoming users to Germany.</li>
        <li>Embed an image of a famous German city using an online URL.</li>
        <li>Add a paragraph with a fun fact about that city.</li>
        <li>Optional: Add another route (e.g., /munich) to show a different city.</li>
      </ol>
    `,
    defaultCode: `const http = require('http');

const cities = [
  {
    name: "Berlin",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Berlin_Skyline_Fernsehturm_2016.jpg/640px-Berlin_Skyline_Fernsehturm_2016.jpg",
    fact: "Berlin is known for its historic Berlin Wall and vibrant arts scene."
  },
  {
    name: "Munich",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Munich_skyline_-_view_from_Olympiaturm.jpg/640px-Munich_skyline_-_view_from_Olympiaturm.jpg",
    fact: "Munich is famous for Oktoberfest and beautiful architecture."
  }
];

const server = http.createServer((req, res) => {
  const cityName = req.url.slice(1).toLowerCase(); // remove leading /

  const city = cities.find(c => c.name.toLowerCase() === cityName) || cities[0];

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(\`
    <html>
      <head>
        <title>Explore Germany - \${city.name}</title>
        <style>
          body { font-family: sans-serif; text-align: center; background: #f0f8ff; padding: 50px; }
          h1 { color: #005293; }
          img { max-width: 400px; border-radius: 10px; margin-top: 20px; }
          p { font-size: 18px; margin-top: 15px; }
        </style>
      </head>
      <body>
        <h1>Welcome to \${city.name}! 🇩🇪</h1>
        <img src="\${city.image}" alt="\${city.name}">
        <p>\${city.fact}</p>
        <p>Visit <a href="/berlin">Berlin</a> | <a href="/munich">Munich</a></p>
      </body>
    </html>
  \`);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});`
  }
};
