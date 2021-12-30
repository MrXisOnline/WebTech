var one = document.getElementById("1")
var two = document.getElementById("2")
var three = document.getElementById("3")
var four = document.getElementById("4")
var five = document.getElementById("5")
var six = document.getElementById("6")
var seven = document.getElementById("7")
var eight = document.getElementById("8")
var nine = document.getElementById("9")
var reset = document.getElementById("reset")

reset.addEventListener("click", function(){
  var tds = document.getElementsByTagName("td");
  for (var i=0; i < tds.length; i++){
    tds[i].textContent = "";
  }
})

function changeMarker() {
  if (this.textContent === ""){
    this.textContent = "X";
  }else if (this.textContent === "X") {
    this.textContent = "O";
  }else {
    this.textContent = "";
  }
}

one.addEventListener("click", changeMarker)
two.addEventListener("click", changeMarker)
three.addEventListener("click", changeMarker)
four.addEventListener("click", changeMarker)
five.addEventListener("click", changeMarker)
six.addEventListener("click", changeMarker)
seven.addEventListener("click", changeMarker)
eight.addEventListener("click", changeMarker)
nine.addEventListener("click", changeMarker)
