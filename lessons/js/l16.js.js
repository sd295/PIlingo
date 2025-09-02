// lessons/l13_capstone.js
const lessonContent = {
    title: "Level 13: Capstone – Web Wizardry",
    questions: [
        {
            prompt: "Which concept combines HTML (structure), CSS (style), and JS (behavior)?",
            options: ["The Holy Trinity of Web", "Only HTML", "A server", "Just styling"],
            correctAnswer: "The Holy Trinity of Web",
        },
        {
            prompt: "To make a multi-step form, what do you often use in JavaScript?",
            options: ["Show/Hide steps with JS", "Meta tags", "CSS borders", "Reload page each time"],
            correctAnswer: "Show/Hide steps with JS",
        },
        {
            prompt: "Which CSS property is used for smooth transitions?",
            options: ["transition", "hover", "font-style", "align-items"],
            correctAnswer: "transition",
        },
        {
            prompt: "Which HTML element is good for a progress bar?",
            options: ["<progress>", "<bar>", "<meter>", "<input type='range'>"],
            correctAnswer: "<progress>",
        },
        {
            prompt: "Which JS method adds or removes a CSS class?",
            options: ["element.classList.toggle()", "document.write()", "window.alert()", "element.innerHTML"],
            correctAnswer: "element.classList.toggle()",
        },
        {
            prompt: "To store quest progress, what would you use?",
            options: ["Variables in JS", "Only CSS", "Meta keywords", "Hidden <meta> tags"],
            correctAnswer: "Variables in JS",
        },
        {
            prompt: "Which CSS property creates a glowing effect?",
            options: ["box-shadow", "float", "cursor", "z-index"],
            correctAnswer: "box-shadow",
        },
        {
            prompt: "How do you check if an input is empty in JS?",
            options: ["if(input.value === '')", "if(value.isNull)", "if(document.hasNoValue)", "if(input = empty)"],
            correctAnswer: "if(input.value === '')",
        },
        {
            prompt: "True or false: CSS gradients + animation can recreate Northern Lights?",
            options: ["True", "False"],
            correctAnswer: "True",
        }
    ],
    practice: {
        title: "Project: Magical Quest Form",
        instructions: `
1. Build a multi-step form (like a quest) with HTML.
2. Use JavaScript to show/hide steps instead of reloading the page.
3. Add a progress bar (<progress>) that fills as the user advances.
4. Use CSS transitions to make the steps appear smoothly.
5. Add glowing box-shadow effects to buttons or inputs for magical style.
6. Validate: if an input is empty, alert the user before going forward.
7. Store the current step in localStorage so progress is not lost on refresh.
`,
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Quest Form</title>
  <style>
    .step { display: none; transition: opacity 0.5s; }
    .step.active { display: block; opacity: 1; }
    button { padding: 8px 12px; box-shadow: 0 0 8px cyan; }
  </style>
</head>
<body>
  <h1>Magical Quest</h1>
  <progress id="progress" value="1" max="3"></progress>
  
  <div id="step1" class="step active">
    <p>Step 1: Your Name</p>
    <input id="name">
    <button onclick="nextStep(1)">Next</button>
  </div>

  <div id="step2" class="step">
    <p>Step 2: Your Weapon</p>
    <input id="weapon">
    <button onclick="nextStep(2)">Next</button>
  </div>

  <div id="step3" class="step">
    <p>Step 3: Your Quest</p>
    <input id="quest">
    <button onclick="finishQuest()">Finish</button>
  </div>

  <script>
    function nextStep(step){
      const input = document.querySelector('#step' + step + ' input');
      if(!input.value){
        alert('Please fill this before continuing!');
        return;
      }
      document.getElementById('step' + step).classList.remove('active');
      document.getElementById('step' + (step+1)).classList.add('active');
      document.getElementById('progress').value = step+1;
      localStorage.setItem('questStep', step+1);
    }
    function finishQuest(){
      alert('Quest complete! 🎉');
      localStorage.removeItem('questStep');
    }
  </script>
</body>
</html>`
    },
    minigame: {
        gameType: 'code-typer',
        title: "Challenge 13: Toggle Magic",
        prompt: "Make a button. When clicked, it toggles the class 'magic' on the <body>.",
        solution: `<button onclick="document.body.classList.toggle('magic')">Toggle Magic</button>`
    }
};
