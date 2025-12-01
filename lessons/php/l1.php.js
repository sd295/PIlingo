// lessons/php/l1.php_basics.js
const lessonContent = {
  title: "Level 1: PHP Basics – Hello World & Simple Pages",

  questions: [
    {
      prompt: "What is PHP mainly used for?",
      options: [
        "Styling web pages",
        "Server-side scripting for web development",
        "Creating desktop applications",
        "Making videos"
      ],
      correctAnswer: "Server-side scripting for web development"
    },
    {
      prompt: "Which syntax is correct for starting a PHP script?",
      options: [
        "<?php ... ?>",
        "<php> ... </php>",
        "<? ... ?>",
        "<script> ... </script>"
      ],
      correctAnswer: "<?php ... ?>"
    },
    {
      prompt: "Which function prints text in PHP?",
      options: [
        "echo",
        "console.log",
        "printText",
        "printfText"
      ],
      correctAnswer: "echo"
    }
  ],

  minigame: {
    gameType: "code-typer",
    title: "Challenge 1: Hello PHP Page",
    prompt: "Create a simple PHP page that displays 'Hallo Deutschland!' when opened in a browser.",
    solution: `<?php
echo 'Hallo Deutschland! 🇩🇪';
?>`
  },

  practice: {
    title: "Project: Simple PHP Greetings Page",
    instructions: `
      <ol>
        <li>Create a PHP file called <code>index.php</code>.</li>
        <li>Use the <code>echo</code> function to display "Hallo Deutschland! 🇩🇪" on the page.</li>
        <li>Optionally, create another page called <code>fact.php</code> that shows a random fun German fact from an array.</li>
        <li>Run your PHP server (e.g., using XAMPP, MAMP, or the built-in PHP server with <code>php -S localhost:8000</code>).</li>
        <li>Open your browser and visit <code>http://localhost:8000</code> to see your page.</li>
      </ol>
    `,
    defaultCode: `<?php
// Array of fun German facts
$facts = [
    "Germany is famous for its castles and history.",
    "The Autobahn has sections without speed limits.",
    "Germany invented the printing press."
];

// Check the page requested
$page = $_GET['page'] ?? 'home';

if ($page === 'fact') {
    // Show a random fact
    $fact = $facts[array_rand($facts)];
    echo "German Fact: " . $fact;
} else {
    // Default homepage
    echo "Hallo Deutschland! 🇩🇪";
}
?>`
  }
};
