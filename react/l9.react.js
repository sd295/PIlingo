const lessonContent = {
    title: "Level 6: Conditional Rendering with Ukraine's Regions",
    questions: [
        {
            prompt: "What is it called when you show different content based on a condition?",
            options: ["Component Composition", "State Management", "Conditional Rendering", "Props Drilling"],
            correctAnswer: "Conditional Rendering",
        },
        {
            prompt: "Which JavaScript operator is a popular one-line shortcut for an if/else statement in JSX?",
            options: ["The 'for' loop", "The Ternary operator (condition ? A : B)", "The 'switch' statement", "The 'palianytsia' operator"],
            correctAnswer: "The Ternary operator (condition ? A : B)",
        },
        {
            prompt: "If you want to render something ONLY when a condition is true, and nothing otherwise, what's a common pattern?",
            options: ["`condition || <Component />`", "`condition && <Component />`", "`condition ? <Component />`", "`condition ?? <Component />`"],
            correctAnswer: "`condition && <Component />`",
        },
        {
            prompt: "The Carpathian Mountains are a major feature in which part of Ukraine? [3]",
            options: ["Eastern Ukraine", "Southern Ukraine", "Northern Ukraine", "Western Ukraine"],
            correctAnswer: "Western Ukraine",
        },
        {
            prompt: "What should you return from a component's render method to display nothing?",
            options: ["An empty string `''`", "`false`", "`undefined`", "`null`"],
            correctAnswer: "`null`",
        },
        {
            prompt: "To conditionally add a CSS class, you might write `<div className={isActive ? 'active' : ''}>`. This is an example of using:",
            options: ["useEffect", "The ternary operator", "useState", "A for loop"],
            correctAnswer: "The ternary operator",
        },
        {
            prompt: "Which Ukrainian city is often called the 'cultural capital' of Ukraine? [11, 14]",
            options: ["Kharkiv", "Odesa", "Lviv", "Dnipro"],
            correctAnswer: "Lviv",
        },
        {
            prompt: "Consider `const content = isLoggedIn ? <AdminPanel /> : <LoginForm />`. What is this an example of?",
            options: ["Storing JSX in a variable", "A side effect", "A memory leak", "Fetching data"],
            correctAnswer: "Storing JSX in a variable",
        },
        {
            prompt: "Kherson Oblast in the south of Ukraine is famous for growing which large, sweet fruit? [7]",
            options: ["Apples", "Lemons", "Watermelons (кавуни)", "Bananas"],
            correctAnswer: "Watermelons (кавуни)",
        },
        {
            prompt: "Using a full `if/else` statement for conditional rendering is best done where?",
            options: ["Inside the JSX curly braces `{}`", "Outside the `return` statement, before returning the JSX", "In a separate CSS file", "Never, it is not allowed"],
            correctAnswer: "Outside the `return` statement, before returning the JSX",
        }
    ],
    practice: {
        title: "Project: Interactive Map of Ukraine",
        instructions: `
1. Create a 'RegionInfo' component that accepts a prop called 'regionName'.
2. Inside the component, use conditional logic to display a special fact if the 'regionName' is 'Kyiv', 'Lviv', or 'Kherson'.
3. If the 'regionName' is 'Kyiv', show "The capital and a historic city!".
4. If the 'regionName' is 'Lviv', show "The cultural capital, famous for coffee and chocolate.".
5. If it is any other region, show a default message like "A beautiful region of Ukraine.".
6. Use buttons in an 'App' component to set the currently selected region in state, and pass that state to your 'RegionInfo' component.
`,
        defaultCode: `import React, { useState } from 'react';

// This component displays info based on a condition
function RegionInfo({ regionName }) { // destructuring props to get regionName
  let fact = "A beautiful region of Ukraine."; // default message

  if (regionName === "Kyiv") {
    fact = "The capital and a historic city!";
  } else if (regionName === "Lviv") {
    fact = "The cultural capital, famous for coffee and chocolate.";
  } else if (regionName === "Kherson") {
    fact = "Famous for its sweet watermelons!";
  }

  // You can also use a ternary operator for cleaner, shorter logic:
  // const fact = regionName === "Kyiv" 
  //   ? "The capital and a historic city!"
  //   : "A beautiful region of Ukraine.";
  
  return (
    <div style={{ border: '1px solid #ffd700', padding: '10px', marginTop: '10px' }}>
      <h2>Information about: {regionName}</h2>
      <p>{fact}</p>
    </div>
  );
}

// The main App that controls which region is selected
function App() {
  const [selectedRegion, setSelectedRegion] = useState("Kyiv");

  return (
    <div>
      <h1>Explore Ukraine's Regions</h1>
      <button onClick={() => setSelectedRegion("Kyiv")}>Kyiv</button>
      <button onClick={() => setSelectedRegion("Lviv")}>Lviv</button>
      <button onClick={() => setSelectedRegion("Kherson")}>Kherson</button>
      <button onClick={() => setSelectedRegion("Poltava")}>Poltava</button>
      
      <RegionInfo regionName={selectedRegion} />
    </div>
  );
}

export default App;
`
    },
    minigame: {
        gameType: 'code-typer',
        title: "Challenge 6: Show the Sunflower",
        prompt: "Create a component that shows a sunflower emoji 🌻 only if a prop `isSunny` is true.",
        solution: `function WeatherDisplay({ isSunny }) {
  return (
    <div>
      <h2>Is it sunny today?</h2>
      {isSunny && <p style={{fontSize: '40px'}}>🌻</p>}
    </div>
  );
}`
    }
};