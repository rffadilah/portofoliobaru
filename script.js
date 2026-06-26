const loadingScreen = document.getElementById('loadingScreen');
const siteShell = document.getElementById('siteShell');
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('load', () => {
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
    siteShell.classList.add('show');

    reveals.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('visible');
      }, 120 * index);
    });
  }, 2200);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach((element) => observer.observe(element));
