// lessons/l14_friendly.js
const lessonContent = {
    title: "Level 14: JS Authentication & User Sessions",
    questions: [
        {
            prompt: "You want users to sign in securely. Which protocol is most common for web authentication?",
            options: ["OAuth 2.0", "FTP", "SMTP", "DNS"],
            correctAnswer: "OAuth 2.0",
        },
        {
            prompt: "Which method stores a session token safely for long-term login?",
            options: ["LocalStorage", "Cookies (HttpOnly, Secure)", "URL query string", "console.log()"],
            correctAnswer: "Cookies (HttpOnly, Secure)",
        },
        {
            prompt: "If a token expires, what should your frontend do?",
            options: ["Request a new token via refresh flow", "Keep using the old token", "Crash app", "Alert() only"],
            correctAnswer: "Request a new token via refresh flow",
        },
        {
            prompt: "Which hashing algorithm is modern & secure for passwords?",
            options: ["bcrypt", "MD5", "SHA1", "ROT13"],
            correctAnswer: "bcrypt",
        },
        {
            prompt: "To prevent attackers from faking sessions, what should the server validate?",
            options: ["Signature of JWT", "Only username", "Only password once", "Nothing"],
            correctAnswer: "Signature of JWT",
        },
        {
            prompt: "Which HTTP header is used to send the authentication token?",
            options: ["Authorization: Bearer <token>", "Auth-Pass", "Cookie: Token", "X-Password"],
            correctAnswer: "Authorization: Bearer <token>",
        },
        {
            prompt: "To protect routes in frontend, what should you check before showing private pages?",
            options: ["If a valid auth token exists", "Only URL", "window.location", "console.log()"],
            correctAnswer: "If a valid auth token exists",
        },
        {
            prompt: "Which JS method removes sensitive tokens on logout?",
            options: ["localStorage.removeItem()", "console.clear()", "delete token", "alert('bye')"],
            correctAnswer: "localStorage.removeItem()",
        },
        {
            prompt: "If a hacker tries 'session fixation', what’s the defense?",
            options: ["Rotate session ID after login", "Allow any token", "Ignore attack", "Disable HTTPS"],
            correctAnswer: "Rotate session ID after login",
        },
        {
            prompt: "Why is HTTPS required for authentication?",
            options: ["Encrypts tokens & prevents interception", "Faster loading", "Better SEO only", "To use console.log()"],
            correctAnswer: "Encrypts tokens & prevents interception",
        }
    ],
    practice: {
        title: "Project: Secure Login & Protected Page",
        instructions: `
1. Create a simple login form with username & password fields.
2. On submit, send the credentials to a mock API (you can simulate with a JSON file).
3. If valid, save a fake JWT token in LocalStorage.
4. Show a welcome message only if the token exists.
5. Add a "Logout" button that removes the token.
6. Bonus: Protect a secret page so it only opens when a token exists.
`,
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Secure Login Demo</title>
</head>
<body>
  <h1>Login</h1>
  <form id="loginForm">
    <input type="text" id="username" placeholder="Username" required />
    <input type="password" id="password" placeholder="Password" required />
    <button type="submit">Login</button>
  </form>
  <button id="logoutBtn" style="display:none;">Logout</button>
  <h2 id="welcomeMsg"></h2>

  <script>
    const loginForm = document.getElementById('loginForm');
    const logoutBtn = document.getElementById('logoutBtn');
    const welcomeMsg = document.getElementById('welcomeMsg');

    function checkAuth(){
      const token = localStorage.getItem('token');
      if(token){
        welcomeMsg.textContent = "Welcome! You are logged in ✅";
        logoutBtn.style.display = "block";
        loginForm.style.display = "none";
      } else {
        welcomeMsg.textContent = "";
        logoutBtn.style.display = "none";
        loginForm.style.display = "block";
      }
    }

    loginForm.addEventListener('submit', e => {
      e.preventDefault();
      const user = document.getElementById('username').value;
      const pass = document.getElementById('password').value;

      // Mock login
      if(user === "admin" && pass === "1234"){
        localStorage.setItem('token', 'fake-jwt-token');
        checkAuth();
      } else {
        alert("Invalid credentials!");
      }
    });

    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('token');
      checkAuth();
    });

    checkAuth();
  </script>
</body>
</html>`
    },
    minigame: {
        gameType: 'code-typer',
        title: "Challenge 14: Logout Button",
        prompt: "Create a button that removes 'token' from LocalStorage when clicked.",
        solution: `<button onclick="localStorage.removeItem('token')">Logout</button>`
    }
};
