//A JavaScript Map is an object that allows you to store key-value pairs.
// Each key can be of any type, and each value can also be of any type.
// Here's an example of how to create a Map and add items to it:

let myMap = new Map();
myMap.set("name", "John");
myMap.set("age", 30);
console.log(myMap.get("name")); // "John"
console.log(myMap.get("age")); // 30

//You can also create a map using an array of key-value pairs:

let myMapp = new Map([
  ["name", "John"],
  ["age", 30]
]);
console.log(myMapp.get("name")); // "John"
console.log(myMapp.get("age")); // 30

//You can also use the size property to check the number of elements in the map,
//use the clear() method to clear the elements and use the delete() method to delete a specific element.
console.log(myMapp.size)
