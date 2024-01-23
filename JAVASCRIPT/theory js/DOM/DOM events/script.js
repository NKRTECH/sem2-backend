/* DOM Events */

//onclick="this.innerHTML"
//onclick is attribute and innerHTML is javascript command

function changeColor(obj) { 
    obj.style.color = "aqua";
    obj.style.background='RED'
  }
  //onclick--Fires when the user clicks the left mouse button on the object
  document.getElementById("myBtn").onclick = changeBackgroundColor;
  function changeBackgroundColor() {
    document.querySelector('body').style.background = "yellow";
  }
  
  function removeLetterFromH1() { 
    var h1 = document.querySelector('h1')
    h1.textContent = h1.textContent.slice(0, -1);
  }
  
  function mOver(obj) { 
    obj.innerHTML = "you are hovering over here "
    obj.style.color = "lightblue";
  }
  
  function mOut(obj) { 
    obj.innerHTML = "you have removed the cursor from here"
    obj.style.color = "yellow"
  }

  console.log("Fixing Document is not defined in NodeJS");

if (typeof window !== "undefined") {
  console.log("In Browser");
  var x = document.getElementById("msg");
  console.log(x);
}
else {
  console.log("In nodeJS");
}