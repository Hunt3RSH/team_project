(() => {
  const refs = {
    openFranchiseBtn: document.querySelector(
      '[data-contacts-franchise-modal-open]'
    ),
    closeFranchiseBtn: document.querySelector(
      '[data-contacts-franchise-modal-close]'
    ),
    modalFranchise: document.querySelector('[data-contacts-franchise-modal]'),
  };

  refs.openFranchiseBtn.addEventListener('click', toggleModal);
  refs.closeFranchiseBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalFranchise.classList.toggle('is-hidden');
  }
})();

//
// (() => {
//   const refs = {
//     openFranchiseBtn: document.querySelector('[data-open-menu]'),
//     closeFranchiseBtn: document.querySelector('[data-close-menu]'),
//     backdropFranchise: document.querySelector('[data-backdrop]'),
//   };

//   refs.openFranchiseBtn.addEventListener('click', toggleModal);
//   refs.closeFranchiseBtn.addEventListener('click', toggleModal);
//   refs.backdropFranchise.addEventListener('click', logBackdropClick);

//   function toggleModal() {
//     document.body.classList.toggle('lock');
//     refs.backdropFranchise.classList.toggle('is-hidden');
//   }

//   function logBackdropClick() {
//     console.log('Open modal');
//   }
// })();
