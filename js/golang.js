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



$(document).ready(function(){

	// for golangIntroduction class.
	$('#golangIntroduction').click(function(){
		$('#loadData').load('/pages/golangIntroduction.html');
	});



});


// $(document).ready(function(){
//   contentContainer.effect("highlight");
//   hljs.initHighlightingOnLoad();
// });


// // Checking if syntax hightlight will work.
// $(document).ready(function(){
// 	hljs.initHighlightingOnLoad();
// });

// https://highlightjs.org/usage/


// <!-- highlight.js for syntax highlight -->
// <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/atom-one-dark-reasonable.min.css">


// <!-- highlight.js for syntax highlight -->
// <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/highlight.min.js"></script>
// <script>hljs.initHighlightingOnLoad();</script>



// <div class="container-fluid gridMenu ">
// <a id="golangIntroduction" href="javascript:void(0);">Introduction</a>
// </div>





{/* <script>
	hljs.configure({useBR: true});
	hljs.highlightBlock($('div').get(0));
</script> */}