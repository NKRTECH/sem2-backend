const ourPets = [
    {
      animalType: "cat",
      names: [
        "Meowzer",
        "Fluffy",
        "Kit-Cat"
      ]
    },
    {
      animalType: "dog",
      names: [
        "Spot",
        "Bowser",
        "Frankie"
      ]
    }
  ];
  
  ourPets[0].names[1]
  ourPets[1].names[0]
  console.log(ourPets[0].names[1])
//********************************************************************************************************* */

const myPlants = [
    {                // object 1
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {              //object 2
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  //Using dot and bracket notation, 
  //set the variable secondTree to the second item in the trees list from the myPlants object.
 // const secondTree = 'pine' ****not like this

 const secondTree = myPlants[1].list[1]  //since it is an array so we use bracket notation to represent object
 console.log(secondTree)
