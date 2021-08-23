'use strict';

const photo = document.querySelectorAll('.slider');

function slide() {
    for (let key of photo) {
        key.addEventListener('click', () => {
            key.classList.toggle('active');
        });
    } 
}

slide()