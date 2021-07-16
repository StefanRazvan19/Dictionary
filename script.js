var x = 0;
var array = Array();
$(`#badWord`).hide();
$(`#goodWord`).hide();

function add_element_to_array() {
  array[x] = document.getElementById("text1").value;
  x++;
  document.getElementById("text1").value = "";
}

function display_array() {
  var e = "<hr/>";
  for (var y=0; y<array.length; y++) {
    e += array[y] + "<br/>";
  }
  document.getElementById("Result").innerHTML = e;
}

function find() {
 var input = document.getElementById("text2").value;
 if(array.includes(input)) {
   $(`#goodWord`).show();
   $(`#badWord`).hide();
 } else {
    $(`#goodWord`).hide();
    $(`#badWord`).show();
  }
}
