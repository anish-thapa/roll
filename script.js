const button = document.getElementById("button")
const label = document.getElementById("label")
const label2 = document.getElementById("label2")
const label3 = document.getElementById("label3")
const min = 1;
const max = 6;
let randomnum;
let randomnum2;
let randomnum3;



button.onclick = function(){
    randomnum = Math.floor(Math.random() * max) + min;
    randomnum2 = Math.floor(Math.random() * max) + min;
    randomnum3 = Math.floor(Math.random() * max) + min;
    label.textContent = randomnum;
    label2.textContent = randomnum2;
    label3.textContent = randomnum3;
}
