/*var sum = 0
for (var i = 0; i < 100; i++) {
	sum += i;
}

console.log("sum of 0 though 99 is: " + sum);

var x = 10;
if ( (null) || (console.log("Hello")) || x > 5 ) {
  console.log("Hello");
}


//Defining object
var company = new Object();
company.name = "Facebook";  //company - object .name - property
company.ceo = new Object();
company.ceo.bitch = "esma";
company.address = "fuckoffstreet";

console.log(company);
console.log("its name is: " + company["name"]);

company["$stock of company"] = 110;
console.log(company);

var meil = "phosta"
company[meil] = "some@some.com";

console.log(company.name + " phostal address is: " + company[meil]);
console.log(company[meil]);
*/


// object literal
/*var facebook = {
	name: "Facebook",
	ceo: {
		firstName:  "Mark",
		favColor: "blue" // last name value pair inside of the object curly braces does not get a comma at the end.
	},
	"stock of company": 100
};

console.log(facebook);*/
// Defining a variable as an Object Literal accomplishes pretty much the same thing as defining a variable equal to 'new Object()'. However, it's faster and easier to type up an object literal.


//Functions are first class dataobjects.
//Functions ARE objects.

/*function multi (x, y) {
	return x * y;
};

console.log(multi); // consolSi aCvenebs mTlian funqcias.
console.log(multi.toString()); // doing almost same. just showing function as a string(?)
multi.version = "v 1.1.12";
console.log(multi.version);

var a = multi.version;
console.log(multi.version, a);

// Function factory

function makeMultiplier(multiplier) {
	var myFunc = function (x) {
		return multiplier * x;
	};
	return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));

// Passing function as arguments.

function doOperation(x, operation) {
	return operation (x);
}

var result = doOperation(5, multiplyBy3);
console.log(result);*/


//Passing Variables by Value
/*var a = 7;
var b = a;
console.log(a == b);
var a = 9;
console.log(a == b);

//Passing Variables by Reference
var c = {x: 7};
var d = c;
console.log(c, d); // prints out whole object
console.log(c.x, d.x);

d.x = 11; // monacems Secvlis c.d - sTvisac.
console.log(c, d); 
console.log(c.x, d.x);*/

/*var a = 5;
var b = "344";
var g = (a + b);// = 5334
console.log(g, a + b + "rev");*/

/*function changePrimitive(primvalue) {
	console.log("in changePrimitive...");
	console.log("before:");
	console.log(primvalue);

	primvalue = 5;
	console.log("after");
	console.log(primvalue); //it prints nothing if ull not call function
}

var value = 7;
changePrimitive(value);
console.log("after changePrimitive, orig value:");
console.log(value);*/

//
/*function test() {
	console.log(this); // "this" is pointing global window object.
	this.myName = "arcvin";
}
test();
console.log(window.myName);*/


// Function constructors

// its convention that capital C in function names means its function constructor as opposed to a regular function. 
/*function Circle (radius) {
	this.radius = radius;
	console.log(this.radius); // ** its same of...
	this.getArea = 
		function () {
			return Math.PI * Math.pow(this.radius, 2);
		};
}
var myCircle = new Circle(10); // invoke function with new keyword makes "this" point to the object itself that got greated, which is Circle.
console.log(myCircle); // ** its same of..
console.log(myCircle.getArea());*/

// Same one but with prototype.
/*function Circle (radius) {
	this.radius = radius;
}
//Circle.prototype has to be writen outhside of the function, coz getArea function without prototype is executing every single time when makeing new Circle and its waste of memory. check in console.

Circle.prototype.getArea = 
	function () {
		return Math.PI * Math.pow(this.radius, 2);
	};

// Important to not forger new keyword. coz when function does not returns anything, var myCircle becomes undefined
var myCircle = new Circle(10);
console.log(myCircle);

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);
console.log(myOtherCircle.getArea());*/

/*function Dog(name) {
  this.name = name;
  console.log(this.name);
}

Dog.prototype.bark = function () {
  console.log(this.name + " likes barking! Bark!");
}

var max = new Dog("Max", "Buddy");
max.bark();
*/


// object literal and "this"
/*var literalCircle = { // when open curly braces its tantamount to new object().
	radius: 10,

	getArea: function () {
		var self = this;
		console.log(this); // prints out: Object {radius: 10}

		var increaseRadius = function () {
			self.radius = 20;
		};
		increaseRadius();
		console.log(this); // prints out: Object {radius: 20}
		return Math.PI * Math.pow(this.radius, 2);
	}
};

console.log(literalCircle.getArea()); // returns Math.PI * Math.pow(this.radius, 2)*/


