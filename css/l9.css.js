// lessons/css/l6.box_model.js
const lessonContent = {
    title: "Level 6: The Box Model",
    questions: [
        {
            prompt: "In CSS, every single element is seen as a rectangular box. What are the three main properties that control the space and size of this box?",
            options: [
                "<code>color, background, font-size</code>",
                "<code>padding, margin, border</code>",
                "<code>flex, grid, block</code>",
                "<code>width, height, depth</code>"
            ],
            correctAnswer: "<code>padding, margin, border</code>"
        },
        {
            prompt: "You have a button, and the text inside is too close to the edges. Which property do you use to add space *inside* the border?",
            options: [
                "<code>margin</code>",
                "<code>spacing</code>",
                "<code>padding</code>",
                "<code>inner-space</code>"
            ],
            correctAnswer: "<code>padding</code>"
        },
        {
            prompt: "You have two boxes right next to each other and you want to push them apart. Which property do you use to add space *outside* an element's border?",
            options: [
                "<code>margin</code>",
                "<code>padding</code>",
                "<code>border</code>",
                "<code>outer-space</code>"
            ],
            correctAnswer: "<code>margin</code>"
        },
        {
            prompt: "Did you know: The Finnish language has no word for 'please'. Instead, politeness is shown through tone, respectful language, and using verbs in the conditional mood.",
            options: [
                "Kiitos (Thanks!)"
            ],
            correctAnswer: "Kiitos (Thanks!)"
        },
        
    ],
    
    practice: {
        title: "Project: The Padded Box",
        instructions: "Let's practice the box model. You have a simple box (a div). Your task is to use CSS to give it a thick solid border, some space inside the border (padding), and some space outside the border (margin) to push it away from the edge of the page.",
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Box Model Practice</title>
  <style>
    .my-box {
      background-color: lightblue;
      width: 200px;
      height: 100px;

      /* 1. Add a 5px solid black border here */
      

      /* 2. Add 20px of padding here */


      /* 3. Add 30px of margin here */


    }
  </style>
</head>
<body>

  <div class="my-box">
    I'm a box!
  </div>

</body>
</html>`
    },
    minigame: {
        gameType: 'code-typer',
        title: "Challenge 7: Give it a Border",
        prompt: "Type the single line of CSS needed to give an element a 2-pixel, dashed, red border.",
        solution: `border: 2px dashed red;`
    },

};