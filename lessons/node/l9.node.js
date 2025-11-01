// lessons/node/l6.germany_facts.js
const lessonContent = {
  title: "Level 6: Node.js – Explore Germany Facts",

  questions: [
    {
      prompt: "Which city is the capital of Germany?",
      options: ["Munich", "Berlin", "Hamburg", "Frankfurt"],
      correctAnswer: "Berlin"
    },
    {
      prompt: "Germany is famous for which festival?",
      options: ["Carnival", "Oktoberfest", "Fête de la Musique", "La Tomatina"],
      correctAnswer: "Oktoberfest"
    },
    {
      prompt: "What is Germany’s currency?",
      options: ["Euro", "Dollar", "Pound", "Franc"],
      correctAnswer: "Euro"
    },
    {
      prompt: "True or False: Node.js can dynamically fetch facts about cities from APIs.",
      options: ["True", "False"],
      correctAnswer: "True"
    }
    
  ],

  minigame: {
    gameType: "code-typer",
    title: "Challenge 6: Germany Fact Cards",
    prompt: "Create a Node.js server that displays 3 cards for German cities with fun facts and flag emojis.",
    solution: `const http = require('http');

const cities = [
  { name: "Berlin", flag: "🇩🇪", fact: "Berlin has more bridges than Venice." },
  { name: "Munich", flag: "🇩🇪", fact: "Munich hosts the famous Oktoberfest beer festival." },
  { name: "Hamburg", flag: "🇩🇪", fact: "Hamburg is home to one of the largest harbors in Europe." }
];

const server = http.createServer((req, res) => {
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
      <title>Germany Facts</title>
      <style>
        body { font-family: sans-serif; background: #f0f8ff; text-align: center; padding: 50px; }
        h1 { color: #005293; }
        .cards { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-top: 30px; }
        .card { background: white; padding: 20px; border-radius: 12px; width: 250px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
        h2 { color: #005293; margin-bottom: 10px; }
        p { font-size: 16px; line-height: 1.5; }
      </style>
    </head>
    <body>
      <h1>Fun Germany Facts 🇩🇪</h1>
      <div class="cards">
        \${cityCards}
      </div>
    </body>
    </html>
  \`);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});`
  },

  practice: {
    title: "Project: Germany Fun Facts Explorer",
    instructions: `
      <ol>
        <li>Create a Node.js server that displays at least 4 German cities as cards.</li>
        <li>Each card should include the city name, flag emoji, and a short fun fact.</li>
        <li>Use an array of objects to store the city data and loop through it to render HTML dynamically.</li>
        <li>Style the cards nicely using CSS flexbox or grid.</li>
        <li>Optional: Add hover effects or subtle animations for interactivity.</li>
      </ol>
    `,
    defaultCode: `const http = require('http');

const cities = [
  { name: "Berlin", flag: "🇩🇪", fact: "Berlin has over 170 museums." },
  { name: "Munich", flag: "🇩🇪", fact: "Munich's English Garden is bigger than Central Park." },
  { name: "Hamburg", flag: "🇩🇪", fact: "Hamburg has the world's oldest stock exchange." },
  { name: "Cologne", flag: "🇩🇪", fact: "Cologne Cathedral took over 600 years to complete." }
];

const server = http.createServer((req, res) => {
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
      <title>Germany Fun Facts</title>
      <style>
        body { font-family: sans-serif; background: #f0f8ff; text-align: center; padding: 50px; }
        h1 { color: #005293; }
        .cards { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-top: 30px; }
        .card { background: white; padding: 20px; border-radius: 12px; width: 250px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: transform 0.3s ease; }
        .card:hover { transform: translateY(-5px); }
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
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});`
  }
};
