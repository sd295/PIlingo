// quiz.js
document.addEventListener('DOMContentLoaded', () => {
    // Get the lesson file from the URL parameter
    const params = new URLSearchParams(window.location.search);
    const lessonFile = params.get('lesson');

    // If no lesson is specified, redirect back to the hub
    if (!lessonFile) {
        window.location.href = 'index.html';
        return;
    }

    // Dynamically create a script tag to load the lesson data
    const script = document.createElement('script');
    script.src = `lessons/${lessonFile}.js`;
    document.head.appendChild(script);

    // This function will run AFTER the lesson script has been loaded
    script.onload = () => {
        initializeQuiz();
    };

    script.onerror = () => {
        // Handle cases where the lesson file doesn't exist
        document.getElementById('lesson-title').textContent = 'Error: Lesson not found.';
    };

    function initializeQuiz() {
        // --- All the previous quiz logic now goes inside here ---
        let currentQuestionIndex = 0;
        let score = 0;
        let streak = 0;
        let selectedAnswer = null;

        const promptText = document.getElementById('prompt-text');
        const optionsContainer = document.getElementById('options-container');
        const checkBtn = document.getElementById('check-btn');
        const feedbackContainer = document.querySelector('.feedback-container');
        const feedbackMessage = document.getElementById('feedback-message');
        const feedbackText = document.getElementById('feedback-text');
        const correctAnswerText = document.getElementById('correct-answer-text');
        const scoreStat = document.getElementById('score-stat');
        const streakStat = document.getElementById('streak-stat');
        
        // Set lesson title from the file name (e.g., l1.html -> Lesson 1)
        const lessonName = lessonFile.split('.')[0].replace('l', 'Lesson ').toUpperCase();
        document.getElementById('lesson-title').textContent = `HTML: ${lessonName}`;


        function loadQuestion() {
            selectedAnswer = null;
            checkBtn.disabled = true;
            checkBtn.textContent = 'Check';
            feedbackContainer.className = 'feedback-container';
            feedbackMessage.classList.add('hidden');
            optionsContainer.innerHTML = '';

            if (currentQuestionIndex >= lessonData.length) {
                promptText.textContent = 'Lesson Complete!';
                document.getElementById('quiz-header').querySelector('h2').textContent = 'Congratulations! 🎉';
                checkBtn.textContent = 'Back to Hub';
                checkBtn.disabled = false;
                checkBtn.onclick = () => window.location.href = 'index.html';
                optionsContainer.innerHTML = '';
                return;
            }

            const question = lessonData[currentQuestionIndex];
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
            const question = lessonData[currentQuestionIndex];
            const isCorrect = selectedAnswer === question.correctAnswer;

            feedbackMessage.classList.remove('hidden');
            if (isCorrect) {
                feedbackContainer.className = 'feedback-container correct';
                feedbackText.textContent = 'You are correct!';
                correctAnswerText.innerHTML = '';
                score += 10;
                streak++;
            } else {
                feedbackContainer.className = 'feedback-container incorrect';
                feedbackText.textContent = 'Oops! That\'s not right.';
                correctAnswerText.innerHTML = `Correct answer: ${question.correctAnswer}`;
                streak = 0;
            }
            updateStats();
            checkBtn.textContent = 'Continue';
            checkBtn.onclick = () => {
                currentQuestionIndex++;
                loadQuestion();
                checkBtn.onclick = checkAnswer;
            };
        }

        function updateStats() {
            scoreStat.textContent = `Score: ${score}`;
            streakStat.textContent = `Streak: ${streak} 🔥`;
        }

        checkBtn.onclick = checkAnswer;
        loadQuestion();
    }
});