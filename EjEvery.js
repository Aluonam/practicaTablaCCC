

// Ejercicio 1: Verificar si todos los números son positivos
const numerosPositivos = [5, 8, 3, 12, 7];
const verificarPositivos = numerosPositivos.every(num=>num>=0)

console.log("¿Son números positivos? ", verificarPositivos)

const newNumerosPositivos = numerosPositivos.push(-30)
const verificarPositivosAgain = numerosPositivos.every(num=>num>=0)

console.log("¿Y ahora? ", verificarPositivosAgain)

// Ejercicio 2: Verificar si todas las palabras son mayúsculas
const palabrasMayusculas = ['HOLA', 'MUNDO', 'JS', 'PROGRAMACION'];
const mayusculas = palabrasMayusculas.every(word => word === word.toUpperCase())

console.log("¿Son mayúsculas?", mayusculas)

// Ejercicio 3: Verificar si todos los elementos son mayores que 10
const numerosGrandes = [15, 12, 18, 20, 25];
const verificarMayor10 = numerosGrandes.every(num => num>=10)
console.log("¿Son mayores de 10? :", verificarMayor10)

