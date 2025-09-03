const lessonContent = {
    title: "Level 3: useEffect & Data Fetching with Ukrainian Art",
    questions: [
        {
            prompt: "What React Hook is used to perform side effects, like fetching data or setting a timer?",
            options: ["useState", "useContext", "useEffect", "useBorscht"],
            correctAnswer: "useEffect",
        },
        {
            prompt: "To make `useEffect` run only once when the component first mounts, what do you provide as the second argument?",
            options: ["An empty array `[]`", "The number `1`", "A string `'run once'`", "A Tryzub symbol"],
            correctAnswer: "An empty array `[]`",
        },
        {
            prompt: "Maria Prymachenko was a celebrated Ukrainian folk artist known for her paintings of what? [4]",
            options: ["Realistic portraits", "Abstract cityscapes", "Fantastic beasts and flowers", "Historical battles"],
            correctAnswer: "Fantastic beasts and flowers",
        },
        {
            prompt: "A function returned from within `useEffect` is called a _______ function.",
            options: ["Callback", "Cleanup", "Async", "Vyshyvanka"],
            correctAnswer: "Cleanup",
        },
        {
            prompt: "What is the purpose of the dependency array in `useEffect(callback, [dependency])`?",
            options: ["To list all component props", "To cause an infinite loop", "To re-run the effect when a dependency value changes", "To store a list of Ukrainian cities"],
            correctAnswer: "To re-run the effect when a dependency value changes",
        },
        {
            prompt: "Ivan Marchuk, a contemporary Ukrainian artist, was named one of the '100 geniuses of our time' and invented a unique painting style called what? [5]",
            options: ["Impressionism", "Cubism", "Pliontanism ('dabbing on')", "Surrealism"],
            correctAnswer: "Pliontanism ('dabbing on')",
        },
        {
            prompt: "If you want to fetch data from an API as soon as your component loads, where should you place the fetch call?",
            options: ["Inside a `useState` hook", "Directly in the component body", "Inside a `useEffect` hook with an empty dependency array", "Inside a button's `onClick` handler"],
            correctAnswer: "Inside a `useEffect` hook with an empty dependency array",
        },
        {
            prompt: "What does the `cleanup` function in `useEffect` help prevent?",
            options: ["Memory leaks", "Slow internet connections", "Styling issues", "Incorrect spelling"],
            correctAnswer: "Memory leaks",
        },
        {
            prompt: "Kazymyr Malevych, born in Kyiv, was a pioneering artist of which abstract art movement? [4, 16]",
            options: ["Suprematism", "Pop Art", "Baroque", "Realism"],
            correctAnswer: "Suprematism",
        },
        {
            prompt: "What is a common side effect managed by `useEffect`?",
            options: ["Adding two numbers", "Returning JSX", "Setting up an event listener", "Defining a variable"],
            correctAnswer: "Setting up an event listener",
        }
    ],
    practice: {
        title: "Project: Fetch Famous Ukrainian Artworks",
        instructions: `
1. Import 'useState' and 'useEffect' from React.
2. Create a mock async function 'fetchArtworks' that returns a Promise. After a 1-second delay, it should resolve with an array of art objects.
3. In your 'ArtGallery' component, create a state variable for 'artworks' (initialized as an empty array) and another for 'loading' (initialized as true).
4. Use 'useEffect' to call 'fetchArtworks' when the component mounts.
5. When the data is fetched, update the 'artworks' state with the result and set 'loading' to false.
6. Render a "Loading..." message if 'loading' is true, otherwise, map over the 'artworks' array and display the title and artist for each piece.
`,
        defaultCode: `import React, { useState, useEffect } from 'react';

// This is a FAKE data fetching function
const mockArtworks = [
  { id: 1, title: "Black Square", artist: "Kazymyr Malevych" },
  { id: 2, title: "A Ukrainian Girl", artist: "Mykola Pymonenko" },
  { id: 3, title: "The Cossacks of Zaporozhia", artist: "Ilya Repin" },
  { id: 4, title: "Voice of My Soul", artist: "Ivan Marchuk" }
];

function fetchArtworks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockArtworks);
    }, 1000); // Simulate network delay
  });
}

function ArtGallery() {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchArtworks().then(data => {
      setArtworks(data);
      setLoading(false);
    });
  }, []); // Empty array means this effect runs only once

  if (loading) {
    return <div>Loading masterpieces...</div>;
  }

  return (
    <div>
      <h1>Ukrainian Art Gallery</h1>
      <ul>
        {artworks.map(art => (
          <li key={art.id}>
            <strong>{art.title}</strong> by {art.artist}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArtGallery;
`
    },
    minigame: {
        gameType: 'code-typer',
        title: "Challenge 3: Document Title Changer",
        prompt: "Use useEffect to change the browser's document title to 'Slava Ukraini!' when the component loads.",
        solution: `import React, { useEffect } from 'react';

function TitleChanger() {
  useEffect(() => {
    document.title = 'Slava Ukraini!';
  }, []);

  return <h2>Check the browser tab!</h2>;
}`
    }
};