function generateNumber (){


const min= Math.ceil(document.querySelector (".inputOne").value)
const max=Math.floor(document .querySelector (".inputTwo").value)
const result=  Math.floor(Math.random() * (max - min +1) + min)
console.log ( min,max)
alert (result) 
}

