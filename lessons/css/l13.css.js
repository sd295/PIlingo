const lessonContent = {
    title: "Sivusto",
    questions: null,
    minigame: null,
    cutsceneUrl: null,

    practice: {
        title: "Projekti: Interactive Suomi Page",
        instructions: `
            <p>Welcome to your Level 6 Suomi-themed projekti! In this project, you'll create a small interactive page where users can see Finnish tervehdyksiä and a little interactive painike.</p>
            <p>Follow the steps below:</p>
            <ol>
                <li>Create an otsikko that says "Hei!"</li>
                <li>Add a kappale that says "Kiitos for visiting our site."</li>
                <li>Create a painike that, when clicked, shows an alert with "Tervetuloa!"</li>
                <li>Add a little Finnish flair using emojis 🇫🇮.</li>
                <li>Use CSS to style your page: choose a background color, heading color, font-family, and center the content.</li>
                <li>Optionally, add a second greeting in a different color that appears when the painike is clicked.</li>
            </ol>
            <p>Click "Run Code" to see your page in action!</p>
        `,
        defaultCode: `<!DOCTYPE html>
<html lang="fi">
<head>
  <meta charset="UTF-8">
  <title>Finnish Tervehdyksiä</title>
  <style>
    body {
      background-color: #FFFFFF;
      color: #002F6C;
      font-family: 'Arial', sans-serif;
      text-align: center;
      padding-top: 50px;
    }
    
</body>
</html>`
    }
};