// explore.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  const voiceSelect = document.querySelector("#explore select");
  const textarea = document.querySelector("#explore textarea");
  const playButton = document.querySelector("#explore button");
  const faceImage = document.querySelector("#explore img");

  let voices = [];

  // Load voices into the dropdown
  function populateVoices() {
    voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = "";

    voices.forEach((voice, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  speechSynthesis.addEventListener("voiceschanged", populateVoices);

  populateVoices();

  // Play button handler
  playButton.addEventListener("click", function () {
    const text = textarea.value.trim();
    if (!text) return;

    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    // Assign selected voice
    const selectedIndex = parseInt(voiceSelect.value);
    if (voices[selectedIndex]) {
      utterance.voice = voices[selectedIndex];
    }

    // Swap to open-mouthed face while speaking
    utterance.addEventListener("start", function () {
      faceImage.src = "assets/images/smiling-open.png";
      faceImage.alt = "Talking face";
    });

    // Swap back when done
    utterance.addEventListener("end", function () {
      faceImage.src = "assets/images/smiling.png";
      faceImage.alt = "Smiling face";
    });

    speechSynthesis.speak(utterance);
  });
}
