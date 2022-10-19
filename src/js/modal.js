(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
  const mobileMenu = document.querySelector('.js-menu-container');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  refs.openModalBtn.forEach(el =>
    el.addEventListener('click', () => {
      toggleModal();
      mobileMenu.classList.contains('is-open') ? closeMenuBtn.click() : '';
    }),
  );
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
