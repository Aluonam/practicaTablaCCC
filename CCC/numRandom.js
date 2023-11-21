

let numAleatorio = Math.floor(Math.random()*10) + 1 //(+1 para que no salga desde 0)
console.log(numAleatorio)

function adivinarNumero() {
    var numeroIngresado = document.getElementById("numeroInput").value;

    if (numeroIngresado >= 1 && numeroIngresado <= 10) {
        // Generar un número aleatorio
        var numeroAdivinado = generarNumeroAleatorio();

        // El número aleatorio es igual al número ingresado por el usuario
        if (numeroAdivinado == numeroIngresado) {
            alert("¡Adivinaste! El número era " + numeroAdivinado);
        } else {
            alert("Inténtalo de nuevo. El número era " + numeroAdivinado);
        }
    } else {
        alert("Por favor, ingresa un número válido entre 1 y 10.");
    }
}

var numA = Math.floor(Math.random()*10)+1;
var numElegir = parseInt(prompt("introduce numero") );
if(numA==numElegir){
    document.write("el numero elegido coincide", numElegir)
} else{
    document.write("vuelve a intentar, el número elegido es: ",numElegir, ". El num aleatorio es: ", numA)
}
