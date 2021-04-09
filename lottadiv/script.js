let dvDisplay = document.getElementById("displayDiv");

for (var i = 0; i < 100; i++) {
    var nextDiv = document.createElement("div");
    console.log(nextDiv)
    nextDiv.style.height = "20px";
    nextDiv.style.width = "20px";
    nextDiv.style.float = "left";

    var hue = 3.6 * i;
    console.log(hue);
    var color = 'hsl(' + String(hue) + ', 100%, 50%)'
    console.log(color);

    nextDiv.style.backgroundColor = color;
    document.body.insertBefore(nextDiv,dvDisplay);
}