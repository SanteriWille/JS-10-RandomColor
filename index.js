document.getElementById("setColor").addEventListener("click", function () {
  var colorValue = document.getElementById("input").value;

  document.getElementById("div1").style.backgroundColor = colorValue;
  document.getElementById("div1").innerHTML = colorValue;
})

document.getElementById("randomColor").addEventListener("click", function () {
  var colors = ["red", "green", "blue", "yellow", "orange", "purple", "pink"]

  var randomColor = colors[Math.floor(Math.random() * colors.length)];

  document.getElementById("div2").style.backgroundColor = randomColor;
  document.getElementById("div2").innerHTML = randomColor;
})

document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("div1").style.backgroundColor = ""; 
  document.getElementById("div1").innerHTML = ""; 

  document.getElementById("div2").style.backgroundColor = ""; 
  document.getElementById("div2").innerHTML = ""; 

  document.getElementById("input").value = "";
})