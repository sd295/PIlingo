const lessonContent = {
    title: "Level 2: State & Events with Ukrainian Culture",
    questions: [
        {
            prompt: "To make a component interactive, like counting votes, what React Hook do you need?",
            options: ["useEffect", "useState", "useContext", "usePysanka"],
            correctAnswer: "useState",
        },
        {
            prompt: "What is the national dish of Ukraine, a hearty beet soup? [2, 6]",
            options: ["Pizza", "Borscht", "Sushi", "Tacos"],
            correctAnswer: "Borscht",
        },
        {
            prompt: "Which function is used to update the state in a functional component?",
            options: ["this.setState()", "The setter function from useState", "updateState()", "refreshComponent()"],
            correctAnswer: "The setter function from useState",
        },
        {
            prompt: "What event handler do you add to a button to make it clickable?",
            options: ["onHover", "onScroll", "onClick", "onBanduraPlay"],
            correctAnswer: "onClick",
        },
        {
            prompt: "Taras Shevchenko was a famous Ukrainian poet, writer, and which other profession? [3, 7, 10]",
            options: ["Chef", "Cosmonaut", "Artist", "Athlete"],
            correctAnswer: "Artist",
        },
        {
            prompt: "When you call the state setter function (e.g., setCount), what happens?",
            options: ["Only the variable changes", "The component re-renders with the new state", "It sends data to the server", "It changes the website's CSS"],
            correctAnswer: "The component re-renders with the new state",
        },
        {
            prompt: "The `useState` hook returns an array with two elements. What are they?",
            options: ["The component and its props", "A string and a number", "The current state and a setter function", "A Tryzub and a Vyshyvanka"],
            correctAnswer: "The current state and a setter function",
        },
        {
            prompt: "What is the name of the Ukrainian national instrument, which has many strings and a body like a lute? [4, 5, 8, 9, 11]",
            options: ["Guitar", "Violin", "Flute", "Bandura"],
            correctAnswer: "Bandura",
        },
        {
            prompt: "To add 1 to a `count` state variable, what is the correct syntax?",
            options: ["count++", "setCount(count + 1)", "count = count + 1", "add(count, 1)"],
            correctAnswer: "setCount(count + 1)",
        },
        {
            prompt: "What is the traditional Ukrainian Easter egg, decorated with intricate folk designs, called?",
            options: ["Fabergé egg", "Pysanka", "Matryoshka", "Horilka"],
            correctAnswer: "Pysanka",
        }
    ],
    practice: {
        title: "Project: Vote for Your Favorite Ukrainian Dish",
        instructions: `
1. Import the 'useState' hook from React.
2. Create a component called 'DishVoter'.
3. Inside 'DishVoter', create two state variables using 'useState', one for 'borschtVotes' and one for 'varenykyVotes'. Initialize both to 0.
4. Display the current vote count for Borscht and Varenyky (a type of dumpling). [2]
5. Add a button for each dish.
6. When a button is clicked, use the appropriate setter function to increase the vote count for that dish by 1.
`,
        defaultCode: `import React, { useState } from 'react';

function DishVoter() {
  // Create a state for borscht votes
  const [borschtVotes, setBorschtVotes] = useState(0);
  
  // Create a state for varenyky votes
  const [varenykyVotes, setVarenykyVotes] = useState(0);

  return (
    <div>
      <h1>Vote for the Best Ukrainian Dish!</h1>
      
      <div>
        <h2>Borscht: {borschtVotes} votes</h2>
        {/* Add an onClick button to increase borscht votes */}
        <button onClick={() => setBorschtVotes(borschtVotes + 1)}>Vote for Borscht</button>
      </div>
      
      <hr />

      <div>
        <h2>Varenyky: {varenykyVotes} votes</h2>
        {/* Add an onClick button to increase varenyky votes */}
        <button onClick={() => setVarenykyVotes(varenykyVotes + 1)}>Vote for Varenyky</button>
      </div>
    </div>
  );
}

export default DishVoter;
`
    },
    minigame: {
        gameType: 'code-typer',
        title: "Challenge 2: Show a Fact",
        prompt: "Use the useState hook to create a button that shows a fact about Kyiv when clicked.",
        solution: `function FunFact() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(true)}>Reveal Fact</button>
      {show && <p>Kyiv is one of the oldest cities in Eastern Europe.</p>}
    </div>
  );
}`
    }
};