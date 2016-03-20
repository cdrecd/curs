var x = [14, 434, 6, 32, 54, 65];

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