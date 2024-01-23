var stringOne = 'freecodecamp is the best place to learn'
var stringTwo = 'frontend and backend development.'


//charAt ******means character at****Returns the character at the specified index.
console.log(stringOne.charAt(3))

// charCodeAt****Returns the Unicode value of the character at the specified location.
console.log(stringOne.charCodeAt(3))

// concat()*****Returns a string that contains the concatenation of two or more strings.
console.log(stringOne.concat(stringTwo))

//endswith()
console.log(stringOne.endsWith('learn')) // true
console.log(stringOne.endsWith('to')) // false

//fromcharcode
console.log(String.fromCharCode(101)) //giving corresponding letter for that char code

//include()
console.log(stringTwo.includes('and')) //true

//indexof()  and lastindexof()
console.log(stringTwo.indexOf('end'))
console.log(stringTwo.lastIndexOf('end'))

//match()
console.log(stringTwo.match(/end/g))

//repeat()
console.log(stringOne.repeat(3))

//replace()
console.log(stringTwo.replace(/end/g, 'END'))

//search
console.log(stringTwo.search('end'))



//split***Split a string into substrings using the specified separator and return them as an array.
console.log(stringOne.split(' ')) // if you will not space here it will string every letter****

//startswith
console.log(stringOne.startsWith('free')) //true


//substr
console.log(stringTwo.substr(2,4)) // number before comma represents index number after comma means it counts upto 4 digits here onte

//substring
console.log(stringTwo.substring(2,4))// here both numbers represent index and
// and will count upto 3rd index here it is on

//touppercase and tolowercase
console.log(stringOne.toUpperCase())

//trim   it will remove spaces
var stringThree = '    subscribe now!    ';
console.log(stringThree.trim())


//slice
console.log(stringTwo.slice(2,4))