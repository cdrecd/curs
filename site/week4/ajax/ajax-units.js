(function (global) {

//set up namespace for our utility

var ajaxUtils = {};

//Returns an HTTP request object

function getRequestObject() {
	// The XMLHttpRequest object is used to exchange data with a server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.
	if (window.XMLHttpRequest) { 
		return (new XMLHttpRequest());
	}
	else if (window.ActiveXObject) {
		//For very old IE browsers (optional)
		return (new ActiveXObject("Microsoft.XMLHTTP"));
	}
	else {
		global.alert("Ajax is not supported");
		return(null);
	}
}

// Makes an Ajax GET request to 'requestUrl'
ajaxUtils.sendGetRequest = 
	function(requestUrl, responseHandler) {
		var request = getRequestObject();
		//onreadystatechange 	Stores a function (or the name of a function) to be called automatically each time the readyState property changes
		request.onreadystatechange = 
			function() {
				handleRespose (request, responseHandler);
			};
		request.open("GET", requestUrl, true);
		request.send(null); //For POST only
	};

// only calls user provided 'responseHandler' function if respose is ready and not an error.

function handkeResponse (request,
						 responseHandler) {
	if ((request.readyState == 4) && (request.status == 200)) {
		responseHandler(request);
	}
}

// Expose utility to global object.
global.$ajaxUtils = ajaxUtils;

})