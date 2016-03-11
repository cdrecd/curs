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
		favColor: "blue" // last name value pair inside of the object vurly braces does not get a comma at the end.
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


function test() {
	console.log(this);
	this.myName = "arcvin";
}
test();
console.log(window.myName);







