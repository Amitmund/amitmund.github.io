$(document).ready(function(){

	// for golangIntroduction class.
	$('#prometheusNodeExporterQueries').click(function(){
		$('#loadData').load('/pages/prometheusNodeExporterQueries.html');
	});

	$('#prometheusChapter1').click(function(){
		$('#loadData').load('/pages/prometheusChapter1.html');
	});	
	
	$('#prometheusChapter2').click(function(){
		$('#loadData').load('/pages/prometheusChapter2.html');
	});	

});
