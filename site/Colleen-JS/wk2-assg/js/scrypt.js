/*Name this external file gallery.js*/

function upDate(previewPic){
/*  In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image*/
    document.getElementById("image").style.backgroundImage = "url(" + previewPic.src + ")"; //previewPic.src will get only http://...pic.jpg, but its neccessary to be: url(http://...pic.jpg).
    
       /* 2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image */
    document.getElementById("image").innerHTML = previewPic.alt;
	}

	function unDo(){
/*    In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was*/
    document.getElementById("image").style.backgroundImage = "url()";
/*    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was*/
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
		
	}
/*
//from classmates
function upDate(previewPic) {
    var image = document.getElementById("image"),
        text = "url('" + previewPic.src + "')";
    image.style.backgroundImage = text;
    image.innerHTML = previewPic.alt;

}

function unDo() {
    var image = document.getElementById("image"),
        redoText = "Hover over an image below to display here.";
    image.style.removeProperty('background-image');
    image.style.backgroundColor = "#8e68ff";
    image.innerHTML = redoText;
}

//Name this external file gallery.js

function upDate(previewPic){
 //get the Element 'image'
  x=document.getElementById('image');

 //change the url of the background image 
  x.style.backgroundImage = "url(" + previewPic.src +")"; 
 //set the same backgroundColor
  x.style.backgroundColor = "#8e68ff";

 //change the description 
  x.innerHTML = previewPic.alt;
    }

    function unDo(){
 //get the Element 'image'
     x=document.getElementById('image');

 //change the url of the background image 
     x.style.backgroundImage = "url('')";

 //change the description 
     x.innerHTML = "Hover over an image below to display here.";
        
    }*/