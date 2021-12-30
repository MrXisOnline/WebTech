
var playerRed = prompt("Enter Player 1 Name:")
var playerBlue = prompt("Enter Player 2 Name:")
var currentPlayer = playerRed
var turn = $("#turn")
var circles = $(".circle")
var tText = ": It's Your Turn Pick a Column & Drop."
var win = false;
turn.text(currentPlayer + tText)

// function sortArr(arr) {
//   var nArr = [];
//   var max = arr[0]
//   for (e of arr){
//     if (e < max){
//       nArr.push(e);
//     }else {
//       nArr.push(max);
//       max = e;
//     }
//   }
//   return nArr;
// }

function get_left_row(index) {
  var left = [];
  if (!(index%7 == 0)){
    for (var i=0; i < 4; i++){
      if ((index-i)%7 != 0){
        left.push(index-i);
      }else {
        left.push(index-i);
        break
      }
    }
  }
  return left;
}

function get_right_row(index) {
  var right = [];
  if (!(index%7 == 6)){
    for (var i=1; i < 4; i++){
      if ((index+i)%7 != 6){
        right.push(index+i);
      }else {
        right.push(index+i);
        break
      }
    }
  }
  return right;
}

function get_up_col(index) {
  var up = [];
  if (!(index < 7)){
    for (var i=0; i < 4; i++){
      if (index-i*7 > 7){
        up.push(index-i*7);
      }else {
        up.push(index-i*7);
        break
      }
    }
  }
  return up;
}

function get_down_col(index) {
  var down = [];
  if (!(index > 34)){
    for (var i=1; i < 4; i++){
      if (index+i*7 < 34){
        down.push(index+i*7);
      }else {
        down.push(index+i*7);
        break
      }
    }
  }
  return down;
}

function check_col(color, index) {
  var col = [].concat(get_up_col(index), get_down_col(index)).sort();
  console.log(col);
  // console.log(sortArr(col));
  var con = true
  for (pos of col){
    // console.log(pos);
    con = true;
    pos_in = col.indexOf(pos)
    // console.log(typeof(pos));
    for (var i=0; i < 4; i++){
      try {
        var e = col[pos_in+i]
      } catch (ex) {
        break
      }
      // console.log(typeof(pos));
      // console.log(pos+i);
      // console.log(circles[pos+i]);
      if (circles[pos+i*7].style.background !== color){
        con = false
        break
      }
    }
    if (con){
      break
    }
  }
  return con;
}

function check_row(color, index) {
  var row = [].concat(get_left_row(index), get_right_row(index)).sort();
  console.log(row);
  var con = true
  // console.log(row);
  for (pos of row){
    // console.log(pos);
    con = true;
    pos_in = row.indexOf(pos)
    // console.log(typeof(pos));
    for (var i=0; i < 4; i++){
      try {
        var e = row[pos_in+i]
      } catch (ex) {
        break
      }
      // console.log(typeof(pos));
      // console.log(pos+i);
      // console.log(circles[pos+i]);
      if (circles[pos+i].style.background !== color){
        con = false
        break
      }
    }
    if (con){
      break
    }
  }
  return con;
}

// function drop(color, index) {
//   var drop_index = []
//   var couldIndex;
//   while (index <= 34) {
//     drop_index.push(index);
//     index += 7;
//   }
//   for (pos of drop_index){
//     if ((circles[pos].style.background !== "red") || (circles[pos].style.background !== "blue")){
//       couldIndex = pos;
//     }
//   }
//   return couldIndex;
// }

circles.click(function(){
  if (currentPlayer === playerRed){
    if (win){
      turn.text(playerBlue + ": Won the Match Congrats!!")
    }else {
      console.log($(this).css("background-color"));
      if ($(this).css("background-color") === "rgb(128, 128, 128)"){
        $(this).css("background", "red")
        if ((check_row("red", circles.index(this))) || check_col("red", circles.index(this))){
          win = true
        }
        currentPlayer = playerBlue
        turn.text(currentPlayer + tText)
      }
    }
  }else{
    if (win){
      turn.text(playerRed + ": Won the Match Congrats!!")
    }else{
      if ($(this).css("background-color") === "rgb(128, 128, 128)"){
        // drop_index = drop("blue", circles.index(this))
        $(this).css("background", "blue")
        if ((check_row("blue", circles.index(this))) || (check_col("blue", circles.index(this)))){
          win = true
        }
        currentPlayer = playerRed
        turn.text(currentPlayer + tText)
      }
    }
  }
})
