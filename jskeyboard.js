let Keyboard = window.SimpleKeyboard.default;
let inputId = "";

let myKeyboard = new Keyboard({
    onChange: input => onChange(input),
    onKeyPress: button => onKeyPress(button)
});

function onChange(input) {
    document.getElementById(inputId).value = input;
    console.log("Input changed", input);
}

function onKeyPress(button) {
    console.log("Button pressed", button);
}

document.getElementById("inputfelt1").addEventListener("click", function () {
    inputId = "inputfelt1";
    if (document.getElementsByClassName("simple-keyboard")[0].style.display === "block") {
        document.getElementsByClassName("simple-keyboard")[0].style.display = "none";
    } else {
        document.getElementsByClassName("simple-keyboard")[0].style.display = "block";
    }
});