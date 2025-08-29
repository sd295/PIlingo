// lessons/css/l6.capstone.js
const lessonContent = {
    title: "Site",
    questions: null,
    minigame: null,
    cutsceneUrl: null,

    practice: {
        title: "Project: Interactive Swedish Page",
        instructions: `
            <p>Welcome to your Level 6 Sweden-themed project! In this project, you'll create a small interactive page where users can see Swedish greetings and a little interactive button.</p>
            <p>Follow the steps below:</p>
            <ol>
                <li>Create a heading that says "Hej!"</li>
                <li>Add a paragraph that says "Tack för att du besöker vår sida."</li>
                <li>Create a button that, when clicked, shows an alert with "Välkommen!"</li>
                <li>Add a little Swedish flair using emojis 🇸🇪.</li>
                <li>Use CSS to style your page: choose a background color, heading color, font-family, and center the content.</li>
                <li>Optionally, add a second greeting in a different color that appears when the button is clicked.</li>
            </ol>
            <p>Click "Run Code" to see your page in action!</p>
        `,
        defaultCode: `<!DOCTYPE html>
<html lang="sv">
<head>
  <meta charset="UTF-8">
  <title>Swedish Greetings</title>
  <style>
    body {
      background-color: #005CBF;
      color: yellow;
      font-family: 'Arial', sans-serif;
      text-align: center;
      padding-top: 50px;
    }
    
</body>
</html>`
    }
};
