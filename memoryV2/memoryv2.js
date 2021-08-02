var game = {
    numberOfBoxes1: 25,
    level: 1,
    numberOfBoxes: 5,
    levelComplete: false,
};
let container = document.querySelector(".container");
let boxContainer = document.querySelector(".box-container");
let box = document.querySelector(".actual-box");
let boxes = document.querySelectorAll(".actual-box");
// console.log(container, boxContainer, box);
// console.log(game.levelComplete);
start();
clone(".box-container", ".actual-box", game.numberOfBoxes);
clone(".container", ".box-container", game.numberOfBoxes);
boxes.forEach(e=>{
    e.onclick=()=>{
        console.log("ceva");
    }
})
passToNexTLevel();