// Hero: ensure autoplay loop on some iOS builds
const hv = document.getElementById('heroVideo');
if (hv) {
  hv.muted = true; hv.loop = true; hv.playsInline = true;
  const tryPlay = () => hv.play().catch(()=>{});
  document.addEventListener('touchstart', tryPlay, {once:true});
  window.addEventListener('load', tryPlay);
}

// Footer rotating slogans
const slogans = [
  "Powered by Paranoia",
  "Mint Responsibly",
  "Decoding Reality Since 2025",
  "Clockwise to Forget — Counterclockwise to Feed the Portal",
  "Where Conspiracy Meets Currency",
  "Trust the Vibes, Verify the Blocks"
];
const rotator = document.getElementById('footer-rotator');
let i = 0;
function swap() {
  if (!rotator) return;
  rotator.style.opacity = 0;
  setTimeout(() => {
    rotator.textContent = slogans[i = (i+1) % slogans.length];
    rotator.style.opacity = 1;
  }, 180);
}
if (rotator) setInterval(swap, 2400);
