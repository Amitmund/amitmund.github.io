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


### Quick git command
> git add *; git status; git commit -m "update."; git push

