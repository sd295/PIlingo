// lessons/html/l3.tables_of_treasure.js
const lessonContent = {
    title: "Level 3: Tables of Treasure",
    questions: [
        {
            prompt: "You have a list of your genius ideas and how much money they'll make. What is the MAIN container tag for organizing this glorious data into a grid?",
            options: [
                "<code>&lt;div&gt;</code>",
                "<code>&lt;grid&gt;</code>",
                "<code>&lt;spreadsheet&gt;</code>",
                "<code>&lt;table&gt;</code>"
            ],
            correctAnswer: "<code>&lt;table&gt;</code>"
        },
        {
            prompt: "Your table is an empty void. To start building, you must add things HORIZONTALLY first. What's the tag for a Table Row?",
            options: [
                "<code>&lt;tr&gt;</code>",
                "<code>&lt;td&gt;</code>",
                "<code>&lt;row&gt;</code>",
                "<code>&lt;th&gt;</code>"
            ],
            correctAnswer: "<code>&lt;tr&gt;</code>"
        },
        {
            prompt: "Your first row needs some 'big crispy' column titles (like 'Product' and 'Price'). What tag is used for a special Table HEADER cell?",
            options: [
                "<code>&lt;h1&gt;</code>",
                "<code>&lt;td&gt;</code>",
                "<code>&lt;th&gt;</code>",
                "<code>&lt;theader&gt;</code>"
            ],
            correctAnswer: "<code>&lt;th&gt;</code>"
        },
        {
            prompt: "You've got your headers. Now you need to fill in the actual, glorious data (like '$1,000,000'). What's the tag for a standard Table DATA cell?",
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
            prompt: "Using tables to structure your whole website layout is...",
            options: [
                "<code>&lt;The modern, professional way&gt;</code>",
                "<code>&lt;A terrible, outdated practice from 2003 that will get you laughed at&gt;</code>",
                "<code>&lt;The only way to make it look good on old phones&gt;</code>",
                "<code>&lt;How you make money with tables&gt;</code>"
            ],
            correctAnswer: "<code>&lt;A terrible, outdated practice from 2003 that will get you laughed at&gt;</code>"
        },
        {
            prompt: "For big-brain developers, what tags are used to semantically group the header content of a table?",
            options: [
                "<code>&lt;thead&gt;</code>",
                "<code>&lt;header&gt;</code>",
                "<code>&lt;t-header&gt;</code>",
                "<code>&lt;table-head&gt;</code>"
            ],
            correctAnswer: "<code>&lt;thead&gt;</code>"
        },
        {
            prompt: "And what's the tag for the main body content of the table, where all the juicy data lives?",
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
            gameType: 'code-typer',
            title: "Challenge 3: Thank You",
            prompt: "Type HTML for a div with text 'Kiitos' (Thank you) in blue.",
            solution: `<div style="color:blue;">Kiitos</div>`
        },
};