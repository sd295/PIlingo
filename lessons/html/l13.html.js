// lessons/vue/l6.capstone.norwegian.js
const lessonContent = {
    title: "Level 6: Norwegian Flip Cards (HTML & JS)",
    questions: null,
    minigame: null,
    cutsceneUrl: null,

    practice: {
        title: "Project: Norwegian Flip Cards",
        instructions: `
            <p>Welcome to the Norwegian Flip Cards project!</p>
            <ol>
                <li>Create multiple greeting cards for Norwegian words.</li>
                <li>Each card should flip when clicked to show the English translation.</li>
                <li>Use JavaScript to toggle classes for the flip effect.</li>
                <li>Style the cards with CSS to make them visually appealing.</li>
                <li>Add Norwegian flag emojis 🇳🇴 or online images for flair.</li>
            </ol>
        `,
        defaultCode: `<!DOCTYPE html>
<html lang="no">
<head>
<meta charset="UTF-8">
<title>Norwegian Flip Cards</title>

  }
  .front, .back {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    text-align: center;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    flex-direction: column;
  }
  .front { background: #FFEB3B; color: #1A237E; }
  .back { background: #4FC3F7; color: white; transform: rotateY(180deg); }
  img { width: 50px; margin-top: 10px; }
</style>
</head>
<body>

    <div src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg" alt="Norway Flag"></div>
    <div class="back">Hello!<img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg" alt="Norway Flag"></div>
  </div>
</div>

<div class="card-container" onclick="flipCard(this)">
  <div class="card">
    <div class="front">Takk 🇳🇴<img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg" alt="Norway Flag"></div>
    <div class="back">Thank you!<img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg" alt="Norway Flag"></div>
 
    <div class="front">Venn 🇳🇴<img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg" alt="Norway Flag"></div>
    <div class="back">Friend!<img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg" alt="Norway Flag"></div>
 

<div class="card-container" onclick="flipCard(this)">
  <div class="card">
    <div class="front">Familie 🇳🇴<img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg" alt="Norway Flag"></div>
    <div class="back">Family!<img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg" alt="Norway Flag"></div>
  </div>
</div>

<script>
function flipCard(container) {
  const card = container.querySelector('.card');
  card.classList.toggle('flipped');
}
</script>

</body>
</html>`
    }
};
