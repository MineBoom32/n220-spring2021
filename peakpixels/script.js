let dvBox = document.getElementById("square")
var width = 100
var height = 100

function grow() {
    width = width * 1.1
    height = height * 1.1

    dvBox.style.width = height + "px"
    console.log(dvBox.style.width)
    dvBox.style.height = height + "px"
    console.log(dvBox.style.height)
    
}