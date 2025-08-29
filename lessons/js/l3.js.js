// lessons/l3_friendly.js
const lessonContent = {
    title: "Level 3: JS DOM & Events",
    questions: [
        {
            prompt: "The DOM (Document Object Model) is like a map of your web page. Each element is a node you can interact with using JS. Which method gets an element by its ID?",
            options: ["document.getElementById()", "document.querySelectorAll()", "document.getElementsByClassName()", "document.find()"],
            correctAnswer: "document.getElementById()",
        },
        {
            prompt: "Sweden has a famous amusement park called Gröna Lund. Imagine you want to change the park’s name in a heading when a button is clicked. Which event should you listen for?",
            options: ["click", "hover", "keydown", "load"],
            correctAnswer: "click",
        },
        {
            prompt: "You want to change the text inside a paragraph dynamically. Which property lets you set the content?",
            options: ["innerText", "textContent", "innerHTML", "All of the above"],
            correctAnswer: "All of the above",
        },
        {
            prompt: "If you want to attach the same behavior to multiple buttons for different cities, which method is the cleanest modern way?",
            options: ["querySelectorAll + forEach + addEventListener", "getElementById + onclick", "document.write()", "alert()"],
            correctAnswer: "querySelectorAll + forEach + addEventListener",
        },
        {
            prompt: "Sweden has over 95,000 lakes. You create a list of them in a `<ul>` and want to highlight each lake name when clicked. Which JS method lets you respond to each click?",
            options: ["addEventListener('click', ...)", "onclick", "onhover", "onchange"],
            correctAnswer: "addEventListener('click', ...)",
        },
        {
            prompt: "You want a user to enter their favorite Swedish city in an input box and show it below when they press a button. Which property of the input element gives the typed value?",
            options: ["value", "textContent", "innerText", "innerHTML"],
            correctAnswer: "value",
        },
        {
            prompt: "If you want to create a new list item `<li>` for a city dynamically, which method do you use?",
            options: ["document.createElement('li')", "document.new('li')", "document.add('li')", "document.make('li')"],
            correctAnswer: "document.createElement('li')",
        },
        {
            prompt: "After creating a new element, how do you add it to the page inside a `<ul>` with id='lakes'?",
            options: ["appendChild()", "addChild()", "insertElement()", "attachChild()"],
            correctAnswer: "appendChild()",
        },
        {
            prompt: "Sometimes you want to remove an element when a user clicks a delete button. Which method removes it from the DOM?",
            options: ["element.remove()", "element.delete()", "element.destroy()", "element.removeChild()"],
            correctAnswer: "element.remove()",
        },
        {
            prompt: "You want to change the background color of a Swedish flag div when clicked. Which property is the simplest to modify style?",
            options: ["element.style.backgroundColor", "element.style.bg", "element.color", "element.style.color"],
            correctAnswer: "element.style.backgroundColor",
        }
    ],
    practice: {
        title: "Project: Interactive Swedish Cities List",
        instructions: `
Create a small webpage with:
- An input box for a user to type a Swedish city.
- A button to add the city to a list (`<ul>`).
- When the user clicks on a city in the list, change its color to highlight it.
- Bonus: Add a button to remove a city from the list.
`,
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Swedish Cities</title>
  <style>
    li { cursor: pointer; }
    li.highlight { color: blue; }
  </style>
</head>
<body>
  <h1>Swedish Cities</h1>
  <input type="text" id="cityInput" placeholder="Type a city">
  <button id="addBtn">Add City</button>
  <ul id="cityList"></ul>

  <script>
    const input = document.getElementById('cityInput');
    const addBtn = document.getElementById('addBtn');
    const cityList = document.getElementById('cityList');

    addBtn.addEventListener('click', () => {
      const city = input.value.trim();
      if(city) {
        const li = document.createElement('li');
        li.textContent = city;
        li.addEventListener('click', () => li.classList.toggle('highlight'));
        cityList.appendChild(li);
        input.value = '';
      }
    });
  </script>
</body>
</html>`
    },
    minigame: {
        title: "Challenge: Lake List Interactive",
        prompt: `
Create an interactive `<ul>` list of 5 Swedish lakes.
- Add a button that highlights all lakes starting with 'S'.
- Clicking a lake toggles its color.
- Clicking another button removes all lakes starting with 'M'.
`,
        draggableTags: [
            "document.createElement('li')",
            "addEventListener('click', ...)",
            "appendChild()",
            "element.classList.toggle('highlight')",
            "element.remove()"
        ],
        solution: `// Example solution:
const lakes = ['Siljan','Stora Le','Vänern','Vättern','Mälaren'];
const ul = document.getElementById('lakeList');
lakes.forEach(name => {
  const li = document.createElement('li');
  li.textContent = name;
  li.addEventListener('click', () => li.classList.toggle('highlight'));
  ul.appendChild(li);
});
// Add buttons with click events to highlight or remove as described`
    }
};


