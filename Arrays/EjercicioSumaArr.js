function pinta1(numeros) 
    {
        var i=0,suma=0;
        document.write("<table border=1><tr>");
        while (i<numeros.length)
        {	
            document.write("<td>"+numeros[i]+"</td>");	
        suma=suma+numeros[i]; //lo sustituye por .... y pone varias respuestas
            i=i+1;
        }
    document.write(" la suma de todos los numeros introducidos en la tabla es "+suma);
    }