# Layout

- All need to be in only 1 level depth. (Special Files: index.html, readme.md, pages/00TemplatePage.html, pages/00TemplateSubpage.html)
- Note: 
  - index.html: to be in top, because of the landing page.
  - readme.md: to keep this notes.
  - pages/00TemplatePage.html: to keep the format for the pagename.html
  - pages/00TemplateSubpage.html: to keep the format for the pagenameSubpage.html
- Name need to be in camelCase
- Naming format need to be: pageSubpage.ext

'''
So, only for the `index.html` the referance would be different. Rest all would be having the correct format.
'''


### Some other gide example:

#### css:

```
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "Head Head Head Head"
    "SiteNav Main Main RightNav"
    "F1 F2 F3 F4"
    "FAll FAll FAll FAll";
}
.Head { grid-area: Head; }
.SiteNav { grid-area: SiteNav; }
.Main { grid-area: Main; }
.RightNav { grid-area: RightNav; }
.F1 { grid-area: F1; }
.F2 { grid-area: F2; }
.F3 { grid-area: F3; }
.F4 { grid-area: F4; }
.FAll { grid-area: FAll; }
```


#### html:
```
<html>
<head>
	<title>grid</title>
</head>

<body>
<div class="grid-container">
  <div class="Head">
		HEAD
	</div>

  <div class="SiteNav">
		SideNav
	</div>

  <div class="Main">
		Main
	</div>

  <div class="RightNav">
		Right Nav
	</div>

  <div class="F1">
		Footer1
	</div>

  <div class="F2">
		Footer2
	</div>

  <div class="F3">
		Footer3
	</div>

  <div class="F4">
		Footer4
	</div>

  <div class="FAll">
		All footer
	</div>
	
</div>
</body>

</html>
```

### highlight.js - syntax highlight.

These setting need to be there in the page including the sub-pages. to work for this feature.

```
  /* https://highlightjs.org */
  /* https://www.inmotionhosting.com/support/website/how-to-add-highlight-js-to-your-website/ */
  /* https://jmblog.github.io/color-themes-for-highlightjs/ */

  /* Few them that I liked */
  /* https://highlightjs.org/static/demo/ */
  /*  
  An Old Hope
  Androidstudio
  Arta **
  Atom One Dark * same background.
  */
```

```
  <!-- highlight.js for syntax highlight -->
  <!-- <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/default.min.css"> -->
  <!-- i am using a different Styles(arta) we are all good. -->
  <!-- you just have to update the name in place of default or arta to the new one if you want to change. -->
  <!-- https://highlightjs.org/static/demo/ -->
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/arta.min.css">


  <!-- highlight.js for syntax highlight -->
  <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/highlight.min.js"></script>
  <script>hljs.initHighlightingOnLoad();</script>
```

Some more css:
```
If the style have space and have Capital Letter, then the name would be: (E.g: Atom One Dark Reasonable -> atom-one-dark-reasonable )
  <!-- highlight.js for syntax highlight -->
  <!-- <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/default.min.css"> -->
  <!-- i am using a different Styles(arta) we are all good. -->
  <!-- you just have to update the name in place of default or arta to the new one if you want to change. -->
  <!-- https://highlightjs.org/static/demo/ -->
  <!-- Atelier Cave Dark, Atelier Lakeside Dark,Atom One Dark Reasonable  -->
  <!-- <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/arta.min.css"> -->
  <!-- <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/androidstudio.min.css"> -->
  <!-- <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/hopscotch.min.css"> -->
  <!-- <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/railscasts.min.css"> -->
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/atom-one-dark-reasonable.min.css">
```


### On highlightjs 

```
// For hljs to load hljs.initHighlighting() on mouse move.
// But we need to add this includeHtml.js
$( document ).mousemove(function() {
	hljs.initHighlighting()
});
```


### jquery 

```

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


```


### Feq jquery

```

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

// For fun:

// $(".author").hover(function(){
//   alert("Thank you :) ")
// });


// --------------------------------------------------------------------------------


// for .gridMenu

// $(document).ready(function(){
//   $("#gridMenuHide").click(function(){
//     $(".gridMenu").hide();
//   });
//   $("#gridMenuShow").click(function(){
//     $(".gridMenu").show();
//   });
// });




//  You might like to put this on your topic Main page to work. 
// <!-- To Hide / Show SideMenu -->
// <!-- <div>
//   <button id="gridMenuHide">Hide SideMenu</button>
//   <button id="gridMenuShow">Show SideMenu</button>
// </div> -->


// $(document).ready(function(){
//   $("button").click(function(){
//     $("p").toggle();
//   });
// });

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

//  Few jquery links:
// https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_slide_toggle
// https://www.w3schools.com/jquery/jquery_dom_set.asp

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

```


