console.log("Baruch HaShem");

const radio = new Audio('https://8743.brasilstream.com.br/stream');
const buttons = document.querySelectorAll('button');
const spin1 = document.querySelector('.btn-content-c');
const spin2 = document.querySelector('.btn-content-d');

const yearSpan = document.querySelector('#year-js');
const data = new Date();
yearSpan.innerHTML = data.getFullYear();

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        if (button.id === 'btn-play-js') {
            buttons[0].style.display = 'none';
            buttons[1].style.display = 'flex';
            spin1.style.display = 'flex';
            spin2.style.display = 'flex';
            radio.play();
            console.log(buttons);
        } else {
            buttons[0].style.display = 'flex';
            buttons[1].style.display = 'none';
            radio.pause();
            spin1.style.display = 'none';
            spin2.style.display = 'none';

        }
    });
});
