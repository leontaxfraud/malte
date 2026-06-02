// Hamburger navigation
const hamburger = document.getElementById('nav-hamburger');
const navList = document.getElementById('nav-list');

if (hamburger && navList) {
    hamburger.addEventListener('click', () => {
        const isOpen = navList.classList.toggle('is-open');
        hamburger.classList.toggle('is-open', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen);
    });

    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('is-open');
            hamburger.classList.remove('is-open');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
}

// Map spot filter
const filterBtns = document.querySelectorAll('.filter-btn');
const spotGroups = document.querySelectorAll('.spot-group');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const active = btn.dataset.combo.split('&').map(Number);

    spotGroups.forEach(g => {
      const spot = Number(g.dataset.spot);
      if (active.includes(spot)) {
        g.classList.remove('dimmed');
      } else {
        g.classList.add('dimmed');
      }
    });
  });
});
