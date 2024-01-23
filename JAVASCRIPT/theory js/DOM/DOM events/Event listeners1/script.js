const grandparent = document.querySelector('.grandparent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')

grandparent.addEventListener('click', e => {
    console.log('grandparent 1')
})

grandparent.addEventListener('click', e => {
    console.log('grandparent 2')
},{capture: true})

parent.addEventListener('click', e => {
    console.log('parent 1')
})
child.addEventListener('click', e => {
    console.log('child 1')
})
document.addEventListener('click', e => {
    console.log('document 1')
})
