// lessons/html/l14_html_norway.js
const lessonContent = {
    title: "Level 14: Norway HTML Essentials",
    questions: [
        {
            prompt: "Which HTML tag is used to create a heading for a city name like Oslo?",
            options: [
                "<code>&lt;h1&gt;</code>",
                "<code>&lt;h5&gt;</code>",
                "<code>&lt;div&gt;</code>",
                "<code>&lt;p&gt;</code>"
            ],
            correctAnswer: "<code>&lt;h1&gt;</code>"
        },
        {
            prompt: "You want to write a paragraph about the fjords in Bergen. Which tag should you use?",
            options: [
                "<code>&lt;p&gt;</code>",
                "<code>&lt;span&gt;</code>",
                "<code>&lt;section&gt;</code>",
                "<code>&lt;header&gt;</code>"
            ],
            correctAnswer: "<code>&lt;p&gt;</code>"
        },
        {
            prompt: "You want to add a link to a Northern Lights tour website. Which attribute tells the browser where to go?",
            options: [
                "<code>href</code>",
                "<code>src</code>",
                "<code>link</code>",
                "<code>action</code>"
            ],
            correctAnswer: "<code>href</code>"
        },
        {
            prompt: "You want to show a picture of Tromsø in winter. Which tag do you use?",
            options: [
                "<code>&lt;img&gt;</code>",
                "<code>&lt;image&gt;</code>",
                "<code>&lt;picture&gt;</code>",
                "<code>&lt;figure&gt;</code>"
            ],
            correctAnswer: "<code>&lt;img&gt;</code>"
        },
        {
            prompt: "Which attribute is required for an image to describe it for screen readers?",
            options: [
                "<code>alt</code>",
                "<code>title</code>",
                "<code>desc</code>",
                "<code>text</code>"
            ],
            correctAnswer: "<code>alt</code>"
        },
        {
            prompt: "You want to list popular activities in Oslo, Bergen, and Tromsø. Which tag is best for a numbered list?",
            options: [
                "<code>&lt;ol&gt;</code>",
                "<code>&lt;ul&gt;</code>",
                "<code>&lt;dl&gt;</code>",
                "<code>&lt;list&gt;</code>"
            ],
            correctAnswer: "<code>&lt;ol&gt;</code>"
        },
        {
            prompt: "To create a table showing cities, activities, and fun facts, which tag starts the table?",
            options: [
                "<code>&lt;table&gt;</code>",
                "<code>&lt;tr&gt;</code>",
                "<code>&lt;td&gt;</code>",
                "<code>&lt;th&gt;</code>"
            ],
            correctAnswer: "<code>&lt;table&gt;</code>"
        },
        {
            prompt: "You want to emphasize a special fact about Norway in a paragraph. Which tag works?",
            options: [
                "<code>&lt;strong&gt;</code>",
                "<code>&lt;b&gt;</code>",
                "<code>&lt;i&gt;</code>",
                "<code>&lt;em&gt;</code>"
            ],
            correctAnswer: "<code>&lt;strong&gt;</code>"
        },
        {
            prompt: "Final Norway bonus fact: Norway has a coastline longer than 25,000 km. True or false?",
            options: [
                "True, the coastline is extremely long!"
            ],
            correctAnswer: "True, the coastline is extremely long!"
        }
    ],
    practice: {
        title: "Project: Norwegian City Page",
        instructions: `
Create an HTML page about your favorite Norwegian city:
1. Add a big heading with the city name.
2. Add a paragraph describing a famous landmark or activity.
3. Include an image of the city (use alt text).
4. Add a link to a website about the city.
5. Create a numbered list of 3 popular activities.
6. Bonus: Add a small table with city name, activity, and fun fact.
`,
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>My Favorite Norwegian City</title>
</head>
<body>
  <!-- Add your h1 heading here -->

  <!-- Add your p (paragraph) here -->

  <!-- Add your img (image) here with alt attribute -->

  <!-- Add your a (link) here -->

  <!-- Add your ol list here -->

  <!-- Optional: Add a table here -->
</body>
</html>`
    },
    minigame: {
        gameType: 'code-typer',
        title: "Challenge: Norway Info Table",
        prompt: "Create an HTML table showing three Norway cities, a popular activity, and a fun fact for each. Use proper table tags.",
        solution: `<table border="1">
  <tr>
    <th>City</th>
    <th>Popular Activity</th>
    <th>Fun Fact</th>
  </tr>
  <tr>
    <td>Oslo</td>
    <td>Visit Vigeland Park</td>
    <td>Oslo has more green spaces than most capitals!</td>
  </tr>
  <tr>
    <td>Bergen</td>
    <td>Fjord Tour</td>
    <td>Bergen is known as the gateway to the fjords.</td>
  </tr>
  <tr>
    <td>Tromsø</td>
    <td>Northern Lights Hunting</td>
    <td>Tromsø is above the Arctic Circle.</td>
  </tr>
</table>`
    }
};


