// Tin Hat Chedda — Scripts

// ---- Tilt (subtle, GPU-friendly, disabled for reduced motion) ----
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReduced) {
  document.querySelectorAll('.tilt').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(800px) rotateX(${y * -6}deg) rotateY(${x * 6}deg) translateY(-2px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ---- Footer slogan rotator (optional) ----
const slogans = [
  'Powered by Paranoia.',
  'Mint Responsibly.',
  'Trust No Microwave.',
  'Reality Melts at 420°F.',
  'Decoding Reality Since 2025.'
];
const el = document.getElementById('footer-rotator');
if (el){
  let i = 0;
  setInterval(()=>{ i=(i+1)%slogans.length; el.textContent = slogans[i]; }, 2600);
}
