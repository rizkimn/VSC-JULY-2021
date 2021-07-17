let limit = document.getElementById('banyak-peserta').value;
let winner = document.querySelector('.result h3.winner');

function randomWinner() {
    let i = 0;

    let interval = setInterval(function() {
        result = Math.round(Math.random() * limit);
        winner.innerHTML = result;

        if (i > 15) {
            clearInterval(interval);
        }
        i++;
    }, 100);
}