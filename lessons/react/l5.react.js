const lessonContent = {
    title: "Level 5: Building with Components (A Ukrainian Menu)",
    questions: [
        {
            prompt: "How do you build complex user interfaces in React?",
            options: ["By writing one very large file", "By combining smaller, simpler components", "By using only HTML", "By avoiding JavaScript"],
            correctAnswer: "By combining smaller, simpler components",
        },
        {
            prompt: "What is the special prop that lets you pass elements directly between a component's opening and closing tags?",
            options: ["innerContent", "children", "render", "data"],
            correctAnswer: "children",
        },
        {
            prompt: "What are 'Varenyky', a classic Ukrainian dish often found on menus? [1]",
            options: ["Spicy sausages", "Dumplings with fillings like potato or cheese", "A type of pancake", "Beetroot soup"],
            correctAnswer: "Dumplings with fillings like potato or cheese",
        },
        {
            prompt: "If a `Menu` component renders three `MenuItem` components, which is the parent component?",
            options: ["The first `MenuItem`", "The last `MenuItem`", "The `Menu` component", "They are all siblings"],
            correctAnswer: "The `Menu` component",
        },
        {
            prompt: "What is the main advantage of creating small, reusable components?",
            options: ["It makes the website slower", "It makes code harder to read", "It keeps code organized and avoids repetition (DRY principle)", "It is the only way to use CSS"],
            correctAnswer: "It keeps code organized and avoids repetition (DRY principle)",
        },
        {
            prompt: "What is 'Uzvar', a traditional Ukrainian drink you might see on a menu? [1]",
            options: ["A hot coffee drink", "A type of milkshake", "A sweet beverage made from dried fruits", "A spicy tomato juice"],
            correctAnswer: "A sweet beverage made from dried fruits",
        },
        {
            prompt: "To display a `Header` component inside your `App` component, what would the JSX look like?",
            options: ["<App uses Header />", "<App><Header /></App>", "render(Header, App)", "{Header}"],
            correctAnswer: "<App><Header /></App>",
        },
        {
            prompt: "Passing data from a parent to a child, and then from that child to its own child (a grandchild), is known as what?",
            options: ["State lifting", "Props drilling", "Component mounting", "Context API"],
            correctAnswer: "Props drilling",
        },
        {
            prompt: "What are 'Pampushky', which are often served alongside Borscht in Ukraine? [1]",
            options: ["Small, savory garlic bread rolls", "Fried potato cakes", "Sweet honey cakes", "Pickled vegetables"],
            correctAnswer: "Small, savory garlic bread rolls",
        },
        {
            prompt: "How does a child component receive data from a parent component?",
            options: ["Through state", "Through the 'data' attribute", "Through props", "Through a global variable"],
            correctAnswer: "Through props",
        }
    ],
    practice: {
        title: "Project: Build a Ukrainian Restaurant Menu",
        instructions: `
1. Create a simple, reusable 'MenuItem' component. It should accept props like 'name', 'description', and 'price'.
2. The 'MenuItem' should display this information in a structured way (e.g., using <h2> for the name).
3. Create a 'Menu' component. This will be the parent.
4. Inside 'Menu', render several 'MenuItem' components, passing different data for each one (e.g., Borscht, Varenyky, Deruny).
5. Finally, create the main 'App' component that renders your 'Menu'. This shows the full component hierarchy.
`,
        defaultCode: `import React from 'react';

// 1. Child Component: This is our reusable "block".
// It doesn't know what it will display; it just knows HOW to display it.
function MenuItem(props) {
  return (
    <div style={{ border: '1px solid #0057b7', margin: '10px', padding: '10px' }}>
      <h2>{props.name} - {props.price} UAH</h2>
      <p>{props.description}</p>
    </div>
  );
}

// 2. Parent Component: This component USES the smaller block.
// It decides WHAT information to show by passing props.
function Menu() {
  return (
    <div>
      <h1>Taste of Ukraine Menu</h1>
      <MenuItem 
        name="Borscht" 
        price="150"
        description="Traditional beetroot soup, served with a dollop of sour cream."
      />
      <MenuItem 
        name="Varenyky" 
        price="180"
        description="Dumplings filled with potato and onion, served with fried bacon bits."
      />
      <MenuItem 
        name="Deruny (Potato Pancakes)" 
        price="170"
        description="Crispy fried potato pancakes, a beloved comfort food."
      />
    </div>
  );
}

// 3. Top-Level Component: This renders the whole page.
function App() {
  return (
    <div>
      <Menu />
    </div>
  );
}

export default App;
`
    },
    minigame: {
        gameType: 'code-typer',
        title: "Challenge 5: The Card Component",
        prompt: "Create a reusable 'Card' component that can display any content passed inside it using the 'children' prop.",
        solution: `function Card(props) {
  const cardStyle = {
    padding: '20px',
    margin: '20px',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    backgroundColor: '#ffd700'
  };
  return <div style={cardStyle}>{props.children}</div>;
}`
    }
};