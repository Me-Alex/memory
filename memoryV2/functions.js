function start() {
    console.log(game.level);
}
function qSelect(tofind) {
    let elmnt = document.querySelector(tofind);
    return elmnt;
}
function clone(parentClassOrId, child, times) {
    let elemntParent = qSelect(parentClassOrId);
    let elemntChild = qSelect(child);
    for (let i = 0; i < times; i++) {
        elemntParent.appendChild(elemntChild.cloneNode(true));
    }
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
function drawBoxes(Value) {
    container.append(boxContainer);
    boxContainer.append(storedBox);
    clone(".box-container", ".actual-box", Value);
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
    array.forEach((arr, index) => {
        // console.log(arr);
        // console.log("aici");
        let ind = arr[index];
        // console.log(boxesArray[arr]);
        boxesArray[arr].style.backgroundColor = "yellow";

        let timeoutMs = 1000;
        boxesArray[arr].onclick = () => {
            timeoutMs = 0;
        }
        setTimeout(() => {
            boxesArray[arr].style.setProperty('background-color', '');

        }, timeoutMs)

    })
    boxesArray.forEach((e, index) => {
        e.onclick = () => {
            // console.log(index);
            game.tryes -= 1;
            e.style.backgroundColor = "red";
            if (game.tryes == 0) {
                clearForNewLevel();
                game.tryes=3;
                game.level=1;
                alert("you lost");
                buton.style.display="inherit";
                lifes.style.display="none";
                showClass.style.display="none";


            }
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
    array.forEach((arr, index) => {
        boxesArray[arr].onclick = () => {
            newAr[index] = 1;
            boxesArray[arr].style.backgroundColor = "yellow";
            // console.log(newAr);
            if (checkIfAllGotClicked1(newAr)) {
                boxesArray[arr].style.backgroundColor = "";
                start();
            }
        }
    })
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
// function getInputValue(input){
//     return input.value;
// }