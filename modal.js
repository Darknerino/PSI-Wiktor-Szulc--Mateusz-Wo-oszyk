let button_finland = document.getElementById("finland-flag");
let button_zsrr = document.getElementById("zsrr-flag");

let modal_finland = document.getElementById("finland-modal");
let modal_zsrr = document.getElementById("zsrr-modal");

button_finland.onclick = function () {
    modal_finland.style.display = "flex";
}

button_zsrr.onclick = function () {
    modal_zsrr.style.display = "flex";
}

modal_finland.onclick = function () {
    modal_finland.style.display = "none";
}

modal_zsrr.onclick = function () {
    modal_zsrr.style.display = "none";
}