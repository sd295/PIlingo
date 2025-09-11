// lessons/l1_friendly.js
const lessonContent = {
    title: "Level 1: JavaScript Basics (Friendly)",
    questions: [
        {
            // Explanation first
            prompt: "JavaScript has different ways to store information. An array is like a shopping list where order matters. For example, imagine storing 5 famous lakes in Sweden. Each lake has its place in the list.",
            options: ["Array", "Object", "Set", "Map"],
            correctAnswer: "Array",
        },
        {
            prompt: "When you write `let x = 10;` you can change the value later. If you used `const x = 10;` instead, you cannot reassign it. Which one lets you reassign?",
            options: ["let", "const", "var", "fixed"],
            correctAnswer: "let",
        },
        {
            prompt: "In Sweden, Stockholm is made of 14 islands. If you wanted to store each island's name and its population as pairs, which JS structure makes sense?",
            options: ["Array", "Object", "Set", "Map"],
            correctAnswer: "Object",
        },
        {
            prompt: "Sometimes JavaScript tries to be too friendly. `0.1 + 0.2` does not exactly equal `0.3` because of how computers handle decimal numbers. What does `console.log(0.1 + 0.2 === 0.3)` print?",
            options: ["true", "false", "NaN", "undefined"],
            correctAnswer: "false",
        },
        {
            prompt: "You have `let x = 10; let y = '10';`. If you compare `x == y`, JavaScript will convert the types and tell you if they are equal. What will it return?",
            options: ["true", "false", "error", "undefined"],
            correctAnswer: "true",
        },
        {
            prompt: "If you want to check if two values are equal **and** of the same type (no sneaky type conversion), which operator do you use?",
            options: ["==", "=", "===", "!="],
            correctAnswer: "===",
        },
        {
            prompt: "Sweden is famous for IKEA. Imagine storing all IKEA product names without duplicates. Which JS structure ensures uniqueness?",
            options: ["Array", "Object", "Set", "Map"],
            correctAnswer: "Set",
        },
        {
            prompt: "You want to repeat an action for every value in a list, like logging each Swedish city’s name. Which loop works best for arrays?",
            options: ["for...of", "for...in", "while", "do...while"],
            correctAnswer: "for...of",
        },
        {
            prompt: "You have a JavaScript object and want to turn it into a string you can save or send over the internet. Which method do you use?",
            options: ["JSON.stringify()", "JSON.parse()", "Object.toString()", "Object.stringify()"],
            correctAnswer: "JSON.stringify()",
        },
        {
            prompt: "Sweden has over 95,000 lakes. If you want a simple ordered list of your top 5 favorite lakes, which JS structure would you pick?",
            options: ["Array", "Object", "Set", "Map"],
            correctAnswer: "Array",
        }
    ],
    practice: {
        title: "Project: Swedish Cities Logger",
        instructions: "Think about 3 Swedish cities, their population, and a fun fact. Store them in a JS structure (array of objects) and log each city's info to the console.",
        defaultCode: `// Example:
const cities = [
  { name: 'Stockholm', population: 975904, fact: 'Made of 14 islands' },
  { name: 'Gothenburg', population: 583056, fact: 'Known for its canals' },
  { name: 'Malmö', population: 316588, fact: 'Connected to Copenhagen via bridge' }
];

cities.forEach(city => {
  console.log(\`\${city.name}: \${city.population} people. Fun fact: \${city.fact}\`);
});`
    },
    minigame: {
            gameType: 'code-typer',
            title: "Challenge 1: Hello",
            prompt: "Make a button that says 'Hej' (Hello). When clicked, it shows an alert with 'Hello in English!'.",
            solution: `<button onclick="alert('Hello in English!')">Hej</button>`
        },
};


