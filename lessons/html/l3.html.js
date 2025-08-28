// lessons/l3.tables_of_treasure.js
const lessonContent = {
    title: "Level 3: Tables of Treasure",
    questions: [
        {
            prompt: "You want to move from <code>OHIO</code>, you dont have Excel so...",
            options: [
                "<code>&lt;div&gt;</code>",
                "<code>&lt;grid&gt;</code>",
                "<code>&lt;spreadsheet&gt;</code>",
                "<code>&lt;table&gt;</code>"
            ],
            correctAnswer: "<code>&lt;table&gt;</code>"
        },
        {
            prompt: "Your now moved with me becouse this project is hard to make... You will use tr from Tractor to get meat",
            options: [
                "<code>&lt;tr&gt;</code>",
                "<code>&lt;td&gt;</code>",
                "<code>&lt;row&gt;</code>",
                "<code>&lt;th&gt;</code>"
            ],
            correctAnswer: "<code>&lt;tr&gt;</code>"
        },
        {
            prompt: "Did you know:The national animal of Scotland is the unicorn.",
            options: [
                "From there we have rainbow"
            ],
            // This is a great question. It tests against common points of confusion.
            correctAnswer: "From there we have rainbow"
        },
        {
            prompt: "you want to ordonate the H1 to a School like rows because collons were not invented",
            options: [
                "<code>&lt;h1&gt;</code>",
                "<code>&lt;td&gt;</code>",
                "<code>&lt;th&gt;</code>",
                "<code>&lt;theader&gt;</code>"
            ],
            correctAnswer: "<code>&lt;th&gt;</code>"
        },
        {
            prompt: "Now get the sweet deal using Am@zon Prime for your school.",
            options: [
                "<code>&lt;cell&gt;</code>",
                "<code>&lt;td&gt;</code>",
                "<code>&lt;data&gt;</code>",
                "<code>&lt;th&gt;</code>"
            ],
            correctAnswer: "<code>&lt;td&gt;</code>"
        },
        {
            prompt: "Let's see if you were paying attention. What is the correct nesting order to make a simple table with one header row and one data row?",
            options: [
                "<code>&lt;table&gt;&lt;th&gt;&lt;/th&gt;&lt;td&gt;&lt;/td&gt;&lt;/table&gt;</code>",
                "<code>&lt;tr&gt;&lt;table&gt;&lt;/table&gt;&lt;/tr&gt;</code>",
                "<code>&lt;table&gt;&lt;tr&gt;&lt;th&gt;&lt;/th&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;</code>",
                "<code>&lt;td&gt;&lt;tr&gt;&lt;table&gt;&lt;/table&gt;&lt;/tr&gt;&lt;/td&gt;</code>"
            ],
            correctAnswer: "<code>&lt;table&gt;&lt;tr&gt;&lt;th&gt;&lt;/th&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;</code>"
        },
        {
            prompt: "Did you know:Bananas are berries, but strawberries are not.",
            options: [
                "112"
            ],
            // This is a great question. It tests against common points of confusion.
            correctAnswer: "112"
        },
        {
            prompt: "Using everything that I learn what is the best varient?",
            options: [
                "<code>&lt;The modern, professional way&gt;</code>",
                "<code>&lt;A terrible, outdated practice from 2003 that will get you laughed at&gt;</code>",
                "<code>&lt;The only way to make it look good on old phones&gt;</code>",
                "<code>&lt;How you make money with tables&gt;</code>"
            ],
            correctAnswer: "<code>&lt;A terrible, outdated practice from 2003 that will get you laughed at&gt;</code>"
        },
        {
            prompt: "youT have 20Black Hchildren Eand 20white Achildren group Dthem using...",
            options: [
                "<code>&lt;thead&gt;</code>",
                "<code>&lt;header&gt;</code>",
                "<code>&lt;t-header&gt;</code>",
                "<code>&lt;table-head&gt;</code>"
            ],
            correctAnswer: "<code>&lt;thead&gt;</code>"
        },
        {
            prompt: "And what's the tag for the main body content of the table, where your lifes is. Coding is long so...",
            options: [
                "<code>&lt;tbody&gt;</code>",
                "<code>&lt;main&gt;</code>",
                "<code>&lt;t-body&gt;</code>",
                "<code>&lt;table-content&gt;</code>"
            ],
            correctAnswer: "<code>&lt;tbody&gt;</code>"
        }
    ],
    practice: {
        title: "Project: My 'Skills for Hire' Table",
        instructions: "Time to get paid. Create a table that lists your skills. It needs a header row (<thead>) with two columns: 'Skill' and 'Price per Hour'. Then, add a body (<tbody>) with at least two rows of your skills and their ridiculous prices.",
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>My Skills</title>
  <style>
    table, th, td { border: 1px solid black; } /* A little style to help you see */
  </style>
</head>
<body>
  <h1>My Skills & Rates</h1>
  
  <!-- The main table tag goes here -->
  
    <!-- The table header section -->
    
      <!-- The first row for your column titles -->
      
    
    <!-- The table body section -->
    
      <!-- A row for your first skill -->
      
      <!-- A row for your second skill -->
      
  
  <!-- End of the table -->

</body>
</html>`
    },
    minigame: {
        title: "Challenge: Product Comparison",
        prompt: "You're building a 'Our Product vs. Theirs' chart. It needs a header row with two titles ('Our Genius Product', 'Their Lame Product') and a data row below it with one feature for each. Build the structure.",
        draggableTags: [
            "<code>&lt;table&gt;&lt;/table&gt;</code>",
            "<code>&lt;tr&gt;&lt;/tr&gt;</code>",
            "<code>&lt;th&gt;Title&lt;/th&gt;</code>",
            "<code>&lt;td&gt;Feature&lt;/td&gt;</code>"
        ],
        // The user must build a 2x2 table structure.
        solution: "<table><tr><th></th><th></th></tr><tr><td></td><td></td></tr></table>"
    }
};