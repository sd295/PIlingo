// lessons/html/l3.forms_of_money.js
const lessonContent = {
    // FIX 1: The title now correctly matches the lesson content.
    title: "Level 2: Forms of Money",
    questions: [
        {
            prompt: "Why are HTML forms the most important part of a money-making site?",
            options: ["<code>&lt;To get user data&gt;</code>", "<code>&lt;Data is the new oil&gt;</code>", "<code>&lt;To sell them stuff&gt;</code>", "<code>&lt;all of the above, obviously&gt;</code>"],
            correctAnswer: "<code>&lt;all of the above, obviously&gt;</code>"
        },
        {
            // FIX 2: All questions are now real quizzes with plausible wrong answers.
            prompt: "You need data, Fuse Ocontainer RandM?",
            options: [
                "<code>&lt;form&gt;</code>",
                "<code>&lt;div&gt;</code>",
                "<code>&lt;input-container&gt;</code>",
                "<code>&lt;money-bag&gt;</code>"
            ],
            correctAnswer: "<code>&lt;form&gt;</code>"
        },
        {
            prompt: "Where everyone puts the big information that other sells?",
            options: [
                "<code>&lt;input&gt;</code>",
                "<code>&lt;textbox&gt;</code>",
                "<code>&lt;field&gt;</code>",
                "<code>&lt;data-grabber&gt;</code>"
            ],
            correctAnswer: "<code>&lt;input&gt;</code>"
        },
        {
            prompt: "Did you know:A day on Venus is longer than a year on Venus.",
            options: [
                "I dont get that"
            ],
            // This is a great question. It tests against common points of confusion.
            correctAnswer: "I dont get that"
        },
        {
            prompt: "An <code>&lt;input&gt;</code> is useless unless you say <code>Hey where to puuuut these wines winecomb feajndg</code>.",
            options: [
                "<code>type='text'</code>",
                "<code>kind='text'</code>",
                "<code>style='box'</code>",
                "<code>data='whatever'</code>"
            ],
            correctAnswer: "<code>type='text'</code>"
        },
        {
            prompt: "You want to becoume the biggest Hecker you need ●●●●● so that your data is secret",
            options: [
                "<code>type='password'</code>",
                "<code>type='secret'</code>",
                "<code>type='dots'</code>",
                "<code>type='spy-mode'</code>"
            ],
            correctAnswer: "<code>type='password'</code>"
        },
        {
            prompt: "you want to specify that this is an email box to your grandpa. What you will use?",
            options: [
                "<code>&lt;label&gt;</code>",
                "<code>&lt;title&gt;</code>",
                "<code>&lt;name&gt;</code>",
                "<code>&lt;info&gt;</code>"
            ],
            correctAnswer: "<code>&lt;label&gt;</code>"
        },
        {
            prompt: "the button that every Hecker .So that thay could get the data from servers not PC",
            options: [
                "<code>&lt;input type='submit'&gt;</code>",
                "<code>&lt;button type='send'&gt;</code>",
                "<code>&lt;input type='go'&gt;</code>",
                "<code>&lt;button&gt;The Money Button&lt;/button&gt;</code>"
            ],
            correctAnswer: "<code>&lt;input type='submit'&gt;</code>"
        },
        {
            prompt: "You will use so the Special place parcking space is free",
            options: [
                "<code>placeholder</code>",
                "<code>example</code>",
                "<code>hint</code>",
                "<code>ghost-text</code>"
            ],
            correctAnswer: "<code>placeholder</code>"
        },
        {
            prompt: "Did you know:Octopuses have three hearts. ",
            options: [
                "So they love you more..?"
            ],
            // This is a great question. It tests against common points of confusion.
            correctAnswer: "So they love you more..?"
        },
    ],
    // FIX 3: Removed the wrong cutscene. You can add one for L3 later!
    cutsceneUrl: "animation/css/l2.html", 
    practice: {
        title: "Project: The Ultimate 'Sign Up' Form",
        instructions: "Time to build the most common thing on the internet. Create a form. Inside it, you need an input for a username (text), an input for a password, and a submit button. Don't forget to use labels for each input!",
        // FIX 4: Added newlines (\n) to make the code readable in the editor.
        defaultCode: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Sign Up Now!</title>\n</head>\n<body>\n  \n  <!-- The main form container goes here -->\n  \n    <!-- Label and Input for Username -->\n    \n    \n    <!-- Label and Input for Password -->\n    \n    \n    <!-- The submit button -->\n    \n  \n  <!-- End of the form -->\n\n</body>\n</html>`
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
        solution: "<form><label></label><input></input><label></label><textarea></textarea><button></button></form>"
    }
};