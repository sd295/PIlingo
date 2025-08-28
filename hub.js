// hub.js (Full, Final, Corrected Version)

import { auth, db } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

document.addEventListener('DOMContentLoaded', () => {
    const hubContainer = document.querySelector('.hub-container');
    const subject = hubContainer.dataset.subject;

    onAuthStateChanged(auth, (user) => {
        if (user) {
            loadAndDisplayProgress(user);
        } else {
            window.location.href = 'login.html';
        }
    });

    async function loadAndDisplayProgress(user) {
        const userDocRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userDocRef);

        let completedLessons = {};
        if (docSnap.exists() && docSnap.data().completedLessons) {
            completedLessons = docSnap.data().completedLessons;
        }

        const levelButtons = document.querySelectorAll('.level-btn');
        levelButtons.forEach(button => {
            if (button.disabled) return; 

            const lessonFile = button.dataset.lesson;
            // The key we check against, e.g., "html-l1.big_crispy"
            const lessonId = `${subject}-${lessonFile}`;

            // Check if this lesson's ID exists as a key in our completed lessons map
            if (completedLessons[lessonId]) {
                button.classList.add('completed');
                // Avoid adding multiple checkmarks
                if (!button.querySelector('.checkmark')) {
                    button.innerHTML += '<span class="checkmark">✓</span>';
                }
            }
        });
    }

    const levelButtons = document.querySelectorAll('.level-btn');
    levelButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.disabled) return;
            const lessonFile = button.dataset.lesson;
            window.location.href = `quiz.html?subject=${subject}&lesson=${lessonFile}`;
        });
    });
});