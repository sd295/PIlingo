// lessons/html/l4.forms_of_money.js
const lessonContent = {
    title: "Level 2A",
    questions: [
        {
            prompt: "Welcome in Norway or Kongeriket Norge",
            options: ["<code>&lt;thanks&gt;</code>"],
            correctAnswer: "<code>&lt;thanks&gt;</code>"
        },
        {
            prompt: "Norwegian is a medium language but I want so after you complete the HTML course to understand a low A1 and speak a little corect english as posible:)",
            options: [
                "<code>&lt;Continue&gt;</code>"
                
            ],
            correctAnswer: "<code>&lt;Continue&gt;</code>"
        },
        {
            prompt: "<code>Hei</code> Is a way to say...",
            options: [
                "<code>&lt;Buna ziua&gt;</code>",
                "<code>&lt;Hello&gt;</code>",
                "<code>&lt;Hamei&gt;</code>",
                "<code>&lt;Good day&gt;</code>"
            ],
            correctAnswer: "<code>&lt;Hello&gt;</code>"
        },
        {
            prompt: "<code>takk</code> is used for thank you so just use _____ next time you visit Norway",
            options: [
                "<code>type='takk'</code>",
                "<code>kind='thank you'</code>",
                "<code>style='thanks'</code>",
                "<code>data='whatever'</code>"
            ],
            correctAnswer: "<code>type='takk'</code>"
        },
    ],
        
    practice: {
        title: "Blank to practice writing",
        instructions: "Time to practice",
        defaultCode: ``
    },
    minigame: {
    gameType: 'code-typer',
    title: "Challenge: Norwegian Email Input",
    prompt: "Type the exact HTML code to create a label and input for 'E-post' (Email) in Norwegian.",
    
    solution: `<label for="epost">E-post:</label>\n<input type="email" id="epost" name="epost">`
}
};