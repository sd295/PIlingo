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

    script.onload = () => { initializeGame(); };

    const gameTitle = document.getElementById('game-title');
    const gamePrompt = document.getElementById('game-prompt');
    const draggableTagsContainer = document.getElementById('draggable-tags');
    const dropzone = document.getElementById('dropzone');
    const livePreview = document.getElementById('live-preview');
    const checkBtn = document.getElementById('check-game-btn');
    const feedback = document.getElementById('game-feedback');

    function initializeGame() {
        const gameData = lessonContent.minigame;
        gameTitle.textContent = gameData.title;
        gamePrompt.textContent = gameData.prompt;
        
        gameData.draggableTags.forEach(tagHTML => {
            const tagEl = document.createElement('div');
            tagEl.className = 'draggable-tag';
            tagEl.innerHTML = tagHTML;
            tagEl.draggable = true;
            tagEl.addEventListener('dragstart', handleDragStart);
            draggableTagsContainer.appendChild(tagEl);
        });
    }

    function handleDragStart(e) { e.dataTransfer.setData('text/html', e.target.innerHTML); }
    dropzone.addEventListener('dragover', e => { e.preventDefault(); dropzone.classList.add('drag-over'); });
    dropzone.addEventListener('dragleave', () => { dropzone.classList.remove('drag-over'); });
    dropzone.addEventListener('drop', e => {
        e.preventDefault();
        dropzone.classList.remove('drag-over');
        const tagHTML = e.dataTransfer.getData('text/html');
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = tagHTML;
        dropzone.appendChild(tempDiv.firstChild);
        updatePreview();
    });

    function updatePreview() {
        const previewDoc = livePreview.contentDocument || livePreview.contentWindow.document;
        previewDoc.open();
        previewDoc.write('<body>' + dropzone.innerHTML + '</body>');
        previewDoc.close();
    }

    checkBtn.addEventListener('click', () => {
        let userStructure = "";
        dropzone.childNodes.forEach(node => {
            if (node.nodeType === 1) {
                userStructure += `<${node.tagName.toLowerCase()}>`;
                if (node.children.length > 0) {
                    let childrenStructure = "";
                    Array.from(node.children).forEach(child => {
                        childrenStructure += `<${child.tagName.toLowerCase()}>`;
                        if(child.children.length > 0) {
                           Array.from(child.children).forEach(grandchild => {
                               childrenStructure += `<${grandchild.tagName.toLowerCase()}></${grandchild.tagName.toLowerCase()}>`;
                           });
                        }
                        childrenStructure += `</${child.tagName.toLowerCase()}>`;
                    });
                     userStructure += childrenStructure;
                }
                userStructure += `</${node.tagName.toLowerCase()}>`;
            }
        });
        
        const simplifiedSolution = lessonContent.minigame.solution.replace(/<(\w+)[^>]*>/g, "<$1>").replace(/<\/\w+>/g, "</$1>");
        const simplifiedUserStructure = userStructure.replace(/<(\w+)[^>]*>/g, "<$1>").replace(/<\/\w+>/g, "</$1>");

        feedback.classList.remove('hidden');
        if (simplifiedUserStructure.includes(simplifiedSolution)) {
            feedback.textContent = 'Correct! You solved the challenge! 🎉';
            feedback.style.color = 'var(--green)';
        } else {
            feedback.textContent = 'Not quite. Re-read the prompt and check your structure.';
            feedback.style.color = 'var(--red)';
        }
    });
});