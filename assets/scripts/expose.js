// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById("horn-select");
  const hornImage = document.querySelector("#expose img");
  const audio = document.querySelector("audio");
  const volumeSlider = document.getElementById("volume");
  const volumeIcon = document.querySelector("#volume-controls img");
  const playButton = document.querySelector("button");

  // Set initial volume on audio element (slider starts at 50)
  audio.volume = volumeSlider.value / 100;

  // Horn selection
  hornSelect.addEventListener("change", function () {
    const selected = hornSelect.value;

    hornImage.src = `assets/images/${selected}.png`;
    hornImage.alt = selected;

    audio.src = `assets/audio/${selected}.mp3`;
  });

  // Volume slider
  volumeSlider.addEventListener("input", function () {
    const vol = parseInt(volumeSlider.value);

    audio.volume = vol / 100;

    if (vol === 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
      volumeIcon.alt = "Volume level 0";
    } else if (vol < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
      volumeIcon.alt = "Volume level 1";
    } else if (vol < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
      volumeIcon.alt = "Volume level 2";
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
      volumeIcon.alt = "Volume level 3";
    }
  });

  // Play button handler
  playButton.addEventListener("click", function () {
    if (!hornSelect.value || hornSelect.value === "select") return;

    audio.currentTime = 0;
    audio.play();

    if (hornSelect.value === "party-horn") {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
}
