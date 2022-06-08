window.addEventListener('keydown', (e) => {
    playAudio(e.key);
    glowKey(e.key);
});

function glowKey(char) {
    let asciiNum = char.toUpperCase().charCodeAt(0);
    let query = `div[data-key="${asciiNum}"]`; // ES6 template strings
    let key = document.querySelector(query);
    if (!key) return;
    key.classList.toggle('playing');
    setTimeout(() => key.classList.toggle('playing'), 50);
}

function playAudio(char) {
    let asciiNum = char.toUpperCase().charCodeAt(0);
    let query = `audio[data-key="${asciiNum}"]`
    let audio = document.querySelector(query);
    if (!audio) return;
    audio.currentTime = 0; // rewind to start
    audio.play();
}
