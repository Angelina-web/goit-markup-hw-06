const modal = document.querySelector('.modal');
const overlay = document.querySelector('.backdrop');
const openBtn = document.querySelector('[data-modal-open]');
const closeBtn = document.querySelector('[data-modal-close]');

openBtn.addEventListener('click', () => {
  modal.classList.add('is-open');
  overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
});

const closeModal = () => {
  modal.classList.remove('is-open');
  overlay.classList.remove('is-open');
  document.body.style.overflow = '';
};

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeModal();
});


const burgerBtn = document.querySelector('.mob-menu-btn'); 
const mobileMenu = document.querySelector('.mobile-menu');
const closeButn = document.querySelector('.btn-close-mob');
const navLinks = document.querySelectorAll('.mob-nav-link');
const conLinks = document.querySelectorAll('.mob-contacts-list');
const iconLinks = document.querySelectorAll('.item-icon-mob');

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});

closeButn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
  });
});

conLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
  });
});

iconLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
  });
});