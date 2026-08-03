let gameSeq = [];
let userSeq = [];

let btns = ["red", "green", "orange", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h3");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game is started");
        started = true;

        levelUp();
    }
});
function gameFlash(btnn) {
    btnn.classList.add("flash");
    setTimeout(() => {
        btnn.classList.remove("flash");
    }, 250);
}
function userFlash(btnn) {
    btnn.classList.add("userflash");
    setTimeout(() => {
        btnn.classList.remove("userflash");
    }, 250);
}


function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
};

function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp(), 1000);
        }
    } else {
        h2.innerHTML = `Game over!Your score was <b>${level}</b><br> Again press any key to start`;
        document.querySelector("body").style.backgroundColor = "#7a1f33";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "";
        }, 150);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);


    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
};

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}