// JS Nuggets
// Array iteration: 8 methods

// forEach
[100, 15, 45].forEach(function (item, index) {  //Performs the specified action for each element in an array.
                                                  //***it will print item and respective index of item */
    console.log(item, index);
  });
  
  
  // map****Calls a defined callback function on each element of an array, and returns an array that contains the results.
  const three = [1, 2, 3];
  const doubled = three.map(function (item) {  
    return item * 2;
  });
  console.log(doubled);
  
  
  // filter*****Returns the elements of an array that meet the condition specified in a callback function.
  const ints = [11, 2, 32, 41];
  const evens = ints.filter(function (item) {
    return item % 2 === 0;
  });
  console.log(evens);
  
  
  // reduce -- two parameters are there in reduce function
  const sum = [1, 2, 3, 9, 15, 25, 30].reduce(function (result, item) {
    return result + item;
  }, 0);
  console.log(sum)

  function summ(arr) {
    const reducer = (sum, val) => sum + val;
    const initialValue = 0;
    return arr.reduce(reducer, initialValue);
  }
  console.log(summ([1, 3, 5, 7])); //output=16
  
  
  // some
  const hasNegativeNumbers = [1, 2, 3, -1, 4].some(function (item) {  //Determines whether the specified callback function returns true for any element of an array.
    return item < 0;                                           // it will return true if atleast element meet the conditions...
  });
  console.log(hasNegativeNumbers);
  
  
  // every
  const allPositiveNumbers = [1, 2, -3].every(function (item) {  //Determines whether all the members of an array satisfy the specified test.
    return item > 0;                                            // it will return false if not every element meet the condition.
  });
  console.log(allPositiveNumbers);
  
  
  // find-----*******Returns the value of the first element in the array where predicate is true, and undefined otherwise.
  const objects = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];  // in this array we have key value pairs*****
  const found = objects.find(function (item) {
    return item.id === 'b';                            
  });
  console.log(found);
  
  
  // find index********Returns the index of the first element in the array where predicate is true, and -1 otherwise.
  const objects2 = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
  const foundIndex = objects2.findIndex(function (item) {
    return item.id === 'c';
  });
  console.log(foundIndex)