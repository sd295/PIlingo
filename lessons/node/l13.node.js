// lessons/node/l1.germany_time.js
const lessonContent = {
    title: "Level 1: German Greetings with Time",
    questions: null,
    minigame: null,
    cutsceneUrl: null,

    practice: {
        title: "Project: Hallo Germany with Time",
        instructions: `
            <p>Welcome to your first interactive Germany-themed Node.js project! We'll build a server that greets visitors in German and shows the current time.</p>
            <ol>
                <li>Create a Node.js HTTP server.</li>
                <li>Serve an HTML page with a heading "Hallo!"</li>
                <li>Include a paragraph showing "Aktuelle Zeit: HH:MM:SS"</li>
                <li>Optionally, add the German flag 🇩🇪.</li>
                <li>Update the time each time the page is refreshed.</li>
            </ol>
            <p>Run the server and visit <code>http://localhost:3000</code> to see it in action!</p>
        `,
        defaultCode: `const http = require('http');

const server = http.createServer((req, res) => {
  const now = new Date();
  const timeString = now.toLocaleTimeString('de-DE');

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(\`
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <meta charset="UTF-8">
      <title>German Greeting with Time</title>
      <style>
        body {
          background-color: #F7F7F7;
          color: #005293;
          font-family: sans-serif;
          text-align: center;
          padding-top: 50px;
        }
        h1 { color: #D52B1E; }
        p { font-size: 20px; margin-top: 15px; }
      </style>
    </head>
    <body>
      <h1>🇩🇪 Hallo! 🇩🇪</h1>
      <p>Aktuelle Zeit: \${timeString}</p>
      <p>Willkommen auf unserer Deutschland-Seite!</p>
    </body>
    </html>
  \`);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});`
    }
};
