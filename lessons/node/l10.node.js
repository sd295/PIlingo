// lessons/node/l8.germany_form.js
const lessonContent = {
  title: "Level 8: Node.js – Add Your Own German City",

  questions: [
    {
      prompt: "Which HTTP method is typically used to submit form data?",
      options: ["GET", "POST", "PUT", "DELETE"],
      correctAnswer: "POST"
    },
    {
      prompt: "True or False: Node.js can handle form submissions and dynamically update the page content.",
      options: ["True", "False"],
      correctAnswer: "True"
    },
    {
      prompt: "Tip",
      options: "Use an array to store city objects and push new submissions to that array. Refresh the page to see updates.",
      correctAnswer: "Use an array to store city objects and push new submissions to that array. Refresh the page to see updates."
    }
  ],

  minigame: {
    gameType: "code-typer",
    title: "Challenge 8: Add a City Form",
    prompt: "Create a form to add new German cities with a fun fact. Display all cities dynamically.",
    solution: `const http = require('http');
const url = require('url');
const querystring = require('querystring');

let cities = [
  { name: "Berlin", flag: "🇩🇪", fact: "Berlin has over 170 museums." },
  { name: "Munich", flag: "🇩🇪", fact: "Munich's English Garden is bigger than Central Park." },
  { name: "Cologne", flag: "🇩🇪", fact: "Cologne Cathedral took over 600 years to complete." }
];

const server = http.createServer((req, res) => {
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
    const cityCards = cities.map(city => \`
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
        <div class="cards">\${cityCards}</div>
        <form method="POST">
          <input type="text" name="city" placeholder="City Name" required />
          <input type="text" name="fact" placeholder="Fun Fact" required />
          <button type="submit">Add City</button>
        </form>
      </body>
      </html>
    \`);
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});`
  },
};