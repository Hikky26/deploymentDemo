const catbtn = document.querySelector('#cat')
const dogbtn = document.querySelector("#dog")

const clickHandler = () => alert('The cat name is: Rascal')
const dogHandler = () => alert('The dog name is doug')

catbtn.addEventListener('click', clickHandler)
dogbtn.addEventListener('click', dogHandler)