// lessons/html/l11.html_css_magic.js
const lessonContent = {
    title: "Level 11: HTML + CSS Magic",
    questions: [
        {
            prompt: "To change how your wizard form looks, which tag or attribute do you use?",
            options: [
                "<code>&lt;style&gt;</code>",
                "<code>&lt;script&gt;</code>",
                "<code>&lt;form&gt;</code>",
                "<code>&lt;meta&gt;</code>"
            ],
            correctAnswer: "<code>&lt;style&gt;</code>"
        },
        {
            prompt: "What CSS property changes text color?",
            options: [
                "<code>color</code>",
                "<code>background-color</code>",
                "<code>font-size</code>",
                "<code>border</code>"
            ],
            correctAnswer: "<code>color</code>"
        },
        {
            prompt: "Which CSS property makes a box larger or smaller?",
            options: [
                "<code>width / height</code>",
                "<code>padding / margin</code>",
                "<code>color</code>",
                "<code>display</code>"
            ],
            correctAnswer: "<code>width / height</code>"
        },
        {
            prompt: "To center text in a wizard scroll, which property?",
            options: [
                "<code>text-align: center</code>",
                "<code>align-items</code>",
                "<code>justify-content</code>",
                "<code>vertical-align</code>"
            ],
            correctAnswer: "<code>text-align: center</code>"
        },
        {
            prompt: "You want a glowing button for magic spells. Which property adds glow?",
            options: [
                "<code>box-shadow</code>",
                "<code>font-size</code>",
                "<code>border-radius</code>",
                "<code>padding</code>"
            ],
            correctAnswer: "<code>box-shadow</code>"
        },
        {
            prompt: "How do you apply CSS to a single element with id='magic'?",
            options: [
                "<code>#magic { ... }</code>",
                "<code>.magic { ... }</code>",
                "<code>&lt;magic&gt; { ... }</code>",
                "<code>magic { ... }</code>"
            ],
            correctAnswer: "<code>#magic { ... }</code>"
        },
        {
            prompt: "What does 'class' let you do in HTML + CSS?",
            options: [
                "Apply the same styles to multiple elements"
            ],
            correctAnswer: "Apply the same styles to multiple elements"
        },
        {
            prompt: "A wizard likes different colored potions. Which CSS property changes background color?",
            options: [
                "<code>background-color</code>",
                "<code>color</code>",
                "<code>border-color</code>",
                "<code>font-family</code>"
            ],
            correctAnswer: "<code>background-color</code>"
        },
        {
            prompt: "You want all text in your form to use a mystical font. Which property?",
            options: [
                "<code>font-family</code>",
                "<code>font-size</code>",
                "<code>font-style</code>",
                "<code>font-weight</code>"
            ],
            correctAnswer: "<code>font-family</code>"
        },
        {
            prompt: "Time for a geography bonus: Northern lights inspire glowing gradients. True or false?",
            options: [
                "True, inspiration is everywhere!"
            ],
            correctAnswer: "True, inspiration is everywhere!"
        },
    ],
    practice: {
        title: "Project: Style the Wizard Form",
        instructions: `Take your Level 10 Wizard Recruitment Form and add CSS magic:
- Change the background to a mystical color gradient.
- Center all headings.
- Make buttons glow with box-shadow.
- Style inputs with padding and borders.
- Use at least one class and one id selector.`,
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Wizard Recruitment Form</title>
  <style>
    /* Add your CSS magic here */
  </style>
</head>
<body>
  <!-- Wizard Recruitment Form -->
  
  <!-- Label and Input for Name -->
  
  <!-- Label and Input for Age -->
  
  <!-- Radio buttons for Favorite Creature -->
  
  <!-- Checkboxes for Magical Powers -->
  
  <!-- File upload for Spell Scroll -->
  
  <!-- Textarea for Comments -->
  
  <!-- Submit Button -->
  
</body>
</html>`
    },
    minigame: {
        title: "Mini-Quest: Style the Magic Scroll",
        prompt: "Drag and drop the CSS properties to style this wizard form correctly:",
        draggableTags: [
            "<code>background-color: #001f3f;</code>",
            "<code>color: #ffcc00;</code>",
            "<code>text-align: center;</code>",
            "<code>box-shadow: 0 0 10px #ffcc00;</code>",
            "<code>padding: 10px;</code>",
            "<code>border: 2px solid #ffcc00;</code>",
            "<code>border-radius: 5px;</code>",
            "<code>font-family: 'Mystic', serif;</code>"
        ],
        solution: `body { background-color: #001f3f; color: #ffcc00; font-family: 'Mystic', serif; }
h1, h2 { text-align: center; }
button { box-shadow: 0 0 10px #ffcc00; padding: 10px; border: 2px solid #ffcc00; border-radius: 5px; }`
    }
};
