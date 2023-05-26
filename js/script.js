let body = document.querySelector('body')

menu__btn.addEventListener('click', () => {
    menu__btn.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
})