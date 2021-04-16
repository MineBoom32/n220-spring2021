var input = document.getElementById("words")
var output = document.getElementById("output")
var words = ["clear", "water", "tires"]

function filter() {
    var badWordCount = 0
    var toSearch = input.value.split(" ")
    console.log(toSearch)
    for (i=0; i<toSearch.length; i++) {
        for (ii=0; ii<words.length; ii++) {
            if (toSearch[i] == words[ii]) {
                console.log("Bad word '" + toSearch[i] + "' found at word " + i)
            }
        }
    }
}