$(document).ready(function(){

	$('#linuxScreen').click(function(){
		$('#loadData').load('/pages/linuxScreen.html');
	});


	$('#linuxGpg').click(function(){
		$('#loadData').load('/pages/linuxGpg.html');
	});


	
});


// for hljs 
// https://api.jquery.com/scroll/
// https://www.w3schools.com/jquery/jquery_events.asp
// https://www.bitdegree.org/learn/jquery-mousemove

// $( document ).click(function() {
// 		hljs.initHighlighting()
// });

$( document ).mousemove(function() {
	hljs.initHighlighting()
});
