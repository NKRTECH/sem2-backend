// Objects: Part 2

//Using objects for lookups
var alpha = {      //***here this variable contains key value pairs */
    1:'Z',    //**comma is necessary to separate objects */
    2:'Y',
    3:'x',
    4:'w'
};
console.log(alpha[2])

//Remove object properties
let dishes = {
    plates: 8,
    cups: 10,
    forks: 28,
    bowls: 13,
};
delete dishes.cups;
console.log(dishes)
console.log(dishes.bowls)

//Testing objects for properties****hasownproperty means Determines whether an object has a property with the specified name.

console.log(dishes.hasOwnProperty('plates'))
console.log(dishes.hasOwnProperty('cups'))

//Accessing and Modifying Nested Objects
var ourStorage = {
    'desk': {
        'drawer':'stapler'
},
'cabinet': {
    'top drawer': {
        'folder1': 'a file',
        'folder2': 'secrets',
    },
    'bottom drawer': 'soda'
}}

console.log(ourStorage.desk.drawer)
console.log(ourStorage.cabinet["top drawer"].folder1)
ourStorage.cabinet["top drawer"].folder2 = 'nothing secret'
console.log(ourStorage.cabinet["top drawer"].folder2)

//Generate an Array of All Objects Keys
//object.keys****Returns the names of the enumerable string properties and methods of an object.
console.log(Object.keys(alpha))
console.log(Object.keys(ourStorage))
console.log(Object.keys(dishes))

const book = {
    name:"Jungle Book",
    author:"J.K.Rowling",
   };
console.log(Object.keys(book));


