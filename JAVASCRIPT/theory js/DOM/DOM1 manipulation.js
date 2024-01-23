// const body = document.body   //***defining body is necessary******/
// body.append('NAYAN', ' KUMAR RAJ')
// const div = document.createElement("div")  //**it will not add div tag in html */
// body.append(div)   //****we will have to append to add div tag */  append is necessary to add any tag
// div.innerText='this is inner text'
// const stro = document.createElement('strong')
// stro.innerText = 'nayan22'
// body.append(stro)
// div.textContent = 'this is text content'

// const div = document.querySelector('div');
// console.log(div.textContent); //***text content will print out everything */ here it will print both hello bye****we get invisible information
// console.log(div.innerText);    //**it will only print that much which is shown in webpage*** but here only hello */
//****after assigning id to two span tags*****/
const body = document.body
const div = document.querySelector('div')
const spanHi = document.querySelector('#hi')
const spanBye = document.querySelector('#bye')

//spanBye.remove() //**it will remove the bye letter */
console.log(spanHi.getAttribute('id')) //**here it will print id which is hi */
spanHi.setAttribute('id','nkr') //**here it will set id to nkr */
//**alternatively we can also do this */
spanHi.id = 'rkn'

//***to remove attributes  */
spanHi.removeAttribute('id') //it will no longer have rkn id
//***datasets are useful frequently used**** */
console.log(spanHi.dataset)

console.log(spanHi.dataset.test) //**see console of previous line output */
console.log(spanHi.dataset.longerName)

//**set new property to id */
spanHi.dataset.newName = 'usa'

//*********about class******* */
spanHi.classList.add('c3')
spanHi.classList.remove('c2')

spanHi.classList.toggle('c4') // if it not there it will add it otherwise remove it***
//****using toogle and boolean simultaneously** */
spanHi.classList.toggle('c2', false) // if we pass it as false it will not add
spanHi.classList.toggle('c5', true)

//***accessing style propergty of any element** */
spanHi.style.color = 'red'
spanHi.style.fontSize = '10rem' ///***write in camelcase then it will work not like fontsize */ */

