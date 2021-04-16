var body = document.getElementById("main");

let objects = [
    { color: "#FF0000", height: 100, width: 300 },
    { color: "#FFFF00", height: 200, width: 200 },
    { color: "#ff0000", height: 300, width: 100 },
    ];

for (i=0; i<objects.length; i++) {
    var div = document.createElement("div");
    div.style.backgroundColor = objects[i].color;
    div.style.width = String(objects[i].width) + "px";
    div.style.height = String(objects[i].height) + "px";
    console.log("Input color: " + objects[i].color);
    console.log("Input width: " + objects[i].width);
    console.log("Input height: " + objects[i].height);
    console.log("Output color: " + div.style.backgroundColor);
    console.log("Output color: " + div.style.width);
    console.log("Output color: " + div.style.height);
    body.appendChild(div);
}