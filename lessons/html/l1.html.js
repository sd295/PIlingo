// lessons/l1.html.js
const lessonContent = {
    title: "Level 1: The Big Crispy Basics",
    questions: [
        {
            prompt: "Okay, let's be real. Why are you *really* learning HTML?",
            options: [
                "To structure content for websites",
                "To make a lot of money",
                "To hack the mainframe",
                "To design cool animations"
            ],
            // The fact is wrapped in jokes. It's about structure.
            correctAnswer: "To structure content for websites"
        },
        {
            prompt: "You need the BIG CRISPY main title for your page. The most important one. Which tag do you grab?",
            options: [
                "<code>&lt;h1&gt;</code>",
                "<code>&lt;header&gt;</code>",
                "<code>&lt;strong&gt;</code>",
                "<code>&lt;title&gt;</code>"
            ],
            // This is a great question. It tests against common points of confusion.
            correctAnswer: "<code>&lt;h1&gt;</code>"
        },
        {
            prompt: "After your big crispy header, you need a normal block of text. Which tag is your bread-and-butter for a simple paragraph?",
            options: [
                "<code>&lt;p&gt;</code>",
                "<code>&lt;span&gt;</code>",
                "<code>&lt;div&gt;</code>",
                "<code>&lt;text&gt;</code>"
            ],
            // Teaches the core purpose of <p> vs. other tags.
            correctAnswer: "<code>&lt;p&gt;</code>"
        },
        {
            prompt: "You want to show a picture of your cat (or your profits). Which attribute tells the <code>&lt;img&gt;</code> tag WHERE to find the image file?",
            options: [
                "<code>src</code>",
                "<code>href</code>",
                "<code>link</code>",
                "<code>image-source</code>"
            ],
            // The classic src vs. href test. Crucial for beginners.
            correctAnswer: "<code>src</code>"
        },
        {
            prompt: "Oh no, your cat picture is broken! What attribute provides 'alternative text' for screen readers and proves to Google you're not a robot?",
            options: [
                "<code>alt</code>",
                "<code>description</code>",
                "<code>title</code>",
                "<code>backup-text</code>"
            ],
            // Teaches accessibility and a key attribute.
            correctAnswer: "<code>alt</code>"
        },
        {
            prompt: "How do you create a link that sends people to your favorite money-making website?",
            options: [
                "<code>&lt;a href='...'&gt;</code>",
                "<code>&lt;link href='...'&gt;</code>",
                "<code>&lt;a src='...'&gt;</code>",
                "<code>&lt;go to='...'&gt;</code>"
            ],
             // Tests the correct tag AND its required attribute together.
            correctAnswer: "<code>&lt;a href='...'&gt;</code>"
        },
        {
            prompt: "Your <code>&lt;h6&gt;</code> tag is so tiny it's useless for showing off. What is its REAL purpose?",
            options: [
                "To hide secret messages for spies",
                "It has no purpose, it's a prank by developers",
                "For the LEAST important subheading in a document's structure",
                "To save ink when printing the webpage"
            ],
            // Acknowledges the joke (it's tiny) but teaches the real concept of semantic structure.
            correctAnswer: "For the LEAST important subheading in a document's structure"
        },
        {
            prompt: "What is the correct, super-basic skeleton for ANY HTML page? Get this wrong and the whole thing falls apart.",
            options: [
                "<code>&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;&lt;/head&gt;&lt;body&gt;&lt;/body&gt;&lt;/html&gt;</code>",
                "<code>&lt;html&gt;&lt;body&gt;&lt;head&gt;&lt;/head&gt;&lt;/body&gt;&lt;/html&gt;</code>",
                "<code>&lt;website&gt;&lt;header&gt;&lt;/header&gt;&lt;content&gt;&lt;/content&gt;&lt;/website&gt;</code>",
                "<code>&lt;head&gt;&lt;title&gt;&lt;/title&gt;&lt;/head&gt;&lt;body&gt;&lt;p&gt;&lt;/p&gt;&lt;/body&gt;</code>"
            ],
            // A final check on the fundamental structure of an HTML document.
            correctAnswer: "<code>&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;&lt;/head&gt;&lt;body&gt;&lt;/body&gt;&lt;/html&gt;</code>"
        }
    ],
    practice: {
        title: "Project: A Page About Your Moneymaker",
        instructions: "Time to build. Create a web page about your favorite hobby (or business idea). It must have a 'big crispy' h1 heading, a paragraph describing it, and a picture. Add a link to a website about it.",
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>My Awesome Page</title>
</head>
<body>
  
  <!-- Add your h1 heading here -->

  <!-- Add your p (paragraph) here -->

  <!-- Add your img (image) here, bonus points for working alt text! -->

  <!-- Add your a (link) here -->

</body>
</html>`
    },
    minigame: {
        title: "Challenge: The Profile Card",
        prompt: "A client wants a simple profile card. They said, 'I need my picture at the top, my name as a big crispy heading, and a short bio paragraph below that.' How do you build this?",
        draggableTags: [
            "<code>&lt;h1&gt;Your Name&lt;/h1&gt;</code>",
            "<code>&lt;p&gt;About me...&lt;/p&gt;</code>",
            "<code>&lt;img src='...' alt='photo'&gt;</code>"
        ],
        solution: "<img><h1></h1><p></p>"
    }
};