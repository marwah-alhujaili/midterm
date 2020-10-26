
var colour = [
  "rgb(255,255,255)",
  "rgb(255,0,0)",

  "rgb(255,255,0)",
  "rgb(0,128,0)",
  "rgb(255,192,203)",
  "rgb(173,216,230)",
  "rgb(0,0,255)",
  "rgb(255,165,0)",
  "rgb(128,128,128)"

];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var squares = document.querySelectorAll(".mainbox");

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colour[i];
}

function change() {
  var parent = document.getElementById("super");
  var frag = document.createDocumentFragment();
  while (parent.children.length) {
    frag.appendChild(parent.children[Math.floor(Math.random() * parent.children.length)]);
  }
  parent.appendChild(frag);

  var S1 = number[Math.floor(Math.random()*number.length)];
  document.getElementById("s1").innerHTML = S1;
  var S2 = number[Math.floor(Math.random()*number.length)];
  document.getElementById("s2").innerHTML = S2;
  var S3 = number[Math.floor(Math.random()*number.length)];
  document.getElementById("s3").innerHTML = S3;
  var S4 = number[Math.floor(Math.random()*number.length)];
  document.getElementById("s4").innerHTML = S4;
  var S5 = number[Math.floor(Math.random()*number.length)];
  document.getElementById("s5").innerHTML = S5;
  var S6 = number[Math.floor(Math.random()*number.length)];
  document.getElementById("s6").innerHTML = S6;
  var S7 = number[Math.floor(Math.random()*number.length)];
  document.getElementById("s7").innerHTML = S7;
  var S8 = number[Math.floor(Math.random()*number.length)];
  document.getElementById("s8").innerHTML = S8;
  var S9 = number[Math.floor(Math.random()*number.length)];
  document.getElementById("s9").innerHTML = S9;
}
