//Recursion is a technique in which a function calls itself in order to solve a problem.
// It is a powerful tool in functional programming and can be used to solve problems that
// are naturally recursive in nature.

//A recursive function must have at least one condition where it will stop calling itself,
// or the function will call itself indefinitely until JavaScript throws an error.

//The condition that stops a recursive function from calling itself is known as the base case.

function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  console.log(factorial(5)); // 120
//***************************************************************************************** */
  function countDown(n) {
    for (let i = n; i > 0; i--) {
      console.log(i)
    }
    console.log('Hooray')
  }
  /*
  function countDownRecursive(n) {
    if (n <= 0) {
      console.log('Hooray')
      return
    }
  
    console.log(n)
    countDownRecursive(n - 1)
  }
  
  function sumRange(n) {
    let total = 0;
    for (let i = n; i > 0; i--) {
      total += i
    }
    return total
  }
  
  function sumRangeRecursive(n, total = 0) {
    if (n <= 0) {
      return total
    }
    return sumRangeRecursive(n - 1, total + n)
  }
  
  function printChildren(t) {
    // ???
  }
  
  function printChildrenRecursive(t) {
    if (t.children.length === 0) {
      return
    }
    t.children.forEach(child => {
      console.log(child.name)
      printChildrenRecursive(child)
    })
  }
  
  const tree = {
    name: 'John',
    children: [
      {
        name: 'Jim',
        children: []
      },
      {
        name: 'Zoe',
        children: [
          { name: 'Kyle', children: [] },
          { name: 'Sophia', children: [] }
        ]
      }
    ]
  }
  */