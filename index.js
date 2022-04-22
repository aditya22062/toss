var randomNumber=Math.floor(Math.random()*6)+1
var diceName="/images/dice"+randomNumber+".png"

document.querySelectorAll("img")[0].setAttribute("src",diceName)
var randomNumber2=Math.floor(Math.random()*6)+1
var diceName2="/images/dice"+randomNumber2+".png"
document.querySelectorAll("img")[1].setAttribute("src",diceName2)
if (randomNumber>randomNumber2){
document.querySelector("h1").innerHTML="Player 1 wins"
}
else if (randomNumber===randomNumber2){
    document.querySelector("h1").innerHTML="Draw"
}
else{
    document.querySelector("h1").innerHTML="Player 2 wins"
}