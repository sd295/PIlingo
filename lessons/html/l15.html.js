// lessons/html/l12.interactive_wizard.js
const lessonContent = {
    title: "Level 12: Interactive Wizard Forms with JS",
    questions: [
        {
            prompt: "Which tag lets you add JavaScript to your HTML?",
            options: [
                "<code>&lt;script&gt;</code>",
                "<code>&lt;style&gt;</code>",
                "<code>&lt;form&gt;</code>",
                "<code>&lt;head&gt;</code>"
            ],
            correctAnswer: "<code>&lt;script&gt;</code>"
        },
        {
            prompt: "To get the value of an input with id='magicName', which JS method?",
            options: [
                "<code>document.getElementById('magicName').value</code>",
                "<code>document.querySelector('magicName')</code>",
                "<code>getValue('magicName')</code>",
                "<code>magicName.value</code>"
            ],
            correctAnswer: "<code>document.getElementById('magicName').value</code>"
        },
        {
            prompt: "You want to show a message when the user clicks Submit. Which JS event?",
            options: [
                "<code>onclick</code>",
                "<code>onhover</code>",
                "<code>onchange</code>",
                "<code>onload</code>"
            ],
            correctAnswer: "<code>onclick</code>"
        },
        {
            prompt: "To prevent the form from actually submitting (so we can show a magical alert), which method?",
            options: [
                "<code>event.preventDefault()</code>",
                "<code>stopForm()</code>",
                "<code>halt()</code>",
                "<code>return false;</code>"
            ],
            correctAnswer: "<code>event.preventDefault()</code>"
        },
        {
            prompt: "You want to change the background of the form when hovering over a button. Which event?",
            options: [
                "<code>onmouseover</code>",
                "<code>onclick</code>",
                "<code>onfocus</code>",
                "<code>onchange</code>"
            ],
            correctAnswer: "<code>onmouseover</code>"
        },
        {
            prompt: "To dynamically add a new input field for extra spells, which JS method?",
            options: [
                "<code>appendChild()</code>",
                "<code>removeChild()</code>",
                "<code>getElementById()</code>",
                "<code>innerHTML</code>"
            ],
            correctAnswer: "<code>appendChild()</code>"
        },
        {
            prompt: "You want real-time validation (like alert if Name is empty). Which event?",
            options: [
                "<code>oninput</code>",
                "<code>onclick</code>",
                "<code>onsubmit</code>",
                "<code>onhover</code>"
            ],
            correctAnswer: "<code>oninput</code>"
        },
        {
            prompt: "Magic alert: When the form is successfully submitted, show a glowing message. Which property changes text color in JS?",
            options: [
                "<code>element.style.color = 'gold'</code>",
                "<code>element.color = 'gold'</code>",
                "<code>element.textColor = 'gold'</code>",
                "<code>element.fontColor = 'gold'</code>"
            ],
            correctAnswer: "<code>element.style.color = 'gold'</code>"
        },
        {
            prompt: "Interactive bonus: Wizards love fun animations. To fade a div in and out, which CSS property combined with JS?",
            options: [
                "<code>opacity</code>",
                "<code>display</code>",
                "<code>visibility</code>",
                "<code>color</code>"
            ],
            correctAnswer: "<code>opacity</code>"
        },
        {
            prompt: "Final lore bonus: Northern lights inspire magical transitions. True or false?",
            options: [
                "True, inspiration is everywhere!"
            ],
            correctAnswer: "True, inspiration is everywhere!"
        }
    ],
    practice: {
        title: "Project: Interactive Wizard Application",
        instructions: `Enhance your Level 11 styled Wizard Form with JavaScript:
- When Submit is clicked, prevent default submission.
- Show a magical alert with the user's name.
- Validate that Name and Email are not empty; highlight if missing.
- Change button color on hover.
- Dynamically add an extra input if a checkbox "Extra Spells" is checked.`,
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Interactive Wizard Form</title>
  <style>
    /* Add your CSS here (from Level 11) */
  </style>
</head>
<body>
  <form id="wizardForm">
    <!-- Label and Input for Name -->
    <!-- Label and Input for Email -->
    <!-- Checkbox for Extra Spells -->
    <!-- Submit Button -->
  </form>

  <script>
    // Add your JS interactivity here
    const form = document.getElementById('wizardForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Show alert or validate
    });
  </script>
</body>
</html>`
    },
    minigame: {
        title: "Mini-Quest: Animate the Magic Scroll",
        prompt: "Drag and drop these JS actions to make the wizard form interactive:",
        draggableTags: [
            "<code>event.preventDefault()</code>",
            "<code>alert('Welcome, Wizard!')</code>",
            "<code>element.style.color = 'gold'</code>",
            "<code>oninput</code>",
            "<code>onmouseover</code>",
            "<code>appendChild()</code>",
            "<code>validate empty fields</code>"
        ],
        solution: `form.addEventListener('submit', function(event){
  event.preventDefault();
  if(name is empty || email is empty) { highlight fields }
  else { alert('Welcome, Wizard!'); }
});
button.onmouseover = function(){ button.style.color = 'gold'; }`
    }
};
