
function greet() {
  console.log("Hello, User")
}

// greet()

function greet(name) {
  console.log("Hello, " + name);
}

function addNums(num1, num2) {
  console.log(num1+num2);
}

function getSum(num1, num2) {
  return num1+num2;
}

function greet(name="User") {
  console.log("Hello, "+name);
}

function exp(num, power) {
  var result = num**power;
  return result;
}
