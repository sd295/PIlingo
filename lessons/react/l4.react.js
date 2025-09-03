const lessonContent = {
    title: "Level 4: Forms & Input Handling with Ukrainian Language",
    questions: [
        {
            prompt: "To control an input field's value in React, you should link it to what?",
            options: ["A CSS class", "A state variable", "A global variable", "A 'Bandura' string"],
            correctAnswer: "A state variable",
        },
        {
            prompt: "What event handler do you use on an input to update its state as the user types?",
            options: ["onClick", "onHover", "onSubmit", "onChange"],
            correctAnswer: "onChange",
        },
        {
            prompt: "Inside the `onChange` handler function `(e) => { ... }`, what does `e.target.value` contain?",
            options: ["The component's props", "The previous state value", "The current text inside the input field", "The Ukrainian alphabet"],
            correctAnswer: "The current text inside the input field",
        },
        {
            prompt: "To stop a form from refreshing the entire page when submitted, what should you call?",
            options: ["event.preventDefault()", "event.stopPropagation()", "event.stopImmediatePropagation()", "event.sayPalianytsia()"],
            correctAnswer: "event.preventDefault()",
        },
        {
            prompt: "What is the name of the alphabet used for writing Ukrainian? [11]",
            options: ["Latin", "Greek", "Cyrillic", "Hieroglyphic"],
            correctAnswer: "Cyrillic",
        },
        {
            prompt: "Which attribute on an input field should be set to the state variable to make it a controlled component?",
            options: ["name", "placeholder", "value", "type"],
            correctAnswer: "value",
        },
        {
            prompt: "What event handler is used on the `<form>` element to handle submission?",
            options: ["onClick", "onFormSubmit", "onSubmit", "onChange"],
            correctAnswer: "onSubmit",
        },
        {
            prompt: "Lesya Ukrainka was a famous Ukrainian writer, feminist, and author of which well-known play? [6]",
            options: ["Romeo and Juliet", "The Forest Song (Лісова пісня)", "Hamlet", "Cats"],
            correctAnswer: "The Forest Song (Лісова пісня)",
        },
        {
            prompt: "What is the primary benefit of using controlled components in React forms?",
            options: ["It makes the form faster", "React state becomes the 'single source of truth' for the input value", "It automatically translates the text", "It styles the form for you"],
            correctAnswer: "React state becomes the 'single source of truth' for the input value",
        },
        {
            prompt: "How would you greet someone informally in Ukrainian? [13]",
            options: ["Bonjour", "Hola", "Pryvit (Привіт)", "Ciao"],
            correctAnswer: "Pryvit (Привіт)",
        }
    ],
    practice: {
        title: "Project: Ukrainian Vocabulary Builder",
        instructions: `
1. Import 'useState' from React.
2. Create a 'VocabularyForm' component.
3. Inside the component, create a state variable called 'word' and its setter 'setWord'. Initialize it with an empty string.
4. Create a form with an 'onSubmit' handler. Inside the handler, prevent the default form submission and alert the current value of 'word'.
5. Add an input field inside the form.
6. Make it a controlled component: set its 'value' to the 'word' state and its 'onChange' handler to update 'word' with the input's current value.
7. Add a submit button to the form.
`,
        defaultCode: `import React, { useState } from 'react';

function VocabularyForm() {
  const [word, setWord] = useState("");

  const handleSubmit = (event) => {
    // Prevent the page from refreshing
    event.preventDefault();
    // Alert the word when the form is submitted
    alert(\`New Ukrainian word added: \${word}\`);
    // Clear the input after submission
    setWord("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Ukrainian Word</h2>
      <input
        type="text"
        placeholder="e.g., Дякую (dyakuyu)"
        // Set the value from our state
        value={word}
        // Update the state every time the input changes
        onChange={(e) => setWord(e.target.value)}
      />
      <button type="submit">Add Word</button>
      <hr />
      <h3>Typing in real-time: {word}</h3>
    </form>
  );
}

export default VocabularyForm;
`
    },
    minigame: {
        gameType: 'code-typer',
        title: "Challenge 4: Echo Input",
        prompt: "Create a simple component that shows the text you're typing in an `<h2>` tag in real-time.",
        solution: `function Echo() {
  const [text, setText] = useState('');
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <h2>{text}</h2>
    </div>
  );
}`
    }
};