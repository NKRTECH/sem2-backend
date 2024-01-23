var cash = 65
var shoes = 65
if(shoes <= cash) {
    console.log('i have enough money to purchase the shoe.')
}
if(shoes>cash){
    console.log('i need more cash.')
}

var isWorking = false
var carIsReady = false
if(isWorking){
    console.log('i have work to do.')
}
if(!isWorking){
    if(carIsReady){
        console.log('lets go to party.')
    }
    if(!carIsReady){
        console.log('i cant come , my car is not ready yet.')  // it will print this if isWorking = false
    }
    
}

//******************** if else********************************************** */
let cheese = "Cheddar";

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}

//************************** */
let shoppingDone = true;
let childsAllowance;
// We don't need to explicitly specify 'shoppingDone === true' 
if (shoppingDone) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
console.log(childsAllowance)
