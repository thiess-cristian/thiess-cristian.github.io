var requiredCredits = 40;
var myCredits;
var missingCredits;
var calculateButton = document.getElementById("calculate");
var inputField = document.getElementById("myCredits");
var resultBox = document.getElementById("result");
var generateButton = document.getElementById("generateBoxes");
var numberOfBoxes = 0;
var sumOfCredits = 0;


function init() {
    generateButton.addEventListener("click", generate);
    calculateButton.addEventListener("click", calculateCredits);
}

init();

function createInputBox(elementID) {

    var inputContainerElement = document.getElementById("inputContainer");

    var inputElement = document.createElement("input");
    inputElement.id = elementID;

    var labelElement = document.createElement("label");
    var text = document.createTextNode("Credit");

    labelElement.appendChild(text);
    labelElement.appendChild(inputElement);

    inputContainerElement.appendChild(labelElement);


}

function createInputBoxes(numberOfBoxes) {
    for (var i = 1; i <= numberOfBoxes; i++) {
        createInputBox("input" + i);
    }
}

function generate() {
    numberOfBoxes = document.getElementById("numberOfBoxes").value;
    createInputBoxes(numberOfBoxes);


}

function calculateCredits() {

    for (var i = 1; i <= numberOfBoxes; i++) {
        var inputElemValue = document.getElementById("input" + i).value;
        console.log(inputElemValue);
        sumOfCredits += parseInt(inputElemValue);

    }
    console.log(sumOfCredits);

}

//TEMA: afisati mesajul doar daca missing credits este pozitiv

//ceva label sa mearga

//source tree for github