const lessonContent = {
    title: "Level 7: Lists & Keys with Ukrainian Literature",
    questions: [
        {
            prompt: "What JavaScript array method is best for turning an array of data into a list of components?",
            options: ["forEach()", "filter()", "map()", "reduce()"],
            correctAnswer: "map()",
        },
        {
            prompt: "What special prop must you provide for each item in a rendered list?",
            options: ["id", "name", "index", "key"],
            correctAnswer: "key",
        },
        {
            prompt: "Why is the `key` prop important?",
            options: ["It styles the list item", "It helps React identify items that have changed, been added, or removed", "It's the text that gets displayed", "It sets the component's state"],
            correctAnswer: "It helps React identify items that have changed, been added, or removed",
        },
        {
            prompt: "Taras Shevchenko, a national hero of Ukraine, is most famous for his book of poems titled what? [1, 2, 4]",
            options: ["The Aeneid", "Kobzar (Кобзар)", "War and Peace", "The Forest Song"],
            correctAnswer: "Kobzar (Кобзар)",
        },
        {
            prompt: "Which of the following is a poor choice for a key, especially if the list can be reordered?",
            options: ["A unique ID from the database (e.g., `item.id`)", "The item's name (if always unique)", "The array index (`index`)", "A randomly generated number"],
            correctAnswer: "The array index (`index`)",
        },
        {
            prompt: "Where should the `key` prop be placed?",
            options: ["On a child element inside the list item", "On the parent `<ul>` or `<ol>` tag", "On the outermost element returned by the `.map()` callback", "In the component's state"],
            correctAnswer: "On the outermost element returned by the `.map()` callback",
        },
        {
            prompt: "What happens if you don't provide a `key` when mapping a list?",
            options: ["The application will crash", "React will issue a warning in the console and may have trouble updating the list", "The list will be invisible", "Nothing, it is optional"],
            correctAnswer: "React will issue a warning in the console and may have trouble updating the list",
        },
        {
            prompt: "Ivan Franko, another giant of Ukrainian literature, was a writer, poet, and a founder of which political movement in Galicia? [1, 3]",
            options: ["Socialism and Ukrainian nationalism", "Monarchism", "Anarchism", "Environmentalism"],
            correctAnswer: "Socialism and Ukrainian nationalism",
        },
        {
            prompt: "Keys need to be unique among...",
            options: ["all components in the entire application.", "their sibling elements in the list.", "all `<li>` elements on the page.", "their parent elements."],
            correctAnswer: "their sibling elements in the list.",
        },
        {
            prompt: "The `map` function takes a callback function. What does this callback function return for each item?",
            options: ["A boolean value", "A number", "A JSX element", "A string"],
            correctAnswer: "A JSX element",
        }
    ],
    practice: {
        title: "Project: List of Great Ukrainian Authors",
        instructions: `
1. Create an array of author objects. Each object must have a unique 'id' and a 'name'.
2. Create a component named 'AuthorList'.
3. Inside 'AuthorList', use the 'map' method to iterate over your array.
4. For each author, return a list item element, for example \`<li>\`.
5. Make sure to assign the author's unique 'id' to the 'key' prop on each \`<li>\`.
6. Display the author's name within the list item.
7. Wrap the entire mapped list in a \`<ul>\` element.
`,
        defaultCode: `import React from 'react';

const authors = [
  { id: 1, name: 'Taras Shevchenko', masterpiece: 'Kobzar' },
  { id: 2, name: 'Ivan Franko', masterpiece: 'Zachar Berkut' },
  { id: 3, name: 'Lesya Ukrainka', masterpiece: 'The Forest Song' },
  { id: 4, name: 'Hryhorii Skovoroda', masterpiece: 'A Garden of Divine Songs' }
];

function AuthorList() {
  return (
    <div>
      <h1>Ukrainian Literary Greats</h1>
      <ul>
        {/* We map over the array of data */}
        {authors.map(author => (
          // Each item gets a stable, unique key
          <li key={author.id}>
            <strong>{author.name}</strong> (Known for: {author.masterpiece})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AuthorList;
`
    },
    minigame: {
        gameType: 'code-typer',
        title: "Challenge 7: Simple To-Do List",
        prompt: "Given an array `['Write code', 'Drink coffee', 'Read about Ukraine']`, map it to an unordered list. Use the item's text as the key.",
        solution: `function TodoList() {
  const tasks = ['Write code', 'Drink coffee', 'Read about Ukraine'];
  return (
    <ul>
      {tasks.map(task => <li key={task}>{task}</li>)}
    </ul>
  );
}`
    }
};