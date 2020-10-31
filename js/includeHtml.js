// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("amitmund-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("amitmund-include-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

// For hljs to load hljs.initHighlighting() on mouse move.
// But we need to add this includeHtml.js

// $( document ).mousemove(function() {
// 	hljs.initHighlighting()
// });

// $( document ).mouseover(function() {
// 	hljs.initHighlighting()
// });

$(this).mouseleave(function(){
  hljs.initHighlighting()
});

// For mobile devices.
$(document).scroll(function(){
  hljs.initHighlighting()
});


// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

// For fun:

// $(".author").hover(function(){
//   alert("Thank you :) ")
// });


// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
