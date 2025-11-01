// lessons/css/l6.capstone.js
const lessonContent = {
    title: "Level 6: Ukrainian Interactive Greetings",
    questions: null,
    minigame: null,
    cutsceneUrl: null,

    practice: {
        title: "Project: Interactive Ukrainian Greetings",
        instructions: `
            <p>This project will demonstrate React's power by making your Ukrainian greeting page interactive.</p>
            <ol>
                <li>Create a heading that says "Привіт!"</li>
                <li>Add a paragraph that says "Дякую за відвідування нашої сторінки."</li>
                <li>Add a button that toggles between two messages in Ukrainian: e.g., "Як справи?" (How are you?) and "Гарного дня!" (Have a nice day!)</li>
                <li>Display a list of popular Ukrainian cities dynamically using <code>map()</code></li>
                <li>Style your app using inline styles or CSS-in-JS to reflect Ukraine's flag colors 🇺🇦</li>
            </ol>
        `,
        defaultCode: `import React, { useState } from 'react';

function App() {
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = ["Як справи?", "Гарного дня!"];
  const cities = ["Kyiv", "Lviv", "Odesa", "Kharkiv", "Dnipro"];

  const toggleMessage = () => {
    setMessageIndex((prev) => (prev + 1) % messages.length);
  };

  const styles = {
    backgroundColor: '#0057B7', // Ukraine blue
    color: '#FFD700', // Ukraine yellow
    fontFamily: 'sans-serif',
    textAlign: 'center',
    padding: '50px 20px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const buttonStyles = {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#FFD700',
    color: '#0057B7',
    transition: 'transform 0.2s',
  };

  const cityListStyles = {
    marginTop: '30px',
    listStyle: 'none',
    padding: 0,
  };

  const cityItemStyles = {
    marginBottom: '8px',
    fontSize: '18px',
  };

  return (
    <div style={styles}>
      <h1>Привіт!</h1>
      <p>Дякую за відвідування нашої сторінки.</p>
      <p>{messages[messageIndex]}</p>
      <button
        style={buttonStyles}
        onClick={toggleMessage}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        Toggle Message
      </button>

      <ul style={cityListStyles}>
        {cities.map((city) => (
          <li key={city} style={cityItemStyles}>🏙️ {city}</li>
        ))}
      </ul>

      <p>🇺🇦 Ласкаво просимо в Україну! 🇺🇦</p>
    </div>
  );
}

export default App;`
    }
};
