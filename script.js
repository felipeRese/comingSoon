const inscrito = document.querySelector('.inscrito');
const thanks = document.querySelector('.thanks');
const botao = document.querySelector('.botao');
const form = document.querySelector('.form');
const body = document.querySelector('body');

botao.addEventListener('click', function(){
    form.classList.remove('invisible')
})

inscrito.addEventListener('click', function(){
    form.classList.add('invisible')
    thanks.classList.remove('invisible')
})

body.addEventListener('keypress', press )

function press() {
    thanks.classList.add('invisible')
}



