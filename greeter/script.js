let dvGreeting = document.getElementById("dvGreeting");
let txtInput = document.getElementById("txtInput");

function greet() {
    var input = txtInput.value
    dvGreeting.innerHTML = "Hello " + input + "!"
}