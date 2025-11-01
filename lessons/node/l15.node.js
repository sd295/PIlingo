// lessons/node/l10.germany_dynamic.js
const lessonContent = {
  title: "Level 10: Node.js  Dynamic German City Explorer",

  questions: [
    {
      prompt: "Which HTTP method should you use to submit new city data?",
      options: ["GET", "POST", "PUT", "DELETE"],
      correctAnswer: "POST"
    },
    {
      prompt: "How can you read URL query parameters in Node.js?",
      options: [
        "req.query",
        "url.parse(req.url, true).query",
        "req.params",
        "req.body"
      ],
      correctAnswer: "url.parse(req.url, true).query"
    },
    {
      prompt: "True or False: You can combine form submissions and query filtering in a single Node.js server.",
      options: ["True", "False"],
      correctAnswer: "True"
    },
    {
      prompt: "Germany Fact: Which city hosts the world-famous Oktoberfest?",
      options: ["Berlin", "Munich", "Frankfurt", "Cologne"],
      correctAnswer: "Munich"
    },
    {
      prompt: "Germany Fact: What is the tallest church in the world located in Germany?",
      options: ["Cologne Cathedral", "St. Peter's Basilica", "Berlin Cathedral", "Munich Frauenkirche"],
      correctAnswer: "Cologne Cathedral"
    },
    {
      prompt: "Tip",
      options: "Remember to push new city objects into the array on POST and filter the array on GET using query parameters.",
      correctAnswer: true
    }
  ],

  minigame: {
    gameType: "code-typer",
    title: "Challenge 10: Add & Filter German Cities",
    prompt: "Create a Node.js server that lets users add German cities and filter them by name using a search input.",
    solution: `const http = require('http');
const url = require('url');
const querystring = require('querystring');

let cities = [
  { name: "Berlin", flag: "🇩🇪", fact: "Berlin has over 170 museums." },
  { name: "Munich", flag: "🇩🇪", fact: "Munich hosts the world-famous Oktoberfest." },
  { name: "Cologne", flag: "🇩🇪", fact: "Cologne Cathedral is the tallest church in the world." }
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      const parsed = querystring.parse(body);
      if (parsed.city && parsed.fact) {
        cities.push({ name: parsed.city, flag: "🇩🇪", fact: parsed.fact });
      }
      res.writeHead(302, { Location: '/' });
      res.end();
    });
  } else {
    const search = parsedUrl.query.search || '';
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
        <title>Germany City Explorer</title>
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
        <h1>Germany City Explorer 🇩🇪</h1>
        <form method="GET">
          <input type="text" name="search" placeholder="Search City Name" value="\${search}" />
          <button type="submit">Filter</button>
        </form>
        <form method="POST">
          <input type="text" name="city" placeholder="City Name" required />
          <input type="text" name="fact" placeholder="Fun Fact" required />
          <button type="submit">Add City</button>
        </form>
        <div class="cards">\${cityCards}</div>
      </body>
      </html>
    \`);
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});`
  },

  practice: {
    title: "Project: Dynamic Germany City Explorer",
    instructions: `
      <ol>
        <li>Combine form submission and search filtering in a single Node.js server.</li>
        <li>Allow users to add new German cities with a fun fact.</li>
        <li>Display all cities, but filter them if a search term is provided.</li>
        <li>Make the search case-insensitive and keep the city cards nicely styled.</li>
        <li>Optional: Add emoji flags or additional styling for a better visual experience.</li>
      </ol>
    `,
    defaultCode: `// Use the minigame solution above as your starting template.`
  }
};
