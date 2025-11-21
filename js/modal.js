const modal = document.querySelector('[data-modal]');
const openBtn = document.querySelector('[data-modal-open]');
const closeBtn = document.querySelector('[data-modal-close]');

openBtn.addEventListener('click', () => {
  modal.classList.add('is-open');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('is-open');
});

modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.remove('is-open');
  }
});