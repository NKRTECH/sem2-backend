// JS Nuggets: 10 Common Array Methods

var arr = ["a", "b", "c"];

arr.push("d");  // ****it will add an element /***** */
console.log(arr);

console.log(arr.pop()); //***it will remove the last element****/
console.log(arr);

var arr2 = ["g", "q"];
console.log(arr.concat(arr2));  //it doesnt have effect on original array
console.log(arr2);

console.log(arr.join("!")); //****you can left empty or can give space here as well*** */

console.log(arr.reverse());  //***it actually change the original array*******/
console.log(arr);

console.log(arr.shift()); //******it also change the original element*****/
console.log(arr);

//unshift-Inserts new elements at the start of an array,
//and returns the new length of the array.
console.log(arr.unshift("p"));
console.log(arr);

//slice-Returns a copy of a section of an array.
console.log(arr.slice(1,3));// it does not change the original array

arr.push("i");
arr.push("f");

console.log(arr);

//splice-- Removes elements from an array and, 
//if necessary, inserts new elements in their place, returning the deleted elements. */
console.log(arr.splice(2, 2, "JS Nuggets"));
console.log(arr);

