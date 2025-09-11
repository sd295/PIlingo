// lessons/css/l8.flexbox.js
const lessonContent = {
    title: "Level 8: Introduction to Flexbox",
    questions: [
        {
            prompt: "What is the primary purpose of CSS Flexbox?",
            options: [
                "To style text color and fonts",
                "To easily arrange items in a single row or column",
                "To create complex animations and transitions",
                "To connect a website to a database"
            ],
            correctAnswer: "To easily arrange items in a single row or column"
        },
        {
            prompt: "Which CSS property and value do you apply to a parent element to make its direct children become flex items?",
            options: [
                "<code>layout: flex;</code>",
                "<code>flexbox: true;</code>",
                "<code>position: flex;</code>",
                "<code>display: flex;</code>"
            ],
            correctAnswer: "<code>display: flex;</code>"
        },
        {
            prompt: "After setting `display: flex;`, which property is used to control the alignment and spacing of items along the main axis (horizontally, by default)?",
            options: [
                "<code>align-items</code>",
                "<code>justify-content</code>",
                "<code>flex-direction</code>",
                "<code>text-align</code>"
            ],
            correctAnswer: "<code>justify-content</code>"
        },
        {
            prompt: "Did you know: Finland has a 'Right to Roam' (Jokamiehenoikeus), which allows people to freely walk, ski, or cycle in the countryside, and even pick wild berries and mushrooms, regardless of who owns the land.",
            options: [
                "Nature is for everyone!"
            ],
            correctAnswer: "Nature is for everyone!"
        },
        
    ],
    
    practice: {
        title: "Project: The Flexible Navbar",
        instructions: "Flexbox is perfect for navigation bars. You have a `<nav>` container with several links. Your task is to use Flexbox to turn the vertical list of links into a horizontal navigation bar with space between each item.",
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Flexbox Practice</title>
  <style>
    .navbar {
      background-color: #333;
      padding: 15px;
      
      /* 1. Add display: flex; to make the links arrange in a row. */
      

      /* 2. Add justify-content: space-around; to spread the links out. */

    }

    .navbar a {
      color: white;
      text-decoration: none;
      font-size: 1.2rem;
    }
  </style>
</head>
<body>

  <nav class="navbar">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Contact</a>
  </nav>

</body>
</html>`
    },
    minigame: {
        gameType: 'code-typer',
        title: "Challenge 9: Perfect Centering",
        prompt: "Type the two CSS properties used to perfectly center an item both vertically and horizontally inside a flex container.",
        solution: `justify-content: center; align-items: center;`
    },

};