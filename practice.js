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

    script.onload = () => { initializePractice(); };

    const projectTitle = document.getElementById('project-title');
    const projectInstructions = document.getElementById('project-instructions');
    const codeEditor = document.getElementById('code-editor');
    const livePreview = document.getElementById('live-preview');
    const runBtn = document.getElementById('run-btn');

    function initializePractice() {
        const practiceData = lessonContent.practice;
        projectTitle.textContent = practiceData.title;
        projectInstructions.textContent = practiceData.instructions;
        codeEditor.value = practiceData.defaultCode;
        document.getElementById('game-link').href = `minigame.html?subject=${subject}&lesson=${lessonFile}`;
        updatePreview();
    }

    function updatePreview() {
        const userCode = codeEditor.value;
        const previewDoc = livePreview.contentDocument || livePreview.contentWindow.document;
        previewDoc.open();
        previewDoc.write(userCode);
        previewDoc.close();
    }

    runBtn.addEventListener('click', updatePreview);
});