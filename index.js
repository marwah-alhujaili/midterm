var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var S1 = number[Math.floor(Math.random()*number.length)];
var arr=[];
function randomNumbers() {


  document.getElementById("n1").addEventListener("mouseover", function(){
    document.getElementById("n1").style.visibility = "hidden";
    arr.push(document.getElementById("n1").textContent);
    if(arr.length==9){
    alert(arr);
  }
  });
  document.getElementById("n2").addEventListener("mouseover", function(){
    document.getElementById("n2").style.visibility = "hidden";
    arr.push(document.getElementById("n2").textContent);
    if(arr.length==9){
    alert(arr);
  }
  });

  document.getElementById("n3").addEventListener("mouseover", function(){
    document.getElementById("n3").style.visibility = "hidden";
    arr.push(document.getElementById("n3").textContent);
    if(arr.length==9){
    alert(arr);
  }
  });

  document.getElementById("n4").addEventListener("mouseover", function(){
    document.getElementById("n4").style.visibility = "hidden";
    arr.push(document.getElementById("n4").textContent);
    if(arr.length==9){
    alert(arr);
  }
  });
  document.getElementById("n5").addEventListener("mouseover", function(){
    document.getElementById("n5").style.visibility = "hidden";
    arr.push(document.getElementById("n5").textContent);
    if(arr.length==9){
    alert(arr);
  }
  });

  document.getElementById("n6").addEventListener("mouseover", function(){
    document.getElementById("n6").style.visibility = "hidden";
    arr.push(document.getElementById("n6").textContent);
    if(arr.length==9){
    alert(arr);
  }
  });

  document.getElementById("n7").addEventListener("mouseover", function(){
    document.getElementById("n7").style.visibility = "hidden";
    arr.push(document.getElementById("n7").textContent);
    if(arr.length==9){
    alert(arr);
  }
  });
  document.getElementById("n8").addEventListener("mouseover", function(){
    document.getElementById("n8").style.visibility = "hidden";
    arr.push(document.getElementById("n8").textContent);
    if(arr.length==9){
    alert(arr);
  }
  });
  document.getElementById("n9").addEventListener("mouseover", function(){
    document.getElementById("n9").style.visibility = "hidden";
    arr.push(document.getElementById("n9").textContent);
    if(arr.length==9){
    alert(arr);
  }
  });
}
