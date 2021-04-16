var input = document.getElementById("numbers")
var output = document.getElementById("output")


function calculateAverage() {
    let numbers = input.value.split(", ");
    var average = 0;
    var total = 0;
    for (i=0; i<numbers.length; i++) {
        var newNumber = Number(numbers[i]);
        if (newNumber) {
            total += newNumber;
        }
        else {
            console.log("Item " + i + " is not a number, ignoring...");
        }
    }
    var average = total / numbers.length;
    output.innerHTML = "Average is " + average + " and sum is " + total;
    input.value = ""
}