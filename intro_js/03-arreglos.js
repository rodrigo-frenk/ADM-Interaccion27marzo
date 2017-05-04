// Arreglos
// Un arreglo es un Conjunto de Datos Ordenados
// Nos deja recuperarlos utilizando un índice

var arreglo = []

arreglo = Array();

// un arreglo con cuatro números
arreglo = [1,2,3,4]

// un arreglo con cuatro palabras
arreglo = ["arreglo", "con", "cuatro", "palabras"]


// recuperar el primer elemento del arreglo:
arreglo[0]

// recuperar el segundo elemento del arreglo:
arreglo[1]

// recuperar el último elemento del arreglo:
// Lo podríamos hacer manualmente,
arreglo[ 3 ]


// podemos averiguar la cantidad de elementso en un arreglo:

arreglo.length


// pero para prevenir problemas usaremos la propiedad '.length'
arreglo[ arreglo.length - 1 ]


// podemos modificar cualquier valor
arreglo[2] = "muchas"

// iterar un arreglo con un for:

for (var i = 0; i < arreglo.length; i++) {
   console.log("la palabra numero", i, "es:", arreglo[i] )
}


for( i in arreglo ) {
   console.log("la palabra numero", i, "es:", arreglo[i] )
}







frutas = []
frutas[0] = "manzana"
frutas[1] = "pera"


// introducir un elemento al principio del arreglo

frutas.unshift("fresa")

// introducir elementos adicionales al final del arreglo:
frutas.push("naranja")
frutas.push("kiwi")
frutas.push("sandía")
frutas.push("melón")
frutas.push("mamey")
frutas.push("guanábana")
frutas.push("mango")



frutas[2] = "mandarina"

for (var i = 0; i < frutas.length; i++) {
   console.log("la fruta número", i, "es:", frutas[i] )
}


// eliminar elementos de un arreglo
// primero, le indicamos a partir de qué indice queremos borrar
// y después indicamos cuántos elementos borraremos

frutas.splice( 2, 1 )




// averiguar la posición de un elemento, usando su valor

console.log( "el indice de kiwi es:", frutas.indexOf("kiwi") )


// sacar ultimo elemento del arreglo (el metodo devuelve dicho valor)
frutas.pop()


// borrar un elemento usando solo su valor

frutas.splice( frutas.indexOf("guanábana"), 1 )
