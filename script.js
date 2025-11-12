// Rotating slogan
const slogans = [
  "Powered by paranoia.",
  "Mint responsibly.",
  "Trust the cheese. Question everything else.",
  "Clocks are suggestions.",
  "Broadcasting on 4:20 FM."
];
(function rotate() {
  const el = document.getElementById('rotator');
  if (!el) return;
  let i = 0;
  setInterval(() => {
    i = (i + 1) % slogans.length;
    el.textContent = slogans[i];
  }, 2600);
})();

// Mobile-safe audio toggle (unmutes all videos on tap)
const audioBtn = document.getElementById('audioBtn');
function setMuted(allMuted){
  document.querySelectorAll('video').forEach(v=>{
    v.muted = allMuted;
    if (v.paused) v.play().catch(()=>{});
  });
}
if (audioBtn){
  audioBtn.addEventListener('click', ()=>{
    const nowMuted = !document.getElementById('heroVideo').muted;
    setMuted(nowMuted);
    audioBtn.textContent = nowMuted ? 'Unmute Audio' : 'Mute Audio';
  });
}

// Ensure inline autoplay on iOS
document.querySelectorAll('video').forEach(v=>{
  v.setAttribute('playsinline','');
  v.play().catch(()=>{ /* iOS will start after first tap */ });
});
