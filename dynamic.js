var attemptsAllowed = 3

function init() {
	document.getElementById("count").value = 0;
}

window.onload = init

function userCredential(id, password) {
	id = this.id;
	password = this.password;
}

function display() {
	alert("called display")
}

function userCredentials() {

	var userCred = new userCredentials("simar","1234")
	var userCred2 = new userCredentials("sonam", "123")
	var array = new Array()
	array.push(userCred)
	array.push(userCred2)
	return array
}

function validate() {
	var user = document.getElementById("userName").value;
	var password = document.getElementById("password").value;
	if(user == "simar" && password == "1234") {
		alert("successful")	  
	}
	else {
	  var countValue = document.getElementById("count").value;
	  console.log(countValue)
	  var countValueInt = parseInt(countValue); 
	  document.getElementById("count").value = countValueInt+1;
	  if(document.getElementById("count").value >= 3){
	  	setTimeout(enable, 5000);
	  	setInterval(waitForSomeTime, 1000);	  	
	  	document.getElementById("userName").disabled = true;
	  	document.getElementById("password").disabled = true;
	  }	  
	}

}

function enable() {
	document.getElementById("userName").disabled = false;
	document.getElementById("password").disabled = false;
	var date = new Date();

}

 function showTimeField() {
    document.querySelector('.custom-timer').style.display = 'block'
 }

 function hideTimeField() {
 	document.querySelector('.custom-timer').style.display = 'None'
 }

function waitForSomeTime() {
	showTimeField()
	var time = new Date().toLocaleTimeString();
    document.getElementById("time").value = time
}