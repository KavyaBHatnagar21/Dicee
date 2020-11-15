var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage = "images/dice" + randomNumber1 + ".png"
document.querySelectorAll("img")[0].setAttribute("src",randomImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "images/dice" + randomNumber2 + ".png"
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Yay! Player 1 wins 🚩"
  document.querySelector("h1").style.fontSize = "6rem";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Yay! Player 2 wins 🚩"
  document.querySelector("h1").style.fontSize = "6rem";
}  
else
  document.querySelector("h1").innerHTML = "Draw!"
