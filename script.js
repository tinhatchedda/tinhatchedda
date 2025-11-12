/* TIN HAT CHEDDA — Interactions */

// Rotate footer slogans + pulse color
const slogans = [
  "Powered by paranoia.",
  "Mint responsibly.",
  "Trust no chart.",
  "Reality melts at 420°F.",
  "Clockwise to forget. Counterclockwise to feed the portal."
];
(function rotator(){
  const el = document.getElementById('rotating-text');
  if(!el) return;
  let i = 0;
  el.textContent = slogans[0];
  setInterval(()=>{
    i = (i+1) % slogans.length;
    el.textContent = slogans[i];
  }, 2400);
})();

// Optional: lightly swap the hero subtitle messages to feel “alive”
const whispers = [
  "Signal acquired.",
  "Decryption nominal.",
  "Static carries secrets.",
  "The portal remembers.",
  "If you know, you know."
];
(function subtitleRotator(){
  const sub = document.querySelector('.subtitle');
  if(!sub) return;
  let i = 0;
  setInterval(()=>{
    i = (i+1) % whispers.length;
    // alternate between the brand line and a whisper for vibe
    sub.textContent = (i % 2 === 0) ? "Where Conspiracy Meets Currency" : whispers[i];
  }, 3600);
})();

// Mobile-safe autoplay kick (iOS often needs a “nudge” after first gesture)
(function autoplayNudge(){
  const vids = Array.from(document.querySelectorAll('video'));
  function tryPlay(v){
    v.muted = true;
    v.setAttribute('playsinline','');
    const p = v.play();
    if (p && typeof p.catch === 'function') p.catch(()=>{});
  }
  vids.forEach(tryPlay);
  ['touchstart','scroll','click','visibilitychange'].forEach(evt=>{
    window.addEventListener(evt, ()=>vids.forEach(tryPlay), {passive:true});
  });
})();

// Unmute toggle (hero + files)
(function audioToggle(){
  const btn = document.getElementById('mute-toggle') || document.getElementById('audioBtn');
  if(!btn) return;
  const vids = Array.from(document.querySelectorAll('video'));
  btn.addEventListener('click', ()=>{
    const shouldMute = !vids.every(v => v.muted === true) ? true : false; // if any unmuted, mute all; else unmute all
    const targetMute = !shouldMute; // we want to UNMUTE when user taps
    vids.forEach(v => {
      v.muted = !targetMute ? true : false; // keep logic simple: targetMute=true -> unmute
      const p = v.play(); if (p && p.catch) p.catch(()=>{});
    });
    btn.textContent = (vids[0] && vids[0].muted) ? 'Unmute Audio' : 'Mute Audio';
  });
})();
