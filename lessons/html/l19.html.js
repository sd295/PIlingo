// lessons/html/l15_html_norway_forms.js
const lessonContent = {
    title: "Level 15: Norway HTML Forms & Lists",
    questions: [
        {
            prompt: "Which tag is used to create a form for collecting user input?",
            options: [
                "<code>&lt;form&gt;</code>",
                "<code>&lt;input&gt;</code>",
                "<code>&lt;label&gt;</code>",
                "<code>&lt;fieldset&gt;</code>"
            ],
            correctAnswer: "<code>&lt;form&gt;</code>"
        },
        {
            prompt: "You want a user to type their name. Which tag is correct?",
            options: [
                "<code>&lt;input type='text'&gt;</code>",
                "<code>&lt;textarea&gt;</code>",
                "<code>&lt;select&gt;</code>",
                "<code>&lt;button&gt;</code>"
            ],
            correctAnswer: "<code>&lt;input type='text'&gt;</code>"
        },
        {
            prompt: "To label a field so the user knows it’s for 'City', which tag is best?",
            options: [
                "<code>&lt;label&gt;</code>",
                "<code>&lt;span&gt;</code>",
                "<code>&lt;p&gt;</code>",
                "<code>&lt;div&gt;</code>"
            ],
            correctAnswer: "<code>&lt;label&gt;</code>"
        },
        {
            prompt: "You want a dropdown to select a Norwegian city. Which tag wraps the options?",
            options: [
                "<code>&lt;select&gt;</code>",
                "<code>&lt;option&gt;</code>",
                "<code>&lt;input type='dropdown'&gt;</code>",
                "<code>&lt;list&gt;</code>"
            ],
            correctAnswer: "<code>&lt;select&gt;</code>"
        },
        {
            prompt: "You want the user to pick multiple activities with checkboxes. Which tag is used?",
            options: [
                "<code>&lt;input type='checkbox'&gt;</code>",
                "<code>&lt;input type='radio'&gt;</code>",
                "<code>&lt;select multiple&gt;</code>",
                "<code>&lt;button&gt;</code>"
            ],
            correctAnswer: "<code>&lt;input type='checkbox'&gt;</code>"
        },
        {
            prompt: "Ordered lists are used to show:",
            options: [
                "A numbered list of steps or items",
                "A bulleted list",
                "A table row",
                "An image gallery"
            ],
            correctAnswer: "A numbered list of steps or items"
        },
        {
            prompt: "Unordered lists are best for:",
            options: [
                "A simple list of activities without ranking",
                "Numbered steps",
                "Form input fields",
                "Highlighting text"
            ],
            correctAnswer: "A simple list of activities without ranking"
        },
        {
            prompt: "Final Norway bonus fact: Lofoten islands are known for dramatic peaks and fishing villages. True or false?",
            options: [
                "True, they are stunning and famous!"
            ],
            correctAnswer: "True, they are stunning and famous!"
        }
    ],
    practice: {
        title: "Project: Norway Activity Signup Form",
        instructions: `
Create an HTML page with a simple signup form for a Norway adventure:
1. Input for user name and email (use &lt;label&gt; and &lt;input&gt;).
2. A dropdown (&lt;select&gt;) to choose a city (Oslo, Bergen, Tromsø).
3. Checkboxes for activities (Fjord Tour, Northern Lights, Skiing).
4. A submit button (&lt;button&gt;).
5. Below the form, add an ordered list of steps for the adventure and an unordered list of tips.
`,
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Norway Adventure Signup</title>
</head>
<body>
  <h1>Sign up for your Norway Adventure!</h1>

  <form>
    <!-- Label and input for Name -->

    <!-- Label and input for Email -->

    <!-- Label and select for City -->

    <!-- Checkboxes for activities -->

    <!-- Submit button -->
  </form>

  <!-- Ordered list of steps -->

  <!-- Unordered list of tips -->
</body>
</html>`
    },
    minigame: {
        gameType: 'code-typer',
        title: "Challenge: Norway Checklist",
        prompt: "Create an HTML unordered list of 3 Norwegian activities and an ordered list of 3 steps to prepare for the trip.",
        solution: `<h2>Activities to Try in Norway</h2>
<ul>
  <li>Fjord Tour</li>
  <li>Northern Lights Hunting</li>
  <li>Skiing in Tromsø</li>
</ul>

<h2>Trip Preparation Steps</h2>
<ol>
  <li>Book flights and accommodations</li>
  <li>Pack warm clothing</li>
  <li>Check local weather forecast</li>
</ol>`
    }
};


