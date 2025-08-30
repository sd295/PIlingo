// lessons/l2_friendly.js
const lessonContent = {
    title: "Level 2: JS Functions & Loops",
    questions: [
        {
            prompt: "Functions let you package code into reusable blocks. Think of a function like a mini Swedish smörgåsbord: you pick what you want and serve it anytime. Which keyword declares a function?",
            options: ["func", "function", "let", "block"],
            correctAnswer: "function",
        },
        {
            prompt: "You want to create a function to greet a city. Example: greetCity('Stockholm') should print 'Welcome to Stockholm!'. How do you define a parameter for the city?",
            options: ["greetCity(city)", "greetCity<-city->", "greetCity{city}", "greetCity[city]"],
            correctAnswer: "greetCity(city)",
        },
        {
            prompt: "Sweden has a tradition called 'fika'—a coffee break. Imagine you want to log 'Fika time!' 5 times. Which loop is best to run the code a known number of times?",
            options: ["for loop", "while loop", "do...while loop", "for...in loop"],
            correctAnswer: "for loop",
        },
        {
            prompt: "You have an array of cities: ['Stockholm','Gothenburg','Malmö']. To log each city’s name using a loop, which is the cleanest modern way?",
            options: ["for...of", "for...in", "while", "map() without function"],
            correctAnswer: "for...of",
        },
        {
            prompt: "Sweden is famous for its islands. If you want to count how many islands are in an array `const islands = ['Djurgården','Skeppsholmen','Kungsholmen']`, which property gives the number?",
            options: ["islands.count", "islands.size", "islands.length", "islands.total"],
            correctAnswer: "islands.length",
        },
        {
            prompt: "Sometimes functions need to return a value. If you want a function `calculatePopulation()` to give back a number, which statement sends it back?",
            options: ["return", "console.log", "output", "yield"],
            correctAnswer: "return",
        },
        {
            prompt: "Sweden has over 95,000 lakes. If you want to store lake names as keys and their area in km² as values, which JS structure is perfect?",
            options: ["Array", "Object", "Set", "Map"],
            correctAnswer: "Object",
        },
        {
            prompt: "You want to sum all elements in an array `const populations = [975904, 583056, 316588]`. Which higher-order array method lets you reduce the array to a single value?",
            options: ["reduce()", "map()", "filter()", "forEach()"],
            correctAnswer: "reduce()",
        },
        {
            prompt: "Swedish cities sometimes hold festivals. If you want to create a list of cities that have a festival over 100,000 visitors using `filter`, what does the filter function return?",
            options: ["New array with matching cities", "Boolean true/false", "Single value", "Undefined"],
            correctAnswer: "New array with matching cities",
        },
        {
            prompt: "Imagine you want to print a greeting for each city in reverse order. Which combination works?",
            options: [
                "cities.reverse().forEach(city => console.log(city))",
                "cities.forEach(city => console.log(city)).reverse()",
                "cities.reverse(city => console.log(city))",
                "for (let city in cities.reverse()) { console.log(city) }"
            ],
            correctAnswer: "cities.reverse().forEach(city => console.log(city))",
        }
    ],
    practice: {
        title: "Project: Swedish Festival Logger",
        instructions: "Create an array of 3 Swedish cities. For each city, store the name and a festival visitor count. Write a function that prints a message for cities with visitors over 100,000.",
        defaultCode: `const cities = [
  { name: 'Stockholm', visitors: 200000 },
  { name: 'Gothenburg', visitors: 90000 },
  { name: 'Malmö', visitors: 120000 }
];

function bigFestivals(cityArray) {
  const bigCities = cityArray.filter(city => city.visitors > 100000);
  bigCities.forEach(city => console.log(\`\${city.name} has a big festival with \${city.visitors} visitors!\`));
}

bigFestivals(cities);`
    },
    minigame: {
            gameType: 'code-typer',
            title: "Challenge 2: Thank You",
            prompt: "Make a button that says 'Tack' (Thank you). On click, alert 'Thank you!'.",
            solution: `<button onclick="alert('Thank you!')">Tack</button>`
        },
};

