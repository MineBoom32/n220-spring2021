let dvOutput = document.getElementById("dvOutput");
let txtInput = document.getElementById("txtInput");

function calc() {
    var input = Number(txtInput.value)
    if (isNaN(txtInput.value)) {
        console.log("Error: Input text is not a number")
    }
    else {
        var tip = (input * 0.15)
        dvOutput.innerHTML = "Tip is $" + tip + ", total is $" + (input + tip)
    }
}