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


### Quick git command
> git add *; git status; git commit -m "update."; git push

