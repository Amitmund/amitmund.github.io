// https://stackoverflow.com/questions/17600264/why-jquery-click-doesnt-work-when-included-in-a-separate-file

$(document).ready(function(){

	$('golangIntroduction').click(function(){
		$('.Main').load('https://amitmund.github.io/blog/learnings/golang/golangIntroduction.html')
	});

});

// Function for click links.

$(document).ready(function(){

$('golangEnvironmentSetup').click(function(){
	$('.Main').load('https://amitmund.github.io/blog/learnings/golang/golangEnvironmentSetup.html')
	});

});


$(document).ready(function(){
$('golangBuild').click(function(){
	$('.Main').load('https://amitmund.github.io/blog/learnings/golang/golangBuild.html')
 });

});


$(document).ready(function(){
$('golangVariables').click(function(){
	$('.Main').load('https://amitmund.github.io/blog/learnings/golang/golangVariables.html')
 });
});


$(document).ready(function(){
$('golangPackage').click(function(){
	$('.Main').load('https://amitmund.github.io/blog/learnings/golang/golangPackage.html')
	});
});