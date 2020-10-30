// You can put individual links in the following main block.
// Make sure to use '.' for class and '#' for id

// changed the id name not to match as onclick function name. 
// JavaScript Error: Uncaught TypeError: foo is not a function
// https://stackoverflow.com/questions/36874237/javascript-error-uncaught-typeerror-foo-is-not-a-function


// $(document).ready(function(){

// 	// for golangIntroduction class.
// 	$('#golangIntroduction').click(function(){
// 		$('#loadData').load('https://amitmund.github.io/blog/learnings/golang/golangIntroduction.html');
// 	});
// });


// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------






$(document).ready(function(){

	// for golangIntroduction class.
	$('#golangIntroduction').click(function(){
		$('#loadData').load('/pages/golangIntroduction.html');
	});

	

});



// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------


// quick jquery note //

// Basic syntax is: $(selector).action()

// A $ sign to define/access jQuery
// A (selector) to "query (or find)" HTML elements
// A jQuery action() to be performed on the element(s)


// Examples:

// $(this).hide() - hides the current element.

// $("p").hide() - hides all <p> elements.

// $(".test").hide() - hides all elements with class="test".

// $("#test").hide() - hides the element with id="test".



// $(document).ready(function(){

//   // jQuery methods go here...

// });


// So: $(selector).action()




// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
