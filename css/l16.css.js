
// seridarivus
const lessonContent = {
    title: "Level 10: Responsive Design",

    // The lesson is now a series of concepts to learn one by one.
    concepts: [
        {
            title: "The Problem: One Site, Many Screens",
            explanation: "Websites are viewed on phones, tablets, laptops, and giant desktop monitors. Responsive Design is the practice of making your website look good and work well on **all** of these different screen sizes.",
            codeExample: `/* 
Imagine a layout:
- On a Desktop: [Box 1] [Box 2] [Box 3]
- On a Phone:
  [Box 1]
  [Box 2]
  [Box 3]

Responsive design lets us change the layout like this automatically.
*/`,
            checkpoint: {
                prompt: "What is the main goal of Responsive Design?",
                correctAnswer: "To make a website look good on all devices"
            }
        },
        {
            title: "The Solution: Media Queries",
            explanation: "The core tool for responsive design is the Media Query. Think of it as an **if-statement for your CSS**. It checks a condition (like the screen's width) and only applies the styles inside it if that condition is true.",
            codeExample: `/* The basic syntax */

@media (condition) {
  /* CSS rules placed here will only apply if the condition is met */
  .some-element {
    color: red;
  }
}`,
            checkpoint: {
                prompt: "What is the name of the CSS feature that acts like an 'if-statement' for styles?",
                correctAnswer: "<code>@media</code> query"
            }
        },
        {
            title: "Condition 1: `max-width`",
            explanation: "The most common condition is `max-width`. This means: 'Apply these styles if the browser window is this width **or smaller**.' It's perfect for targeting mobile phones and smaller screens.",
            codeExample: `/* This CSS will make the background light blue ONLY
   if the screen width is 600 pixels or less. */

@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}`,
            checkpoint: {
                prompt: "What does the condition `@media (max-width: 800px)` mean?",
                correctAnswer: "Apply styles to screens 800px wide or smaller"
            }
        },
        {
            type: 'info', // This is a special card for a fact.
            title: "Did You Know?",
            explanation: "Finns are among the world's biggest users of mobile data. Finland was one of the first countries to declare that internet access is a legal right for every citizen, ensuring everyone can connect.",
        },
        {
            title: "Condition 2: `min-width` (Mobile-First)",
            explanation: "The opposite of `max-width` is `min-width`. This means: 'Apply these styles if the browser window is this width **or larger**.' This is often used in a 'Mobile-First' design strategy, where you style for phones by default and then add styles for bigger screens.",
            codeExample: `/* This CSS will make the background light green ONLY
   if the screen width is 900 pixels or more. */

@media (min-width: 900px) {
  body {
    background-color: lightgreen;
  }
}`,
            checkpoint: {
                prompt: "What does the condition `@media (min-width: 1200px)` mean?",
                correctAnswer: "Apply styles to screens 1200px wide or larger"
            }
        },
        {
            title: "The Magic Ingredient: Viewport Meta Tag",
            explanation: "For media queries to work correctly on mobile devices, you MUST include this one line of HTML in the `<head>` of your document. It tells the phone's browser to use the device's actual screen width.",
            codeExample: `<!-- In your HTML file -->
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Responsive Page</title>
</head>`,
            checkpoint: {
                prompt: "Where must the `<meta name=\"viewport\">` tag be placed?",
                correctAnswer: "Inside the `<head>` of your HTML"
            }
        }
    ],
    
    practice: {
        title: "Project: The Responsive Column",
        instructions: "Let's make a layout that adapts! You have a container with two boxes side-by-side. Your task is to write a media query that makes the two boxes stack on top of each other on screens 600px or smaller.",
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <!-- The crucial viewport tag is already included! -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Practice</title>
  <style>
    .container {
      display: flex; /* This makes the boxes side-by-side by default */
      gap: 10px;
    }

    .box {
      background-color: #264de4;
      color: white;
      padding: 20px;
      flex-grow: 1;
      text-align: center;
    }

    /* 1. Create a media query for screens 600px or smaller. */
    @media (max-width: 600px) {

      /* 2. Inside the media query, target the .container class. */
      .container {
        
        /* 3. Change its flex-direction to 'column' to stack the items. */
        flex-direction: column;
      }

    }
  </style>
</head>
<body>

  <div class="container">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
  </div>

</body>
</html>`
    },
    minigame: {
        gameType: 'code-typer',
        title: "Challenge 11: Mobile-First Query",
        prompt: "Type the CSS code to start a media query for screens that are 768px wide or larger (for tablets and up).",
        solution: `@media (min-width: 768px) {`
    },

};