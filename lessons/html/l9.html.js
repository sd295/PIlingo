// lessons/html/l6.advanced_structure.js
const lessonContent = {
    title: "Level 9: HTML Adventures & Forms",
    questions: [
        {
            prompt: "Imagine your HTML page is a castle. What is the '<head>'?",
            options: [
                "<code>The royal treasury (metadata)</code>",
                "<code>The dungeon (scripts)</code>",
                "<code>The garden (CSS)</code>",
                "<code>The knights (buttons)</code>"
            ],
            correctAnswer: "<code>The royal treasury (metadata)</code>"
        },
        {
            prompt: "Why do we use '<meta charset=\"UTF-8\">'?",
            options: [
                "<code>To make letters look pretty worldwide</code>",
                "<code>To summon dragons</code>",
                "<code>To control the sun and moon</code>",
                "<code>To confuse the browser</code>"
            ],
            correctAnswer: "<code>To make letters look pretty worldwide</code>"
        },
        {
            prompt: "Pick the tag that connects your HTML to CSS:",
            options: [
                "<code>&lt;style&gt;</code>",
                "<code>&lt;link&gt;</code>",
                "<code>&lt;script&gt;</code>",
                "<code>&lt;meta&gt;</code>"
            ],
            correctAnswer: "<code>&lt;link&gt;</code>"
        },
        {
            prompt: "Forms are like magical scrolls. Which tag starts one?",
            options: [
                "<code>&lt;input&gt;</code>",
                "<code>&lt;form&gt;</code>",
                "<code>&lt;textarea&gt;</code>",
                "<code>&lt;button&gt;</code>"
            ],
            correctAnswer: "<code>&lt;form&gt;</code>"
        },
        {
            prompt: "You need a big text box for long messages. Which tag?",
            options: [
                "<code>&lt;textarea&gt;</code>",
                "<code>&lt;input type='text'&gt;</code>",
                "<code>&lt;div&gt;</code>",
                "<code>&lt;p&gt;</code>"
            ],
            correctAnswer: "<code>&lt;textarea&gt;</code>"
        },
        {
            prompt: "Which attribute links a label to its input?",
            options: [
                "<code>for='id_of_input'</code>",
                "<code>name='input'</code>",
                "<code>type='text'</code>",
                "<code>value='submit'</code>"
            ],
            correctAnswer: "<code>for='id_of_input'</code>"
        },
        {
            prompt: "The button that submits a form should be:",
            options: [
                "<code>&lt;button type='submit'&gt;</code>",
                "<code>&lt;input type='button'&gt;</code>",
                "<code>&lt;div&gt;</code>",
                "<code>&lt;p&gt;</code>"
            ],
            correctAnswer: "<code>&lt;button type='submit'&gt;</code>"
        },
        {
            prompt: "In northern Europe, fjords are everywhere. How is this related to forms?",
            options: [
                "Its not, just a geography bonus!"
            ],
            correctAnswer: "Its not, just a geography bonus!"
        },
    ],
    practice: {
        title: "Project: Adventure Sign-Up Form",
        instructions: "Create a fantasy-themed sign-up form. Add inputs for Name, Email, and Favorite Creature, and a submit button. Use labels correctly!",
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Sign Up for Adventure!</title>
</head>
<body>
  <!-- Start your magical form -->
  <!-- Label and Input for Name -->
  
  <!-- Label and Input for Email -->
  
  <!-- Label and Input for Favorite Creature -->
  
  <!-- Submit Button -->
  <!-- End of the form -->
</body>
</html>`
    },
    minigame: {
    gameType: 'code-typer',
    title: "Challenge: Contact Email Input",
    prompt: "Type the HTML for an email input field with a label. Make sure it matches exactly.",
    
    solution: `<label for="email">Email:</label>\n<input type="email" id="email" name="email">`
}

    
};
