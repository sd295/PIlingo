// quiz.js (Full, Final, with "Sorting Hat" Router Logic)

// --- IMPORTS ---
// Import all the Firebase services we need from the start
import { auth, db } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { doc, getDoc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// --- GLOBAL VARIABLES ---
// These are set once when the page loads
let currentUser = null;
const params = new URLSearchParams(window.location.search);
const subject = params.get('subject');
const lessonFile = params.get('lesson');

// --- AUTHENTICATION CHECK ---
// This is the master entry point for the entire script.
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in. Store their info and proceed to the routing logic.
        currentUser = user;
        loadAndRouteLesson();
    } else {
        // No user is signed in. Kick them back to the login page.
        window.location.href = 'login.html';
    }
});

// --- MASTER ROUTING FUNCTION ("THE SORTING HAT") ---
// This function's only job is to figure out what kind of lesson this is and send the user to the right place.
function loadAndRouteLesson() {
    if (!subject || !lessonFile) {
        window.location.href = 'index.html'; // Safety check
        return;
    }
    // Dynamically create a <script> tag to load the lesson data
    const script = document.createElement('script');
    script.src = `lessons/${subject}/${lessonFile}.js`;
    document.head.appendChild(script);

    // This runs AFTER the lesson file has been fully downloaded and read.
    script.onload = () => {
        // Now that the 'lessonContent' variable exists, we can inspect it.
        
        if (lessonContent.lessonType === 'interactive_discovery') {
            // It's a special interactive lesson, so go to its custom URL.
            window.location.href = `${lessonContent.url}?subject=${subject}&lesson=${lessonFile}`;
        
        } else if (!lessonContent.questions || lessonContent.questions.length === 0) {
            // It's a project-only lesson (like the capstone), so go to the practice page.
            window.location.href = `practice.html?subject=${subject}&lesson=${lessonFile}`;
        
        } else {
            // If neither of the above is true, it must be a normal quiz.
            // Proceed with initializing the quiz on THIS page.
            initializeQuiz();
        }
    };
    
    script.onerror = () => { document.getElementById('lesson-title').textContent = 'Error: Lesson not found.'; };
}

