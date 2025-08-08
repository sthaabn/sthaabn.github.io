// Year + countdown
(function(){
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();

  const el = document.querySelector('.countdown');
  if (!el) return;
  const deadline = new Date(el.dataset.deadline || Date.now() + 30*24*3600*1000);

  const dd = document.getElementById('dd');
  const hh = document.getElementById('hh');
  const mm = document.getElementById('mm');
  const ss = document.getElementById('ss');

  function tick(){
    const t = Math.max(0, deadline - new Date());
    const d = Math.floor(t / 86400000);
    const h = Math.floor((t % 86400000) / 3600000);
    const m = Math.floor((t % 3600000) / 60000);
    const s = Math.floor((t % 60000) / 1000);
    dd.textContent = String(d).padStart(2,'0');
    hh.textContent = String(h).padStart(2,'0');
    mm.textContent = String(m).padStart(2,'0');
    ss.textContent = String(s).padStart(2,'0');
  }
  tick();
  setInterval(tick, 1000);
})();
