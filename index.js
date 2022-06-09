var i = Math.floor(Math.random()*6) + 1;
var j = Math.floor(Math.random()*6) + 1;

var randomimage1 = "images/dice"+ i + ".png";
var randomimage2 = "images/dice"+ j + ".png";

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src",randomimage1);
image2.setAttribute("src",randomimage2);

if(randomimage1>randomimage2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins"
}
else if(randomimage1<randomimage2){
    document.querySelector("h1").innerHTML= "🚩 Player 2 Wins"
}
else{
    document.querySelector("h1").innerHTML= "Draw 🎃"
}