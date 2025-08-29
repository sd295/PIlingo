// lessons/css/l5.capstone.js
const lessonContent = {
    title: "Level 5: Swedish Basics",
    questions: null,
    minigame: null,
    cutsceneUrl: null,

    practice: {
        title: "Project: Swedish Greetings",
        instructions: `
            <p>Welcome to your first Sweden-themed project! We're going to build a tiny, simple page that says hello and thank you in Swedish.</p>
            <p>Follow the steps below to create your little Sweden-style page:</p>
            <ol>
                <li>Create a heading that says "Hej!"</li>
                <li>Add a paragraph that says "Tack för att du besöker vår sida."</li>
                <li>Optionally, add a little Swedish flair like flag emojis 🇸🇪.</li>
            </ol>
            <p>Click "Run Code" to see your page!</p>
        `,
        defaultCode: `<!DOCTYPE html>
<html lang="sv">
<head>
  <meta charset="UTF-8">
  <title>Swedish Basics</title>
</head>
<body style="background-color:#005CBF; color:yellow; font-family:sans-serif; text-align:center; padding-top:50px;">

  <div id="sweden-js">
    <h1 id="heading"></h1>
    <p id="paragraph"></p>
    <p>🇸🇪 Välkommen till Sverige-stil! 🇸🇪</p>
  </div>



</body>
</html>`
    }
};
