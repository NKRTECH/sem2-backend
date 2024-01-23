// Challenge 1: Store the string "I am a" in one variable and store the other string "Kalvian" in other variable and concatenate both the string to get the output as "I am a Kalvain" using "+" operator.
var sent = "I am a";
var sent1 = "Kalvian";
console.log(sent + sent1);
// Challenge 2: Store the given string in a variable and print the same in console. String: If you fail, never give up because FAIL means "First Attempt In Learning".
var sent3 = 'If you fail, never give up because FAIL means "First Attempt In Learning"';
console.log(sent3);
// Challenge 3: Store a string in a variable and display the length of the string.
var sent4 = 'nayan';
console.log(sent4.length)

// Challenge 4: Store a string in a variable and convert it into uppercase.
var sent5 = 'nayan'
console.log(sent5.toUpperCase())
//Challenge 5: Store the string "I love programming" in a variable and replace the word programming with "JavaScript programming".
var sent6 = "I love programming"
console.log(sent6.replace('programming' , 'Javascript programming'))
// Challenge 6: Store a string in variable and print the string in console 3 times using repeat method.
var sent7 = 'nayan'
console.log(sent7.repeat(3))
//Challenge 7: Store the string as "I am a Kalvian" in a variable and convert the string into array and print the array in console.
var sent8 = "I am a Kalvian"
console.log(sent8.split(' '))
// Challenge 8: Store the given string "Time and Tide wait for none" in a variable and using indexOf method find the index of "Ti" and print the same in console.
var sent9 = "Time and Tide wait for none"
console.log(sent9.indexOf('Ti'))
// Challenge 9: Store the given string "When life gives you lemons make lemonade" in a variable and find whether it includes "lemon".
var sent10 = "When life gives you lemons make lemonade"
console.log(sent10.includes('lemon'))
// Challenge 10: Store the given string "You must be the change you wish to see in the world." in a variable and use slice to console log the word "change" and use substring method to console log the word "world".
var sent11 = "You must be the change you wish to see in the world."
console.log(sent11.slice(16,23))
console.log(sent11.substr(46,5))