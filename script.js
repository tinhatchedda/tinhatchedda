// script.js

// HERO AUDIO TOGGLE (HOME PAGE)
const heroVideo = document.querySelector(".hero-video");
const heroToggleBtn = document.getElementById("hero-audio-toggle");

if (heroVideo && heroToggleBtn) {
  heroToggleBtn.addEventListener("click", () => {
    const isMuted = heroVideo.muted;
    heroVideo.muted = !isMuted;
    heroToggleBtn.textContent = isMuted ? "Mute Audio" : "Unmute Audio";

    // try to play in case browser blocked autoplay with sound
    if (!heroVideo.paused) return;
    heroVideo
      .play()
      .catch(() => {
        // ignore autoplay errors silently
      });
  });
}

// SMALL NICE-TO-HAVE: mark active nav link by pathname
const navLinks = document.querySelectorAll(".main-nav .nav-link");
navLinks.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});
