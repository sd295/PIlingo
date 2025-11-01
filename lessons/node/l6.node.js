// lessons/node/l1.germany_basics.js
const lessonContent = {
    title: "Level 1: German Basics",
    questions: null,
    minigame: null,
    cutsceneUrl: null,

    practice: {
        title: "Project: German Greetings",
        instructions: `
            <p>Welcome to your first Germany-themed project! We're going to build a tiny Node.js server that says hello and thanks in German.</p>
            <p>Follow the steps below to create your little Germany-style server:</p>
            <ol>
                <li>Create a simple Node.js HTTP server.</li>
                <li>Serve a page with a heading that says "Hallo!"</li>
                <li>Add a paragraph that says "Danke, dass Sie unsere Seite besuchen."</li>
                <li>Optionally, add a little German flair like flag emojis 🇩🇪.</li>
            </ol>
            <p>Start your server and visit <code>http://localhost:3000</code> to see your page!</p>
        `,
        defaultCode: `const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(\`
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <meta charset="UTF-8">
      <title>German Basics</title>
      <style>
        body {
          background-color: #000000;
          color: #FFD700;
          font-family: sans-serif;
          text-align: center;
          padding-top: 50px;
        }
      </style>
    </head>
    <body>
      <h1>Hallo!</h1>
      <p>Danke, dass Sie unsere Seite besuchen.</p>
      <p>🇩🇪 Willkommen im Deutschland-Stil! 🇩🇪</p>
    </body>
    </html>
  \`);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});`
    }
};
