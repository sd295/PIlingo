// lessons/node/l9.germany_filter.js
const lessonContent = {
  title: "Level 9: Node.js – Filter German Cities",

  questions: [
    {
      prompt: "Which query string would you use to filter cities containing 'Munich'?",
      options: ["?search=Munich", "?filter=Munich", "?q=Munich", "?city=Munich"],
      correctAnswer: "?search=Munich"
    },
    {
      prompt: "True or False: Query parameters are accessed via the URL in Node.js.",
      options: ["True", "False"],
      correctAnswer: "True"
    }
  ],

  minigame: {
    gameType: "code-typer",
    title: "Challenge 9: Filter Cities by Name",
    prompt: "Update the Node.js server to filter city cards if the URL contains a 'search' query.",
    solution: `const http = require('http');
const url = require('url');
const querystring = require('querystring');

let cities = [
  { name: "Berlin", flag: "🇩🇪", fact: "Berlin has over 170 museums." },
  { name: "Munich", flag: "🇩🇪", fact: "Munich's English Garden is bigger than Central Park." },
  { name: "Cologne", flag: "🇩🇪", fact: "Cologne Cathedral took over 600 years to complete." },
  { name: "Leipzig", flag: "🇩🇪", fact: "Leipzig is famous for music and St. Thomas Choir." }
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const search = parsedUrl.query.search || '';

  // Filter cities based on search query (case-insensitive)
  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(search.toLowerCase())
  );

  const cityCards = filteredCities.map(city => \`
    <div class="card">
      <h2>\${city.name} \${city.flag}</h2>
      <p>\${city.fact}</p>
    </div>
  \`).join('');

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(\`
    <html>
    <head>
      <title>German Cities Explorer</title>
      <style>
        body { font-family: sans-serif; background: #f0f8ff; text-align: center; padding: 40px; }
        h1 { color: #005293; }
        .cards { display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; margin-top: 30px; }
        .card { background: white; padding: 20px; border-radius: 12px; width: 250px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: transform 0.3s ease; }
        .card:hover { transform: translateY(-5px); }
        h2 { color: #005293; margin-bottom: 10px; }
        p { font-size: 16px; line-height: 1.5; }
        form { margin-top: 30px; display: flex; flex-direction: column; gap: 10px; align-items: center; }
        input { padding: 8px 12px; border-radius: 6px; border: 2px solid #005293; width: 250px; }
        button { padding: 8px 15px; border-radius: 6px; border: none; background: #ffc72c; color: #005293; font-weight: bold; cursor: pointer; }
        button:hover { background: #e6b800; }
      </style>
    </head>
    <body>
      <h1>Explore German Cities 🇩🇪</h1>
      <form method="GET">
        <input type="text" name="search" placeholder="Search City Name" value="\${search}" />
        <button type="submit">Filter</button>
      </form>
      <div class="cards">\${cityCards}</div>
    </body>
    </html>
  \`);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});`
  },

  practice: {
    title: "Project: Germany City Explorer Filter",
    instructions: `
      <ol>
        <li>Add a search input at the top of your Node.js city explorer page.</li>
        <li>Use URL query parameters to filter the cities array based on input.</li>
        <li>Display only cities that match the search term.</li>
        <li>Ensure the filtering is case-insensitive.</li>
        <li>Optional: Style the input and cards nicely.</li>
      </ol>
    `,
    defaultCode: `// See the minigame solution above as starting template.`
  }
};
