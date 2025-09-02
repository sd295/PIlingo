const lessonContent = {
    title: "Faktat",
    questions: null,
    minigame: null,
    cutsceneUrl: null,

    practice: {
        title: "Projekti: Fix the Suomi Facts Page",
        instructions: `
            <p>Your <strong>tehtävä</strong> is to fix this broken page about Finland! The HTML structure and CSS styles are full of errors. You need to find and correct them.</p>
            <p>Follow the steps below to fix the sivu:</p>
            <ol>
                <li>The main <strong>otsikko</strong> ("Tietoja Suomesta") isn't showing correctly. Check its opening and closing tags.</li>
                <li>The <strong>lista</strong> of facts is a mess. Ensure each fact is a proper list item.</li>
                <li>The final <strong>kappale</strong> at the bottom is not appearing at all. Use the correct HTML tag for it.</li>
                <li>In the CSS, the page <strong>taustaväri</strong> (background color) is not working. Find the typo in the property name.</li>
                <li>The text <strong>väri</strong> for the list items should be light blue, but the property is incorrect.</li>
                <li>The whole page content should be centered. Fix the text-alignment property in the body style.</li>
            </ol>
            <p>Click "Run Code" to see if you have fixed the sivu!</p>
        `,
        defaultCode: `<!DOCTYPE html>
<html lang="fi">
<head>
  <meta charset="UTF-8">
  <title>Tietoja Suomesta</title>
  <style>
    body {
      background-colour: #002F6C; /* This should be the dark blue of the flag */
      color: white;
      font-family: 'Verdana', sans-serif;
      text-align: senter;
      padding-top: 40px;
    }
    h1 {
      color: #FFCE00; /* A gold/yellow color */
    }
    li {
      list-style: none;
      tekstin-väri: lightblue;
    }
  </style>
</head>
<body>

  <h1>Tietoja Suomesta</h2>

  <ul>
    <li>Maa tuhansien järvien
    <li>Pääkaupunki on Helsinki 🇫🇮</li>
    <li>Known for saunas and sisu.</li>
  </ul>

  <paragraph>Suomi on kaunis maa.</paragraph>
    
</body>
</html>`
    }
};