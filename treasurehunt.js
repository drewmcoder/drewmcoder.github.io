//var treasures = 0
var treasures = Math.floor(Math.random() * 9)
var bomb = Math.floor(Math.random() * 9 )
var counter = 2
if (treasures === bomb) {
treasures =  Math.floor(Math.random() * 9 )
}


const treasure = (id) => {

  console.log ("this is treasures location", treasures)
  console.log ("this is bomb location", bomb)
  if (id === treasures) {
    var win= document.getElementById("title").innerHTML = "Congratulations, You win 🤑!"
    var diamond= document.getElementById(id).innerHTML = "&#128142"}

  else if (id === bomb) {
    document.getElementById("losetitle").innerHTML = "You lose 🤬, try again!"
    return document.getElementById(id).innerHTML ="💣"}

  else {return document.getElementById(id).innerHTML = "&#x2620"}

}
