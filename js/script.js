
const setBackground = () => {
    let p1 = document.querySelector('.first');
    let p2 = document.querySelector('.second');
    p1.classList.add('red');
    p2.style.background = 'yellow';

}
let btnSetBackground = document.getElementById('set_background')
btnSetBackground.addEventListener('click', setBackground);