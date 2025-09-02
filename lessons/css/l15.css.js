// lessons/css/l9.css_grid.js
const lessonContent = {
    title: "Level 9: Introduction to CSS Grid",
    questions: [
        {
            prompt: "While Flexbox is great for one-dimensional layouts (a row OR a column), what is CSS Grid primarily designed for?",
            options: [
                "Styling text and fonts",
                "Animating elements on the page",
                "Creating complex two-dimensional layouts (rows AND columns)",
                "Making website images load faster"
            ],
            correctAnswer: "Creating complex two-dimensional layouts (rows AND columns)"
        },
        {
            prompt: "Similar to Flexbox, which CSS property and value do you apply to a parent element to turn it into a grid container?",
            options: [
                "<code>layout: grid;</code>",
                "<code>display: grid;</code>",
                "<code>grid: true;</code>",
                "<code>position: grid;</code>"
            ],
            correctAnswer: "<code>display: grid;</code>"
        },
        {
            prompt: "After setting `display: grid;`, which essential property is used to define the number and width of the grid's columns?",
            options: [
                "<code>grid-columns</code>",
                "<code>grid-template-rows</code>",
                "<code>grid-template-columns</code>",
                "<code>grid-column-gap</code>"
            ],
            correctAnswer: "<code>grid-template-columns</code>"
        },
        {
            prompt: "Did you know: The official home of Santa Claus is in Finland. The Santa Claus Village in Rovaniemi, located on the Arctic Circle, receives hundreds of thousands of letters each year.",
            options: [
                "I'm sending my letter now!"
            ],
            correctAnswer: "I'm sending my letter now!"
        },
        
    ],
    
    practice: {
        title: "Project: The Three-Column Card Layout",
        instructions: "CSS Grid is perfect for creating card layouts. You have a container with three 'card' elements inside. Your task is to use CSS Grid to arrange these cards into a three-column layout where each column takes up an equal amount of space.",
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>CSS Grid Practice</title>
  <style>
    .grid-container {
      border: 2px solid #ccc;
      padding: 10px;
      
      /* 1. Add display: grid; to create the grid. */
      

      /* 2. Use grid-template-columns to create 3 equal columns. 
         Hint: Use the 'fr' unit (e.g., 1fr 1fr 1fr). */
      

      /* 3. (Optional) Add a gap between the grid items. */
      gap: 10px;
    }

    .card {
      background-color: lightblue;
      padding: 20px;
      text-align: center;
      border-radius: 8px;
    }
  </style>
</head>
<body>

  <div class="grid-container">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
  </div>

</body>
</html>`
    },
    minigame: {
        gameType: 'code-typer',
        title: "Challenge 10: The Two-Column Grid",
        prompt: "Type the single CSS property needed to create a two-column grid where each column takes up equal free space.",
        solution: `grid-template-columns: 1fr 1fr;`
    },

};