
console.log("MBA Landing page loaded");

(function() {
	const saved = localStorage.getItem('theme');
	if (saved === 'light' || (!saved && window.matchMedia('(prefers-color-scheme: light)').matches)) {
	  document.documentElement.classList.add('dark');
	}
})();


  // ── Dark mode toggle ──────────────────────────────────────
  function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.getElementById('modeLabel').textContent = isDark ? 'Dark' : 'Light';
  }

  // Set initial label
  document.addEventListener('DOMContentLoaded', () => {
    const isDark = document.documentElement.classList.contains('dark');
    document.getElementById('modeLabel').textContent = isDark ? 'Dark' : 'Light';
  });

  // ── Form submit ───────────────────────────────────────────
  function handleSubmit(e) {
    e.preventDefault();
    document.getElementById('leadForm').classList.add('hidden');
    document.getElementById('formSuccess').classList.remove('hidden');
  }

  // ── Scroll-triggered fade ─────────────────────────────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.card, .review-card, details').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease, background-color 0.3s ease, border-color 0.3s ease';
    observer.observe(el);
  });
