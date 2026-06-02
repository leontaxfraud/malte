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
