document.addEventListener('DOMContentLoaded', () => {

  // ---------- DARK MODE TOGGLE ----------
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  if (themeToggle) {
    // Load saved theme on page load
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark');
      themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark');
      const isDark = body.classList.contains('dark');
      themeToggle.textContent = isDark ? '☀️' : '🌙';
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  } else {
    console.error('❌ themeToggle button not found. Check that the button id="themeToggle" exists in index.html');
  }

  // ---------- MOBILE MENU TOGGLE ----------
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  } else {
    console.error('❌ hamburger or nav-links not found. Check index.html structure.');
  }

});