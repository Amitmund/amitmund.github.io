// You can put individual links in the following main block.
// Make sure to use '.' for class and '#' for id

// changed the id name not to match as onclick function name. 
// JavaScript Error: Uncaught TypeError: foo is not a function
// https://stackoverflow.com/questions/36874237/javascript-error-uncaught-typeerror-foo-is-not-a-function

$(document).ready(function(){

	// For the links.
	$('#readmeGod22Steps').click(function(){
		$('.Main').load('https://amitmund.github.io/blog/readme/god/22Steps.html');
	});


});