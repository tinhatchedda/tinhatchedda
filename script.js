/* ====== Audio toggle (if you add hum.mp3 later) ====== */
const audio = document.getElementById('bedHum');
const audioBtn = document.getElementById('audioToggle');
if (audio && audioBtn) {
  let enabled = false;
  const setLabel = () => audioBtn.textContent = enabled ? 'Mute Audio' : 'Unmute Audio';
  setLabel();
  audioBtn.addEventListener('click', async () => {
    enabled = !enabled;
    setLabel();
    try {
      if (enabled) { await audio.play(); }
      else { audio.pause(); }
    } catch(e){ /* ignore mobile autoplay blocks */ }
  });
}

/* ====== Auto-start all inline videos (safely) ====== */
document.querySelectorAll('video').forEach(v => {
  v.muted = true; v.playsInline = true; v.setAttribute('playsinline','');
  const playSafe = () => { v.play().catch(()=>{}); };
  // play when visible
  const io = new IntersectionObserver(([e])=>{
    if (e.isIntersecting) playSafe();
  }, {threshold:.25});
  io.observe(v);
});

/* ====== Rotating footer slogans ====== */
const slogans = [
  'Powered by Paranoia // Decoding Reality Since 2025',
  'Trust the Crumbs, Not the Source',
  'Keep It Counterclockwise',
  'Reality Melts at 420 °F',
  'Tin Foil, Thick Skin, Thin Veil',
  'We Do Our Own Research (Badly, But With Style)'
];
const rotator = document.getElementById('rotator');
let i = 0;
function tick(){
  if(!rotator) return;
  i = (i + 1) % slogans.length;
  rotator.classList.add('fade-out');
  setTimeout(()=>{
    rotator.textContent = slogans[i];
    rotator.classList.remove('fade-out');
  }, 220);
}
setInterval(tick, 3800);

/* ====== Gentle title shimmer pulse ====== */
(function(){
  const title = document.querySelector('.brand-gradient');
  if(!title) return;
  let t = 0;
  function pulse(){
    t += 0.008;
    title.style.filter = `hue-rotate(${(t*360)%360}deg) drop-shadow(0 0 12px rgba(255,255,255,.08))`;
    requestAnimationFrame(pulse);
  }
  pulse();
})();
