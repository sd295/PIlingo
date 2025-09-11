// lessons/css/l11.transitions.js
const lessonContent = {
    title: "Level 11: CSS Transitions",

    concepts: [
        {
            title: "From Instant to Smooth",
            explanation: "So far, when we use `:hover` to change a style, the change is instant and jarring. CSS Transitions allow us to make these changes happen smoothly over a period of time, creating a polished and professional feel.",
            codeExample: `/*
Without Transition:
.button:hover { background-color: blue; } // Change is INSTANT

With Transition:
.button { transition: background-color 0.3s; }
.button:hover { background-color: blue; } // Change is SMOOTH
*/`,
            checkpoint: {
                prompt: "What is the main purpose of a CSS Transition?",
                correctAnswer: "To animate a style change smoothly over time"
            }
        },
        {
            title: "The `transition` Property",
            explanation: "The magic happens with the `transition` property. At its simplest, you need to tell it two things: **which property** to watch for changes, and **how long** the transition should take (the duration).",
            codeExample: `/* 
   property-to-animate | duration
          /                 /
transition: background-color 0.5s;
transition: opacity 2s;
transition: width 0.3s;
*/

.box {
  background-color: red;
  /* Watch for changes to the background-color property and take 0.5s to complete. */
  transition: background-color 0.5s;
}

.box:hover {
  background-color: blue; /* This change will now be animated */
}`,
            checkpoint: {
                prompt: "In `transition: color 1s;`, what does `1s` represent?",
                correctAnswer: "The duration of the animation"
            }
        },
        {
            title: "Transitioning Multiple Properties",
            explanation: "What if you want to change the color AND the width? You can transition multiple properties by separating them with a comma, or you can use the special value `all` to watch every property.",
            codeExample: `/* To transition multiple specific properties: */
.element {
  transition: background-color 0.5s, color 1s;
}

/* To transition ANY property that changes (very common): */
.another-element {
  transition: all 0.3s;
}`,
            checkpoint: {
                prompt: "Which value is used to make all of an element's properties transition smoothly?",
                correctAnswer: "<code>all</code>"
            }
        },
        {
            type: 'info',
            title: "Did You Know?",
            explanation: "The Moomins, beloved hippo-like characters from books and comics, were created by Finnish author and artist Tove Jansson. They have their own theme park, Moomin World, in Naantali, Finland.",
        },
        {
            title: "A Perfect Pair: `transition` and `transform`",
            explanation: "Transitions are often used with the `transform` property. `transform` lets you visually change an element by scaling it up or down, rotating it, or moving it, often without affecting other elements on the page. It's very efficient for browsers to animate.",
            codeExample: `.card {
  transition: transform 0.3s;
}

.card:hover {
  /* On hover, the card will smoothly grow to 1.1 times its original size */
  transform: scale(1.1);
}`,
            checkpoint: {
                prompt: "Which CSS property is commonly used with `transition` to smoothly scale, rotate, or move elements?",
                correctAnswer: "<code>transform</code>"
            }
        }
    ],
    
    practice: {
        title: "Project: The Dynamic Button",
        instructions: "Let's create a button that gives nice visual feedback. You have a basic button. Your task is to add a transition so that when a user hovers over it, the background color smoothly changes AND it grows slightly in size.",
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Transition Practice</title>
  <style>
    .my-button {
      background-color: #264de4;
      color: white;
      padding: 15px 30px;
      border: none;
      border-radius: 8px;
      font-size: 1.2rem;
      cursor: pointer;

      /* 1. Add a transition here. 
         Make it watch 'all' properties for a duration of 0.3 seconds. */
      
    }

    /* 2. Add a :hover state for .my-button */
    .my-button:hover {

      /* 3. Inside the hover state, change the background-color to a darker blue, like #1b369e. */


      /* 4. Also inside the hover state, add a transform to scale the button slightly, like scale(1.05). */

      
    }
  </style>
</head>
<body>

  <button class="my-button">Hover Over Me!</button>

</body>
</html>`
    },
    minigame: {
        gameType: 'code-typer',
        title: "Challenge 12: Smooth Fade-In",
        prompt: "Type the single CSS property needed to make an element's `opacity` transition smoothly over 0.4 seconds.",
        solution: `transition: opacity 0.4s;`
    },

};