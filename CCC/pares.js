
let num = 0;

const evenNumber = ()=>{
    console.log("numeros pares", num*2 === 0)
}
evenNumber()

// EJERCICIO PEDIR DOS NUMEROS Y HACER LA MULTIPLICACION O DIVISION (ejercicio de clase)
var resultado1, resultado2;
var num1 = prompt("Escribe un numero: ")
var num2 = prompt("Escribe otro numero: ")
function producto(num1, num2){
    var resultado1 = num1*num2
    return resultado1
}
producto()

function division(num1, num2){
    var resultado2 = num1/num2
    return resultado2
}
division()

resultado1 = producto(num1,num2)
resultado2 = division(num1,num2)
document.write("El producto es: ", resultado1)
document.write("El producto es: ", resultado2)