```
### Animation example:
.amundAnimationText {
  position: relative;
  animation: mymove 20s infinite;
}

@keyframes mymove {
  0%   {left: 35vw;}
  50%  {left: -50vw;}
  75% {left: 100vw;}
   100%{left: -50vw;}
}

<div class="amundAnimationText">
<h1>Topic1 this is a long text for checking</h1>
</div>

<div>
<h2> test </h2>
</div>

```

### Few quick note that need to be updated as webpage later.

```
BAY LEAVES
( Tej Patta )
Many ladies add bay leaves to their foods, especially in the cooking of red meat and poultry. Many don't know why bay leaves are added to food!
When a woman was  asked why, she said, "to flavor the food". If you boil the bay leaves in a glass of water and taste it, it will have no flavor.  So why do you put bay leaves in the meat or other food?

The addition of bay leaves to meat converts triglycerides to monounsaturated fats and, for experimentation and confirmation:
>Cut a chicken into two halves, cook each half in a separate pan and place on one a bay leaf, and cook the other without a bay leaf. Observe the amount of fat in both pans after cooking!

If you have bay leaves, there is no need for a pharmacy, as recent scientific studies have shown that bay leaves have many benefits:

They help to get rid of many serious health problems and illnesses.

The benefits of bay leaf: 

They - 
▪Treat digestive disorders and help eliminate -
   •Lumps
   •Heartburn
   •Acidity
   •Constipation
Hot bay tea regulates bowel movements - 
   •lowers blood sugar
   •is an antioxidant,
▪by eating them, or by drinking bay tea for a month, the body is able to produce insulin 
▪eliminates bad cholesterol and relieves the body of triglycerides.
▪useful in treating colds, flu and severe coughs, as it is a rich source of vitamin "C". ▪you can boil the leaves and inhale steam to get rid of phlegm and reduce the severity of coughs.
▪protects the heart from seizures and strokes, as they contain cardiovascular protective compounds.
▪rich in acids such as caffeic acid, quercetin, eigonol and bartolinide, substances that prevent the formation of cancer cells in the body.
▪eliminates insomnia and anxiety. If taken before bed, helps you relax and sleep peacefully.
▪drinking a cup of boiled bay leaves twice a day breaks down kidney stones and cures infections.
 ■Don't just read and leave in your in box. Forward, for others' benefit! 👍 Dr c a kishore #SwathaSamruddhaBharatha #IndaAyurvedaFoundation

 ```

## Azure face

```
# Working example:

curl -H "Ocp-Apim-Subscription-Key: xxxx" "https://sretoolkittry1.cognitiveservices.azure.com/face/v1.0/detect?detectionModel=detection_02&returnFaceId=true&returnFaceLandmarks=false" -H "Content-Type: application/json" --data-ascii "{\"url\":\"https://www.sretoolkit.com/images/samvrita1Y1.jpg\"}"


		a03b8ad8-87a0-434d-8457-b6dcd7a04501


		curl -H "Ocp-Apim-Subscription-Key: xxxxxx" "https://sretoolkittry1.cognitiveservices.azure.com/face/v1.0/detect?detectionModel=detection_02&returnFaceId=true&returnFaceLandmarks=false" -H "Content-Type: application/json" --data-ascii "{\"url\":\"https://pbs.twimg.com/media/EoyFHuTXcAAQExc?format=jpg&name=900x900\"}"

		b2acb508-5e45-4556-aef4-92eea685cbb0

	
		curl -H "Ocp-Apim-Subscription-Key: xxxxxx" "https://sretoolkittry1.cognitiveservices.azure.com/face/v1.0/detect?detectionModel=detection_02&returnFaceId=true&returnFaceLandmarks=false" -H "Content-Type: application/json" --data-ascii "{\"url\":\"https://pbs.twimg.com/media/EoY3iUiWMAMSD2o?format=jpg&name=900x900\"}"


curl --location --request POST 'https://sretoolkittry1.cognitiveservices.azure.com/face/v1.0/findsimilars' \
	--header 'Content-Type: application/json' \
	--header 'Ocp-Apim-Subscription-Key: xxxxxx' \
	--header 'Authorization: Basic YW1pdG11bmQ6UG9ydEBsZGV2b3Bz' \
	--data-raw '{
			"faceId": "a03b8ad8-87a0-434d-8457-b6dcd7a04501",
			"faceIds": ["b2acb508-5e45-4556-aef4-92eea685cbb0", "0eed61a2-3a22-4047-b327-2efcfc46ac72"],
			"maxNumOfCandidatesReturned": 10,
			"mode": "matchPerson"
	}'
```


```
A professor gave a balloon to every student, who had to inflate it, write their name on it and throw it in the hallway. The professor then mixed all the balloons. The students were given 5 minutes to find their own balloon. Despite a hectic search, no one found their balloon. At that point the professor told the students to take the first balloon that they found and hand it to the person whose name was written on it. Within 5 minutes everyone had their own balloon.

The professor said to the students: “These ballons are like happiness. We will never find it if everyone is looking for their own. But if we care about other people's happiness....we'll find ours too.

```


### Quick git command
> git add *; git status; git commit -m "update."; git push




