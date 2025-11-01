// lessons/node/l1.germany_greetings.js
const lessonContent = {
    title: "Level 1: German Multi-Greeting Server",
    questions: null,
    minigame: null,
    cutsceneUrl: null,

    practice: {
        title: "Project: German Greetings Server",
        instructions: `
            <p>In this project, we'll build a Node.js server that greets visitors in German based on different routes.</p>
            <ol>
                <li>Create a Node.js HTTP server.</li>
                <li>Serve a homepage "/" with a greeting "Hallo!" and links to "/morning" and "/evening".</li>
                <li>On "/morning", show "Guten Morgen! 🌅"</li>
                <li>On "/evening", show "Guten Abend! 🌙"</li>
                <li>On unknown routes, show a simple 404 message.</li>
                <li>Optionally, add the German flag 🇩🇪 and basic styling.</li>
            </ol>
            <p>Run your server and visit <code>http://localhost:3000</code> to explore the greetings!</p>
        `,
        defaultCode: `const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  if (req.url === "/") {
    res.end(\`
      <!DOCTYPE html>
      <html lang="de">
      <head>
        <meta charset="UTF-8">
        <title>Hallo Germany</title>
        <style>
          body { background-color: #F7F7F7; color: #005293; font-family: sans-serif; text-align: center; padding-top: 50px; }
          h1 { color: #D52B1E; }
          a { display: block; margin: 10px; color: #005293; font-size: 18px; text-decoration: none; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <h1>🇩🇪 Hallo! 🇩🇪</h1>
        <p>Willkommen auf unserer Deutschland-Seite!</p>
        <a href="/morning">Guten Morgen</a>
        <a href="/evening">Guten Abend</a>
      </body>
      </html>
    \`);
  } else if (req.url === "/morning") {
    const now = new Date();
    res.end(\`
      <h1>Guten Morgen! 🌅</h1>
      <p>Aktuelle Zeit: \${now.toLocaleTimeString('de-DE')}</p>
      <p><a href="/">Zurück zur Startseite</a></p>
    \`);
  } else if (req.url === "/evening") {
    const now = new Date();
    res.end(\`
      <h1>Guten Abend! 🌙</h1>
      <p>Aktuelle Zeit: \${now.toLocaleTimeString('de-DE')}</p>
      <p><a href="/">Zurück zur Startseite</a></p>
    \`);
  } else {
    res.writeHead(404);
    res.end("<h1>404 - Seite nicht gefunden</h1><p><a href='/'>Startseite</a></p>");
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});`
    }
};
