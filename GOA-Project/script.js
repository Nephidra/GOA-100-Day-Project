document.addEventListener('DOMContentLoaded', () => {
  const logo = document.getElementById('logo');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 120) {
      logo.classList.add('scrolled');
    } else {
      logo.classList.remove('scrolled');
    }
  });
});

