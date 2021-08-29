var x = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]
var num1 = Math.random();
var p1 = Math.floor(num1 * 6);
var num2 = Math.random();
var p2 = Math.floor(num2 * 6);
document.querySelector('.p1').setAttribute("src", x[p1]);
document.querySelector('.p2').setAttribute("src", x[p2]);
if (p1 > p2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (p2 > p1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "🤗It's a Draw!🤗";
}