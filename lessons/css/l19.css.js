// lessons/css/l13.review_quiz.js
const lessonContent = {
    title: "Level 13: CSS Review Quiz",
    questions: [
        {
            prompt: "Which CSS at-rule is the foundation of responsive design, allowing you to apply styles based on screen width?",
            options: [
                "<code>@import</code>",
                "<code>@font-face</code>",
                "<code>@media</code>",
                "<code>@style</code>"
            ],
            correctAnswer: "<code>@media</code>"
        },
        {
            prompt: "What is the purpose of the `transition` property?",
            options: [
                "To instantly change a CSS property",
                "To define a multi-step animation that can loop",
                "To make a style change happen smoothly over a set duration",
                "To import another stylesheet"
            ],
            correctAnswer: "To make a style change happen smoothly over a set duration"
        },
        {
            prompt: "If you want an animation to repeat forever, what value should you use for `animation-iteration-count`?",
            options: [
                "<code>true</code>",
                "<code>loop</code>",
                "<code>repeat</code>",
                "<code>infinite</code>"
            ],
            correctAnswer: "<code>infinite</code>"
        },
        {
            prompt: "What is the `@keyframes` rule used for?",
            options: [
                "To set the timing of a transition",
                "To define the different stages or steps of an animation",
                "To select a specific frame in a video",
                "To set the color of an element"
            ],
            correctAnswer: "To define the different stages or steps of an animation"
        },
        {
            prompt: "Did you know: 'Sisu' is a unique Finnish concept that combines stoic determination, tenacity of purpose, grit, bravery, and resilience. It is a core part of the Finnish national character.",
            options: [
                "Got it!"
            ],
            correctAnswer: "Got it!"
        },
    ],
    
    practice: {
        title: "Project: The Responsive, Animated Box",
        instructions: "Combine your skills! Make a box that smoothly turns blue on hover. Then, add a media query so that on screens 600px or smaller, the box becomes a circle.",
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Review Practice</title>
  <style>
    .box {
      width: 150px;
      height: 150px;
      background-color: red;
      /* 1. Add a transition for the background-color property. */
      
    }

    .box:hover {
      /* 2. Change the background-color to blue here. */
      
    }

    /* 3. Add a media query for screens 600px or smaller. */
    @media (max-width: 600px) {
      .box {
        /* 4. Inside the media query, change the border-radius to 50%. */
        
      }
    }
  </style>
</head>
<body>

  <div class="box"></div>

</body>
</html>`
    },
    minigame: {
        gameType: 'code-typer',
        title: "Challenge 14: Animation Shorthand",
        prompt: "Type the shorthand `animation` property to apply an animation named 'slide-in' that lasts 2 seconds and runs once.",
        solution: `animation: slide-in 2s;`
    },

};