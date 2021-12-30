var firstName = prompt("First Name: ")
var lastName = prompt("Last Name: ")
var age = prompt("Your Age: ")
var height = prompt("Height(in cms): ")
var petName = prompt("Pet Name: ")
var metCondition = true;

if (!(firstName[0] == "J" && lastName[0] == "J")){
  metCondition = false
}
if (!(age >= 20 && age <= 30)){
  metCondition = false
}
if (!(height >= 170)){
  metCondition = false
}
if (!(petName[petName.length-1] == "y")){
  metCondition = false
}

if (metCondition){
  console.log("You Cracked it.")
}
