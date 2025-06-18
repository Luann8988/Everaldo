function toggleInfo(btn) {
    const card = btn.closest('.card');
    const info = card.querySelector('.extra-info');
    if (info.style.display === 'block') {
      info.style.display = 'none';
      btn.textContent = 'More info';
    } else {
      info.style.display = 'block';
      btn.textContent = 'Less info';
    }
  }