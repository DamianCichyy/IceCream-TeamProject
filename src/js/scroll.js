(() => {
  const links = document.querySelectorAll('.header  ul a, .mobile__container-nav-link');
  const mobileMenu = document.querySelector('.js-menu-container');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  for (const link of links) {
    link.addEventListener('click', clickHandler);
  }
  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;
    mobileMenu.classList.contains('is-open') && window.innerWidth < 768 ? closeMenuBtn.click() : '';
    scroll({
      top: offsetTop,
      behavior: 'smooth',
    });
  }
})();
