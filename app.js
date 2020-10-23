const selectElement = element => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click', () => {
    selectElement('header').classList.toggle('active');
});

const span = document.querySelectorAll('.nav-item');
console.log(span);