/*function check() {
	var email1 = document.getElementById("email_addr");
	var email2 = document.getElementById("email_repeat");
	if (email1.value != email2.value) {
		alert("The two emails must much!!");
		return "false";
	}
	//console.log("email1 is: " + email1, "email1.value is: " + email1.value); //email1 is: [object HTMLInputElement] - its whole node. email1.value is: me@me.com
}
*/
function nicknameFunction() {
	if (document.getElementById('yesNick').checked) {
		document.getElementById('nick').style.display="inline";
		document.getElementById('nickname').setAttribute('required', true);
	}
	else {
		document.getElementById('nickname').removeAttribute('required');
		document.getElementById('nick').style.display = "none";
	}
}