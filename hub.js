// hub.js
document.addEventListener('DOMContentLoaded', () => {
    const levelButtons = document.querySelectorAll('.level-btn');
    const hubContainer = document.querySelector('.hub-container');
    // Get the subject from the data-subject attribute we added in the HTML
    const subject = hubContainer.dataset.subject;

    levelButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.disabled) {
                return;
            }
            const lessonFile = button.dataset.lesson;
            
            // NEW: Build a URL with both the subject and the lesson
            window.location.href = `quiz.html?subject=${subject}&lesson=${lessonFile}`;
        });
    });
});