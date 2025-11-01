const lessonContent = {
  title: "Level 8: Nested Lists & Conditional Layers with Ukraine Facts",
  
  questions: [
    {
      prompt: "Which React feature allows you to render a list within another list?",
      options: ["useState", "Nested .map()", "useEffect", "Props Drilling"],
      correctAnswer: "Nested .map()",
    },
    {
      prompt: "How do you conditionally render multiple layers of components in React?",
      options: [
        "Using multiple ternary operators or &&",
        "Using only useState",
        "By editing the DOM manually",
        "Only with props drilling"
      ],
      correctAnswer: "Using multiple ternary operators or &&",
    },
    {
      prompt: "Which city is known for hosting the Lviv Coffee Festival? [Hidden fact]",
      options: ["Kyiv", "Lviv", "Odesa", "Kharkiv"],
      correctAnswer: "Lviv",
    },
    {
      prompt: "If a parent list is empty, what is a recommended pattern to display a fallback message?",
      options: [
        "parentList || 'No items'",
        "parentList.length ? renderParentList : 'No items available'",
        "Only use if/else inside JSX",
        "React automatically handles empty lists"
      ],
      correctAnswer: "parentList.length ? renderParentList : 'No items available'",
    },
    {
      prompt: "Which Ukrainian food is often paired with sour cream and is a favorite comfort food? [Hidden fact]",
      options: ["Varenyky", "Pizza", "Sushi", "Tacos"],
      correctAnswer: "Varenyky",
    },
    {
      prompt: "What should you always include when rendering a nested list to avoid React warnings?",
      options: ["A unique key for each element", "An ID attribute", "Inline styles", "A className"],
      correctAnswer: "A unique key for each element",
    },
    {
      prompt: "Kyiv’s Andriyivskyy Descent is famous for: [Hidden fact]",
      options: [
        "Historic architecture & street art",
        "Ski resorts",
        "Desert landscapes",
        "Tropical beaches"
      ],
      correctAnswer: "Historic architecture & street art",
    }
  ],

  practice: {
    title: "Project: Ukrainian Cities & Landmarks Explorer",
    instructions: `
1. Create an array of Ukrainian cities, each with a nested array of landmarks:
   [
     { city: "Kyiv", landmarks: ["Arsenalna Metro", "Andriyivskyy Descent"] },
     { city: "Lviv", landmarks: ["Coffee Festival", "Rynok Square"] },
     { city: "Odesa", landmarks: ["Potemkin Stairs", "Primorsky Boulevard"] }
   ]
2. Render each city as a parent list item.
3. Under each city, render its landmarks as a nested list.
4. Add conditional facts for certain landmarks (e.g., Arsenalna Metro → deepest metro station in the world).
5. Display the facts only when clicking on the landmark name (use state).
`,

    defaultCode: `import React, { useState } from 'react';

function Landmark({ name, fact }) {
  const [showFact, setShowFact] = useState(false);
  return (
    <li onClick={() => setShowFact(!showFact)} style={{ cursor: 'pointer' }}>
      {name} {showFact && <span> — {fact}</span>}
    </li>
  );
}

function City({ cityData }) {
  return (
    <li>
      <strong>{cityData.city}</strong>
      <ul>
        {cityData.landmarks.map(landmark => {
          let fact = "";
          if (landmark === "Arsenalna Metro") fact = "Deepest metro station in the world.";
          else if (landmark === "Andriyivskyy Descent") fact = "Historic architecture & street art.";
          else if (landmark === "Coffee Festival") fact = "Celebrates Lviv’s coffee culture.";
          else if (landmark === "Potemkin Stairs") fact = "Iconic staircase in Odesa.";
          
          return <Landmark key={landmark} name={landmark} fact={fact} />;
        })}
      </ul>
    </li>
  );
}

function App() {
  const cities = [
    { city: "Kyiv", landmarks: ["Arsenalna Metro", "Andriyivskyy Descent"] },
    { city: "Lviv", landmarks: ["Coffee Festival", "Rynok Square"] },
    { city: "Odesa", landmarks: ["Potemkin Stairs", "Primorsky Boulevard"] }
  ];

  return (
    <div>
      <h1>Explore Ukrainian Cities & Landmarks</h1>
      <ul>
        {cities.map(c => <City key={c.city} cityData={c} />)}
      </ul>
    </div>
  );
}

export default App;`
  },

  minigame: {
    gameType: "code-typer",
    title: "Challenge 8: Reveal Landmark Facts",
    prompt: "Type a component that shows nested landmarks for a city and reveals a fact when clicked.",
    solution: `function Landmark({ name, fact }) {
  const [showFact, setShowFact] = React.useState(false);
  return (
    <li onClick={() => setShowFact(!showFact)}>
      {name} {showFact && " — " + fact}
    </li>
  );
}`
  }
};
