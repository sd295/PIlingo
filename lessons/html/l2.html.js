// lessons/l3.forms_of_money.js
const lessonContent = {
    title: "Level 2: More to learn",
    questions: [
        {
            prompt: "Why are HTML forms the most important part of a money-making site?",
            options: ["<code>&lt;To get user data&gt;</code>", "<code>&lt;Data is the new oil&gt;</code>", "<code>&lt;To sell them stuff&gt;</code>", "<code>&lt;all of the above, obviously&gt;</code>"],
            correctAnswer: "<code>&lt;all of the above, obviously&gt;</code>"
        },
        {
            prompt: "To start collecting data, you must wrap all your input fields in one giant, all-powerful container. This is the...",
            options: ["<code>&lt;THE FORM TAG&gt;</code>"],
            correctAnswer: "<code>&lt;THE FORM TAG&gt;</code>"
        },
        {
            prompt: "The little box where the user types their precious email/username/password is called...",
            options: ["<code>&lt;input&gt;</code>", "<code>&lt;input&gt;</code>", "<code>&lt;input&gt;</code>", "<code>&lt;input&gt;</code>"],
            correctAnswer: "<code>&lt;input&gt;</code>"
        },
        {
            prompt: "An <code>&lt;input&gt;</code> is useless unless you tell it what KIND of data to grab. For a simple name or email, you use the attribute...",
            options: ["<code>&lt;type='text'&gt;</code>", "<code>&lt;type='text'&gt;</code>", "<code>&lt;type='text'&gt;</code>", "<code>&lt;type='text'&gt;</code>"],
            correctAnswer: "<code>&lt;type='text'&gt;</code>"
        },
        {
            prompt: "To make the text turn into secret little dots ●●●●● so no one can see their genius password 'cat123', you use...",
            options: ["<code>&lt;type='password'&gt;</code>"],
            correctAnswer: "<code>&lt;type='password'&gt;</code>"
        },
        {
            prompt: "Without this tag, users won't know if a box is for their 'email' or their 'deepest darkest secret'. It's the text connected to the input box.",
            options: ["<code>&lt;label is your friend&gt;</code>", "<code>&lt;Use a label or be sued&gt;</code>", "<code>&lt;The thing that says what the box is for&gt;</code>"],
            correctAnswer: "<code>&lt;label is your friend&gt;</code>"
        },
        {
            prompt: "The final button the user smashes to send all their juicy data to you is the...",
            options: ["<code>&lt;The money button&gt;</code>", "<code>&lt;The gimme-the-data button&gt;</code>", "<code>&lt;The button that makes it all happen&gt;</code>"],
            correctAnswer: "<code>&lt;The money button&gt;</code>"
        },
        {
            prompt: "What attribute creates the faint grey example text inside an input box that disappears when you click it? /// hint: it holds the place",
            options: ["<code>&lt;placeholder&gt;</code>"],
            correctAnswer: "<code>&lt;placeholder&gt;</code>"
        }
    ],
    practice: {
        title: "Project: The 'Login' Form",
        instructions: "Time to build the most common thing on the internet. Create a form. Inside it, you need an input for a username, an input for a password, and a submit button. Don't forget to use labels!",
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Login Page</title>
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
        prompt: "A client needs a simple contact form. They need a box for 'Your Email' and a box for 'Your Message'. Then a big button that says 'Send'. What's the structure?",
        draggableTags: [
            "<code>&lt;form&gt;&lt;/form&gt;</code>",
            "<code>&lt;label&gt;Your Email&lt;/label&gt;</code>",
            "<code>&lt;input type='text'&gt;</code>",
            "<code>&lt;label&gt;Your Message&lt;/label&gt;</code>",
            "<code>&lt;textarea&gt;&lt;/textarea&gt;</code>",
            "<code>&lt;button type='submit'&gt;Send&lt;/button&gt;</code>"
        ],
        // Note: For simplicity, the solution won't check the form wrapper. It checks the core elements.
        solution: "<label></label><input></input><label></label><textarea></textarea><button></button>"
    }
};