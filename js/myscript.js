var helloWorldSpan = document.getElementById("hello-world-text");
var helloWorldLetters = ["H","e","l","l","o"," ","W","o","r","l","d"];
var i = 0;

var loop =  function() {
    helloWorldSpan.innerHTML += helloWorldLetters[i];
    if (++i < helloWorldLetters.length) {
        setTimeout(loop, Math.random()*500);
    }
};

window.onload = loop;



