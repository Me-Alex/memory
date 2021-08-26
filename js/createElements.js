var select = document.createElement('select');
document.getElementById("center").appendChild(select);
select.setAttribute("id", "gridValue");
//creating select items with the options to choose [ex : 1x1 or 5x5 etc ]
function loop(from, to, incrementBy) {
    for (var i = from, j = 0; i < to; i += incrementBy, j++) {
        var option = document.createElement("option");
        option.innerHTML = i + "x" + i;
        option.setAttribute("value", i);
        document.getElementById("gridValue").appendChild(option);
        // console.log("sunt aici " + i);
    }
}


//initializate global the array
var v = [];
ok = 1
function creatingChildrens(from, to, incrementBy) {
    if (ok == 1) {
        ok++;
        //creating the element with the id mainDiv 
        var mainGrid = document.createElement('div');
        document.getElementById('center').appendChild(mainGrid);
        mainGrid.setAttribute('id', "mainGrid");
        mainGrid.setAttribute("class", "mainGridClass");
        //end mainGrid  

        //this if is used whenever we pressed start over and over again for remaking the array 
        if (v.length == 0) {
            console.log("am creat din nou vectorul");
            creatingTheRandomNumbers(0, document.getElementById('casute').value, 1);
        }

        for (var i = from, j = 0; i < to; i += incrementBy, j++) {
            //strart ----creating elements of id  mainGrid
            let row = document.createElement('div');
            row.setAttribute('id', "row" + j);
            document.getElementById('mainGrid').appendChild(row);
            //end ------creating elements of mainGrid

            //function makes a button yellow if the id coresponds with a number for the random array which we created
            function checkIfTheNumberPressedIsRight(id) {
                var el = document.getElementById(id);
                for (let i = 0; i < v.length; i++) {

                    if (v[i] == id) {
                        v[i] = -1;
                        el.style.backgroundColor = "Yellow";
                        // console.log('am apasat pe ' + n);
                        setTimeout(checkIfTheLevelIsOver(), 0);
                        break;
                    }
                    else {
                        el.style.backgroundColor = "red";
                    }

                }

            }
            //this function runs
            function checkIfTheLevelIsOver() {
                var bool = false;
                for (let i = 0; i < v.length; i++) {
                    if (v[i] != -1) {
                        bool = true;
                    }
                }
                if (bool == false) {
                    // setTimeout(creatingChildrens(1, document.getElementById('gridValue').value + 1, 1), 2000);
                    // setTimeout(creatingTheRandomNumbers(0, document.getElementById('casute').value + 1, 1, 2000));
                    // location.reload();

                    let toDelete = document.getElementById("mainGrid");
                    toDelete.remove();
                    console.log("afisez vectorul inaite " + v);

                    while (v.length)
                        v.pop();

                    console.log("afisez vectorul " + v);

                    //utilizez aceasta varibila pentru a nu se apasa butonul start de mai multe ori inainte de a se termina nivelul inceput 
                    ok = 1;

                    // for(let i = 0 ; i<10 ; i++){
                    //     creatingChildrens(0,document.getElementById('gridValue').value,1);
                    //     creatingTheRandomNumbers(0, document.getElementById('casute').value, 1);
                    // }

                }
            }


        }

        console.log(v);
        //add a counter for the id's of row1 or row2 etc. to increment even if they have different parrents
        counter = 0;
        for (var i = from, j = 0; i < to; i += incrementBy, j++)
            for (var ii = from, jj = 0; ii < to; ii += incrementBy, jj++) {
                //creating as many buttons input asks for every row [example : row1 , row2 etc]
                let row = document.createElement('button');
                row.setAttribute('id', counter);
                row.onclick = function () {
                    checkIfTheNumberPressedIsRight(this.id)
                }
                document.getElementById('row' + j).appendChild(row);
                counter++;

            }
        for (let d = 0; d < v.length; d++) {
            var help = document.getElementById(v[d]);
            help.style.backgroundColor = "yellow";
        }
        setTimeout(show, 800);


    } else
        alert("please finish the game first ");
}
function show() {
    var start = new Date().getTime();
    for (let j = 0; j < v.length; j++) {
        id = document.getElementById(v[j]);
        console.log(v[j]);
        id.style.backgroundColor = "inherit";
    }


}
function creatingTheRandomNumbers(from, to, incrementBy) {
    let max = to - from;
    //start --- making  random number array 
    var math = Math.floor((Math.random() * (max * max + 1)));
    v.push(math);
    let counter = 0;
    for (o = from, r = 0; o <= to - from; o += incrementBy, r++) {
        let bool = true;
        console.log(math + " numar random");
        math = Math.floor((Math.random() * (max * max + 1)));
        for (var p = 0; p < v.length; p++) {
            if (v[p] == math) {
                counter++;
                bool = false;
                // console.log(v[p + 'inainte']);
                // v[p] = Number(v[p]) + Number(1);
                // console.log(v[p + 'dupa']);
            }
            // console.log('ce fac acum');
        }
        console.log("couter " + counter);
        if (bool == true) {

            v.push(math);

        }
        // console.log('vectorul' + "v[" + r + "] este" + v[r]);

    }
    //end array
}
function start() {

}