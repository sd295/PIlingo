// lessons/node/l1.germany_basics.js
const lessonContent = {
  title: "Level 1: Node.js Basics – German Greetings",

  questions: [
    {
      prompt: "What is Node.js mainly used for?",
      options: [
        "Creating mobile apps",
        "Server-side JavaScript execution",
        "Styling HTML",
        "Making images"
      ],
      correctAnswer: "Server-side JavaScript execution"
    },
    {
      prompt: "Which module do we use to create a basic HTTP server in Node.js?",
      options: [
        "fs",
        "http",
        "express",
        "path"
      ],
      correctAnswer: "http"
    },
    {
      prompt: "Which command runs a Node.js file named index.js?",
      options: [
        "node index.js",
        "npm start index.js",
        "run index.js",
        "node run index.js"
      ],
      correctAnswer: "node index.js"
    },
    {
      prompt: "Tip",
      options: "Keep your first server simple; start by sending plain text before adding HTML.",
      correctAnswer: "Keep your first server simple; start by sending plain text before adding HTML."
    }
  ],

  minigame: {
    gameType: "code-typer",
    title: "Challenge 1: Hallo Server",
    prompt: "Create a simple Node.js server that responds with 'Hallo Deutschland!' when accessed.",
    solution: `const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hallo Deutschland! 🇩🇪');
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});`
  },

  practice: {
    title: "Project: German Greetings Server",
    instructions: `
      <ol>
        <li>Create a Node.js file called <code>index.js</code>.</li>
        <li>Use the built-in <code>http</code> module to start a server on port 3000.</li>
        <li>Send "Hallo Deutschland! 🇩🇪" as the response for the homepage.</li>
        <li>Optionally, add a second route <code>/fact</code> that returns a fun German fact.</li>
        <li>Run your server with <code>node index.js</code> and visit <code>http://localhost:3000</code>.</li>
      </ol>
    `,
    defaultCode: `const http = require('http');

const facts = [
  "Germany is known for its beer and Oktoberfest.",
  "The Berlin Wall fell in 1989.",
  "Germany has over 1,500 types of sausages."
];

const server = http.createServer((req, res) => {
  if (req.url === '/fact') {
    const fact = facts[Math.floor(Math.random() * facts.length)];
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('German Fact: ' + fact);
  } else {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hallo Deutschland! 🇩🇪');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});`
  }
};
