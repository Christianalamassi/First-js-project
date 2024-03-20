let photos1 = document.getElementById('photo1');
let photos2 = document.getElementById('photo2');

let dicesA = document.getElementById('diceA');
let dicesB = document.getElementById('diceB');

let scoreArea1 = document.getElementById('score-area1');
let scoreArea2 = document.getElementById('score-area2');

let buttonsA = document.getElementById('buttonA');
let buttonsB = document.getElementById('buttonB');

let wins = document.getElementById('win');


function faceDiceA() {
    return Math.ceil(Math.random() * 6);
}

function faceDiceB() {
    return Math.ceil(Math.random() * 6);

}


buttonsA.addEventListener('click', function () {
    let fafb = faceDiceA() + ' ' + ',' + ' ' + faceDiceB();
    dicesA.innerText = fafb;
});

buttonsB.addEventListener('click', function () {
    let fafb = faceDiceA() + ' ' + ',' + ' ' + faceDiceB();
    dicesB.innerText = fafb;
});