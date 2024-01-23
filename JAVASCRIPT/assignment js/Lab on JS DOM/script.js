// Challenge 1.1: Access the HTML section element with the id "container" using the getElementbyId method and change the background color of it.
var var1 = document.getElementById('container')
var1.style.backgroundColor = 'aqua'

// Challenge 1.2: Access the div with the id "header" using the querySelector method and change the text content to "These are the DOM Methods".

var var2 = document.querySelector('#header')
var2.textContent = 'These are the DOM Methods'

// Challenge 1.3: Access all the elements with the class "dom-methods" using the method getElementsByClassName and change the text color to "red". Hint: Use for loop
var var3 = document.getElementsByClassName('dom-methods')
for( i = 0; i< var3.length; i++){
  var3[i].style.color = 'red'
}



// Challenge 1.4: Access all the elements with the class "dom-methods" using the method querySelectorAll and change the font size to 20px". Hint: Use for loop
var var4 = document.querySelectorAll(".dom-methods");
for(i = 0; i<var4.length; i++){
    var4[i].style.fontSize = '20px'
}


// Challenge 2.1: Create a new element <div> and append it to the body tag and append the string "Division" inside the newly created <div> using textContent.
const body = document.body
var var5 = document.createElement('div')
body.append(var5);
var5.textContent = 'Division'


// Challenge 2.2: Add id "main" using setAttribute method to the newly created <div> element. Print the id "main" using the getAttribute method.
var5.setAttribute('id', 'main')
console.log(var5.getAttribute('id'))


// Challenge 2.3: Add the text content "This is a division" inside the div with id "main" using innerHTML.
var5 = document.getElementById('main')
var5.innerHTML='This is a division'

// Challenge 2.4: Create a new element <p> and append it to the div with id "main" and append the string "This is a paragraph tag" inside the <p> tag using the innerText.
// Hint: First access the id "main" using document.getElementById and then append the new element <p> tag.
var var6 = document.createElement('p')
var5.append(var6)
var6.innerText = 'This is a paragraph tag'

// Challenge 2.5: Remove the class "footer" using classList and add the new class "dom-method-footer". If your footer text color changes to aqua blue you are right.
var var7 = document.querySelector('.footer')
//var7.classList = 'dom-method-footer'  //***this is also true***** */
var7.classList.remove('footer')
var7.classList.add('dom-method-footer')

// Challenge 2.6: Set the color of the <p> text as red using DOM manipulation.
var6.style.color = 'red'

// Challenge 2.7: Remove the div with a class "copyright" using the removeAttribute method.

var var7 = document.querySelector(".copyright");
var7.remove()
//var var7 = document.getElementsByTagName('div').removeAttribute('.copyright')



