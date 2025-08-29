// lessons/html/l3.forms_of_money.js
const lessonContent = {
    // FIX 1: The title now correctly matches the lesson content.
    title: "Level 5:Display",
    questions: [
        {
            prompt: "Display is used for a lot",
            options: ["<code>&lt;to display stuff?&gt;</code>"],
            correctAnswer: "<code>&lt;to display stuffgt;</code>"
        },
        {
            // FIX 2: All questions are now real quizzes with plausible wrong answers.
            prompt: "Yes from blocks to flex to none",
            options: [
                "<code>&lt;ok&gt;</code>"
            ],
            correctAnswer: "<code>&lt;ok&gt;</code>"
        },
        {
            prompt: "for what is display used",
            options: [
                "<code>&lt;to display only text&gt;</code>",
                "<code>&lt;for a lot like blocks,flex and more&gt;</code>"

            ],
            correctAnswer: "<code>&lt;for a lot like blocks,flex and more&gt;</code>"
        },
        {
            prompt: "Land of a Thousand Lakes. Finland actually has about 188,000 lakes, giving it one of the most lake-dense countries in the world.",
            options: [
                "I dont get that"
            ],
            // This is a great question. It tests against common points of confusion.
            correctAnswer: "I dont get that"
        },
        
    ],
    // FIX 3: Removed the wrong cutscene. You can add one for L3 later!
    
    practice: {
    title: "Project: The Perfect Grocery List",
    instructions: "Every good trip to the store starts with a list. Your task is to create a grocery list using HTML. Start with a heading that says 'My Groceries', and then create an unordered list with at least three items you need to buy.",
    // Added newlines (\n) to make the code readable in the editor.
    defaultCode: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Grocery List</title>\n</head>\n<body>\n\n  <!-- Add your heading here -->\n\n\n  <!-- Create the unordered list tag here -->\n\n    <!-- Add your first list item -->\n\n    <!-- Add your second list item -->\n\n    <!-- Add your third list item -->\n\n\n  <!-- End the unordered list tag -->\n\n</body>\n</html>`
    },
    minigame: {
    title: "Challenge: The Recipe Steps",
    prompt: "You're writing a recipe blog! You need to list the first three steps to make a sandwich. The list needs a title, 'Instructions', and the steps must be in the correct order. How do you build it?",
    draggableTags: [
        "<code>&lt;h2&gt;Instructions&lt;/h2&gt;</code>",
        "<code>&lt;ol&gt;&lt;/ol&gt;</code>",
        "<code>&lt;li&gt;Get two slices of bread&lt;/li&gt;</code>",
        "<code>&lt;li&gt;Spread mayonnaise on both&lt;/li&gt;</code>",
        "<code>&lt;li&gt;Add cheese and ham&lt;/li&gt;</code>"
    ],
    solution: "<h2></h2><ol><li></li><li></li><li></li></ol>"
}
};