const lessonContent = {
    title: "Level 1: React Components with Ukrainian Cities",
    questions: [
        {
            prompt: "In React, what is a reusable piece of UI called?",
            options: ["A 'Tryzub'", "A 'Component'", "A 'Vyshyvanka'", "A 'Pysanka'"],
            correctAnswer: "A 'Component'",
        },
        {
            prompt: "React component names must always start with what?",
            options: ["A lowercase letter", "A number", "A capital letter", "A Cyrillic letter"],
            correctAnswer: "A capital letter",
        },
        {
            prompt: "What syntax extension for JavaScript is commonly used in React to write markup?",
            options: ["HTML", "Borscht", "JSX", "CSS"],
            correctAnswer: "JSX",
        },
        {
            prompt: "How do you pass data from a parent component to a child component in React?",
            options: ["Using 'state'", "Using 'props'", "Using a 'rushnyk'", "Using 'Hryvnia'"],
            correctAnswer: "Using 'props'",
        },
        {
            prompt: "Which of these is a famous landmark in Kyiv, the capital of Ukraine? [22, 23]",
            options: ["The Eiffel Tower", "The Colosseum", "Saint Sophia Cathedral", "Big Ben"],
            correctAnswer: "Saint Sophia Cathedral",
        },
        {
            prompt: "To display a list of Ukrainian cities in React, what JavaScript method is most commonly used?",
            options: ["city.filter()", "city.find()", "city.map()", "city.reduce()"],
            correctAnswer: "city.map()",
        },
        {
            prompt: "What do the two colors of the Ukrainian flag represent? [3]",
            options: ["Forest and Mountains", "Sea and Sand", "Sky and Wheat Fields", "Sunflowers and Soil"],
            correctAnswer: "Sky and Wheat Fields",
        },
        {
            prompt: "A component can't return multiple JSX tags. How must you wrap them?",
            options: ["In a parent tag like <div> or <>", "In a Promise", "In an array", "In a sunflower seed"],
            correctAnswer: "In a parent tag like <div> or <>",
        },
        {
            prompt: "What is the national flower of Ukraine? [11]",
            options: ["Rose", "Tulip", "Poppy", "Sunflower"],
            correctAnswer: "Sunflower",
        },
        {
            prompt: "To handle a button click in React, you would add an _______ handler.",
            options: ["onClick", "onHover", "onScroll", "onPysanka"],
            correctAnswer: "onClick",
        }
    ],
    practice: {
        title: "Project: Create a List of Ukrainian Cities",
        instructions: `
1. Create a React functional component named 'City'.
2. The 'City' component should accept 'props' (e.g., props.name and props.region).
3. Inside 'City', return a div that displays the city's name and region.
4. Create a main 'App' component.
5. In 'App', create an array of Ukrainian city objects. Each object should have 'name' and 'region' properties.
6. Use the .map() method to render a 'City' component for each city in your array.
`,
        defaultCode: `// Start your React code here!
// Don't forget to import React.

function City(props) {
  // Return a div with the city's name and region from props
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Region: {props.region}</p>
    </div>
  );
}

function App() {
  const ukrainianCities = [
    { name: "Kyiv", region: "Kyiv Oblast" },
    { name: "Lviv", region: "Lviv Oblast" },
    { name: "Odesa", region: "Odesa Oblast" },
    { name: "Kharkiv", region: "Kharkiv Oblast" }
  ];

  return (
    <div>
      <h1>Famous Cities of Ukraine</h1>
      {ukrainianCities.map(city => (
        <City key={city.name} name={city.name} region={city.region} />
      ))}
    </div>
  );
}

// You would typically render the App component to the DOM like this:
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
`
    },
    minigame: {
        gameType: 'code-typer',
        title: "Challenge 1: The Tryzub Component",
        prompt: "Quick! Type out a simple React component that displays the Ukrainian coat of arms, the Tryzub (Тризуб).",
        solution: `function Tryzub() {
  return <h1>&#9881;</h1>;
}`
    }
};