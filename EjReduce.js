

// Ejercicio 1: Sumar todos los números en un array
const numeros2 = [1, 2, 3, 4, 5];
const suma = numeros2.reduce((acc,num)=> acc + num)
const sumaDesdePosicion1 = numeros2.reduce((acc,num)=> acc + num, 1)
console.log("El valor acumulativo del arr es: ",suma)
console.log("El valor acumulativo desde la posición 1 del arr es: ",sumaDesdePosicion1)


// Ejercicio 2: Concatenar strings de un array
const palabras2 = ['Hola', ' ', 'Mundo', '!'];
const frase = palabras2.reduce((acc, palabra) => acc+palabra)
console.log(frase)

// Ejercicio 3: Contar la cantidad de veces que aparece cada elemento en un array
const elementos2 = ['manzana', 'naranja', 'manzana', 'pera', 'naranja', 'manzana'];
const conteo = elementos2.reduce((contador, word)=>{
    contador[word] = contador[word] ? contador[word]+1 : 1;
    return contador;
},{} // IMPORTANTE
)
console.log("El conteo es: ", conteo)
