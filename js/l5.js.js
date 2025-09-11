// lessons/l5_friendly.js
const lessonContent = {
    title: "Level 6: JS Advanced – Classes, Modules & Storage",
    questions: [
        {
            prompt: "Classes let you create blueprints for objects. Think of a Swedish car brand like Volvo: each car has similar properties (model, year) but different values. Which keyword creates a class?",
            options: ["class", "function", "object", "blueprint"],
            correctAnswer: "class",
        },
        {
            prompt: "Inside a class, you want to create a constructor to set initial values like name and population for a city. Which method name is used for that?",
            options: ["constructor", "init", "setup", "start"],
            correctAnswer: "constructor",
        },
        {
            prompt: "You want to create a new city object from the class `City`. Which syntax is correct?",
            options: ["new City('Stockholm', 975904)", "City('Stockholm', 975904)", "City.new('Stockholm', 975904)", "create City('Stockholm', 975904)"],
            correctAnswer: "new City('Stockholm', 975904)",
        },
        {
            prompt: "Modules allow you to split JS into multiple files. Which keyword exports something from a module?",
            options: ["export", "import", "require", "module"],
            correctAnswer: "export",
        },
        {
            prompt: "After exporting a function from one file, which keyword imports it into another?",
            options: ["import", "export", "include", "require"],
            correctAnswer: "import",
        },
        {
            prompt: "LocalStorage keeps data in the browser even after refresh. Which method saves a key-value pair?",
            options: ["localStorage.setItem('key', 'value')", "localStorage.save('key','value')", "sessionStorage.set('key','value')", "localStorage.add('key','value')"],
            correctAnswer: "localStorage.setItem('key', 'value')",
        },
        {
            prompt: "To read a stored item from LocalStorage, which method is correct?",
            options: ["localStorage.getItem('key')", "localStorage.read('key')", "localStorage.fetch('key')", "localStorage.get('key')"],
            correctAnswer: "localStorage.getItem('key')",
        },
        {
            prompt: "Imagine a Swedish zoo app. You create a class `Animal` and a subclass `ArcticFox` that extends it. Which keyword establishes inheritance?",
            options: ["extends", "inherits", "super", "parent"],
            correctAnswer: "extends",
        },
        {
            prompt: "You store the number of visitors to a Swedish festival in LocalStorage. Which datatype is always stored as a string?",
            options: ["All values", "Only numbers", "Only objects", "Only booleans"],
            correctAnswer: "All values",
        },
        {
            prompt: "To remove an item from LocalStorage, which method is used?",
            options: ["localStorage.removeItem('key')", "localStorage.delete('key')", "localStorage.clear('key')", "localStorage.destroy('key')"],
            correctAnswer: "localStorage.removeItem('key')",
        }
    ],
    practice: {
        title: "Project: Swedish Cities Tracker",
        instructions: `
1. Create a class called City with properties: name, population, funFact.
2. Create 3 city objects using the class.
3. Save the cities to LocalStorage.
4. Load the cities from LocalStorage on page load and display them in a list.
5. Bonus: Add a button to remove a city from LocalStorage.
`,
        defaultCode: `// cities.js
export class City {
  constructor(name, population, funFact) {
    this.name = name;
    this.population = population;
    this.funFact = funFact;
  }
}

// main.js
import { City } from './cities.js';

const cityList = document.getElementById('cityList');
const cities = [
  new City('Stockholm', 975904, 'Made of 14 islands'),
  new City('Gothenburg', 583056, 'Known for its canals'),
  new City('Malmö', 316588, 'Connected to Copenhagen via bridge')
];

// Save to LocalStorage
localStorage.setItem('cities', JSON.stringify(cities));

// Load from LocalStorage
const storedCities = JSON.parse(localStorage.getItem('cities')) || [];
storedCities.forEach(city => {
  const li = document.createElement('li');
  li.textContent = \`\${city.name} - \${city.population} people. Fun fact: \${city.funFact}\`;
  cityList.appendChild(li);
});
`
    },
    minigame: {
            gameType: 'code-typer',
            title: "Challenge 5: Good Night",
            prompt: "Make a paragraph that says 'God natt' (Good night). When clicked, change text color to purple.",
            solution: `<p id="night" onclick="this.style.color='purple'">God natt</p>`
        },
};


