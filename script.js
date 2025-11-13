document.addEventListener("DOMContentLoaded", () => {
  // Hero trailer mute / unmute on landing page
  const trailer = document.getElementById("heroTrailer");
  const muteToggle = document.getElementById("muteToggle");

  if (trailer && muteToggle) {
    // Make sure it starts muted for autoplay rules
    trailer.muted = true;

    const updateLabel = () => {
      muteToggle.textContent = trailer.muted
        ? "Unmute Audio"
        : "Mute Audio";
    };

    muteToggle.addEventListener("click", () => {
      trailer.muted = !trailer.muted;
      trailer.play().catch(() => {});
      updateLabel();
    });

    updateLabel();
  }
});
