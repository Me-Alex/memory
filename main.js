var tempVal = 0;
var v = [];
var pressed = [];
var id;
var i;
class play {
    constructor(lungime,vMAx){
        this.lungime=document.getElementById('grid').value;
        this.vMAx=document.getElementById('casute').value;
    }
    crearevector(lungime ,vMAx) {
        for (j = 0; j < lungime; j++) {
            var math = Math.floor((Math.random() * (vMAx * vMAx - 3)) + 1);
            v.push(math);
            pressed.push(0);
            console.log('vectorul' + "v[" + j + "] este" + v[j]);
        }
    }
    checkIfExists(vMAx) {
        console.log('');
        for (i = 0; i < v.length; i++) {
            for (j = i + 1; j < v.length; j++) {
                if (v[i] == v[j] && v[j] <= vMax * vMax) {
                    console.log(v[j + 'inainte']);
                    v[j] = Number(v[j]) + Number(1);
                    console.log(v[j + 'dupa']);
                }
                console.log('ce fac acum');
            }
            console.log('vectorul' + "v[" + i + "] este" + v[i]);

        }
        console.log('');
    }
    createTheGameGrid() {
        var grid = document.getElementById('grid').value;
        var casute = document.getElementById('casute').value;
        for (var i = 1; i <= grid; i++) {
            var div = document.createElement("div");
            document.getElementById("cols").appendChild(div);
            div.setAttribute("class", "col" + i);
            div.setAttribute("id", "col" + i);
            setTimeout(grid1(grid, i, tempVal), 0);
            tempVal = Number(tempVal) + Number(grid);

        }

    }
    grid1(value, index, tempV) {
        for (var m = 0, j = tempV; m < value; m++, j++) {
            var buton = document.createElement("button");
            document.getElementById("col" + index).appendChild(buton);
            buton.setAttribute("id", j);
            var t = j;
            buton.onclick = function () { checkifispressed(this.id) }
            // buton.addEventListener("onclick", changeColor("0" + i));

        }
    }
    makeityellow() {
        var casute = document.getElementById('casute').value;
        for (d = 0; d < casute; d++) {
            var id = document.getElementById(v[d]);
            id.style.backgroundColor = "yellow";
        }
    }
    show() {
        var start = new Date().getTime();
        for (var i = 1; i < 10000000000000; i++) {
            if ((new Date().getTime() - start) > 1000) {
                for (var j = 0; j < v.length; j++) {
                    id = document.getElementById(v[j]);
                    console.log(v[j]);
                    id.style.backgroundColor = "inherit";
                }
                break;
            }
        }
    }
    checkifispressed(n) {
        var m = document.getElementById(n);

        for (var i = 0; i < v.length; i++) {
            console.log('aici am v[' + i + '] ' + v[i]);
            if (v[i] == n) {
                v[i] = -1;
                pressed[i] = 1;
                m.style.backgroundColor = "Yellow";
                console.log('am apasat pe ' + n);
                setTimeout(checkV(), 0);
                break;
            }
            else {
                console.log('am apasat pe ' + n);
                m.style.backgroundColor = "red";
            }

        }
    }
}
function crearevector() {
    var grid = document.getElementById('grid').value;
    var casute = document.getElementById('casute').value;
    for (j = 0; j < casute; j++) {
        var math = Math.floor((Math.random() * (grid * grid - 3)) + 1);
        v.push(math);
        pressed.push(0);
        console.log('vectorul' + "v[" + j + "] este" + v[j]);
    }
    setTimeout(checkIfExists(grid), 0);
    setTimeout(checkIfExists(grid), 0);
    setTimeout(memory(), 1000);
}
function checkIfExists(grid) {
    console.log('');
    for (i = 0; i < v.length; i++) {
        for (j = i + 1; j < v.length; j++) {
            if (v[i] == v[j] && v[j] <= grid * grid) {
                console.log(v[j + 'inainte']);
                v[j] = Number(v[j]) + Number(1);
                console.log(v[j + 'dupa']);

            }
            console.log('ce fac acum');
        }
        console.log('vectorul' + "v[" + i + "] este" + v[i]);

    }
    console.log('');
}

