//----------SacarNumPar---------------------------------

const obtenerNumerosPares= () => {
    const numerosPares = [];
  
    for (let i = 2; i <= 10; i += 2) {
      numerosPares.push(i);
    }
  
    return numerosPares;
  }

console.log("numeros pares: ",obtenerNumerosPares())


//------------codigo del profe corregido 
function obtenerNumerosPares2 (num) {
    if (num%2==0) {
      return "par";
    } else{
        return "impar";
    }
  }

  var resultado1 = obtenerNumerosPares2(3);
document.write("Es " + resultado1)

