var randomnumber1 = Math.floor(Math.random() * 6) + 1; // 1-6 random number generator

var randomDiceImage = "dice" + randomnumber1 + ".png"; //dice1.png

var imageSource = "images/" + randomDiceImage; //image/dice1.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", imageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imageSource2 = "images/dice" + randomNumber2 + ".png"; //image/dice2.png

document.querySelectorAll("img")[1].setAttribute("src", imageSource2);

if (randomnumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomnumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
