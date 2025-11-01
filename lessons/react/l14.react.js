// lessons/css/l7.capstone.js
const lessonContent = {
    title: "Level 7: Explore Ukraine with React",
    questions: null,
    minigame: null,
    cutsceneUrl: null,

    practice: {
        title: "Project: Ukrainian City Explorer",
        instructions: `
            <p>Now we'll create a mini interactive React app to explore Ukraine's cities.</p>
            <ol>
                <li>Display a heading and introduction text welcoming the user.</li>
                <li>Provide an input field to add a Ukrainian city to the list.</li>
                <li>Render the city list dynamically using <code>map()</code>.</li>
                <li>Allow users to remove cities from the list by clicking a delete button.</li>
                <li>Style the app with Ukraine's flag colors 🇺🇦 and some simple hover effects.</li>
            </ol>
        `,
        defaultCode: `import React, { useState } from 'react';

function App() {
  const [cities, setCities] = useState(["Kyiv", "Lviv", "Odesa"]);
  const [newCity, setNewCity] = useState("");

  const addCity = () => {
    if (newCity.trim() !== "") {
      setCities([...cities, newCity.trim()]);
      setNewCity("");
    }
  };

  const removeCity = (city) => {
    setCities(cities.filter(c => c !== city));
  };

  const styles = {
    backgroundColor: '#0057B7',
    color: '#FFD700',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    minHeight: '100vh',
    padding: '50px 20px',
  };

  const inputStyles = {
    padding: '8px',
    fontSize: '16px',
    borderRadius: '6px',
    border: 'none',
    marginRight: '10px',
  };

  const buttonStyles = {
    padding: '8px 14px',
    fontSize: '16px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#FFD700',
    color: '#0057B7',
    fontWeight: 'bold',
  };

  const cityListStyles = {
    listStyle: 'none',
    padding: 0,
    marginTop: '30px',
  };

  const cityItemStyles = {
    marginBottom: '10px',
    fontSize: '18px',
  };

  return (
    <div style={styles}>
      <h1>Explore Ukraine 🇺🇦</h1>
      <p>Add your favorite Ukrainian cities and learn about them!</p>

      <div>
        <input
          style={inputStyles}
          type="text"
          value={newCity}
          placeholder="Enter a city"
          onChange={(e) => setNewCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addCity()}
        />
        <button style={buttonStyles} onClick={addCity}>Add City</button>
      </div>

      <ul style={cityListStyles}>
        {cities.map((city) => (
          <li key={city} style={cityItemStyles}>
            🏙️ {city}{" "}
            <button style={{ ...buttonStyles, backgroundColor: '#d9534f', color: '#fff', marginLeft: '10px' }}
                    onClick={() => removeCity(city)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;`
    }
};
