// lessons/html/l3.forms_of_money.js
const lessonContent = {
    // FIX 1: The title now correctly matches the lesson content.
    title: "Level 5:Document Structure ",
    questions: [
        {
            prompt: "Just to make sure <!DOCTYPE html>",
            options: ["<code>&lt;to say that you use HTML&gt;</code>", "<code>&lt;the type of document&gt;</code>", "<code>&lt;To sell them stuff&gt;</code>", "<code>&lt;1 and 2&gt;</code>"],
            correctAnswer: "<code>&lt;1 and 2&gt;</code>"
        },
        {
            // FIX 2: All questions are now real quizzes with plausible wrong answers.
            prompt: "<html> tag declare",
            options: [
                "<code>&lt;war&gt;</code>",
                "<code>&lt;war&gt;</code>",
                "<code>&lt;that this text is html and not css or js&gt;</code>",
                "<code>&lt;peace&gt;</code>"
            ],
            correctAnswer: "<code>&lt;that this text is html and not css or js&gt;</code>"
        },
        {
            prompt: "<head> is used for metadata",
            options: [
                "<code>&lt;that facebook data&gt;</code>",
                "<code>&lt;metadata&gt;</code>"

            ],
            correctAnswer: "<code>&lt;metadata&gt;</code>"
        },
        {
            prompt: "Midnight Sun & Polar Night. In northern Norway, the sun doesn’t set for several weeks in summer (midnight sun) and doesn’t rise for weeks in winter (polar night).",
            options: [
                "I dont get that"
            ],
            // This is a great question. It tests against common points of confusion.
            correctAnswer: "I dont get that"
        },
        {
            prompt: "You need to put everywhere at start",
            options: [
                "<code>type='.'</code>",
                "<code>kind='-'</code>",
                "<code>style='title'</code>",
                "<code>data='whatever'</code>"
            ],
            correctAnswer: "<code>type='title'</code>"
        },
        {
            prompt: "<meta> is not META that owns Facebook",
            options: [
                "<code>type='1.a type of data'</code>",
                "<code>type='2.metadata'</code>",
                "<code>type='3.12'</code>",
                "<code>type='123'</code>"
            ],
            correctAnswer: "<code>type='123'</code>"
        },
        {
            prompt: "<link> is used for conecting what to html",
            options: [
                "<code>&lt;JS&gt;</code>",
                "<code>&lt;anything&gt;</code>",
                "<code>&lt;all;</code>",
                "<code>&lt;CSS&gt;</code>"
            ],
            correctAnswer: "<code>&lt;all&gt;</code>"
        },
        {
            prompt: "<style> is used for CSS in this or another file? Is used to make a script larger",
            options: [
                "<code>&lt;input type='this'&gt;</code>",
                "<code>&lt;button type='other'&gt;</code>"
            ],
            correctAnswer: "<code>&lt;input type='this'&gt;</code>"
        },
        {
            prompt: "head is used for?",
            options: [
                "<code>metadata</code>",
                "<code>alien</code>",
                "<code>-.-</code>",
                "<code>data</code>"
            ],
            correctAnswer: "<code>metadata</code>"
        },
        {
            prompt: "Fjords Everywhere. Norway is famous for its dramatic fjords; the Geirangerfjord and Nærøyfjord are UNESCO World Heritage Sites.",
            options: [
                "So?"
            ],
            // This is a great question. It tests against common points of confusion.
            correctAnswer: "So?"
        },
    ],
    // FIX 3: Removed the wrong cutscene. You can add one for L3 later!
    
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