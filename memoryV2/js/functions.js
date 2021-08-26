function start() {
    // console.log(game.level);
}
function qSelect(tofind) {
    let elmnt = document.querySelector(tofind);
    return elmnt;
}
function qSelectAll(tofind) {
    let elmnt = document.querySelectorAll(tofind);
    return elmnt;
}

function passToNexTLevel() {
    game.level += 1;
    game.numberOfBoxes += 0.5;
    game.numberOfBoxes1 += 1;

}
function clearForNewLevel() {
    NewContainer.innerHTML = "";
    boxContainerNew.innerHTML = "";
}
function clone(parentClassOrId, child, times) {
    let elemntParent = qSelect(parentClassOrId);
    let elemntChild = qSelect(child);
    for (let i = 0; i < times; i++) {
        elemntParent.appendChild(elemntChild.cloneNode(true));
    }
}
function drawBoxes(Value) {
    container.append(boxContainer);
    boxContainer.append(storedBox);
    clone(".box-container", ".actual-box", Value);
    clone(".container", ".box-container", Value);
}
function drawLifes(value) {
    lifesContainer.append(lifes);
    boxContainer.append(storedBox);
    clone(".container-lifes", ".lifes", Value);
    clone(".container", ".box-container", Value);
}
function getInputValue() {
    input.onkeydown = (e) => {
        if (e.key === "Enter") {
            var inputValue = input.value;
            // console.log(inputValue);

        }
    }
    return inputValue;
}
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function amountOfRandomNr(amount) {
    let array = [];
    for (let i = 0; i < amount; i++) {
        array.push(getRandomArbitrary(0, game.numberOfBoxes * game.numberOfBoxes));
    }
    return array;
}
function checkTheArrayForItContainsTheSameNumbers(array) {
    var flag = false;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] === array[j] && i != j) {
                flag = true;

            }
            // console.log(array[i] + " " + array[j]);
        }
    }
    return flag;
}
function changeColor(array, boxesArray) {
    for (let index = 0; index < array.length; index++){
        let ind = array[index];
        boxesArray[array[index]].style.backgroundColor = "yellow";

        let timeoutMs = 1000;
        boxesArray[array[index]].onclick = () => {
            timeoutMs = 0;
        }
        setTimeout(() => {
            boxesArray[array[index]].style.setProperty('background-color', '');

        }, timeoutMs)
    }
    for (let index = 0; index < boxesArray.length; index++){
        boxesArray[index].onclick = () => {
            // console.log(index);
            --game.tryes;
            boxesArray[index].style.backgroundColor = "red";
            let numberOfLifes = qSelectAll(".life");
            if (game.tryes < 3) {
                numberOfLifes[game.tryes].style.display = "none";
                // console.log("hey I am here");
            }
            // if(game.tryes===3){
            //     numberOfLifes.forEach((e,index)=>{
            //         e.style.display="inherit";
            //     })
            // }
            // let numberOfLifesParent = qSelect(".lifes");
            // if (numberOfLifes.length > 0) {
            //     numberOfLifes[0].style.display = "none";
            //     numberOfLifesParent.removeChild(numberOfLifes[0]);
            // }
            // if (numberOfLifes.length == 0) { 
            //     storedValueOfLife.style.display="";
            //     numberOfLifesParent.appendChild(storedValueOfLife);

            // }
            // console.log(numberOfLifes);
            if (game.tryes == 0) {
                clearForNewLevel();
                // if(!checkIfAllGotClicked(newAr)&&game.tryes==0){
                //     newArr.forEach((e,index)=>{
                //         if(e==0){
                //             boxesArray[index].style="blue";
                //         }
                //     })
                // }
                scoreNumber.innerText=game.level-1;
                game.tryes = 3;
                game.level = 1;
                game.numberOfBoxes = 4;
                // console.log("you lost");
                buton.style.display = "inherit";
                container.appendChild(score);
                score.style.display="";
                showClass.style.display = "none";
                numberOfLifes.forEach((e, index) => {
                    e.style.display = "";
                })
                lifes.style.visibility = "hidden";

            }
        }
    }
    // array.forEach((arr, index) => {
    //     let ind = arr[index];
    //     boxesArray[arr].style.backgroundColor = "yellow";
    //     let timeoutMs = 1000;
    //     boxesArray[arr].onclick = () => {
    //         timeoutMs = 0;
    //     }
    //     setTimeout(() => {
    //         boxesArray[arr].style.setProperty('background-color', '');

    //     }, timeoutMs)

    // })

    // boxesArray.forEach((e, index) => {
    //     e.onclick = () => {
    //         // console.log(index);
    //         --game.tryes;
    //         e.style.backgroundColor = "red";
    //         let numberOfLifes = qSelectAll(".life");
    //         if (game.tryes < 3) {
    //             numberOfLifes[game.tryes].style.display = "none";
    //             // console.log("hey I am here");
    //         }
    //         // if(game.tryes===3){
    //         //     numberOfLifes.forEach((e,index)=>{
    //         //         e.style.display="inherit";
    //         //     })
    //         // }
    //         // let numberOfLifesParent = qSelect(".lifes");
    //         // if (numberOfLifes.length > 0) {
    //         //     numberOfLifes[0].style.display = "none";
    //         //     numberOfLifesParent.removeChild(numberOfLifes[0]);
    //         // }
    //         // if (numberOfLifes.length == 0) { 
    //         //     storedValueOfLife.style.display="";
    //         //     numberOfLifesParent.appendChild(storedValueOfLife);

    //         // }
    //         // console.log(numberOfLifes);
    //         if (game.tryes == 0) {
    //             clearForNewLevel();
    //             // if(!checkIfAllGotClicked(newAr)&&game.tryes==0){
    //             //     newArr.forEach((e,index)=>{
    //             //         if(e==0){
    //             //             boxesArray[index].style="blue";
    //             //         }
    //             //     })
    //             // }
    //             game.tryes = 3;
    //             game.level = 1;
    //             game.numberOfBoxes = 4;
    //             // console.log("you lost");
    //             buton.style.display = "inherit";

    //             showClass.style.display = "none";
    //             numberOfLifes.forEach((e, index) => {
    //                 e.style.display = "";
    //             })
    //             lifes.style.visibility = "hidden";

    //         }
    //     }
    // })

}
function showUnpressedBoxes(newArr, boxesArray) {

    newArr.forEach((e, index) => {
        if (e == 0) {
            boxesArray[index].style = "blue";
        }
    })
}
function resetBackgroundColor(boxes) {
    boxes.forEach((e) => {
        e.style.backgroundColor = "white ";
    })

}

