let dvInteractive = document.getElementById("interact");

dvInteractive.style.backgroundColor = "#3030ff";
dvInteractive.style.width = "100px";
dvInteractive.style.height = "100px";

function hover() {
    dvInteractive.style.backgroundColor = "#000000";
}

function unhover() {
    dvInteractive.style.backgroundColor = "#3030ff";
}