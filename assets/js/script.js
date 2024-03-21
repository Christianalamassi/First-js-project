// the Elements area

let buttons = document.getElementsByTagName('button');
let dicesA = document.getElementById('diceA');
let dicesB = document.getElementById("diceB");
let photos1 = document.getElementById('photo1');
let photos2 = document.getElementById('photo2');
let scoreArea1 = document.getElementById('score-area1').innerText;
let scoreArea2 = document.getElementById('score-area2').innerText;
let wins = document.getElementById('win');

// The work area

function faceDiceA() {
    return Math.ceil(Math.random() * 6);
}

function faceDiceB() {
    return Math.ceil(Math.random() * 6);
}

function roll() {
    let fa = faceDiceA();
    let fb = faceDiceB();

    if (fa > fb) {
        document.getElementById('score-area2').innerText = `Computer got: ${++scoreArea2}`;
        if (scoreArea2 > 15) {
            alert("The Game is over, You won");
        }
    } else if (fa === fb) {
        document.getElementById('score-area1').innerText = `Computer got: ${++scoreArea1}`;
        document.getElementById('score-area2').innerText = `You Got: ${++scoreArea2}`;
    } else {
        document.getElementById('score-area1').innerText = `You Got: ${++scoreArea1}`;
        if (scoreArea1 > 15) {
            alert("The Game is over, You lost");
        }
    }

    dicesA.innerText = fa;
    dicesB.innerText = fb;

    photos1.src = `assets/images/d${fa}.png`;
    photos2.src = `assets/images/d${fb}.png`;


}