// You can put individual links in the following main block.
// Make sure to use '.' for class and '#' for id

// changed the id name not to match as onclick function name. 
// JavaScript Error: Uncaught TypeError: foo is not a function
// https://stackoverflow.com/questions/36874237/javascript-error-uncaught-typeerror-foo-is-not-a-function

$(document).ready(function(){

	// for golangIntroduction class.
	$('#golangIntroduction').click(function(){
		$('.Main').load('https://amitmund.github.io/blog/learnings/golang/golangIntroduction.html')
	});

	// and so on for rest of the links.
	$('#golangEnvironmentSetup').click(function(){
		$('.Main').load('https://amitmund.github.io/blog/learnings/golang/golangEnvironmentSetup.html')
	});

	// and so on for rest of the links.
	$('#golangBuild').click(function(){
		$('.Main').load('https://amitmund.github.io/blog/learnings/golang/golangBuild.html')
	 });

	// and so on for rest of the links.
	$('#golangVariables').click(function(){
		$('.Main').load('https://amitmund.github.io/blog/learnings/golang/golangVariables.html')
	 });

	// and so on for rest of the links.
	$('#golangPackage').click(function(){
		$('.Main').load('https://amitmund.github.io/blog/learnings/golang/golangPackage.html')
	});

});