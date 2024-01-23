//**JS Nuggets: Classes**

//**class declaration**
class Person {
    constructor(name, year_born) {   //name and year born are properties
      this.name = name;
      this.year_born = year_born;
    }
    
    get age() {        // here we are calling fn since there is parentheses after age()
      return this.calcAge();
    }
  
    calcAge() {
      return new Date().getFullYear() - this.year_born;
    }
    
    what() {
      console.log(this.name + ' is a person.');
    }
    
    static arms() {
      return 2;
    }
  }
  
  var me = new Person("Beau", 1983);
  console.log(me.name + " was born in " + me.year_born + "!")
  me.what();
  console.log(me.name + " has " + Person.arms() + " arms!")
  
  class Juggler extends Person {    //********* */ here Person is parent class*********
    what() {
      super.what();
      console.log(this.name + " is a juggler.");
    }
  }
  
  var you = new Juggler ("Jay", 1980);
  me.what();
  you.what();
  
  
  //**class expressions**
  // unnamed
  var Person2 = class {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  };
  
  // named
  var Person3 = class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  };