var ball=[];
var time;
var context,cont;
var second;
var min;
var hour;
window.onload= function(){
	var canvas=document.getElementById('canvas');
	context= canvas.getContext('2d');
	cont=canvas.getContext('2d');
	canvas.width=1024/1.3;
	canvas.height=768/4;
	setInterval(function(){
		update(context);
	},50);
}
function update(ctx){
	var currentTime= new Date();
	if(currentTime!=time){
		draw(context,currentTime);
	}
}
function draw(ctx,Time){
	time=Time;
	var second=time.getSeconds();
	var min=time.getMinutes();
	var hour=time.getHours();
	ctx.clearRect(0, 0,1024, 768);
	drawNumber(0,0,parseInt(hour/10),ctx);
	drawNumber(105,0,hour%10,ctx);
	drawNumber(210,0,10,ctx);
	drawNumber(273,0,parseInt(min/10),ctx);
	drawNumber(378,0,min%10,ctx);
	drawNumber(483,0,10,ctx);
	drawNumber(546,0,parseInt(second/10),ctx);
	drawNumber(651,0,second%10,ctx);
}
function rangeNumber(){
	return (Math.Random())*10
}
function drawNumber(x,y,num,cxt){
	cxt.fillStyle="#fff";
	for(var i=0;i<digit[num].length;i++){
		for(var j=0;j<digit[num][i].length;j++){
			if(digit[num][i][j]==1){
				cxt.beginPath();
				cxt.arc(x+(j+.5)*14,y+(i+.5)*14,6,0,2*Math.PI);
				cxt.closePath();
				cxt.fill();
			}
		}
	}
}

