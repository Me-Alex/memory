function start() {

    console.log(game.level);
}
function qSelect(tofind) {
    let elmnt = document.querySelector(tofind);
    return elmnt;
}
function clone(parentClassOrId, child,times) {
    let elemntParent=qSelect(parentClassOrId);
    let elemntChild=qSelect(child);
    for (let i = 0; i < times; i++) {
        elemntParent.appendChild(elemntChild.cloneNode(true));
    }
}
function passToNexTLevel(){
    game.level+=1;
    game.numberOfBoxes+=1;
}