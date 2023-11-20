

const arrayNum = [1, 2, 3, 4, 5];
const words = ['hola', 'mundo', 'apple', 'javascript'];

// -------------EJEMPLO 1: Verificar si hay números pares en un array

const evenNum = ()=>{
    const even = arrayNum.some((element)=>{return(element % 2 === 0)});
    if(even === true){
        console.log("Hay números pares")
        alert("Hay números pares")
    } else {
        console.log("No hay números pares")
        alert("No hay números pares")
    }

    
}

// ------------EJEMPLO 2: Comprobar si hay elementos mayores que 10

const moreThan10 = ()=>{
    const more = arrayNum.some((number)=>number >10)
    console.log(more)
    alert(more)
}

// -------------EJEMPLO 3: Compruebas si la cadena de texto tiene más de 5 letras

const longWords = ()=>{
    const longer = words.some((word)=> word.length >= 5)
    console.log(longer)
    alert(longer)
}

const indexLongWord = ()=>{
    const longer = words.some((word, index)=>{word.length >= 5
        return(
            console.log("Posición ", index, "es: ", word)
            )
        })
}