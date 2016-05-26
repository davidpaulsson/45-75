## 45-75 Characters for Optimal Line Length

1. Drag the link below to your bookmarks bar
2. Click a block of text
3. All characters between 45-75 will highlight red. You want to have your line breaks here somewhere

[45-75][1]
[1]:javascript:(function(){(function(){if(!window.jQuery){var done=false;var script=document.createElement('script');script.src='//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js';script.onload=script.onreadystatechange=function(){if(!done&amp;&amp;(!this.readyState||this.readyState=='loaded'||this.readyState=='complete')){done=true;checkLineLength();}};document.getElementsByTagName('head')[0].appendChild(script);}else{checkLineLength();}function checkLineLength(){(window.myBookmarklet=function(){var elements='h1, h2, h3, h4, h5, h6, p, li, dt, dd';$(elements).on('mouseover.red',function(){$(this).css({outline:'1px solid red'})}).on('mouseleave.red',function(){$(this).removeAttr('style')}).on('click.red',function(){var text=$(this).text();var before=text.substring(0,45);var target=text.substring(45,75);var after=text.substring(75,text.length);var newTextLine=before+'<span style=&quot;color: red;&quot;>'+target+'</span>'+after;$(this).html(newTextLine);});})();}})();})();
