
let documentBtns = document.querySelectorAll('button');
let documentBody = document.querySelector('body');

let blueBckBtn = documentBtns[0];
blueBckBtn.addEventListener("click", () => {
    documentBody.classList.remove("redBck");
    documentBody.classList.add("blueBck");
});

let redBckBtn = documentBtns[1];
redBckBtn.addEventListener("click", () => {
    documentBody.classList.remove("blueBck")
    documentBody.classList.add("redBck");
});

let alertBtn = documentBtns[2];
alertBtn.addEventListener("click", () => {
    alert("I've been clicked! Look at me!");
});

let questBtn = documentBtns[3];
questBtn.addEventListener("click", () => {
    let userAns = prompt("How are you doing?");
    alert(`Oh you're feeling ${userAns}!`);
});



