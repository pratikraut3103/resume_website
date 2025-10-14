// Theme toggle with localStorage
(function(){
  const btn = document.getElementById('themeBtn');
  const apply = (t) => document.documentElement.setAttribute('data-theme', t);
  const current = localStorage.getItem('theme') || 'dark';
  apply(current);
  if(btn){
    btn.addEventListener('click', ()=>{
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      apply(next); localStorage.setItem('theme', next);
    });
  }
  // year
  const yr = document.getElementById('year'); if (yr) yr.textContent = new Date().getFullYear();
})();