// Arrays
// Array is collection of data
//JavaScript arrays are just objects and indeces are property names
/*var array = new Array();
array[0] = "sinsin";
array[1] = "ker";
array[2] = "two";
array[3] = "ars";
array[4] = function (name) {
	console.log("hello " + name);
};
array[5] = {course: "HTML, CSS&JS"};
console.log(array);
console.log(array[4]);
array[4]("arcvin"); // hello arcvin
array[4](array[0]); // hello sinsin
console.log(array[5].course); // HTML, CSS&JS*/


// short hand array creation

/*var names = [
{ns: "nemess"},
"name",
"name1",
"name2"];

var names1 = ["name", "name1", "name2"];

// arrays can be sparse.
names1[100] = "rete"; // prints out numbers of time (97) hello undefined and at the end hello rete

for (var i = 0; i < names1.length; i++) {
	console.log("hello " + names1[i]);
}

*/

/*var names2 = ["name", "name1", "name2", {obj: "new"}];

var myObj = { // objects does not has indeces. it has properties.
	name: "arcvin",
	course: "HTML/CSS/JS",
	plat: "Coursera" // between arrayelements placing commas and at the end of the last element no need comma.
};
for (var prop in myObj) {
	//console.log(prop); // name, course plat
	//console.log(myObj[prop]) // arcvin, HTML/CSS/JS, Coursera
	console.log(prop + ": " + myObj[prop]);
}

//names2.gree = "new prop"; // gree: "new prop"

for (var name in names2) {
	console.log("hello " + names2[name]);
}

console.log(names2.length);
*/


// Closures
/*function makeMultiplier(multiplier) {
	function b() {
		console.log("Multipler is: " + multiplier) //first, checks out if multiplier is defined inside a function. if not, then searching outside of the function and gets it if it exist.
	}
	b();
	return (
		function (x) {
			return multiplier * x;
		}
		);
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));*/


//Fake Namespaces
// roca html failSi damatebulia ramdenime JS faili da am failebSi cvladis saxelebi emTxveva, ganxorcieldeba bolo JS failis scriptis mixedviT. ase rom ar moxdes, cvladebi da funqciebi unda gadaiweros Semdegnairad:
/*var name = "John";  // original
function sayHi () {
	console.log("hi " + name);
}

sayHi();

var johnGreeter = {};  // gadawerili
johnGreeter.name = "john";
johnGreeter.sayHi = function () {
	console.log("hi " + johnGreeter.name);
}

johnGreeter.sayHi();



// Immediately Invoked Function Expression AKA: IIFE
// Immediately Invoked Function Expressions are usually used to place code into its own execution context not to conflict with the global scope.
(function (name) {
	console.log("Hello " + name);
})("Coursera");

(function (window) { // The window object represents an open window in a browser.
	var yakgre = {}; // making it object
	yakgre.name = "yak";
	var gre = "hello";
	yakgre.sayHello = function () {
		console.log(gre + yakgre.name);
	}
	// to expose yakgre object to the window object, we have to pass window object as part of the parametrs to the function.
	window.yakgre = yakgre;//we are greating new window object and we're setting it to the yakgre.
})(window);

// each one of those variables is being defined in their own execution context; they are living inside of this function.
*/

//Dom manipulation
// in HTML javascript code is executed exactly where it is located.

//console.log(document instanceof HTMLDocument); // checks of document is instance of HTMLDocument.

//because of DOMContentLoaded, this function will happen before any images or any CSS or any other script is loaded
/*document.addEventListener("DOMContentLoaded", 
	function (event) {
		function sayHello (event) {
			console.log(event);
			this.textContent = "Said it!";
			var name = document.getElementById("name").value // value is only for input elements
			var message = "Hello " + name;

			document.getElementById("content").textContent = message; // textContent is a property to be able to insert text inside of an element.
			// to print out message in different formated text, u can use .innerHTML property and <h2> tag: var message = "<h2>Hello " + name</h2>; and document.getElementById("content").innerHTML = message;
			
			// .querySelector takes a selector
			if (name === "student") {
				var title = document.querySelector("#title").textContent; // # selector, coz its CSS selector. The querySelector method expects a CSS query, so the '#' sign is therefore needed before referencing a value of an 'id' attribute.
				title += " more and more";

			document.querySelector("#title").textContent = title; // this  needed to update title: title = "student" + "more an more". onclick it prints more and more messages
			// .querySelector() property u can put h1 element too ( .querySelector("h1") ) and it will return first matched element.actually it will replace first matched element. no printing many mesages like on CSS selector ("#title"). just single replaced message.
			}
		}

		// event handlers are functions that u bind using specific methods to certain events that happens in browser.

		// document.querySelector("button").onclick = sayHello;

	document.querySelector("button").addEventListener("click", sayHello);

	document.querySelector("body").addEventListener("mousemove", 
			function (event) {
				if (event.shiftKey === true) { // shiftKey happens  when shift key is down
					console.log("X is :" + event.clientX);
					console.log("Y is :" + event.clientY);
				}
			}
		);
		}
);*/














