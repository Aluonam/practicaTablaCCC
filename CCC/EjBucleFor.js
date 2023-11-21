
// Ejemplo básico código JavaScript
console.log('Hola, este código está en un documento .js');


// Hacer un programa en JavaScripts que imprima los 10 primeros números naturales. Usa FOR y WHILE
for(let i = 1; i <= 10; i++){
    console.log("Numero: ", i)
    document.write("Numero: ", i)
}


//Haz un programa en JS que imprima los números pares del 1 al 10
// inicia en 1, hasta que llegue a 10, ve sumando uno en cada vuelta
for (let i = 1; i <= 10; i++) { 
    //si el número tiene un resto cero (es par)
    if (i % 2 === 0) {
      // Imprimir el número par
      console.log("Este es par:", i);
    }
  }

i=1
while(i<=12){
    if (i % 2 === 0) {
        // Imprimir el número par
        console.log("Este es par:", i);
      }
      i=i+1
}

//Ejemplo usos prompt:
//   prompt("introduce un string o número")

// sumar n numeros:
let i = 0;
let suma = 0;
numero = prompt("introduce numeros");

while(i<numero){
    valoSumar = parseInt(prompt("introduce otro numero"));
    suma = suma+valoSumar;
    i=i+1
} 
document.write("la suma es: ", suma)


// Crea un programa en JAVASCRIPTS que PIDA POR PANTALLA un valor entre 1 y 10 y que adivine de modo aleatorio si acierta o no.

// 1. Genera número aleatorio entre 1 y 10
let numAleatorio = Math.floor(Math.random()*10) + 1 //(+1 para que no salga desde 0)
console.log(numAleatorio)

function adivinarNumero() {
    var numeroIngresado = document.getElementById("numeroInput").value;

    if (numeroIngresado >= 1 && numeroIngresado <= 10) {
        // Generar un número aleatorio
        var numeroAdivinado = generarNumeroAleatorio();

        // El número aleatorio es igual al número ingresado por el usuario
        if (numeroAdivinado == numeroIngresado) {
            alert("¡Adiviné! El número era " + numeroAdivinado + ".");
        } else {
            alert("No adiviné. El número era " + numeroAdivinado + ".");
        }
    } else {
        alert("Por favor, ingresa un número válido entre 1 y 10.");
    }
}
// adivinarNumero()
