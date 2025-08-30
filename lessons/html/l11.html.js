// lessons/css/l6.capstone.norwegian.js
const lessonContent = {
    title: "Level 2: Norwegian Greetings & Basic Vocabulary Quiz",
    

    // prompts array for the quiz
    questions: [
        {
            prompt: "How do you say 'Hello' in Norwegian?",
            options: ["Hei", "Hallo", "Hola", "Bonjour"],
            correctAnswer: "Hei"
        },
        {
            prompt: "How do you say 'Good morning' in Norwegian?",
            options: ["God morgen", "Buenos días", "Bonjour", "Guten Morgen"],
            correctAnswer: "God morgen"
        },
        {
            prompt: "How do you say 'Good night' in Norwegian?",
            options: ["God natt", "Bonne nuit", "Buenas noches", "Gute Nacht"],
            correctAnswer: "God natt"
        },
        {
            prompt: "How do you say 'Thank you' in Norwegian?",
            options: ["Takk", "Merci", "Danke", "Grazie"],
            correctAnswer: "Takk"
        },
        {
            prompt: "How do you say 'Please' in Norwegian?",
            options: ["Vær så snill", "S'il vous plaît", "Bitte", "Per favore"],
            correctAnswer: "Vær så snill"
        },
        {
            prompt: "How do you say 'Yes' in Norwegian?",
            options: ["Ja", "Oui", "Si", "Ja!"],
            correctAnswer: "Ja"
        },
        {
            prompt: "How do you say 'No' in Norwegian?",
            options: ["Nei", "No", "Non", "Nein"],
            correctAnswer: "Nei"
        },
        {
            prompt: "Which colors are on the Norwegian flag?",
            options: ["Red, White, Blue", "Blue, Yellow", "Green, White, Red", "Red, Yellow, Black"],
            correctAnswer: "Red, White, Blue"
        },
        {
            prompt: "Which symbol represents Norway in a fun way?",
            options: ["🇳🇴", "🇸🇪", "🇫🇮", "🇩🇰"],
            correctAnswer: "🇳🇴"
        },
        {
            prompt: "How do you say 'Friend' in Norwegian?",
            options: ["Venn", "Amigo", "Freund", "Ami"],
            correctAnswer: "Venn"
        },
        {
            prompt: "How do you say 'Family' in Norwegian?",
            options: ["Familie", "Familia", "Famille", "Familj"],
            correctAnswer: "Familie"
        },
        {
            prompt: "How do you say 'I love you' in Norwegian?",
            options: ["Jeg elsker deg", "Te quiero", "Je t'aime", "Ich liebe dich"],
            correctAnswer: "Jeg elsker deg"
        }
    ],
    practice: null,
    minigame: {
    gameType: 'code-typer',
    title: "Challenge: Norwegian Greeting Label",
    prompt: "Type the exact HTML code to display a label saying 'Navn' (Name) in Norwegian with an input field.",
    
    solution: `<label for="navn">Navn:</label>\n<input type="text" id="navn" name="navn">`
}
    
    

    
};
