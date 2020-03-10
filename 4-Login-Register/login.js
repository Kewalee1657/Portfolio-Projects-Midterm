function getParams() {
  	var idx = document.URL.indexOf('?');
  	var params = new Array();
  	if (idx != -1) {
  		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
  		for (var i=0; i<pairs.length; i++) {
  			nameVal = pairs[i].split('=');
  			params[nameVal[0]] = nameVal[1];
  		}
 	}
  	return params;
 }

window.onload = loginLoad;
function loginLoad(){
	// วิธีใช้ getParams()
	var login = document.getElementById("myLogin");
	login.onsubmit = checkLogin ;
}
function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	var parameter = getParams(); //เอาข้อมูลมาจาก URL .o register
		var x = parameter["username"]; //เอาข้อมูลอะไรมาจาก para
    	var y = parameter["password1"];
	var name = document.forms["myLogin"]["username"].value;
	var pass = document.forms["myLogin"]["password"].value;
	if (name==x&&pass==y){
		alert("Welcome !");
		return true;
	}
	else{
		alert("Incorrect !");
		return false;
	}
}

			