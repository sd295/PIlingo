document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const subject = params.get('subject');
    const lessonFile = params.get('lesson');

    if (!subject || !lessonFile) {
        window.location.href = 'index.html';
        return;
    }

    const script = document.createElement('script');
    script.src = `lessons/${subject}/${lessonFile}.js`;
    document.head.appendChild(script);

    script.onload = () => { initializeQuiz(); };
    script.onerror = () => { document.getElementById('lesson-title').textContent = 'Error: Lesson not found.'; };

    function initializeQuiz() {
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
        
        document.getElementById('lesson-title').textContent = lessonContent.title;

        function loadQuestion() {
            selectedAnswer = null;
            checkBtn.disabled = true;
            checkBtn.textContent = 'Check';
            checkBtn.classList.remove('hidden');
            optionsContainer.className = 'options-grid';
            feedbackContainer.className = 'feedback-container';
            feedbackMessage.classList.add('hidden');
            optionsContainer.innerHTML = '';

            if (currentQuestionIndex >= lessonContent.questions.length) {
                promptText.textContent = 'Lesson Complete!';
                document.getElementById('quiz-header').querySelector('h2').textContent = 'Congratulations! 🎉';
                optionsContainer.innerHTML = '';

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