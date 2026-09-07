const revealItems = document.querySelectorAll(
  "[data-reveal], .timeline__item, .skill, .project-card, .section-head, .intro__photo, .intro__copy, .skills__group, .contact__links"
);

revealItems.forEach((item) => {
  if (item.matches(".section-head, .intro__photo, .intro__copy, .skills__group, .contact__links")) {
    item.classList.add("reveal-on-scroll");
  }
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible", "is-revealed");
    observer.unobserve(entry.target);
  });
}, { threshold: 0.16 });

revealItems.forEach((item) => revealObserver.observe(item));
