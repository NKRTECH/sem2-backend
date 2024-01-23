// JS Nuggets: Objects

var myCar = new Object();  //****here we created a object*******/
myCar.make = "Ford";  //***we are assiging properties and their values for object myCar  using dot notation*******/
myCar.model = "Mustang";  //********make and model are both properties assigned to myCar*****/
myCar.color;              //***here the value of the property color is undefined */
console.log(myCar.make);
console.log(myCar.color);

myCar["year"] = 1969;    //****we can also assign property like a string but in square brackets */
console.log(myCar["model"])   //****we can also call property in string but in square brackets*****/

myCar["Do I like?"] = "I hate my car.";  //**** */
console.log(myCar["Do I like?"]);



function showProps(obj, objName) {   //***here we have to pass the object name as a string
//     otherwise java will not understand******/
  var result = "";
  for (var i in obj) {
    // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
    if (obj.hasOwnProperty(i)) {
      result += objName + "." + i + " = " + obj[i] + "\n";
    }
  }
  return result;
}
console.log(showProps(myCar, "myCar"));

// Creation: object initializer
var myHonda = {color: "red", wheels: 4, engine: {cylinders: 4, size: 2.2}}; 
 //**in object engine we are assigning another object  */

// Creation: constructor function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var mycar = new Car("Chevy", "Malibu", 1993);
var anothercar = new Car("Mazda", "Miata", 1990);
console.log(mycar.model);
mycar.color = "black";
console.log(mycar.color);

// Creation: Object.create  
var Animal = {
  type: "Invertebrates", 
  displayType: function() {  
    console.log(this.type);
  }
}
// Object.create*****Creates an object that has the specified prototype or that has null prototype.*/
var animal1 = Object.create(Animal);
animal1.displayType(); 

var fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType();