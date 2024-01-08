
const asignaturas = ["entorno cliente", "entorno servidor", "despliegue", "empresa"]
// const numUsuario = prompt("Escribe un número")

function pintarTabla(palabra){
    const numLetrasAsignaturas = asignaturas.map((palabra)=>{
        return palabra.length
    })

    console.log("el numero de letras es: ", numLetrasAsignaturas)
    
}

pintarTabla(asignaturas)