// --- QUIZ LOGIC INITIALIZER ---
// This function will now ONLY run if the router decides the lesson is a standard quiz.
function initializeQuiz() {
    // State variables
    let currentQuestionIndex = 0, score = 0, streak = 0, streakFreezes = 0, selectedAnswer = null;

    // DOM references
    const promptText = document.getElementById('prompt-text'),
          optionsContainer = document.getElementById('options-container'),
          checkBtn = document.getElementById('check-btn'),
          feedbackContainer = document.querySelector('.feedback-container'),
          feedbackMessage = document.getElementById('feedback-message'),
          feedbackText = document.getElementById('feedback-text'),
          correctAnswerText = document.getElementById('correct-answer-text'),
          scoreStat = document.getElementById('score-stat'),
          streakStat = document.getElementById('streak-stat'),
          rewardImage = document.getElementById('css-reward-image');
    
    document.getElementById('lesson-title').textContent = lessonContent.title;

    // --- Firestore Functions ---
    async function loadProgress() { /* ... see full function below ... */ }
    async function saveProgress() { /* ... see full function below ... */ }
    async function markLessonAsComplete() { /* ... see full function below ... */ }

    // --- UI Functions ---
    function loadQuestion() { /* ... see full function below ... */ }
    function selectOption(button, option) { /* ... see full function below ... */ }
    function checkAnswer() { /* ... see full function below ... */ }
    function updateStats() { /* ... see full function below ... */ }

    // --- Full Function Definitions ---
    
    async function loadProgress() {
        const userDocRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists() && docSnap.data()) {
            const userData = docSnap.data();
            score = userData.score || 0;
            streak = userData.streak || 0;
            streakFreezes = userData.streakFreezes || 0;
            updateStats();
        }
    }
    
    async function saveProgress() {
        const userDocRef = doc(db, "users", currentUser.uid);
        await setDoc(userDocRef, { 
            score: score, 
            streak: streak,
            displayName: currentUser.displayName || currentUser.email
        }, { merge: true });
    }

    async function markLessonAsComplete() {
        const lessonId = `${subject}-${lessonFile}`;
        const userDocRef = doc(db, "users", currentUser.uid);
        try {
            await updateDoc(userDocRef, { [`completedLessons.${lessonId}`]: true });
        } catch (error) {
            await setDoc(userDocRef, { completedLessons: { [lessonId]: true } }, { merge: true });
        }
    }

    function loadQuestion() {
        selectedAnswer = null;
        checkBtn.disabled = true;
        checkBtn.textContent = 'Check';
        checkBtn.classList.remove('hidden');
        optionsContainer.className = 'options-grid';
        feedbackMessage.classList.add('hidden');
        optionsContainer.innerHTML = '';
        if (rewardImage) rewardImage.classList.add('hidden');

        if (currentQuestionIndex >= lessonContent.questions.length) {
            markLessonAsComplete();
            promptText.textContent = 'Lesson Complete!';
            document.getElementById('quiz-header').querySelector('h2').textContent = 'Congratulations! 🎉';
            
            const practiceBtn = document.createElement('a');
            practiceBtn.className = 'level-btn';
            practiceBtn.textContent = 'Start Practice Project';
            practiceBtn.href = `practice.html?subject=${subject}&lesson=${lessonFile}`;

            const gameBtn = document.createElement('a');
            gameBtn.className = 'level-btn';
            gameBtn.textContent = 'Play Mini-Game Challenge';
            gameBtn.href = `minigame.html?subject=${subject}&lesson=${lessonFile}`;

            const hubBtn = document.createElement('a');
            hubBtn.className = 'level-btn';
            hubBtn.textContent = 'Back to Subject Hub';
            hubBtn.href = `${subject}.html`;
            
            optionsContainer.className = 'level-selection';
            if(lessonContent.practice) optionsContainer.appendChild(practiceBtn);
            if(lessonContent.minigame) optionsContainer.appendChild(gameBtn);
            optionsContainer.appendChild(hubBtn);
            
            checkBtn.classList.add('hidden');
            return;
        }

        const question = lessonContent.questions[currentQuestionIndex];
        promptText.innerHTML = question.prompt;
        question.options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.innerHTML = option;
            button.onclick = () => selectOption(button, option);
            optionsContainer.appendChild(button);
        });
    }

    function selectOption(button, option) {
        const currentlySelected = document.querySelector('.option-btn.selected');
        if (currentlySelected) currentlySelected.classList.remove('selected');
        button.classList.add('selected');
        selectedAnswer = option;
        checkBtn.disabled = false;
    }

    function checkAnswer() {
        const question = lessonContent.questions[currentQuestionIndex];
        const isCorrect = selectedAnswer === question.correctAnswer;
        
        feedbackMessage.classList.remove('hidden');
        if (isCorrect) {
            feedbackText.textContent = 'You are correct!';
            correctAnswerText.innerHTML = '';
            score += 10;
            streak++; // This is now a session streak, not the daily one.
            if (question.id === 'image_src_question' && rewardImage) {
                rewardImage.classList.remove('hidden');
            }
        } else {
            feedbackText.textContent = 'Oops! That\'s not right.';
            correctAnswerText.innerHTML = `Correct answer: ${question.correctAnswer}`;
            streak = 0;
        }
        
        feedbackContainer.className = isCorrect ? 'feedback-container correct' : 'feedback-container incorrect';
        updateStats();
        saveProgress();
        
        checkBtn.textContent = 'Continue';
        checkBtn.onclick = () => {
            currentQuestionIndex++;
            loadQuestion();
            checkBtn.onclick = checkAnswer;
        };
    }

    function updateStats() {
        scoreStat.textContent = `Score: ${score}`;
        streakStat.innerHTML = `Streak: ${streak} 🔥 <span class="streak-freeze"> | Freezes: ${streakFreezes} ❄️</span>`;
    }
    
    // --- INITIALIZATION ---
    checkBtn.onclick = checkAnswer;
    loadProgress().then(() => {
        loadQuestion();
    });
}