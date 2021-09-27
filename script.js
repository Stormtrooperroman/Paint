
var size = document.getElementById("input").value;
var colorPicker = [];
colorPicker[0] = document.getElementById('red');
colorPicker[1] = document.getElementById('green');
colorPicker[2] = document.getElementById('blue');
colorPicker[3] = document.getElementById('yellow');
colorPicker[4] = document.getElementById('magenta');
colorPicker[5] = document.getElementById('black');
colorPicker[6] = document.getElementById('white');
colorPicker[7] = document.getElementById('olive');
colorPicker[8] = document.getElementById('maroon');
colorPicker[9] = document.getElementById('lime');


var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");
var list = document.getElementById("list");

var targetColor = "#F00"
colorPicker[0].style.height ="80px"
colorPicker[0].style.width ="80px"

function pickColor (e){
	console.log(e.target.tagName);
	if (e.target.tagName == "LI") {

		if (e.target.id=="red") {
			targetColor = "#F00"
		}
		else if (e.target.id=="blue") {
			targetColor = "#00F"
		}
		else if (e.target.id=="green") {
			targetColor = "#008000"
		}
		else if (e.target.id=="yellow") {
			targetColor = "#FF0"
		}
		else if (e.target.id=="magenta") {
			targetColor = "#F0F"
		}
		else if (e.target.id=="black") {
			targetColor = "#000"
		}
		else if (e.target.id=="white") {
			targetColor = "#FFF"
		}
		else if (e.target.id=="olive") {
			targetColor = "#808000"
		}
		else if (e.target.id=="maroon") {
			targetColor = "#800000"
		}
		else if (e.target.id=="lime") {
			targetColor = "#00FF00"
		}
		
		for (var i = 0; i < 10; i++) 
		{
			colorPicker[i].style.height="50px";
			colorPicker[i].style.width="50px";
		}
		e.target.style.height = "80px";
		e.target.style.width ="80px";
	}
}

function drawOnCanvas(e){
	if (e.which ==1) {
		canvasContext.fillStyle = targetColor;
		canvasContext.beginPath();
		canvasContext.arc(e.offsetX, e.offsetY, size, 0, Math.PI*2);
		canvasContext.fill();
	}
}
function changeSize(){
    size = document.getElementById("size").value;
    console.log(size);
    document.getElementById("input").value = size;
}

canvas.addEventListener("mousemove", drawOnCanvas);
list.addEventListener("click", pickColor);