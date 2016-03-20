/*var x = [14, 434, 6, 32, 54, 65];

//JavaScript arrays are objectd
console.log(x.length);
console.log(x.sort());
x.push(43, 11, 13);
console.log(x)
k = x[x.length - 1]
console.log(k)


var fruits = ["banana", "orange","apple", "mango"];
function loadFruits() {
	document.getElementById("fruits").innerHTML = fruits;
}

function myFunction() {
	var fruit = prompt("What is yor favorit fruit?");
	fruits[fruits.length] = fruit;
	document.getElementById("fruits").innerHTML = fruits;
}


var massivi = [12, 33, 1, 4, 53, 66, 12];
sum = 0;
for (i = 0; i <  massivi.length; i++) {
	sum += massivi[i];
}
document.write("sum is: " + sum + ", length is: " + massivi.length + ", averange: " + sum/massivi.length);
*/


var grades = [2, 5, , , , 9, 8, , 8];
var sum = 0;
count = 0;

if (grades.length > 0){
	for (index=0; index<grades.length; index++){
		if (grades[index] != undefined){//if u want 2 things happen as part of if statment, u have to remember to put in that extra curly bracket, coz that says "i want u to do both these things"
			sum += grades[index];
			count += 1;
		}
	}
	document.write(sum/count);

}
	
else
	document.write("Empty Array");



var name = prompt("What is your name?");

if (name.length != 0) {
	if (name == "Colleen")
		document.write("What a beautiful name");
	else 
		document.write("Hello" + name);
}
else
	document.write("Feeling shy?");

// Built-in JavaScript functions (alert, prompt, etc) can be mixed in with other HTML code unless you use the <script> tag. Any element of the DOM can have an event attached to it.
document.getElementsByTagName('p')[1].innerHTML = "What does the Fox say?" //changes 2nd paragraph's content.