// lessons/node/l3.germany_wiki.js
const lessonContent = {
  title: "Level 3: Node.js & Wikipedia API – Live Germany Explorer",

  questions: [
    {
      prompt: "Which module allows HTTP requests in Node.js?",
      options: ["fs", "http", "https", "express"],
      correctAnswer: "https"
    },
    {
      prompt: "True or False: You can fetch JSON data from Wikipedia using its REST API.",
      options: ["True", "False"],
      correctAnswer: "True"
    }
  ],

  minigame: {
    gameType: "code-typer",
    title: "Challenge 3: Fetch Berlin Info",
    prompt: "Create a Node.js server that fetches a short extract about Berlin from Wikipedia and displays it.",
    solution: `const http = require('http');
const https = require('https');

const server = http.createServer((req, res) => {
  const city = req.url.slice(1) || 'Berlin';

  const wikiUrl = \`https://en.wikipedia.org/api/rest_v1/page/summary/\${city}\`;

  https.get(wikiUrl, (wikiRes) => {
    let data = '';
    wikiRes.on('data', chunk => data += chunk);
    wikiRes.on('end', () => {
      const json = JSON.parse(data);
      const extract = json.extract || 'No summary available.';
      const image = json.thumbnail ? json.thumbnail.source : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Berlin_Skyline_Fernsehturm_2016.jpg/640px-Berlin_Skyline_Fernsehturm_2016.jpg';

      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(\`
        <html>
          <head>
            <title>Explore \${city}</title>
            <style>
              body { font-family: sans-serif; text-align: center; background: #f0f8ff; padding: 50px; }
              h1 { color: #005293; }
              img { max-width: 400px; border-radius: 10px; margin-top: 20px; }
              p { font-size: 18px; margin-top: 15px; }
            </style>
          </head>
          <body>
            <h1>\${city} 🇩🇪</h1>
            <img src="\${image}" alt="\${city}">
            <p>\${extract}</p>
          </body>
        </html>
      \`);
    });
  }).on('error', err => {
    res.writeHead(500);
    res.end('Error fetching Wikipedia data: ' + err.message);
  });
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});`
  },

  practice: {
    title: "Project: Interactive German City Explorer",
    instructions: `
      <ol>
        <li>Create a Node.js server that fetches live data from Wikipedia using the REST API.</li>
        <li>When visiting /<cityname>, fetch the extract and image of that city.</li>
        <li>Display the city name, image, and short description in an HTML page.</li>
        <li>Include links to other cities (Berlin, Munich, Hamburg, Cologne) for easy navigation.</li>
        <li>Optional: Handle errors gracefully when a city is not found.</li>
      </ol>
    `,
    defaultCode: `const http = require('http');
const https = require('https');

const cities = ['Berlin', 'Munich', 'Hamburg', 'Cologne'];

const server = http.createServer((req, res) => {
  let city = req.url.slice(1);
  if (!city || !cities.includes(city)) city = 'Berlin';

  const wikiUrl = \`https://en.wikipedia.org/api/rest_v1/page/summary/\${city}\`;

  https.get(wikiUrl, (wikiRes) => {
    let data = '';
    wikiRes.on('data', chunk => data += chunk);
    wikiRes.on('end', () => {
      const json = JSON.parse(data);
      const extract = json.extract || 'No summary available.';
      const image = json.thumbnail ? json.thumbnail.source : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Berlin_Skyline_Fernsehturm_2016.jpg/640px-Berlin_Skyline_Fernsehturm_2016.jpg';

      const links = cities.map(c => \`<a href="/\${c}">\${c}</a>\`).join(' | ');

      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(\`
        <html>
          <head>
            <title>\${city}</title>
            <style>
              body { font-family: sans-serif; text-align: center; background: #f0f8ff; padding: 50px; }
              h1 { color: #005293; }
              img { max-width: 400px; border-radius: 10px; margin-top: 20px; }
              p { font-size: 18px; margin-top: 15px; }
              a { margin: 0 10px; color: #005293; text-decoration: none; font-weight: bold; }
              a:hover { text-decoration: underline; }
            </style>
          </head>
          <body>
            <h1>\${city} 🇩🇪</h1>
            <img src="\${image}" alt="\${city}">
            <p>\${extract}</p>
            <p>Explore other cities: \${links}</p>
          </body>
        </html>
      \`);
    });
  }).on('error', err => {
    res.writeHead(500);
    res.end('Error fetching Wikipedia data: ' + err.message);
  });
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});`
  }
};
