// You can put individual links in the following main block.
// Make sure to use '.' for class and '#' for id

$(document).ready(function(){

	// for golangIntroduction class.
	$('#golangIntroduction').click(function(){
		$('.Main').load('https://amitmund.github.io/blog/learnings/golang/golangIntroduction.html')
	});
});

$(document).ready(function(){

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