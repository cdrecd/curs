/*function welcomeMsg(msg) {
	alert(msg);
	var name = prompt("whats your name?");
	return name;
}
var firstName = welcomeMsg("hi") */

/*function message(msg) {
	document.getElementById('output').innerHTML = msg +" event";
	}*/

// Date() is built-in function and shows date.
/*function displayDate() {
	document.getElementById("demo").innerHTML = Date();
}*/

/*
function messanger () {
	document.getElementById("will").innerHTML = "Clicked First Button";
}

function messanger2 (){
	document.getElementById("will").innerHTML = "Clicked Second Button";
}
*/

function openit() {
	x = document.getElementById("opclo");
	x.style.display = "block";
}

function closeit() {
	x = document.getElementById("opclo");
	x.style.display = "none";
}


function closeMe(){
      // Find the element
   		x=document.getElementById("demo");
       //Option 1: Change the style attribute directly
   		//x.style.display="none";
  
      //Option 2: Change the class
   		x.className="closed"; //looking in CSS classes
	}

function openMe(){
      // Find the element
   		x=document.getElementById("demo");
      //Option 1: Change the style attribute directly
   		 //x.style.display="block";
      
      //Option 2: Change the class
   		x.className="open"; //looking in CSS classes
	}

// "this"
// "this" attribute allows element to refer to itself and allows you to access an element's info. Every object in the DOM has automatically generated "this".


function displayId (element) {
	console.log(element.id);
}








