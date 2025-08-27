// minigame.js
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const lessonFile = params.get('lesson');

    if (!lessonFile) {
        window.location.href = 'index.html';
        return;
    }

    const script = document.createElement('script');
    script.src = `lessons/${lessonFile}.js`;
    document.head.appendChild(script);

    script.onload = () => {
        initializeGame();
    };

    const gameTitle = document.getElementById('game-title');
    const gameInstructions = document.getElementById('game-instructions');
    const draggableTagsContainer = document.getElementById('draggable-tags');
    const dropzone = document.getElementById('dropzone');
    const livePreview = document.getElementById('live-preview');
    const checkBtn = document.getElementById('check-game-btn');
    const feedback = document.getElementById('game-feedback');

    function initializeGame() {
        const gameData = lessonContent.minigame;
        
        gameTitle.textContent = gameData.title;
        gameInstructions.textContent = gameData.instructions;
        
        // Create draggable elements
        gameData.draggableTags.forEach(tagHTML => {
            const tagEl = document.createElement('div');
            tagEl.className = 'draggable-tag';
            tagEl.innerHTML = tagHTML;
            tagEl.draggable = true;
            tagEl.addEventListener('dragstart', handleDragStart);
            draggableTagsContainer.appendChild(tagEl);
        });
    }

    // Drag and Drop Handlers
    function handleDragStart(e) {
        e.dataTransfer.setData('text/html', e.target.innerHTML);
    }

    dropzone.addEventListener('dragover', e => {
        e.preventDefault(); // This is necessary to allow dropping
        dropzone.classList.add('drag-over');
    });

    dropzone.addEventListener('dragleave', () => {
        dropzone.classList.remove('drag-over');
    });

    dropzone.addEventListener('drop', e => {
        e.preventDefault();
        dropzone.classList.remove('drag-over');
        const tagHTML = e.dataTransfer.getData('text/html');
        // Sanitize and append
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = tagHTML;
        dropzone.appendChild(tempDiv.firstChild);
        updatePreview();
    });

    function updatePreview() {
        const previewDoc = livePreview.contentDocument || livePreview.contentWindow.document;
        previewDoc.open();
        previewDoc.write(dropzone.innerHTML);
        previewDoc.close();
    }

    checkBtn.addEventListener('click', () => {
        // Create a simple, comparable string representation of the user's structure
        let userStructure = "";
        dropzone.childNodes.forEach(node => {
            if (node.nodeType === 1) { // It's an element
                // Get the main tag name, ignoring attributes for this simple check
                userStructure += `<${node.tagName.toLowerCase()}>`;
                // Basic check for nested elements for Level 2
                if (node.children.length > 0) {
                    userStructure += Array.from(node.children).map(child => `<${child.tagName.toLowerCase()}>`).join('');
                }
                userStructure += `</${node.tagName.toLowerCase()}>`;
            }
        });
        
        // A more robust solution check (removes whitespace and simplifies tags)
        const simplifiedSolution = lessonContent.minigame.solution.replace(/<(\w+)[^>]*>/g, "<$1>").replace(/<\/\w+>/g, "</$1>");
        const simplifiedUserStructure = userStructure.replace(/<(\w+)[^>]*>/g, "<$1>").replace(/<\/\w+>/g, "</$1>");


        feedback.classList.remove('hidden');
        if (simplifiedUserStructure.includes(simplifiedSolution)) { // Use includes for nested solutions
            feedback.textContent = 'Perfect! Structure is correct! 🎉';
            feedback.style.color = 'var(--green)';
        } else {
            feedback.textContent = 'Not quite right. Check the nesting and order of the tags.';
            feedback.style.color = 'var(--red)';
        }
    });
});