// Basic JS for hero audio + small niceties

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // HERO AUDIO TOGGLE
  const heroVideo = document.getElementById("heroVideo");
  const heroAudioToggle = document.getElementById("heroAudioToggle");

  if (heroVideo && heroAudioToggle) {
    heroAudioToggle.addEventListener("click", () => {
      const nowMuted = !heroVideo.muted;
      heroVideo.muted = nowMuted;

      heroAudioToggle.textContent = nowMuted ? "Unmute Audio" : "Mute Audio";

      // try to play if browser paused on unmute
      heroVideo
        .play()
        .catch(() => {
          // autoplay might be blocked; ignore
        });
    });
  }

  // Set active nav by body class (extra safety)
  const navLinks = document.querySelectorAll(".site-nav .nav-link");
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (body.classList.contains("page-home") && href === "index.html") {
      link.classList.add("active");
    }
    if (body.classList.contains("page-files") && href === "incident.html") {
      link.classList.add("active");
    }
  });
});
