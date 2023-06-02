'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');




for (let i=0; i < btnOpenModal.length; i++) {
    console.log(btnOpenModal[i].addEventListener('click',
    function() {
        console.log('Button clicked');
        console.log(btnOpenModal[i].textContent);
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }));
}

btnCloseModal.addEventListener('click', function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});





/*   Kihívás  modal   

login = ["gizi", "matyi", "Béla"]
passw = ["fkjsgfks","454325khh", "Edina1975"]

document.querySelector('.inputlogin').value;
document.querySelector('.inputpassw').value;

megfelel akkor Modal -> Succesfull , ha nem akkor access denied */