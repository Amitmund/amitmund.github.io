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


// $('pre > code').each(function() {
//   hljs.highlightBlock(this);
// });

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------



// function Validate(control)
//  {
//     var limit = 10;
//     var v = control.value; //var v = $(this).val();
//     var vl = v.replace(/(\r\n|\n|\r)/gm,"").length;
//     var newtext="";
//     for (var i = 0; i < v.length ; i++)
//     {
//     if (i%limit==0){
//         v = v.replace(/(\r\n|\n|\r)/gm,"");
//         var n = v.substr(i,limit)
//             n= n + '\n';
//         newtext += n;
//         }
//     }
//     control.value = newtext;
// }



// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

