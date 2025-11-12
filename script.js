
// Audio toggle (requires user gesture on mobile)
const audio = document.getElementById('hum');
const toggle = document.getElementById('audioToggle');
let audioEnabled = false;

function tryPlay() {
  if (!audioEnabled) return;
  audio.volume = 0.25;
  audio.play().catch(()=>{});
}

toggle?.addEventListener('click', () => {
  audioEnabled = !audioEnabled;
  toggle.setAttribute('aria-pressed', String(audioEnabled));
  toggle.textContent = audioEnabled ? 'Mute Audio' : 'Unmute Audio';
  if (audioEnabled) tryPlay(); else audio.pause();
});

// Rotate slogans
const slogans = window.__THC_SLOGANS__ || [];
const sloganEl = document.getElementById('slogan');
function cycleSlogan(i=0){
  if (!sloganEl || slogans.length===0) return;
  sloganEl.style.opacity = 0;
  setTimeout(()=>{
    sloganEl.textContent = slogans[i % slogans.length];
    sloganEl.style.opacity = 1;
  }, 200);
  setTimeout(()=>cycleSlogan(i+1), 4000);
}
cycleSlogan(0);

// Attempt autoplay after user scroll/interaction (mobile)
window.addEventListener('scroll', tryPlay, {passive:true});
window.addEventListener('pointerdown', tryPlay, {passive:true});
