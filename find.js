var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;
var win = 0;

console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
  return Math.sqrt(Math.pow(y0 - y1,2) + Math.pow(x0 - x1,2));
};


var findIt = function(e) {
	if(win == 0){
    	maxDistance = distance(0,0,targetX,targetY);
    	dist = maxDistance - distance(targetX,targetY,e.clientX,e.clientY);
    	scaledColor = Math.floor((dist * 255)/maxDistance);
    	box.style.backgroundColor = "rgb("+scaledColor+",0,0)";
	}
	else{
		box.style.backgroundColor = "rgb(0,0,255)";
	};
};

var click = function(e){
  if(distance(targetX,targetY,e.clientX,e.clientY) < 100){
    win = 1;
  };
}

/*
your OTHER FXNS
*/

box.addEventListener("mousemove", findIt);
box.addEventListener("click", click);
