(() => {
  const refs = {
    openModalBtn: document.querySelector(
      '[data-contacts-locations-modal-open]'
    ),
    closeModalBtn: document.querySelector(
      '[data-contacts-locations-modal-close]'
    ),
    modal: document.querySelector('[data-contacts-locations-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
