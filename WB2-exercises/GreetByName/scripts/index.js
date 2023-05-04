"use strict";

window.onload = init;

function init() {
    const helloBtn = document.getElementById("helloBtn");
    helloBtn.onclick = onGreetUserBtnClicked;
}
function onGreetUserBtnClicked;() {
    alert("Hello", nameField);
    const nameField = document.getElementById('nameField');
    let userNameHere = nameField;

}