// function changeColorBack(array, boxesArray) {
//     array.forEach((arr, index) => {
//         // console.log(arr);
//         // console.log("aici");
//         let ind = arr[index];
//         // console.log(boxesArray[arr]);
//         boxesArray[arr].style.setProperty('background-color','white');
//         boxesArray.forEach((e, index) => {
//             e.onclick = () => {
//                 console.log(index);
//                 e.style.backgroundColor = "red ";
//             }
//         })
//     })
// }
function checkIfAllGotClicked(array, boxesArray) {
    let newAr = []
    array.forEach((arr, index) => {
        newAr.push(0);
    })
    for (let index = 0; index < array.length; index++) {
        boxesArray[array[index]].onclick = () => {
            newAr[index] = 1;
            boxesArray[array[index]].style.backgroundColor = "yellow";
            // console.log(newAr);
            if (checkIfAllGotClicked1(newAr)) {
                boxesArray[array[index]].style.backgroundColor = "";
                start();
            }

        }
    }
    // array.forEach((arr, index) => {
    //     boxesArray[arr].onclick = () => {
    //         newAr[index] = 1;
    //         boxesArray[arr].style.backgroundColor = "yellow";
    //         // console.log(newAr);
    //         if (checkIfAllGotClicked1(newAr)) {
    //             boxesArray[arr].style.backgroundColor = "";
    //             start();
    //         }

    //     }
    // })
    return newAr;
}
function checkIfAllGotClicked1(newAr) {
    let flag1 = true;
    newAr.forEach((x, index) => {
        if (x == 0) {
            flag1 = false;
        }
    })
    return flag1;
}
// function removeOneLife(input){

// }
// function getInputValue(input){
//     return input.value;
// }