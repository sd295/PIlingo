document.addEventListener('DOMContentLoaded', () => {
    // Get references to the HTML elements
    const chatBox = document.getElementById('chat-box');
    const chatForm = document.getElementById('chat-form');
    const userInput = document.getElementById('user-input');
    const modelTitle = document.getElementById('model-title');
    const pliBtn = document.getElementById('pli-btn');
    const gemmaBtn = document.getElementById('gemma-btn');

    // --- MODEL AND API CONFIGURATION ---
    let currentModel = 'pli7'; // Changed from 'pli6lte' to 'pli7'

    // PLI 7 API Configuration
    const pli7ApiKey = 'pli7_8e29e7ad8e6b55d74323996a8e1157d86b4bc38edd948f53';
    const pli7ApiUrl = 'https://api.plistudio.net/v1/chat';

    // Gemma 3 API Configuration
    const gemmaApiKey = 'AIzaSyCE_M4RAxmxpihamBObxP22WS6o20RqcIw'; 
    const gemmaApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent?key=${gemmaApiKey}`;


    // --- EVENT LISTENERS ---

    // Listen for when the user submits the form manually
    if (chatForm) {
        chatForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const messageText = userInput.value.trim();
            if (messageText) {
                addMessageToChatbox('user', messageText, false);
                userInput.value = '';
                getBotResponse(messageText);
            }
        });
    }

    // Event listeners for model switching buttons
    if (pliBtn) {
        pliBtn.addEventListener('click', () => switchModel('pli7'));
    }
    if (gemmaBtn) {
        gemmaBtn.addEventListener('click', () => switchModel('gemma3'));
    }

    // --- Listener for postMessage from the parent window ---
    window.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'AUTOGENERATE_ANSWER') {
            const autoPrompt = event.data.prompt;
            if (autoPrompt) {
                 addMessageToChatbox('user', autoPrompt, false);
                 if (userInput) userInput.value = '';
                 getBotResponse(autoPrompt);
            }
        }
    });


    // --- CORE FUNCTIONS ---

    /**
     * Switches the current AI model.
     */
    function switchModel(model) {
        currentModel = model;
        if (chatBox) chatBox.innerHTML = ''; // Clear chatbox for a fresh start

        if (model === 'pli7') {
            if (modelTitle) modelTitle.textContent = 'PLI 7 (Hybrid Engine)';
            if (pliBtn) pliBtn.classList.add('active');
            if (gemmaBtn) gemmaBtn.classList.remove('active');
            addMessageToChatbox('PLI 7', 'Connected. Accessing live Web, Wikipedia, and Media sources.', false);
        } else {
            if (modelTitle) modelTitle.textContent = 'Gemma 3 (Direct)';
            if (gemmaBtn) gemmaBtn.classList.add('active');
            if (pliBtn) pliBtn.classList.remove('active');
            addMessageToChatbox('Gemini', 'Ask me anything!', false);
        }
    }

    /**
     * Parses the proprietary tags and media returned by the PLI 7 API.
     */
    function parsePli7Response(data) {
        let text = data.answer || "";
        let suppressMedia = false;

        // 1. Silent Media Suppressor <nIMG<>>
        if (text.includes('<nIMG<>>')) {
            suppressMedia = true;
            text = text.replace(/<nIMG<>>/g, ''); // Remove tag to clean UI
        }

        // 2. Hide image generation prompts <plii4>...</plii4>
        text = text.replace(/<plii4>[\s\S]*?<\/plii4>/g, '');

        // 3. Explicit Media Focus </Keyword/>
        text = text.replace(/<\/(.*?)\/>/g, '<strong>$1</strong>');

        // 4. Geolocation Trigger <map>Location</map>
        text = text.replace(/<map>(.*?)<\/map>/gi, '<a href="https://www.google.com/maps/search/?api=1&query=$1" target="_blank" style="display:inline-flex; align-items:center; padding:2px 8px; background-color:#e8f0fe; color:#1a73e8; border-radius:12px; text-decoration:none; font-weight:600; font-size:14px; margin-bottom:4px;">📍 $1</a>');

        // 5. Visual Engine (Mermaid) <diagram>...</diagram>
        text = text.replace(/<diagram>([\s\S]*?)<\/diagram>/gi, '<div class="mermaid" style="background:#f4f4f4; padding:10px; border-radius:8px; margin:10px 0; overflow-x:auto; font-family:monospace; border:1px solid #ddd;">$1</div>');

        // 6. Live UI / Code Block <stp>...</stp>
        text = text.replace(/<stp>([\s\S]*?)<\/stp>/gi, function(match, innerHtml) {
            const safeHtml = innerHtml.replace(/"/g, '&quot;');
            return `<iframe srcdoc="${safeHtml}" sandbox="allow-scripts allow-same-origin" style="width:100%; height:320px; border:1px solid #ccc; border-radius:8px; margin-top:10px; background:#fff;"></iframe>`;
        });

        // 7. Standard Markdown Formatting
        text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
        text = text.replace(/^[\*\-]\s+(.*)$/gm, '&bull; $1'); // Safe bullet points
        text = text.replace(/\n/g, '<br>');

        // 8. Append Retrieved Media Cards (If not suppressed)
        if (!suppressMedia && data.media && data.media.length > 0) {
            let mediaHtml = '<div style="display:flex; gap:12px; overflow-x:auto; padding:12px 0; margin-top:8px;">';
            data.media.forEach(m => {
                mediaHtml += `
                    <div style="flex: 0 0 220px; border:1px solid #e0e0e0; border-radius:10px; overflow:hidden; background:#fff; box-shadow:0 2px 4px rgba(0,0,0,0.05);">
                        ${m.img ? `<img src="${m.img}" style="width:100%; height:130px; object-fit:cover; display:block;">` : ''}
                        <div style="padding:10px;">
                            <a href="${m.url}" target="_blank" style="text-decoration:none; color:#1a73e8; font-weight:600; font-size:14px; display:block; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" title="${m.title}">${m.title || 'View Source'}</a>
                            <p style="margin:4px 0 0; color:#5f6368; font-size:12px; font-weight:500;">${m.source || 'Media Source'}</p>
                        </div>
                    </div>
                `;
            });
            mediaHtml += '</div>';
            text += mediaHtml; // Attach media to the bottom of the response
        }

        return text;
    }

    /**
     * Standard message text formatter (used for User inputs & Gemma fallback)
     */
    function formatMessageText(text) {
        let formattedText = text;
        formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        formattedText = formattedText.replace(/\n/g, '<br>');
        return formattedText;
    }
    
    /**
     * Adds a message to the chat box display.
     * @param {boolean} isHtml - Set to true if the content is already parsed HTML (from PLI 7).
     */
    function addMessageToChatbox(sender, content, isHtml = false) {
        if (!chatBox) return; 

        const messageElement = document.createElement('div');
        const senderClass = (sender === 'user') ? 'user-message' : 'bot-message';
        messageElement.classList.add('message', senderClass);

        const contentContainer = document.createElement('div'); // Using div to safely wrap iframes/cards
        
        let finalHtml = isHtml ? content : formatMessageText(content);

        const displayedContent = (sender !== 'user') 
            ? `<strong>${sender}:</strong><br> ${finalHtml}` 
            : finalHtml;
        
        contentContainer.innerHTML = displayedContent;
        messageElement.appendChild(contentContainer);
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    /**
     * Main logic to get bot response, including the robust failure fallback.
     */
    async function getBotResponse(messageText) {
        showTypingIndicator();
        let finalResponse = '';
        let finalSender = 'bot';
        let isHtmlResponse = false;

        if (currentModel === 'pli7') {
            // 1. Attempt to get the rich data object from PLI 7
            let pliData = await getPliResponse(messageText);

            // 2. Define known "unhelpful" content responses
            const unhelpfulContent = [
                "I'm not sure about",
                "I couldn't solve that math problem.", 
                "That's a great question about"
            ];

            // 3. Determine if a fallback is needed
            let needsFallback = false;

            if (!pliData || !pliData.answer) {
                // Case 1: Server/network error or invalid response format.
                needsFallback = true;
                console.log("PLI 7 failed (error/invalid response). Falling back to Gemma.");
            } else {
                // Case 2: We got a response, check if it contains unhelpful content.
                if (unhelpfulContent.some(phrase => pliData.answer.startsWith(phrase))) {
                    needsFallback = true;
                    console.log("PLI 7 response was unhelpful. Falling back to Gemma.");
                }
            }
            
            // 4. Execute the logic based on the fallback check
            if (needsFallback) {
                finalResponse = await getGemmaResponse(messageText);
                finalSender = 'Gemini';
                isHtmlResponse = false; 
            } else {
                // If no fallback needed, parse the specific PLI 7 structure
                finalResponse = parsePli7Response(pliData);
                finalSender = 'PLI 7';
                isHtmlResponse = true; 
            }

        } else {
            // If model is already Gemma, just use it
            finalResponse = await getGemmaResponse(messageText);
            finalSender = 'Gemini';
            isHtmlResponse = false;
        }

        hideTypingIndicator();
        
        if (finalResponse) {
            addMessageToChatbox(finalSender, finalResponse, isHtmlResponse);
        } else {
            addMessageToChatbox('bot', 'Sorry, both AI services seem to be unavailable at the moment.', false);
        }
    }

    /**
     * Gets a response from the PLI 7 API.
     */
    async function getPliResponse(messageText) {
        try {
            const response = await fetch(pli7ApiUrl, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'x-api-key': pli7ApiKey // PLI 7 standard auth header
                },
                body: JSON.stringify({ 
                    message: messageText,
                    // Pass specific research sources based on API docs
                    sources: ["web", "youtube"] 
                }),
            });

            if (!response.ok) {
                console.error(`PLI 7 server error: ${response.status}`);
                return null;
            }

            const data = await response.json();
            
            if (!data || !data.answer) {
                console.error("PLI 7 returned an invalid or empty response object.");
                return null; 
            }

            // Return the full JSON object to parse media arrays and tags
            return data; 

        } catch (error) {
            console.error("A network or fetch error occurred with PLI 7:", error);
            return null;
        }
    }

    /**
     * Gets a response from the Gemma 3 API.
     */
    async function getGemmaResponse(messageText) {
        if (gemmaApiKey === 'YOUR_API_KEY_HERE' || gemmaApiKey === '') {
            return 'Please add your Google AI API key to chat.js to use the Gemma 3 model.';
        }

        try {
            const response = await fetch(gemmaApiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: messageText }] }]
                }),
            });
            if (!response.ok) throw new Error(`API request failed with status ${response.status}`);
            const data = await response.json();
            return data.candidates[0].content.parts[0].text;
        } catch (error) {
            console.error('Error with Gemma 3 API:', error);
            return 'Sorry, something went wrong with the Gemma 3 model.';
        }
    }


    // --- UI HELPER FUNCTIONS (TYPING INDICATOR) ---

    function showTypingIndicator() {
        if (!chatBox) return;
        if (document.getElementById('typing-indicator')) return;
        const indicator = document.createElement('div');
        indicator.classList.add('message', 'bot-message', 'typing-indicator');
        indicator.innerHTML = '<span></span><span></span><span></span>';
        indicator.id = 'typing-indicator';
        chatBox.appendChild(indicator);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function hideTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) {
            chatBox.removeChild(indicator);
        }
    }
    
    // Initial setup to ensure model is set on load
    switchModel(currentModel);
});