const lessonContent = {
  title: "Level 7: Rendering Lists + Conditional Tips from Ukraine",
  questions: [
    {
      prompt: "What method is commonly used in React to render a list of items?",
      options: [".push()", ".filter()", ".map()", ".reduce()"],
      correctAnswer: ".map()",
    },
    {
      prompt: "Why does React require a `key` prop when rendering lists?",
      options: [
        "To style elements",
        "To uniquely identify items for efficient updates",
        "To enable props drilling",
        "To make items clickable"
      ],
      correctAnswer: "To uniquely identify items for efficient updates",
    },
    {
      prompt: "Which expression correctly renders a list of names?",
      options: [
        "{names.forEach(n => <li>{n}</li>)}",
        "{names.map(n => <li key={n}>{n}</li>)}",
        "{<li>{names}</li>}",
        "{names.list()}"
      ],
      correctAnswer: "{names.map(n => <li key={n}>{n}</li>)}",
    },
    {
      prompt: "What famous tunnel in Kyiv becomes covered in green leaves in spring, looking like a fairy-tale corridor? [Hidden fact]",
      options: [
        "Tunnel of Love (Тунель кохання)",
        "Green Corridor of Dnipro",
        "Kyiv Botanical Tunnel",
        "Forest Passage of Lviv"
      ],
      correctAnswer: "Tunnel of Love (Тунель кохання)",
    },
    {
      prompt: "When rendering a list but showing a message if it's empty, which pattern is common?",
      options: [
        "list || 'Empty list'",
        "list.length ? renderList : 'Nothing here'",
        "`if...else` only",
        "renderList && list.length"
      ],
      correctAnswer: "list.length ? renderList : 'Nothing here'",
    },
    {
      prompt: "This Ukrainian dish is often mistaken for Russian, but it is actually Ukrainian and UNESCO-protected. [Hidden fact]",
      options: ["Borshch", "Olivier salad", "Pelmeni", "Syrniki"],
      correctAnswer: "Borshch",
    },
    {
      prompt: "Where should the `key` prop be placed when mapping items?",
      options: [
        "On the parent `<div>`",
        "On a wrapper component only",
        "On the element returned inside `.map()`",
        "Anywhere, React detects it automatically"
      ],
      correctAnswer: "On the element returned inside `.map()`",
    },
    {
      prompt: "Which Ukrainian region is home to the deepest metro station in the world (Arsenalna)? [Hidden fact]",
      options: ["Lviv region", "Kyiv region", "Odesa region", "Zaporizhzhia region"],
      correctAnswer: "Kyiv region",
    },
    {
      prompt: "What must the `key` prop value be?",
      options: [
        "A unique and stable identifier",
        "Always an index",
        "Always a string",
        "A randomly generated ID each render"
      ],
      correctAnswer: "A unique and stable identifier",
    },
    {
      prompt: "Which list-rendering issue happens if you use array indexes as keys and reorder items?",
      options: [
        "Infinite loop",
        "Incorrect DOM updates",
        "Memory leak",
        "Nothing, it's always safe"
      ],
      correctAnswer: "Incorrect DOM updates",
    }
  ],

  practice: {
    title: "Project: Ukrainian Cities Explorer",
    instructions: `
1. Create an array of famous Ukrainian cities: ["Kyiv", "Lviv", "Odesa", "Kharkiv"].
2. Render them in a list.
3. Add a special hidden fact under each city with conditional logic:
   - Kyiv → Home of the deepest metro station (Arsenalna).
   - Lviv → Known for its cozy coffee culture.
   - Odesa → Famous for its Potemkin Stairs.
   - All others → "A wonderful Ukrainian city!"
4. Display facts only when clicking a city button (use state).
`,

    defaultCode: `import React, { useState } from 'react';

function CityInfo({ city }) {
  let fact = "A wonderful Ukrainian city!";

  if (city === "Kyiv") fact = "Home of the deepest metro station in the world (Arsenalna).";
  else if (city === "Lviv") fact = "Known for its cozy coffee culture.";
  else if (city === "Odesa") fact = "Famous for the Potemkin Stairs.";

  return <p>{fact}</p>;
}

function App() {
  const cities = ["Kyiv", "Lviv", "Odesa", "Kharkiv"];
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div>
      <h1>Explore Ukrainian Cities</h1>
      {cities.map(city => (
        <button key={city} onClick={() => setSelectedCity(city)}>
          {city}
        </button>
      ))}

      {selectedCity && (
        <div style={{ marginTop: '10px', border: '1px solid #ffd700', padding: '10px' }}>
          <h2>{selectedCity}</h2>
          <CityInfo city={selectedCity} />
        </div>
      )}
    </div>
  );
}

export default App;`
  },

  minigame: {
    gameType: "code-typer",
    title: "Challenge 7: Show Facts Only for Known Cities",
    prompt: "Type a component that maps cities and shows a fact only for Kyiv or Lviv.",
    solution: `function CityFacts({ cities }) {
  return (
    <ul>
      {cities.map(city => (
        <li key={city}>
          {city}
          {(city === "Kyiv" || city === "Lviv") && " — special Ukrainian city!"}
        </li>
      ))}
    </ul>
  );
}`
  }
};
