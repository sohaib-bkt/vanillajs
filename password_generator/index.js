var form1 = document.getElementById('form1');
var form2 = document.getElementById('form2');
var form3 = document.getElementById('form3');

var next1 = document.getElementById('next1');
var next1 = document.getElementById('next1');
var back1 = document.getElementById('back1');
var back2 = document.getElementById('back2');

var progresse = document.getElementById('progresse');

next1.onclick = function() {
    form1.style.left = '-450px';
    form2.style.left = '40px';
    progresse.style.width = '240px';
    progresse.style.transition = '1s';

}

back1.onclick = function() {
    form1.style.left = '40px';
    form2.style.left = '450px';
    progresse.style.width = '120px';

}

next2.onclick = function() {

    form2.style.left = '-450px';
    form3.style.left = '40px';
    progresse.style.width = '360px';

}


const alph = "qwertyuiopasdfghjklzxcvbnm";
const numbers = '1234567890';
const chars = '!@$%&_-';
const all = chars + numbers + alph;

let box = document.getElementById("input3");

function generate() {
    var inputElement = document.getElementById("input2");
    var inputValue = inputElement.value;
    var key = inputValue.trim();

    var inputElement = document.getElementById("input1");
    var inputValue = inputElement.value;
    var lenght = inputValue.trim() !== '' ? inputValue : 12;
    
    let pass = "";
    pass += alph[Math.floor(Math.random() * alph.length)].toUpperCase();
    pass += chars[Math.floor(Math.random() * chars.length)];
    pass += key;
    pass += numbers[Math.floor(Math.random() * numbers.length)];
    while(pass.length < lenght) {
        pass += all[Math.floor(Math.random() * all.length)];
    }

    box.value = pass;
      
}

back2.onclick = function() {
    form2.style.left = '40px';
    form3.style.left = '450px';
    progresse.style.width = '240px';
    
}