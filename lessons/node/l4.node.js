// lessons/node/l4.germany_city_input.js
const lessonContent = {
  title: "Level 4: Node.js – Interactive German City Explorer",

  questions: [
    {
      prompt: "Which module do we use to fetch HTTPS data in Node.js?",
      options: ["fs", "http", "https", "express"],
      correctAnswer: "https"
    },
    {
      prompt: "True or False: You can take user input from the URL path to dynamically fetch data.",
      options: ["True", "False"],
      correctAnswer: "True"
    }
  ],

  minigame: {
    gameType: "code-typer",
    title: "Challenge 4: Any City Info",
    prompt: "Create a Node.js server where visiting /<cityname> fetches the city's info from Wikipedia.",
    solution: `const http = require('http');
const https = require('https');

const server = http.createServer((req, res) => {
  let city = req.url.slice(1) || 'Berlin'; // default to Berlin if no city is typed

  const wikiUrl = \`https://en.wikipedia.org/api/rest_v1/page/summary/\${city}\`;

  https.get(wikiUrl, (wikiRes) => {
    let data = '';
    wikiRes.on('data', chunk => data += chunk);
    wikiRes.on('end', () => {
      let json;
      try {
        json = JSON.parse(data);
      } catch(e) {
        json = { extract: "City not found.", thumbnail: { source: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Berlin_Skyline_Fernsehturm_2016.jpg/640px-Berlin_Skyline_Fernsehturm_2016.jpg" } };
      }

      const extract = json.extract || 'No summary available.';
      const image = json.thumbnail ? json.thumbnail.source : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Berlin_Skyline_Fernsehturm_2016.jpg/640px-Berlin_Skyline_Fernsehturm_2016.jpg';

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
              form { margin-top: 25px; }
              input { padding: 8px 12px; font-size: 16px; border-radius: 6px; border: 1px solid #005293; }
              button { padding: 8px 14px; border-radius: 6px; background: #ffc72c; color: #005293; border: none; cursor: pointer; margin-left: 5px; }
            </style>
          </head>
          <body>
            <h1>\${city} 🇩🇪</h1>
            <img src="\${image}" alt="\${city}">
            <p>\${extract}</p>
            <form method="get" action="/">
              <input type="text" name="city" placeholder="Enter a German city">
              <button type="submit">Explore</button>
            </form>
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
    title: "Project: Dynamic German City Explorer",
    instructions: `
      <ol>
        <li>Create a Node.js server that reads the city from the URL (e.g., /Berlin, /Munich).</li>
        <li>Fetch live data (extract + image) from Wikipedia using the REST API.</li>
        <li>Render an HTML page showing the city name, image, and description.</li>
        <li>Add a form input so users can type any German city to explore.</li>
        <li>Handle errors gracefully when a city is not found.</li>
      </ol>
    `,
    defaultCode: `const http = require('http');
const https = require('https');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  let city = parsedUrl.query.city || parsedUrl.pathname.slice(1) || 'Berlin';

  const wikiUrl = \`https://en.wikipedia.org/api/rest_v1/page/summary/\${city}\`;

  https.get(wikiUrl, (wikiRes) => {
    let data = '';
    wikiRes.on('data', chunk => data += chunk);
    wikiRes.on('end', () => {
      let json;
      try {
        json = JSON.parse(data);
      } catch(e) {
        json = { extract: "City not found.", thumbnail: { source: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Berlin_Skyline_Fernsehturm_2016.jpg/640px-Berlin_Skyline_Fernsehturm_2016.jpg" } };
      }

      const extract = json.extract || 'No summary available.';
      const image = json.thumbnail ? json.thumbnail.source : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Berlin_Skyline_Fernsehturm_2016.jpg/640px-Berlin_Skyline_Fernsehturm_2016.jpg';

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
              form { margin-top: 25px; }
              input { padding: 8px 12px; font-size: 16px; border-radius: 6px; border: 1px solid #005293; }
              button { padding: 8px 14px; border-radius: 6px; background: #ffc72c; color: #005293; border: none; cursor: pointer; margin-left: 5px; }
            </style>
          </head>
          <body>
            <h1>\${city} 🇩🇪</h1>
            <img src="\${image}" alt="\${city}">
            <p>\${extract}</p>
            <form method="get" action="/">
              <input type="text" name="city" placeholder="Enter a German city">
              <button type="submit">Explore</button>
            </form>
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
