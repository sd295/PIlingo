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
    gameType: 'code-typer',
    title: "Challenge: Event Registration Form",
    prompt: "Type the HTML for a simple event registration form. It should include: Full Name, Email, Age, a dropdown for 'Ticket Type' (Standard, VIP, Student), a checkbox for agreeing to terms, and a Submit button.",
    
    solution: `<form>\n  <label for="fullname">Full Name:</label>\n  <input type="text" id="fullname" name="fullname">\n  <br>\n  <label for="email">Email:</label>\n  <input type="email" id="email" name="email">\n  <br>\n  <label for="age">Age:</label>\n  <input type="number" id="age" name="age">\n  <br>\n  <label for="ticket">Ticket Type:</label>\n  <select id="ticket" name="ticket">\n    <option value="standard">Standard</option>\n    <option value="vip">VIP</option>\n    <option value="student">Student</option>\n  </select>\n  <br>\n  <input type="checkbox" id="terms" name="terms">\n  <label for="terms">I agree to the terms and conditions</label>\n  <br>\n  <button type="submit">Register</button>\n</form>`
}

};
