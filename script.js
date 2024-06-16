document.getElementById('darkModeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark');
});

// Mobile Menu Toggle Script
document.getElementById('nav-toggle').addEventListener('click', function () {
    document.getElementById('nav-content').classList.toggle('hidden');
});

// Typing effect
const words = ["Java!", "Python!", "C++!", "JavaScript!", "Web Development!"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const typingEffectElement = document.getElementById("typing-effect");

function type() {
    if (i < words.length) {
        if (!isDeleting && j <= words[i].length) {
            currentWord = words[i].substring(0, j);
            typingEffectElement.innerHTML = currentWord;
            j++;
        }

        if (isDeleting && j <= words[i].length) {
            currentWord = words[i].substring(0, j);
            typingEffectElement.innerHTML = currentWord;
            j--;
        }

        if (j == words[i].length) {
            isDeleting = true;
        }

        if (isDeleting && j === 0) {
            currentWord = "";
            isDeleting = false;
            i++;
        }

        if (i === words.length) {
            i = 0;
        }
    }
    const speed = isDeleting ? 50 : 150;
    setTimeout(type, speed);
}

document.addEventListener("DOMContentLoaded", function () {
    if (typingEffectElement) {
        type();
    }
});