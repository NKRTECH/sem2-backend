// DOM Manipulation: Selecting & changing website elements

var div1 = document.getElementById('div1');

var uniycle = document.getElementsByClassName('unicycle');

var paragraphs = document.getElementsByTagName('p');

var queryUnicycle = document.querySelector('.unicycle');

var queryAll = document.querySelectorAll('.unicycle, #div2');

var text = "<h1>NAYAN</h1>";
//div1.innerHTML = text;
//queryUnicycle.innerHTML = text;  //***it is recommended not to use innerhtml for plain text */
//queryUnicycle.textContent = text;
  
for (i = 0; i < queryAll.length; ++i) {  //****here length represents the number of elements in queryAll variable******/
   queryAll[i].innerHTML = text;
}