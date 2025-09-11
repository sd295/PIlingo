// lessons/html/l13.norway_wizard.js
const lessonContent = {
    title: "Level 13: Simple Js that will improve your HTML",
    questions: [
        {
            prompt: "To create multiple steps for your Norway travel wizard, which HTML structure is easiest to toggle with JS?",
            options: [
                "<code>&lt;div class='step'&gt;&lt;/div&gt;</code>",
                "<code>&lt;section&gt;&lt;/section&gt;</code>",
                "<code>&lt;form step&gt;&lt;/form&gt;</code>",
                "<code>&lt;fieldset&gt;&lt;/fieldset&gt;</code>"
            ],
            correctAnswer: "<code>&lt;div class='step'&gt;&lt;/div&gt;</code>"
        },
        {
            prompt: "You want to show the next step (like from Oslo to fjord tour) only if the user picks a valid option. Which JS method works?",
            options: [
                "<code>element.style.display = 'block'</code>",
                "<code>element.showNext()</code>",
                "<code>form.nextStep()</code>",
                "<code>element.toggleStep()</code>"
            ],
            correctAnswer: "<code>element.style.display = 'block'</code>"
        },
        {
            prompt: "To save the user’s choices for the trip so they return later, which API is best?",
            options: [
                "LocalStorage",
                "Cookies",
                "SessionStorage",
                "Database only"
            ],
            correctAnswer: "LocalStorage"
        },
        {
            prompt: "You want to dynamically add an extra activity if the user selects “Northern Lights Night”. Which JS method is best?",
            options: [
                "<code>appendChild()</code>",
                "<code>removeChild()</code>",
                "<code>insertAdjacentHTML()</code>",
                "<code>innerHTML = ''</code>"
            ],
            correctAnswer: "<code>appendChild()</code>"
        },
        {
            prompt: "Real-time validation: Ensure the user enters a valid email for the fjord cruise. Which event is most suitable?",
            options: [
                "<code>oninput</code>",
                "<code>onclick</code>",
                "<code>onblur</code>",
                "<code>onsubmit</code>"
            ],
            correctAnswer: "<code>oninput</code>"
        },
        {
            prompt: "When the user hovers over the Lofoten Islands step, you want to highlight it. Which event works?",
            options: [
                "<code>onmouseover</code>",
                "<code>onclick</code>",
                "<code>onfocus</code>",
                "<code>onchange</code>"
            ],
            correctAnswer: "<code>onmouseover</code>"
        },
        {
            prompt: "After completing all steps, you want a summary page showing choices and total cost. Which JS concept is helpful?",
            options: [
                "Template literals and DOM manipulation",
                "console.log() only",
                "alert() only",
                "CSS pseudo-elements"
            ],
            correctAnswer: "Template literals and DOM manipulation"
        },
        {
            prompt: "Bonus Norway fact: Which feature is best to show a glowing highlight of Northern Lights in JS?",
            options: [
                "<code>element.style.boxShadow</code>",
                "<code>element.style.color</code>",
                "<code>element.style.fontWeight</code>",
                "<code>element.style.borderRadius</code>"
            ],
            correctAnswer: "<code>element.style.boxShadow</code>"
        },
        {
            prompt: "To navigate between steps with Next and Back buttons without refreshing, which event is crucial?",
            options: [
                "<code>onclick</code>",
                "<code>onchange</code>",
                "<code>onload</code>",
                "<code>oninput</code>"
            ],
            correctAnswer: "<code>onclick</code>"
        },
        {
            prompt: "Final Norway lore bonus: Midnight sun occurs in summer above the Arctic Circle. True or false?",
            options: [
                "True, summer nights are bright!"
            ],
            correctAnswer: "True, summer nights are bright!"
        }
    ],
    practice: {
        title: "Project: Norway Travel Wizard",
        instructions: `
Create a multi-step Norway travel wizard form:
1. Step 1: Choose your starting city (Oslo, Bergen, Tromsø).
2. Step 2: Select activities (Fjord Tour, Northern Lights, Skiing).
3. Step 3: Optional extra fields appear dynamically (e.g., add more companions if checkbox is selected).
4. Step 4: Review choices and total cost.
5. Save user choices in LocalStorage so they can return later.
6. Highlight the step when hovering over it.
7. Navigation buttons: Next and Back to move between steps without page reload.
`,
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Norway Travel Wizard</title>
  <style>
    .step { display: none; }
    .step.active { display: block; }
    button { margin: 5px; }
  </style>
</head>
<body>
  <h1>Norway Travel Wizard</h1>
  <form id="norwayWizard">
    <div class="step active" id="step1">
      <label>Starting City:</label>
      <select id="citySelect">
        <option value="">Choose city</option>
        <option value="Oslo">Oslo</option>
        <option value="Bergen">Bergen</option>
        <option value="Tromso">Tromsø</option>
      </select>
      <br><button type="button" id="next1">Next</button>
    </div>

    <div class="step" id="step2">
      <label>Activities:</label><br>
      <input type="checkbox" id="fjord">Fjord Tour<br>
      <input type="checkbox" id="lights">Northern Lights<br>
      <input type="checkbox" id="ski">Skiing<br>
      <br><button type="button" id="back2">Back</button>
      <button type="button" id="next2">Next</button>
    </div>

    <div class="step" id="step3">
      <label>Extra Companions (optional):</label>
      <input type="number" id="companions" min="0"><br>
      <button type="button" id="back3">Back</button>
      <button type="button" id="next3">Next</button>
    </div>

    <div class="step" id="step4">
      <h2>Summary</h2>
      <div id="summary"></div>
      <button type="button" id="back4">Back</button>
      <button type="submit">Finish</button>
    </div>
  </form>

  <script>
    const steps = document.querySelectorAll('.step');
    let currentStep = 0;

    function showStep(index){
      steps.forEach((s,i)=> s.classList.toggle('active', i===index));
    }

    document.getElementById('next1').onclick = () => { 
      if(document.getElementById('citySelect').value !== "") currentStep++; 
      showStep(currentStep);
    };
    document.getElementById('next2').onclick = () => { currentStep++; showStep(currentStep); };
    document.getElementById('next3').onclick = () => { currentStep++; showStep(currentStep); };

    document.getElementById('back2').onclick = () => { currentStep--; showStep(currentStep); };
    document.getElementById('back3').onclick = () => { currentStep--; showStep(currentStep); };
    document.getElementById('back4').onclick = () => { currentStep--; showStep(currentStep); };

    const form = document.getElementById('norwayWizard');
    form.onsubmit = (e) => {
      e.preventDefault();
      const city = document.getElementById('citySelect').value;
      const activities = [];
      if(document.getElementById('fjord').checked) activities.push('Fjord Tour');
      if(document.getElementById('lights').checked) activities.push('Northern Lights');
      if(document.getElementById('ski').checked) activities.push('Skiing');
      const companions = document.getElementById('companions').value || 0;
      const summary = \`City: \${city}<br>Activities: \${activities.join(', ')}<br>Extra companions: \${companions}\`;
      document.getElementById('summary').innerHTML = summary;
      localStorage.setItem('norwayWizardData', JSON.stringify({city, activities, companions}));
      alert('Your Norway adventure saved!');
    };
  </script>
</body>
</html>`
    },
   minigame: {
    gameType: 'code-typer',
    title: "Challenge: Norway Wizard Expansion",
    prompt: `
1. Enhance the wizard with conditional steps: if "Northern Lights" is selected, show extra input for camera rental.
2. Save all user choices in LocalStorage.
3. Add hover highlights for each step.
4. Allow navigation Next/Back without reloading.
5. Bonus: show a total cost estimate based on activities and companions.
`,
    solution: `<form id="norwayWizard">
  <div class="step active" id="step1">
    <label>Starting City:</label>
    <select id="citySelect">
      <option value="">Choose city</option>
      <option value="Oslo">Oslo</option>
      <option value="Bergen">Bergen</option>
      <option value="Tromso">Tromsø</option>
    </select>
    <br><button type="button" id="next1">Next</button>
  </div>
  <div class="step" id="step2">
    <label>Activities:</label><br>
    <input type="checkbox" id="fjord">Fjord Tour<br>
    <input type="checkbox" id="lights">Northern Lights<br>
    <input type="checkbox" id="ski">Skiing<br>
    <br><button type="button" id="back2">Back</button>
    <button type="button" id="next2">Next</button>
  </div>
  <div class="step" id="step3">
    <label>Extra Companions (optional):</label>
    <input type="number" id="companions" min="0"><br>
    <div id="extraLights" style="display:none;">
      <label>Camera Rental for Northern Lights:</label>
      <input type="checkbox" id="cameraRental">
    </div>
    <button type="button" id="back3">Back</button>
    <button type="button" id="next3">Next</button>
  </div>
  <div class="step" id="step4">
    <h2>Summary</h2>
    <div id="summary"></div>
    <button type="button" id="back4">Back</button>
    <button type="submit">Finish</button>
  </div>
</form>

<script>
  const steps = document.querySelectorAll('.step');
  let currentStep = 0;

  function showStep(index){
    steps.forEach((s,i)=> s.classList.toggle('active', i===index));
  }

  const citySelect = document.getElementById('citySelect');
  document.getElementById('next1').onclick = () => { 
    if(citySelect.value !== "") currentStep++; 
    showStep(currentStep);
  };
  document.getElementById('next2').onclick = () => { 
    if(document.getElementById('lights').checked){
      document.getElementById('extraLights').style.display = 'block';
    } else {
      document.getElementById('extraLights').style.display = 'none';
    }
    currentStep++; 
    showStep(currentStep); 
  };
  document.getElementById('next3').onclick = () => { currentStep++; showStep(currentStep); };
  document.getElementById('back2').onclick = () => { currentStep--; showStep(currentStep); };
  document.getElementById('back3').onclick = () => { currentStep--; showStep(currentStep); };
  document.getElementById('back4').onclick = () => { currentStep--; showStep(currentStep); };

  const form = document.getElementById('norwayWizard');
  form.onsubmit = (e) => {
    e.preventDefault();
    const city = citySelect.value;
    const activities = [];
    if(document.getElementById('fjord').checked) activities.push('Fjord Tour');
    if(document.getElementById('lights').checked) activities.push('Northern Lights');
    if(document.getElementById('ski').checked) activities.push('Skiing');
    const companions = document.getElementById('companions').value || 0;
    const camera = document.getElementById('cameraRental').checked ? 'Yes' : 'No';
    const summary = \`City: \${city}<br>Activities: \${activities.join(', ')}<br>Extra companions: \${companions}<br>Camera Rental: \${camera}\`;
    document.getElementById('summary').innerHTML = summary;
    localStorage.setItem('norwayWizardData', JSON.stringify({city, activities, companions, camera}));
    alert('Your Norway adventure saved!');
  };
</script>`
},
};