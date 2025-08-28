// lessons/css/l5.capstone.js
const lessonContent = {
    // This title will appear on the hub page
    title: "Level 5: Your site",
    
    // We set these to null so quiz.js knows to skip them
    questions: null,
    minigame: null,
    cutsceneUrl: null,

    // This is the only part that matters for this lesson type
    practice: {
        title: "Project: Erste",
        instructions: `
            <p>Welcome to your first @real@ project! We're not going to quiz you <now>. We're going to build.</p>
            <p>Your mission is to create a very very very simple, animated landing page by following the numbered steps in the code editor.</p>
            <p>1.Learn to read<}</p>
            <ol>
                <li><strong>Style the Body:</strong> Set a background color for the whole page.</li>
                <li><strong>Style the Container:</strong> Center the main content box.</li>
                <li><strong>Style the Title & Text:</strong> Make the text look good.</li>
                <li><strong>Add the Animations:</strong> Use @keyframes to make the elements appear on screen dynamically.</li>
            </ol>
            <p>Click "Run Code" often to see your changes! Good luck.</p>
        `,
        // The default code is heavily commented to guide the user
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>My Animated Site</title>
  <style>
    /* --- Step 1: Style the Body --- */
    /* Give the body a dark background color, like #1a202c. */
    /* Set the font-family to 'Nunito', sans-serif. */
    /* Use display: flex to help with centering. */
    body {
      
    }

    /* --- Step 2: Style the Container --- */
    /* This is the main box for our content. */
    .container {
      text-align: center;
      color: white;
    }

    /* --- Step 3: Style the Title & Text --- */
    .container h1 {
      font-size: 4rem;
    }

    .container p {
      font-size: 1.5rem;
      opacity: 0.8; /* Make it a little softer */
    }

    /* --- Step 4: Add the Animations --- */
    /* Select the h1 and apply the 'fadeInAndUp' animation. */
    /* Make it run for 1s and start after a 0.5s delay. */
    .container h1 {
      
    }
    
    /* Select the p and apply the same animation. */
    /* Make it run for 1s but start after a 1s delay. */
    .container p {
      
    }

    /* Define the @keyframes for 'fadeInAndUp' */
    /* It should animate from an opacity of 0 and a transform of translateY(50px) */
    /* to an opacity of 1 and a transform of translateY(0). */
    

  </style>
</head>
<body>

  <div class="container">
    <h1>Welcome, Coder.</h1>
    <p>You built your first animated site.</p>
  </div>

</body>
</html>`
    }
};