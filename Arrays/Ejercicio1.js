

function Introducir(numeros){
    let i,num,veces;
	veces=prompt('cuantos elementos quiere introducir en el array:','');
    for(i=0;i<=veces-1;i++){
        num=parseInt(prompt('Introduce un numero:',''));
        numeros[i]=num;
        }
    }

function Imprimir(numeros){
    let i;
    document.write("El array de numeros introducido es: ");
    document.write(" ");
    for(i=0;i<numeros.length;i++){
        document.write(numeros[i],' ');
        }   
    }

    const verificarPar = () => {
        let array = [33, 44, 55, 66];
    
        array.forEach((actualNumber) => {
            if (actualNumber % 2 === 0) {
                console.log(`${actualNumber} es par`);
            } else {
                console.log(`${actualNumber} no es par`);
            }
        });
    }

verificarPar()

    const verificarPar2 = ()=>{
        numeros[i]%2==0
        if(numeros[i]%2==0){
            alert("es par");
        }else{
            alert(" no es par")
        }
    }
    verificarPar2()

    function ImprimirPares3(numeros)
  {
	var i;
	document.write("los numeros pares son: "+" <br>");
	document.write(" ");
	document.write("<table border=1><tr>"); 
    for(i=0;i<numeros.length;i++)
    {
		if (numeros[i]%2==0)
			document.write("<td>" + numeros[i] + "</td>");
   	}
	document.write("</tr></table>"); 
	document.write(" ");
  }


    // function Introducir(numeros) {
  
    // }

    // function Imprimir(numeros)
    // {
  
      
    // }
  
    // function ImprimirPares(numeros)
    // {
  
    // }
  
    // function ImprimirImPares(numeros)
    // {
  
    // }
    
    // function ContadorNumeros(numeros)
    // {
  
    // }
    
    // var numeros;
    
    // numeros=new Array();
    Introducir(numeros);
    Imprimir(numeros);
    // ImprimirPares(numeros);
    // ImprimirImPares(numeros);
    // ContadorNumeros(numeros)

