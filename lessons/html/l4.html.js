// lessons/l4.forms_of_money.js
const lessonContent = {
    title: "Level 4: Forms of Money",
    questions: [
        {
            prompt: "Why do you use internet?",
            options: ["<code>&lt;To get user data&gt;</code>", "<code>&lt;Data is the new oil&gt;</code>", "<code>&lt;To sell them stuff&gt;</code>", "<code>&lt;all of the above, obviously&gt;</code>"],
            correctAnswer: "<code>&lt;all of the above, obviously&gt;</code>"
        },
        {
            prompt: "You need to pay taxes:)",
            options: [
                "<code>&lt;form&gt;</code>",
                "<code>&lt;div&gt;</code>",
                "<code>&lt;input-container&gt;</code>",
                "<code>&lt;money-bag&gt;</code>"
            ],
            correctAnswer: "<code>&lt;form&gt;</code>"
        },
        {
            prompt: "Did you know:It's impossible for most people to lick their own elbow.",
            options: [
                "Yack"
            ],
            // This is a great question. It tests against common points of confusion.
            correctAnswer: "Yack"
        },
        {
            prompt: "Where the cash is...",
            options: [
                "<code>&lt;input&gt;</code>",
                "<code>&lt;textbox&gt;</code>",
                "<code>&lt;field&gt;</code>",
                "<code>&lt;data-grabber&gt;</code>"
            ],
            correctAnswer: "<code>&lt;input&gt;</code>"
        },
        {
            prompt: "An <code>&lt;input&gt;</code> is nothing until you say what to grab like you and your boss",
            options: [
                "<code>type='text'</code>",
                "<code>kind='text'</code>",
                "<code>style='box'</code>",
                "<code>data='whatever'</code>"
            ],
            correctAnswer: "<code>type='text'</code>"
        },
        {
            prompt: "●●●●●",
            options: [
                "<code>type='password'</code>",
                "<code>type='secret'</code>",
                "<code>type='dots'</code>",
                "<code>type='spy-mode'</code>"
            ],
            correctAnswer: "<code>type='password'</code>"
        },
        {
            prompt: "A tag that is used for text:)",
            options: [
                "<code>&lt;label&gt;</code>",
                "<code>&lt;title&gt;</code>",
                "<code>&lt;name&gt;</code>",
                "<code>&lt;info&gt;</code>"
            ],
            correctAnswer: "<code>&lt;label&gt;</code>"
        },
        {
            prompt: "<<I AM your father>> you need to send this to your GF",
            options: [
                "<code>&lt;input type='submit'&gt;</code>",
                "<code>&lt;button type='send'&gt;</code>",
                "<code>&lt;input type='go'&gt;</code>",
                "<code>&lt;button&gt;The Money Button&lt;/button&gt;</code>"
            ],
            correctAnswer: "<code>&lt;input type='submit'&gt;</code>"
        },
        {
            prompt: "what 10% of the world is...",
            options: [
                "<code>placeholder</code>",
                "<code>example</code>",
                "<code>hint</code>",
                "<code>ghost-text</code>"
            ],
            correctAnswer: "<code>placeholder</code>"
        },
        {
            prompt: "Did you know:A shrimp's heart is in its head",
            options: [
                "So they have faster brains?"
            ],
            // This is a great question. It tests against common points of confusion.
            correctAnswer: "So they have faster brains?"
        },
    ],
    practice: {
        title: "Project: The Ultimate 'Sign Up' Form",
        instructions: "Time to build the most common thing on the internet. Create a form. Inside it, you need an input for a username (text), an input for a password, and a submit button. Don't forget to use labels for each input!",
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Sign Up Now!</title>
</head>
<body>
  
  <!-- The main form container goes here -->
  
    <!-- Label and Input for Username -->
    
    
    <!-- Label and Input for Password -->
    
    
    <!-- The submit button -->
    
  
  <!-- End of the form -->

</body>
</html>`
    },
    minigame: {
        title: "Challenge: The Contact Form",
        prompt: "A client needs a simple contact form. They need a box for 'Your Email' and a LARGER box for 'Your Message'. Then a big button that says 'Send'. What's the structure?",
        draggableTags: [
            "<code>&lt;form&gt;&lt;/form&gt;</code>",
            "<code>&lt;label&gt;Your Email&lt;/label&gt;</code>",
            "<code>&lt;input type='text'&gt;</code>",
            "<code>&lt;label&gt;Your Message&lt;/label&gt;</code>",
            "<code>&lt;textarea&gt;&lt;/textarea&gt;</code>",
            "<code>&lt;button type='submit'&gt;Send&lt;/button&gt;</code>"
        ],
        // The user must know to use <textarea> for a larger message box.
        solution: "<form><label></label><input></input><label></label><textarea></textarea><button></button></form>"
    }
};