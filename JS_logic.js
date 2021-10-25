"use strict";

var colorSelected = document.getElementById('colorSelected');
var result = document.getElementById('result');
var myForm = document.getElementById('myForm');
var textToColor = document.getElementById('textToColor');

colorSelected.addEventListener('change', updateResult);
myForm.addEventListener('submit', (event) => changeTextColor(event));

function updateResult() {
    console.log(colorSelected);
    console.log("value is: ", colorSelected.value);
    result.style.backgroundColor = colorSelected.value;
}

function changeTextColor(event) {
    console.log(event);
    event.preventDefault();
    textToColor.style.color = colorSelected.value;
}