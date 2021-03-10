// 1. Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// 2. Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// 3. Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].  
// 4. Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
// --------victor first---------
const str1= prompt('escribe tu texto aqui')
/*let strCounter = ()=> {return str1.length} 
console.log(strCounter())*/

// -------------victor second-----------
/*const num= 4
let strNum= ()=> { return str1.substring(0,num)}
console.log(strNum())*/

//-------------victor third------------
/*let strDivider = (str)=>{return str.split(' ')}
console.log(strDivider(str1));*/

//-------------victor fourth---------
const repeatTimes= 3
let strRepeting =(str)=>{return str.repeat(repeatTimes)}
console.log(strRepeting(str1))