const bar = document.querySelector('#bar');
// console.log(bar);
const navbar = document.querySelector('.nav-menu');
bar.addEventListener('click', () => {

    navbar.classList.toggle('active');
})

document.querySelector('#close').addEventListener('click', () => {
    navbar.classList.remove('active');
})