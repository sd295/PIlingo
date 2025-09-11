// lessons/css/l1.selectors.js
const lessonContent = {
    title: "Level 1: The Pointy Finger (Selectors)",
    questions: [
        {
            prompt: "You want to make ALL paragraphs red with rage. How do you select every single <code>&lt;p&gt;</code> tag?",
            options: ["<code>p { ... }</code>", "<code>.p { ... }</code>", "<code>#p { ... }</code>", "<code>all-p { ... }</code>"],
            correctAnswer: "<code>p { ... }</code>"
        },
        {
            prompt: "You gave a special div the ID 'main-boss'. How do you select ONLY that element?",
            options: ["<code>.main-boss { ... }</code>", "<code>id:main-boss { ... }</code>", "<code>*main-boss { ... }</code>", "<code>#main-boss { ... }</code>"],
            correctAnswer: "<code>#main-boss { ... }</code>"
        }
    ],
    practice: {
        title: "Project: Style the Page",
        instructions: "I've given you some HTML. Your mission: write CSS to make the h1 blue, and give the element with the ID 'special' a red background.",
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Styling Practice</title>
  <style>
    /* Your CSS goes here */
    
  </style>
</head>
<body>
  <h1>This is a heading.</h1>
  <p>This is a normal paragraph.</p>
  <p id="special">This paragraph is special.</p>
</body>
</html>`
    },
    minigame: {
        gameType: 'code-typer', // This property MUST exist
        title: "Challenge: Type the Form Input",
        prompt: "A client needs a simple login input for a username. Type the HTML exactly as shown below. Pay close attention to the syntax!",
        solution: `<label for="username">Username:</label>\n<input type="text" id="username" name="username">`
    }
};