// lessons/html/l10.master_forms.js
const lessonContent = {
    title: "Level 10: Mastering HTML Forms & Interactive Pages",
    questions: [
        {
            prompt: "You are the Architect of the Web Castle. Which element defines the page's title that appears in the browser tab?",
            options: [
                "<code>&lt;title&gt;</code>",
                "<code>&lt;h1&gt;</code>",
                "<code>&lt;header&gt;</code>",
                "<code>&lt;head&gt;</code>"
            ],
            correctAnswer: "<code>&lt;title&gt;</code>"
        },
        {
            prompt: "You want a form input where users choose one option among many magical creatures. Which input type?",
            options: [
                "<code>checkbox</code>",
                "<code>radio</code>",
                "<code>text</code>",
                "<code>button</code>"
            ],
            correctAnswer: "<code>radio</code>"
        },
        {
            prompt: "To let users select multiple potions at once, which input type is correct?",
            options: [
                "<code>checkbox</code>",
                "<code>radio</code>",
                "<code>file</code>",
                "<code>text</code>"
            ],
            correctAnswer: "<code>checkbox</code>"
        },
        {
            prompt: "You want a dropdown to choose the level of wizardry. Which tag?",
            options: [
                "<code>&lt;select&gt;</code>",
                "<code>&lt;option&gt;</code>",
                "<code>&lt;input type='dropdown'&gt;</code>",
                "<code>&lt;menu&gt;</code>"
            ],
            correctAnswer: "<code>&lt;select&gt;</code>"
        },
        {
            prompt: "How do you associate a label with an input for better accessibility?",
            options: [
                "<code>use for='input_id'</code>",
                "<code>use name='input_id'</code>",
                "<code>use id='label_id'</code>",
                "<code>use type='label'</code>"
            ],
            correctAnswer: "<code>use for='input_id'</code>"
        },
        {
            prompt: "A wizard wants to upload a spell scroll file. Which input type?",
            options: [
                "<code>file</code>",
                "<code>text</code>",
                "<code>password</code>",
                "<code>submit</code>"
            ],
            correctAnswer: "<code>file</code>"
        },
        {
            prompt: "To make text areas larger for epic quests, which tag?",
            options: [
                "<code>&lt;textarea&gt;</code>",
                "<code>&lt;input type='text'&gt;</code>",
                "<code>&lt;div&gt;</code>",
                "<code>&lt;p&gt;</code>"
            ],
            correctAnswer: "<code>&lt;textarea&gt;</code>"
        },
        {
            prompt: "If a form needs to be sent to a wizard server, which form attribute is crucial?",
            options: [
                "<code>action</code>",
                "<code>method</code>",
                "<code>type</code>",
                "<code>target</code>"
            ],
            correctAnswer: "<code>action</code>"
        },
        {
            prompt: "Forms can include checkboxes, radios, selects, files, text, and buttons. Why?",
            options: [
                "To let users send structured and interactive data"
            ],
            correctAnswer: "To let users send structured and interactive data"
        },
        {
            prompt: "Time for a geography bonus: Northern lights can inspire color-themed forms. True or false?",
            options: [
                "True, inspiration is everywhere!"
            ],
            correctAnswer: "True, inspiration is everywhere!"
        },
    ],
    practice: {
        title: "Project: Grand Wizard Application Form",
        instructions: "Build a grand form for recruiting new wizards. Include: Name (text), Age (number), Favorite Creature (radio), Magical Powers (checkboxes), Upload Spell Scroll (file), Comments (textarea), and a Submit button. Use labels properly!",
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Wizard Recruitment Form</title>
</head>
<body>
  <!-- Wizard Recruitment Form -->
  
  <!-- Label and Input for Name -->
  
  <!-- Label and Input for Age -->
  
  <!-- Radio buttons for Favorite Creature -->
  
  <!-- Checkboxes for Magical Powers -->
  
  <!-- File upload for Spell Scroll -->
  
  <!-- Textarea for Comments -->
  
  <!-- Submit Button -->
  
</body>
</html>`
    },
    minigame: {
        title: "Mini-Quest: The Interactive Wizard Scroll",
        prompt: "Arrange the following tags correctly to make a fully functional wizard form:",
        draggableTags: [
            "<code>&lt;form&gt;&lt;/form&gt;</code>",
            "<code>&lt;label&gt;Name&lt;/label&gt;</code>",
            "<code>&lt;input type='text'&gt;</code>",
            "<code>&lt;label&gt;Favorite Creature&lt;/label&gt;</code>",
            "<code>&lt;input type='radio'&gt;</code>",
            "<code>&lt;label&gt;Powers&lt;/label&gt;</code>",
            "<code>&lt;input type='checkbox'&gt;</code>",
            "<code>&lt;label&gt;Spell Scroll&lt;/label&gt;</code>",
            "<code>&lt;input type='file'&gt;</code>",
            "<code>&lt;label&gt;Comments&lt;/label&gt;</code>",
            "<code>&lt;textarea&gt;&lt;/textarea&gt;</code>",
            "<code>&lt;button type='submit'&gt;Send Magic&lt;/button&gt;</code>"
        ],
        solution: "<form><label></label><input></input><label></label><input></input><label></label><input></input><label></label><input></input><label></label><textarea></textarea><button></button></form>"
    }
};
