// lessons/html/l2.containers_and_more.js
const lessonContent = {
    title: "Level 2: Boxes, Labels, and Secret Notes",
    questions: [
        {
            prompt: "You want a generic, boring box to hold a bunch of other elements for layout. It does nothing on its own until you style it. What's this magical, invisible box?",
            options: [
                "<code>&lt;div&gt;</code>",
                "<code>&lt;box&gt;</code>",
                "<code>&lt;container&gt;</code>",
                "<code>&lt;section&gt;</code>"
            ],
            correctAnswer: "<code>&lt;div&gt;</code>"
        },
        {
            prompt: "Now you want to style just ONE WORD in the middle of a sentence, without messing up the whole line. What's the weak, inline cousin of the <div>?",
            options: [
                "<code>&lt;p&gt;</code>",
                "<code>&lt;div&gt;</code>",
                "<code>&lt;span&gt;</code>",
                "<code>&lt;style&gt;</code>"
            ],
            correctAnswer: "<code>&lt;span&gt;</code>"
        },
        {
            prompt: "You want to give a BUNCH of different elements the same style, like they're all part of a cool kids' club. Which attribute do you use to label them all?",
            options: [
                "<code>class</code>",
                "<code>id</code>",
                "<code>group</code>",
                "<code>style-club</code>"
            ],
            correctAnswer: "<code>class</code>"
        },
        {
            prompt: "This time you have ONE special element that needs a unique name, like a lonely megalomaniac. No one else on the page can have this name. Which attribute is it?",
            options: [
                "<code>class</code>",
                "<code>id</code>",
                "<code>unique</code>",
                "<code>the-one-and-only</code>"
            ],
            correctAnswer: "<code>id</code>"
        },
        {
            prompt: "You need to leave a passive-aggressive note for your future self in your code that the browser will completely ignore. How do you write this secret message?",
            options: [
                "<code>&lt;!-- Your note here --&gt;</code>",
                "<code>// Your note here</code>",
                "<code>&lt;comment&gt;Your note here&lt;/comment&gt;</code>",
                "<code>&lt;secret&gt;Your note here&lt;/secret&gt;</code>"
            ],
            correctAnswer: "<code>&lt;!-- Your note here --&gt;</code>"
        },
        {
            prompt: "You're writing a poem and need to force a line break without starting a new paragraph. What's the 'smash the enter key' tag in HTML?",
            options: [
                "<code>&lt;br&gt;</code>",
                "<code>&lt;lb&gt;</code>",
                "<code>&lt;newline&gt;</code>",
                "<code>&lt;p&gt;</code>"
            ],
            correctAnswer: "<code>&lt;br&gt;</code>"
        },
        {
            prompt: "You want to make text BOLD. Which tag tells the browser AND screen readers that this text is IMPORTANT, not just visually bold?",
            options: [
                "<code>&lt;b&gt;</code>",
                "<code>&lt;strong&gt;</code>",
                "<code>&lt;bold&gt;</code>",
                "<code>&lt;important&gt;</code>"
            ],
            correctAnswer: "<code>&lt;strong&gt;</code>"
        },
        {
            prompt: "Let's be honest, you'll forget everything. What attribute should you add to your tags to remind you what the heck a section is for? (It's also great for targeting with CSS/JS!)",
            options: [
                "<code>class</code> or <code>id</code>",
                "<code>note</code>",
                "<code>reminder</code>",
                "<code>purpose</code>"
            ],
            correctAnswer: "<code>class</code> or <code>id</code>"
        }
    ],
    
    practice: {
        title: "Project: The 'About Me' Box",
        instructions: "Create a layout. Make a main container `div` with an `id` of 'profile-card'. Inside it, add another `div` with a `class` of 'card-header' for your name, and a final `div` with a `class` of 'card-body' for your bio.",
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>My Profile Card</title>
</head>
<body>
  
  <!-- Main container with a unique ID -->

    <!-- Header section with a reusable class -->

    <!-- Body section with a reusable class -->

  <!-- End of main container -->

</body>
</html>`
    },
    minigame: {
            gameType: 'code-typer',
            title: "Challenge 2: Say Goodbye",
            prompt: "Type HTML for a paragraph that says 'Näkemiin' (Goodbye) in italic.",
            solution: `<p style="font-style:italic;">Näkemiin</p>`
        },
};