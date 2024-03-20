//The Html Elements I called
let photos1 = document.getElementById('photo1');
let photos2 = document.getElementById('photo2');


let dicesA = document.getElementById('diceA');
let dicesB = document.getElementById("diceB");


let scoreArea1 = document.getElementById('score-area1').innerText;
let scoreArea2 = document.getElementById('score-area2').innerText;

let buttons = document.getElementsByTagName('button');

let wins = document.getElementById('win');


// the workarea
document.addEventListener('click', function () {
    let fafb = faceDiceA() + " " + "," + " " + faceDiceB();
    let fcfd = faceDiceC() + " " + "," + " " + faceDiceD();

    if (fafb >= fcfd) {
        document.getElementById('score-area1').innerText = ++scoreArea1;
    } else {
        document.getElementById('score-area2').innerText = ++scoreArea2;
    }


    photos1.src = `../iamges/d-${faceDiceA()}.jpg` + `../iamges/d-${faceDiceB()}.jpg`;
    photos2.src = `../iamges/d-${faceDiceC()}.jpg` + `../iamges/d-${faceDiceD()}.jpg`;


    dicesA.innerText = fafb;
    dicesB.innerText = fcfd;
    console.log(scoreNum());

});

function faceDiceA() {
    return Math.ceil(Math.random() * 6);

}

function faceDiceB() {
    return Math.ceil(Math.random() * 6);

}

function faceDiceC() {
    return Math.ceil(Math.random() * 6);
}

function faceDiceD() {
    return Math.ceil(Math.random() * 6);

}