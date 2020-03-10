window.onload = pageLoad;

function pageLoad(){
	//ใส่อะไรข้างใน
	document.getElementById("start").onclick=startGame;
}
//countdouwn
function startGame(){
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*60; 
	var x = document.getElementById('clock');
	timer = setInterval(timeCount,TIMER_TICK);//set time


	//check box หมด/ไม่หมด pop-up
	function timeCount(){
		var allbox = document.querySelectorAll("#squares-layer div");
		x.innerHTML = second;
		if (second >= 0 && allbox.length == 0){
		alert("You Win!");
		clearInterval(timer);
		}
		else if (second == 0 && allbox.length != 0) {
		alert("You Lose :( ");
		clearInterval(timer);
		clearScreen();
		}
		else {
			second -= 1 ;
		}
	}
}

 function addBox(){

	 var numbox = document.getElementById("numbox").value; //get value of many boxes
	 var squaresLayer = document.getElementById("squares-layer") ;
	 var colorDrop = document.getElementById("color").value ; //get value color
 	for (var i =0; i<numbox;i++){
 		var tempbox = document.createElement("div");
		 tempbox.className = "square " + colorDrop ; //choose classmane/classlist square red
		 tempbox.id = "box"+i;
 		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		squaresLayer.appendChild(tempbox); //edit addelement 
		bindBox(tempbox);
	}
 }

 function bindBox(box){
		  //เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		box.parentNode.removeChild(box);
	}
}

function clearScreen(){
	var allbox = document.querySelectorAll("#squares-layer div"); //serectoror...
	//delete all  squares
	for (var i=0;i<allbox.length;i++){
		allbox[i].parentNode.removeChild(allbox[i]);
	}
}




