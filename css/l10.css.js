// lessons/css/l7.positioning.js
const lessonContent = {
    title: "Level 7: Positioning Elements",
    questions: [
        {
            prompt: "By default, every HTML element has what `position` value?",
            options: [
                "<code>relative</code>",
                "<code>absolute</code>",
                "<code>static</code>",
                "<code>fixed</code>"
            ],
            correctAnswer: "<code>static</code>"
        },
        {
            prompt: "You want to move an element slightly from its normal position, but keep its original space in the layout. Which `position` value should you use?",
            options: [
                "<code>position: relative;</code>",
                "<code>position: absolute;</code>",
                "<code>display: block;</code>",
                "<code>margin: auto;</code>"
            ],
            correctAnswer: "<code>position: relative;</code>"
        },
        {
            prompt: "To place an element in a specific spot relative to its *nearest positioned ancestor* (or the page itself), you would use `position: absolute;` along with which other properties?",
            options: [
                "<code>margin</code> and <code>padding</code>",
                "<code>width</code> and <code>height</code>",
                "<code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code>",
                "<code>flex</code> and <code>grid</code>"
            ],
            correctAnswer: "<code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code>"
        },
        {
            prompt: "Did you know: Finland has over 3 million saunas for its 5.5 million people — that's more than one sauna for every two people. The sauna is a deeply ingrained part of Finnish culture.",
            options: [
                "That's hot!"
            ],
            correctAnswer: "That's hot!"
        },
        
    ],
    
    practice: {
        title: "Project: The Corner Button",
        instructions: "A common design task is placing an icon or button in the corner of a container. Your task is to position the small 'close' button in the top-right corner *inside* its parent container. Hint: The parent needs a position so the child can be positioned relative to it!",
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Positioning Practice</title>
  <style>
    .container {
      width: 300px;
      height: 200px;
      background-color: #eee;
      border: 2px solid #ccc;
      
      /* 1. Add position: relative; here to make this the positioning context for its children. */
      
    }

    .close-button {
      width: 30px;
      height: 30px;
      background-color: red;
      color: white;
      text-align: center;
      line-height: 30px; /* Vertically centers the 'X' */
      
      /* 2. Add position: absolute; here. */


      /* 3. Add top: 10px; and right: 10px; to place it in the corner. */


    }
  </style>
</head>
<body>

  <div class="container">
    I am the parent container.
    <div class="close-button">X</div>
  </div>

</body>
</html>`
    },
    minigame: {
        gameType: 'code-typer',
        title: "Challenge 8: Bring to Front",
        prompt: "Type the single line of CSS used to make a positioned element stack on top of other elements.",
        solution: `z-index: 100;`
    },

};