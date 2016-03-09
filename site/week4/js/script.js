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

function multi (x, y) {
	return x * y;
};

console.log(multi); // consolSi aCvenebs mTlian funqcias.
console.log(multi.toString()); // doing almost same. just showing function as a string(?)
multi.version = "v 1.1.12";
console.log(multi.version);

var a = multi.version;
console.log(multi.version, a);

//




