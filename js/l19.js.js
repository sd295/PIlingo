// lessons/l15_friendly.js
const lessonContent = {
    title: "Level 15: JWT Refresh, Roles & 2FA",
    questions: [
        {
            prompt: "Your JWT access token expires after 15 minutes. What is the secure way to keep the user logged in?",
            options: ["Use a refresh token stored securely", "Make the access token last forever", "Store password in LocalStorage", "Ask user to log in every 5 minutes"],
            correctAnswer: "Use a refresh token stored securely",
        },
        {
            prompt: "Where should a refresh token ideally be stored for security?",
            options: ["HttpOnly cookie", "LocalStorage", "SessionStorage", "In the HTML page"],
            correctAnswer: "HttpOnly cookie",
        },
        {
            prompt: "You want different access levels (admin vs normal user). What JS/backend concept applies?",
            options: ["Role-based access control (RBAC)", "CSS classes", "DOM events", "JSON.parse()"],
            correctAnswer: "Role-based access control (RBAC)",
        },
        {
            prompt: "A good practice for refreshing JWT tokens is:",
            options: ["Rotate refresh tokens after each use", "Keep the same token forever", "Store refresh in JS variable", "Send password every time"],
            correctAnswer: "Rotate refresh tokens after each use",
        },
        {
            prompt: "Which factor is added in Two-Factor Authentication (2FA)?",
            options: ["Something you know + something you have", "Two passwords", "Two usernames", "Extra CSS class"],
            correctAnswer: "Something you know + something you have",
        },
        {
            prompt: "You implement SMS/email codes for 2FA. How should they be handled?",
            options: ["Expire quickly and use once", "Keep valid for 1 month", "Save in LocalStorage forever", "Hardcode in frontend"],
            correctAnswer: "Expire quickly and use once",
        },
        {
            prompt: "To protect against CSRF attacks with cookies, what header is recommended?",
            options: ["SameSite=strict", "Cache-Control=no-cache", "Accept-Language", "Content-Type"],
            correctAnswer: "SameSite=strict",
        },
        {
            prompt: "When verifying a JWT on the backend, what is critical?",
            options: ["Check signature with secret key", "Only decode payload", "Skip expiration check", "Store JWT in database"],
            correctAnswer: "Check signature with secret key",
        },
        {
            prompt: "What’s the danger of storing JWT in LocalStorage?",
            options: ["Vulnerable to XSS stealing", "Too fast to access", "Takes too much space", "Does not work offline"],
            correctAnswer: "Vulnerable to XSS stealing",
        },
        {
            prompt: "To securely log out a user with refresh tokens, the server should:",
            options: ["Invalidate refresh token in database", "Delete HTML button", "Remove CSS class", "Alert('logout')"],
            correctAnswer: "Invalidate refresh token in database",
        }
    ],
    practice: {
        title: "Project: Secure Auth with Refresh & Roles",
        instructions: `
1. Create a mock login system with JWT (access + refresh tokens).
2. Store refresh token securely (simulate HttpOnly cookie).
3. Implement auto-refresh when access token expires.
4. Add role-based access: only admins see secret data.
5. Simulate 2FA: ask for a 6-digit code after login.
6. Handle logout by invalidating refresh token.
`,
        defaultCode: `// Mock auth demo
let mockDB = { refreshTokens: [], users: [
  { username: "alice", password: "123", role: "admin" },
  { username: "bob", password: "456", role: "user" }
]};

function generateToken(user, type="access") {
  return btoa(JSON.stringify({
    username: user.username,
    role: user.role,
    type,
    exp: Date.now() + (type==="access" ? 15*60*1000 : 7*24*60*60*1000) // ms
  }));
}

function login(username, password) {
  const user = mockDB.users.find(u => u.username===username && u.password===password);
  if (!user) return console.error("Invalid login");
  const access = generateToken(user, "access");
  const refresh = generateToken(user, "refresh");
  mockDB.refreshTokens.push(refresh);
  console.log("Access:", access, "\\nRefresh:", refresh);
  return {access, refresh};
}

function refreshToken(oldRefresh) {
  if (!mockDB.refreshTokens.includes(oldRefresh)) return console.error("Invalid refresh!");
  const payload = JSON.parse(atob(oldRefresh));
  const user = mockDB.users.find(u => u.username===payload.username);
  return generateToken(user, "access");
}

// Example usage:
const session = login("alice","123");
setTimeout(() => {
  console.log("Access expired, refreshing...");
  const newAccess = refreshToken(session.refresh);
  console.log("New Access:", newAccess);
}, 2000);
`
    },
    minigame: {
        gameType: 'code-typer',
        title: "Challenge 15: 2FA Code",
        prompt: "Make an input for a 6-digit code. On submit, alert '2FA success!' if code is '123456'.",
        solution: `<input id="code" maxlength="6" />
<button onclick="if(document.getElementById('code').value==='123456') alert('2FA success!')">Submit</button>`
    }
};
