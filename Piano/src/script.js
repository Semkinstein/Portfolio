let soundA = new Audio("../sound/A.mp3");
let soundS = new Audio("../sound/S.mp3");
let soundD = new Audio("../sound/D.mp3");
let soundF = new Audio("../sound/F.mp3");
let soundG = new Audio("../sound/G.mp3");
let soundH = new Audio("../sound/H.mp3");
let soundJ = new Audio("../sound/J.mp3");
let soundW = new Audio("../sound/W.mp3");
let soundE = new Audio("../sound/E.mp3");
let soundT = new Audio("../sound/T.mp3");
let soundY = new Audio("../sound/Y.mp3");
let soundU = new Audio("../sound/U.mp3");



function play(sound){
    sound.volume = volumeLevel;
    sound.play();
}

function keyStyle(id){
    let key = document.getElementById(id);
    key.classList.toggle("kbd-active");

}

document.addEventListener("keydown", function (event){

    if(event.code == "KeyA"){
        if(event.repeat != true)
            keyStyle("A");
        play(soundA);
    }else if(event.code == "KeyS"){
        if(event.repeat != true)
            keyStyle("S");
        play(soundS);
    }else if(event.code == "KeyD"){
        if(event.repeat != true)
            keyStyle("D");
        play(soundD);
    }else if(event.code == "KeyF"){
        if(event.repeat != true)
            keyStyle("F");
        play(soundF);
    }else if(event.code == "KeyG"){
        if(event.repeat != true)
            keyStyle("G");
        play(soundG);
    }else if(event.code == "KeyH"){
        if(event.repeat != true)
            keyStyle("H");
        play(soundH);
    }else if(event.code == "KeyJ"){
        if(event.repeat != true)
            keyStyle("J");
        play(soundJ);
    }else if(event.code == "KeyW"){
        if(event.repeat != true)
            keyStyle("W");
        play(soundW);
    }else if(event.code == "KeyE"){
        if(event.repeat != true)
            keyStyle("E");
        play(soundE);
    }else if(event.code == "KeyT"){
        if(event.repeat != true)
            keyStyle("T");
        play(soundT);
    }else if(event.code == "KeyY"){
        if(event.repeat != true)
            keyStyle("Y");
        play(soundY);
    }else if(event.code == "KeyU"){
        if(event.repeat != true)
            keyStyle("U");
        play(soundU);
    } else {
        console.log("Warning");
    }
})

document.addEventListener("keyup", function (event){

    if(event.code == "KeyA"){
        keyStyle("A");
    }else if(event.code == "KeyS"){
        keyStyle("S");
    }else if(event.code == "KeyD"){
        keyStyle("D");
    }else if(event.code == "KeyF"){
        keyStyle("F");
    }else if(event.code == "KeyG"){
        keyStyle("G");
    }else if(event.code == "KeyH"){
        keyStyle("H");
    }else if(event.code == "KeyJ"){
        keyStyle("J");
    }else if(event.code == "KeyW"){
        keyStyle("W");
    }else if(event.code == "KeyE"){
        keyStyle("E");
    }else if(event.code == "KeyT"){
        keyStyle("T");
    }else if(event.code == "KeyY"){
        keyStyle("Y");
    }else if(event.code == "KeyU"){
        keyStyle("U");
    } else {
        console.log("Warning");
    }
})


/*
* clicks
* */


let keyA = document.getElementById("A");
keyA.addEventListener("mousedown", function (){
    play(soundA);
})

let keyS = document.getElementById("S");
keyS.addEventListener("mousedown", function (){
    play(soundS);
})

let keyD = document.getElementById("D");
keyD.addEventListener("mousedown", function (){
    play(soundD);
})

let keyF = document.getElementById("F");
keyF.addEventListener("mousedown", function (){
    play(soundF);
})

let keyG = document.getElementById("G");
keyG.addEventListener("mousedown", function (){
    play(soundG);
})
let keyH = document.getElementById("H");
keyH.addEventListener("mousedown", function (){
    play(soundH);
})
let keyJ = document.getElementById("J");
keyJ.addEventListener("mousedown", function (){
    play(soundJ);
})
let keyW = document.getElementById("W");
keyW.addEventListener("mousedown", function (){
    play(soundW);
})
let keyE = document.getElementById("E");
keyE.addEventListener("mousedown", function (){
    play(soundE);
})

let keyT = document.getElementById("T");
keyT.addEventListener("mousedown", function (){
    play(soundT);
})

let keyY = document.getElementById("Y");
keyY.addEventListener("mousedown", function (){
    play(soundY);
})

let keyU = document.getElementById("U");
keyU.addEventListener("mousedown", function (){
    play(soundU);
})


volumeElement = document.getElementById("volume-slider");
let volumeLevel = volumeElement.value/100;

volumeElement.addEventListener("mouseup", function (event){
    volumeLevel = volumeElement.value/100;
})
