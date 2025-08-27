// hub.js
document.addEventListener('DOMContentLoaded', () => {
    const levelButtons = document.querySelectorAll('.level-btn');

    levelButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Do nothing if the button is disabled (locked)
            if (button.disabled) {
                return;
            }

            // Get the lesson file name from the 'data-lesson' attribute
            const lessonFile = button.dataset.lesson;
            
            // Redirect to the quiz page, passing the lesson file as a URL parameter
            window.location.href = `quiz.html?lesson=${lessonFile}`;
        });
    });
});