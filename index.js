var playerName1 = prompt("What is the first player's name?");
var playerName2 = prompt("What is the second player's name?");


document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
  var randomNumber1 = Math.floor(Math.random()*6)+1;
  var randomNumber2 = Math.floor(Math.random()*6)+1;
    // Tester...
    // console.log(randomNumber1+" and "+randomNumber2);

  document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
  document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

  document.querySelector(".player1").innerHTML = playerName1;
  document.querySelector(".player2").innerHTML = playerName2;

  if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 "+playerName1+" Wins!";
  } else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = playerName2+" Wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}
