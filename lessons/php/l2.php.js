// lessons/php/l2.php_variables_forms.js
const lessonContent = {
  title: "Level 2: PHP Variables, User Input & Simple Logic",

  questions: [
    {
      prompt: "How do you define a variable in PHP?",
      options: [
        "var myVar = 5;",
        "$myVar = 5;",
        "let myVar = 5;",
        "#myVar = 5;"
      ],
      correctAnswer: "$myVar = 5;"
    },
    {
      prompt: "How do you get user input from a form using the POST method?",
      options: [
        "$_GET['name']",
        "$_POST['name']",
        "$_INPUT['name']",
        "$_FORM['name']"
      ],
      correctAnswer: "$_POST['name']"
    },
    {
      prompt: "Which statement is used to check conditions in PHP?",
      options: [
        "if / else",
        "switch / case",
        "for / foreach",
        "try / catch"
      ],
      correctAnswer: "if / else"
    }
  ],

  minigame: {
    gameType: "code-typer",
    title: "Challenge 2: Personalized Greeting",
    prompt: `
      Create a PHP page with a form that asks for the user's name. 
      When submitted, display "Hallo [Name]! Willkommen in Deutschland!".
    `,
    solution: `<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    echo "Hallo $name! Willkommen in Deutschland! 🇩🇪";
} else {
?>
<form method="POST">
    Name: <input type="text" name="name" required>
    <button type="submit">Greet Me</button>
</form>
<?php
}
?>`
  },

  practice: {
    title: "Project: Greeting & Fun Fact Page",
    instructions: `
      <ol>
        <li>Create a PHP file called <code>index.php</code>.</li>
        <li>Add a form that asks for the user's name.</li>
        <li>When the user submits the form, show a personalized greeting.</li>
        <li>Add a button to show a random German fact from an array when clicked.</li>
        <li>Use <code>if / else</code> and <code>$_POST</code> to handle user input.</li>
        <li>Test your pages on your PHP server (e.g., <code>php -S localhost:8000</code>).</li>
      </ol>
    `,
    defaultCode: `<?php
$facts = [
    "Germany has more than 20,000 castles.",
    "The Christmas tree tradition started in Germany.",
    "Berlin is the capital and largest city."
];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    echo "<h2>Hallo $name! Willkommen in Deutschland! 🇩🇪</h2>";
    echo "<form method='POST'>";
    echo "<button type='submit' name='fact'>Show me a German Fact</button>";
    echo "</form>";

    if (isset($_POST['fact'])) {
        $fact = $facts[array_rand($facts)];
        echo "<p>German Fact: $fact</p>";
    }

} else {
?>
<form method="POST">
    Name: <input type="text" name="name" required>
    <button type="submit">Greet Me</button>
</form>
<?php
}
?>`
  }
};
