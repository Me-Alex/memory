
/*
            How this works should work ?
            1.create a random number every time 
            2.verify the input of the user with the random number shown 
                How would I pool this off ?
                    1.make an array which it will update every time after it got the user input 
                        When I will get the user input:
                            -after the user press /-enter-\
                    2.the array lenght should increment by 1 after each good answer of the user
                    3.I should have some progress tracking 
                        How I will track the progress ?
                            -I don't 
                    4.The game should have a variety of setting
                        -custom mode:
                            -posibility of the user to customize the game  
                        -standard mode :
                        -god mode : 

*/

//              HOW IT ACTUALLY WORKS 
// dd/mm/yyyy 15.07.2021 time 22:12 or 10:12 PM
var game = {
    numbers: [],
    buffer: [],
    lenght: 1,
    level: 1,
    gameMode: "",
}
console.log(game);
//getting the DOM elements
let el = document.getElementById("start");
let custom = document.getElementById("custom");
let standard = document.getElementById("standard");
let godM = document.getElementById("god-mode");
let reset = document.getElementById("resset");

function createE(element, location, childInnerText) {
    let child = document.createElement(element);
    let here = document.querySelector(location);
    here.appendChild(child);
    child.innerText = childInnerText;
    return child;
}
function qSelect(tofind) {
    let elmnt = document.querySelector(tofind);
    return elmnt;
}

// making an element for showing the number that the users  needs to memorize
function createElement(element, location, childInnerText) {
    let child = document.createElement(element);
    let here = document.querySelector(location);
    here.appendChild(child);
    child.innerText = childInnerText;
    function hide() {
        child.style.display = "none";
    }
    setTimeout(hide, 2000);
    let input = document.createElement("input");
    input.type = "number";
    // input.setAttribute("class","input");
    setTimeout(() => {
        here.appendChild(input);
        let inp=document.querySelector("input");
        inp.focus();
        console.log(inp);
        console.log(here.children[1]);
    }, 2000)
  
    input.onkeypress = (e) => {
        if (e.which == 13) {
            if (!isNaN(input.value) && input.value == game.numbers) {
                here.innerHTML = "";
                setTimeout(start, 0);
            }
            else {

                alert("number was " + game.numbers + " your's was " + input.value + "");
                here.innerHTML = "";
                // here.innerHTML = "<h1>number was " + game.numbers + "</h1><h1> your's was " + input.value + "</h1>";
                setTimeout(() => {
                    let elem = createE("button", ".add", "restart");
                    elem.onclick = () => {
                        setTimeout(start(), 0);
                        elem.style.display = "none";
                    }
                }, 0);
                setTimeout(resetGame, 0);
                el.style.display = "inherit";
                var elm1 = qSelect("#start");
                elm1.style.display = "none";
                // var elm1 = qSelect(".add");
                // elm1.style.display = "none";



            }
        }
    };
}
function resetGame() {
    game.lenght = 1;
    game.lenght = 1;
}
el.onclick = () => {
    game.gameMode = el.innerText;
    console.log(game);
    el.style.display = "none";
    custom.style.display = "grid";
    standard.style.display = "grid";
    godM.style.display = "grid";
}
custom.onclick = () => {
    game.gameMode = custom.innerText;
    console.log(game);
    custom.style.display = "none";
    standard.style.display = "none";
    godM.style.display = "none";
    setTimeout(start(), 0);
}
standard.onclick = () => {
    game.gameMode = standard.innerText;
    console.log(game);
    custom.style.display = "none";
    standard.style.display = "none";
    godM.style.display = "none";
    setTimeout(start(), 0);
}
godM.onclick = () => {
    game.gameMode = godM.innerText;
    console.log(game);
    custom.style.display = "none";
    standard.style.display = "none";
    godM.style.display = "none";
    setTimeout(start(), 0);
}

function start() {
    let { numbers, buffer, lenght, level, gameMode } = game;
    let random = Math.floor(Math.random() * 10 ** game.lenght);
    game.lenght += 1;
    game.numbers = random;
    setTimeout(createElement("h1", ".add", "" + game.numbers + ""), 0);
    console.log(game);

}
