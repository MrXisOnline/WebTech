var headOne = document.querySelector("#one")

headOne.addEventListener("mouseover", function(){
  headOne.textContent = "Hovered";
  headOne.style.color = "red";
})

headOne.addEventListener("mouseout", function(){
  headOne.textContent = "Hover Me";   // revert changes when not in hover
  headOne.style.color = "black";
})

var headTwo = document.querySelector("#two")

headTwo.addEventListener("click", function(){
  headTwo.textContent = "Clicked";
  headTwo.style.color = "blue";
})

var headThree = document.querySelector("#three")

headThree.addEventListener("dblclick", function(){
  headThree.textContent = "Double Clicked";
  headThree.style.color = "green";
})
