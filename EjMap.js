
const arrNum = [1,2,3,4,5,6,7]
let wordsOfSentence = ["palomitas", "de", "maiz", "dulces"]

// ------------ EJERCICIO 1: duplica los números del array
const duplicateNum = ()=> {console.log(arrNum.map((num)=>num*2))}


// ------------ EJERCICIO 2: Convertir strings a mayúsculas

const upperCase = wordsOfSentence.map(word=>word.toUpperCase())
console.log("Frase en mayúsculas",upperCase)

// ------------ EJERCICIO 3: Extraer longitudes de strings
const size = wordsOfSentence.map((word)=> word.length)
console.log("Longitud de las palabras: ", size)

// ------------ EJERCICIO 4: Une la cadena de texto
const newSentence = wordsOfSentence.join(" ")
console.log("La frase completa es: ", newSentence)