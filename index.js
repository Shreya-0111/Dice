var ran1 = Math.floor(Math.random() * 6)+1;

var randomDice = "dice" + ran1 + ".png";

var ranImg = "images/" + randomDice;

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", ranImg );

var ran2 =  Math.floor(Math.random() * 6 )+1;

var ranImg2 = "images/dice" + ran2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",ranImg2);

if(ran1 > ran2){
    document.querySelector("h1").innerHTML = "Play 1 Wins!!" ;
}
else if(ran2 > ran1){
    document.querySelector("h1").innerHTML = "Play 2 Wins!!" ;
}
else{
    document.querySelector("h1").innerHTML = "Draw!!" ;
}