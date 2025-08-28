// lessons/l1.html.js
const lessonContent = {
    title: "Level 1: H 123456",
    questions: [
        {
            prompt: "Okay, let's be real. Why are you *really* learning HTML?",
            options: [
                "To structure content for websites",
                "To make a lot of money",
                "To hack the mainframe",
                "i dont know"
            ],
            
            correctAnswer: "I dont know"
        },
        {
            prompt: "h1 is the main header used for titles",
            options: [
                "TRUE"
            ],
            // This is a great question. It tests against common points of confusion.
            correctAnswer: "TRUE"
        },
        {
            prompt: "You need the BIG SUA economy main title for your page. The most important one. Which tag do you grab?",
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
            prompt: "Did you know:A group of flamingos is called a <code>flamboyance</code>. ",
            options: [
                "TRUE"
            ],
            // This is a great question. It tests against common points of confusion.
            correctAnswer: "TRUE"
        },
        {
            prompt: "p is used for texts like this, no ideea what I meant",
            options: [
                "TRUE"
            ],
            // This is a great question. It tests against common points of confusion.
            correctAnswer: "TRUE"
        },
        {
            prompt: "After your BIG as SUA economy header, you need a normal block of text. Which tag is your bread-and-butter for a simple paragraph?",
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
            prompt: "src is used......",
            options: [
                "TRUE"
            ],
            // This is a great question. It tests against common points of confusion.
            correctAnswer: "TRUE"
        },
        {
            prompt: "You want to show a picture of your wife to the internet. Which attribute tells the <code>&lt;img&gt;</code> tag WHERE to find the image file?",
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
            prompt: "Oh nooooooooo, your Mom credit card image is broken! What key do you use when closing that... site so your mom will not notice?",
            options: [
                "<code>alt</code>",
                "<code>description</code>",
                "<code>title</code>",
                "<code>backup-text</code>"
            ],
            // Teaches accessibility and a key attribute.
            correctAnswer: "<code>alt</code>",
            
        },
        {
            prompt: "Did you know:Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible... ",
            options: [
                "TRUE"
            ],
            // This is a great question. It tests against common points of confusion.
            correctAnswer: "TRUE"
        },
        {
            prompt: "How to redirect a person 2000 times so they forget that you own them 1M$?",
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
            prompt: "Your <code>&lt;h6&gt;</code> tag is so tiny it's useless for showing off. I think is used for insects or?",
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
            prompt: "The start of a page that everyone will CTRL-C CTRL-V",
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
        instructions: "Time to build. Create a web page about your favorite hobby (I know that you have). It must have a big  title, a paragraph describing it, and a picture. Add a link to a website about it.",
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
        prompt: "A client wants a simple profile card. They said, 'I need my picture at the top, my name as a big...,., and a short bio paragraph below that.' How do you build this?",
        draggableTags: [
            "<code>&lt;h1&gt;Your Name&lt;/h1&gt;</code>",
            "<code>&lt;p&gt;About me...&lt;/p&gt;</code>",
            "<code>&lt;img src='...' alt='photo'&gt;</code>"
        ],
        solution: "<img><h1></h1><p></p>"
    }
};