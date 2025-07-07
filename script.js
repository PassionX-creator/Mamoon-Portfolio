// Scroll animation for project cards
const projectCards = document.querySelectorAll('.slide-up');

window.addEventListener('scroll', () => {
  projectCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
});