function memory() {
    var grid = document.getElementById('grid').value;
    var casute = document.getElementById('casute').value;
    for (var i = 1; i <= grid; i++) {
        var div = document.createElement("div");
        document.getElementById("cols").appendChild(div);
        div.setAttribute("class", "col" + i);
        div.setAttribute("id", "col" + i);
        // alert(document.getElementsByClassName('cols').length);
        if (document.getElementsByClassName('cols').length == 1)
            setTimeout(grid1(grid, i, tempVal), 0);
        // else
        //     {
        //         // var del = document.getElementsByClassName('cols');
        //         var del = document.getElementsByClassName('cols');
        //         for(i=0;i<del.length;i++)
        //             del.removeChild(del.childNodes[i]);

        //     }
        tempVal = Number(tempVal) + Number(grid);

    }
    setTimeout(makeityellow(), 1000);
}
function grid1(value, index, tempV) {
    for (var m = 0, j = tempV; m < value; m++, j++) {
        var buton = document.createElement("button");
        document.getElementById("col" + index).appendChild(buton);
        buton.setAttribute("id", j);
        var t = j;
        buton.onclick = function () { checkifispressed(this.id) }
        // buton.addEventListener("onclick", changeColor("0" + i));

    }
}

function makeityellow() {
    var casute = document.getElementById('casute').value;
    for (d = 0; d < casute; d++) {
        var id = document.getElementById(v[d]);
        id.style.backgroundColor = "yellow";
    }
    setTimeout(show, 0);

}

function show() {

}

function changeColor(id) {
    var btn = document.getElementById(id);
    if (btn.style.backgroundColor == "blue") {
        btn.style.backgroundColor = "inherit";
    }
    else {
        btn.style.backgroundColor = "blue";
    }
}
var d = 0;


function checkifispressed(n) {
    var m = document.getElementById(n);

    for (var i = 0; i < v.length; i++) {
        console.log('aici am v[' + i + '] ' + v[i]);
        if (v[i] == n) {
            v[i] = -1;
            pressed[i] = 1;
            m.style.backgroundColor = "Yellow";
            console.log('am apasat pe ' + n);
            setTimeout(checkV(), 0);
            break;
        }
        else {
            console.log('am apasat pe ' + n);
            m.style.backgroundColor = "red";
        }

    }
    // var m = document.getElementById(n);
    // pressed[n]=1;
    // if (pressed[n] == 0) {
    //     m.style.backgroundColor = "red";
    // } else if (pressed[n] == 1) {
    //     m.style.backgroundColor = "Yellow";
    //     d += 1;
    //     if (d == v.length + Number(document.getElementById('casute').value)) {
    //         setTimeout(location.reload(), 2000);
    //     }
    // }
    // setTimeout(reallycheckIfItIsPressed(m,pressed,n),0);
}
function checkV() {
    var ok = true;
    for (var i = 0; i < v.length; i++) {
        if (v[i] != -1) {
            ok = false;
        }
    }
    if (ok == true)
        setTimeout(location.reload(), 2000);
}
function reallycheckIfItIsPressed(m, pressed, n) {

}
function show2() {
    var start = new Date().getTime();
    for (let i = 1; i < 1000000000000000; i++) {
        if ((new Date().getTime() - start) > 1000) {
            for (let j = 0; j < v.length; j++) {
                help = document.getElementById(v[j]);
                // console.log(v[j]);
                help.style.backgroundColor = "inherit";
            }
            break;
        }
    }
}
// function takealltheinput() {
//     var grid = document.getElementById('grid').value;
//     var casute = document.getElementById('casute').value;
// }
function main() {
    setTimeout(crearevector(), 1000);
}
/*
function crearevector() {
    var grid = document.getElementById('grid').value;
    var casute = document.getElementById('casute').value;
    for (j = 0; j < casute; j++) {
        var math = Math.floor((Math.random() * (grid * grid - 1)) + 1);
        v.push(checkifexist(math, grid));
        pressed.push(0);
        console.log('vectorul' + "v[" + j + "] este" + v[j]);
    }
    setTimeout(memory(), 1000);
}
function checkifexist(nr, grid) {
    console.log('am intrat aici numarul care are egalitate este ' + nr);
    for (var i = 0; i < v.length; i++) {
        if (v[i] == nr) {
            bool = false;
            for (i = 0; i < v.length; i++) {
                for (j = 1; j < v.length; j++)
                    if (v[i] == v[j] && v[i] < v.length-1 && v[j] < v.lenght-1)
                        v[j] += 1;
            }
            // console.log('sunt egale');
            // nr = Math.floor((Math.random() * (grid * grid - 1)) + 1);
            // console.log('numarul dupa ce sa rupt egalitatea prima data vezi daca a intrat aici' + nr);
            // setTimeout(checkifexist(nr, grid), 0);
            break;
        }
    }
    console.log('numarul dupa ce sa rupt egalitatea' + nr);
    return nr;
}
*/