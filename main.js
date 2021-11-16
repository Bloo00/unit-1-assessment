
// vars

let num         = 1;
let newNum      = 0;
let displayNum  = document.querySelector("h1");
let positive    = true;
let addButton   = document.querySelectorAll(".button")[0];
let minusButton = document.querySelectorAll(".button")[1];;
let inputBar    = document.querySelector(".display");

function addButtonPress(){       // when the button is pressed return the added number to the top
    num = parseInt(inputBar.value);
    newNum += num;
    displayNum.innerText = newNum
    positiveChecker();
}

function subButtonPress(){
    num = parseInt(inputBar.value);
    newNum -= num;
    displayNum.innerText = newNum;
    positiveChecker();
}

function positiveChecker(){
    if (newNum < 0){
        displayNum.style.color = "red";
    }
    else{
        displayNum.style.color = "black";
    }
}

addButton.onclick = function(e){
    e.preventDefault();
    addButtonPress();
}

minusButton.onclick = function(e){
    e.preventDefault();
    subButtonPress();
}