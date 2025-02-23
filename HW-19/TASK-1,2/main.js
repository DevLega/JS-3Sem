const modalOpenBtn = document.querySelector('.modal-open-btn');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const backdrop = document.querySelector('.backdrop');

const openModal = () => {
    document.body.classList.add('show-modal');
}

const closeModal = () => {
    document.body.classList.remove('show-modal');
}

modalOpenBtn.addEventListener('click', openModal);
modalCloseBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);