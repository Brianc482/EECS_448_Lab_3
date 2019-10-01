function myFunctions() {
  setWidth();
  setBorderColor();
  setBackground();
}
function setWidth() {
  var w = document.getElementById("width").value;
  document.getElementById("dummytext").style.borderWidth = w + "px";
}

function setBorderColor() {
  var red = document.getElementById("red").value;
  var green = document.getElementById("green").value;
  var blue = document.getElementById("blue").value;
	var rgb = "rgb("+red+","+green+","+blue+")";
  document.getElementById("dummytext").style.borderColor = rgb;
}

function setBackground() {
  var redBackground = document.getElementById("redBackground").value;
  var greenBackground = document.getElementById("greenBackground").value;
  var blueBackground = document.getElementById("blueBackground").value;
  var rgb2 = "rgb("+redBackground+","+greenBackground+","+blueBackground+")";

  document.getElementById("dummytext").style.backgroundColor = rgb2;
}
