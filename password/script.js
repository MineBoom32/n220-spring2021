let dvOutput = document.getElementById("dvOutput");
let txtUser = document.getElementById("txtUser");
let txtPass = document.getElementById("txtPass");

function login() {
    var user = txtUser.value;
    var pass = txtPass.value;
    if ( (user == "Username") && (pass == "Password") ) {
        dvOutput.innerHTML = "Success!";
    }
    else {
        dvOutput.innerHTML = "Wrong information.";
    }
}