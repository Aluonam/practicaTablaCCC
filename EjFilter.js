
// Ejercicio 1: Filtrar números pares

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numeros.filter(num=>num%2===0)

console.log("Saca los números pares: ",pares)


// Ejercicio 2: Filtrar palabras con más de 5 letras

const palabras = ['hola', 'javascript', 'programacion', 'web', 'filtro'];
const palabrasLargas = palabras.filter(palabra => palabra.length>5);

console.log("Son palabras largas: ",palabrasLargas)


// Ejercicio 3: Filtrar objetos por propiedad

const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 17 },
    { nombre: 'Pedro', edad: 30 },
    { nombre: 'Ana', edad: 19 },
];

const mayoresDe18 = personas.filter( pers => pers.edad >= 18)

console.log("Los mayores de 18 son: ",mayoresDe18);
