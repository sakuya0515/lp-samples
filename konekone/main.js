(() => {
  const btn = document.querySelector('.float');
  const fv = document.querySelector('.part');
  const cta = document.getElementById('cta');
  if (!btn || !('IntersectionObserver' in window)) return;
  const seen = new Map();
  const update = () => {
    const show = !seen.get(fv) && !seen.get(cta);
    btn.classList.toggle('show', show);
    btn.setAttribute('aria-hidden', show ? 'false' : 'true');
    btn.tabIndex = show ? 0 : -1;
  };
  const io = new IntersectionObserver(es => { es.forEach(e => seen.set(e.target, e.isIntersecting)); update(); }, { threshold: 0.05 });
  io.observe(fv); io.observe(cta);
})();
