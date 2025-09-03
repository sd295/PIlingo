// lessons/css/l5.capstone.js
const lessonContent = {
    title: "Level 5: Swedish Basics",
    questions: null,
    minigame: null,
    cutsceneUrl: null,

    practice: {
    "title": "Level 5: Ukrainian Basics",
    "questions": null,
    "minigame": null,
    "cutsceneUrl": null,
    "practice": {
        "title": "Project: Ukrainian Greetings",
        "instructions": "<p>Welcome to your first Ukraine-themed project! We're going to build a tiny, simple page that says hello and thank you in Ukrainian using React.</p><p>Follow the steps below to create your little Ukraine-style page:</p><ol><li>Create a heading that says \"Привіт!\"</li><li>Add a paragraph that says \"Дякую за відвідування нашої сторінки.\"</li><li>Optionally, add a little Ukrainian flair like flag emojis 🇺🇦.</li></ol><p>Click \"Run Code\" to see your page!</p>",
        "defaultCode": "import React from 'react';\n\nfunction App() {\n  const styles = {\n    backgroundColor: '#0057B7',\n    color: '#FFD700',\n    fontFamily: 'sans-serif',\n    textAlign: 'center',\n    paddingTop: '50px',\n    height: '100vh'\n  };\n\n  return (\n    <div style={styles}>\n      <div id=\"ukraine-react\">\n        <h1 id=\"heading\">Привіт!</h1>\n        <p id=\"paragraph\">Дякую за відвідування нашої сторінки.</p>\n        <p>🇺🇦 Ласкаво просимо в Україну! 🇺🇦</p>\n      </div>\n    </div>\n  );\n}\n\nexport default App;"
    }
}
};