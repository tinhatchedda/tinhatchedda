document.addEventListener("DOMContentLoaded", () => {
  // ENTER THE INCIDENT (from landing)
  const enterButtons = document.querySelectorAll("[data-enter-files]");
  enterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      window.location.href = "incident.html#files";
    });
  });

  // HERO VIDEO AUDIO TOGGLE (landing page)
  const heroVideo = document.getElementById("heroVideo");
  const audioToggle = document.getElementById("audioToggle");

  if (heroVideo && audioToggle) {
    const updateLabel = () => {
      if (heroVideo.muted) {
        audioToggle.textContent = "🔇 Unmute Trailer";
      } else {
        audioToggle.textContent = "🔊 Mute Trailer";
      }
    };

    updateLabel();

    audioToggle.addEventListener("click", () => {
      heroVideo.muted = !heroVideo.muted;
      updateLabel();
    });
  }

  // ROTATING TAGLINES
  const rotatingEls = document.querySelectorAll("#rotatingTagline");
  if (rotatingEls.length > 0) {
    const lines = [
      "Powered by paranoia.",
      "Where conspiracy meets currency.",
      "This broadcast never happened.",
      "Mint responsibly.",
      "Trust no microwave.",
      "You were here before. Probably.",
    ];

    let index = 0;
    const rotate = () => {
      index = (index + 1) % lines.length;
      rotatingEls.forEach((el) => {
        el.textContent = lines[index];
      });
    };

    setInterval(rotate, 4200);
  }
});
