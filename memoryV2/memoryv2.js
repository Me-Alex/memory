var game = {
    numberOfBoxes1: 25,
    level: 0,
    numberOfBoxes: 3,
    tryes:4,
    levelComplete: false,
}
let buton = document.querySelector(".button");
let container = document.querySelector(".container");
let boxContainer = document.querySelector(".box-container");
let storedBox = document.querySelector(".actual-box");
// console.log(container, boxContainer, box);
// console.log(game.levelComplete);

// start();
// clone(".box-container", ".actual-box", game.numberOfBoxes);
// clone(".container", ".box-container", game.numberOfBoxes);
// let boxes = document.querySelectorAll(".actual-box");
let box = document.querySelector(".actual-box");
let boxContainerNew = document.querySelector(".box-container");
let NewContainer = document.querySelector(".container");
let CurrentLevel = document.querySelector(".current-level");
let showClass = qSelect(".show-level");
showClass.style.display = "none";
clearForNewLevel();
passToNexTLevel();
// console.log(getInputValue(input));
var inputValue = 0;
let ceva = getInputValue();
console.log(ceva);
let tempVar = null;
// console.log(getRandomArbitrary(0, 222223));


// console.log(checkTheArrayForItContainsTheSameNumbers(ar));
buton.onclick = () => {
    start();
}
let lifes=qSelect(".lifes");

function start() {
    lifes.style.display="flex";
    let ar = amountOfRandomNr(game.level + 4);
    console.log(ar);
    showClass.style.display = "inherit";
    buton.style.display = "none";
    while (checkTheArrayForItContainsTheSameNumbers(ar)) {
        ar = amountOfRandomNr(game.level + 4);
    }
    console.log(ar);
    CurrentLevel.innerHTML = game.level;
    clearForNewLevel();
    tempVar = getInputValue();
    drawBoxes(game.numberOfBoxes);
    let boxes = document.querySelectorAll(".actual-box");
    resetBackgroundColor(boxes);
    // var boxes = document.querySelectorAll(".actual-box");
    // console.log(boxes[2].style.backgroundColor);
    // boxes[2].style.backgroundColor="yellow";
    // changeColorBack(ar, boxes);
    changeColor(ar, boxes);
    let tempAr = checkIfAllGotClicked(ar, boxes);
    console.log(tempAr);
    passToNexTLevel();
    // setTimeout(changeColorBack(ar,boxes),6000);
}