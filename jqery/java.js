
$("h1").on("dblclick", function(){
  $(this).css("color", "red");
})

$("input").eq(0).keypress(function(event){
  if (event.which === 13){ // it is keycode for enter
    console.log("Enter is Pressed");
  }
})

$("#but").on("click", function(){
  $("body").fadeOut(3000)
})
