// Funciones

// Conjuntos de Instrucciones que pueden ser invocados

hacerAlgo = function() {
   alert("hacer algo!")
}

// también la podemos declarar así:

function hacerOtraCosa() {
   alert("hacer otra cosa!")
}


// una vez declaradas las funciones, podemos invocarlas:

hacerAlgo()

hacerOtraCosa()



// Las funciones pueden recibir parámetros de entrada:

function sumarDosNumeros( a, b ) {

   console.log( "la suma de", a, "más", b, "es", a + b )

}

sumarDosNumeros( 10, 27 )


// los parámetros sólo existen adentro de la función:
console.log( a )



// Las funciones pueden devolver valores


function inventarNumero() {

   // generar número aleatorio entre 0 y 1
   // multiplicarlo por 300

   var unNumeroNuevo = Math.random() * 300

   return unNumeroNuevo

}

numero_uno = inventarNumero()
numero_dos = inventarNumero()

sumarDosNumeros( numero_uno, numero_dos )


// 'return' nos devuelve un valor, e interrumpe la ejecución de la función

function dejarPasarMayoresDeEdad( edad ) {

   if( edad < 18 ) {
      console.log("no dejar pasar!")
      return 'no'
   }

   console.log("sí dejar pasar!")
   return 'si'

}

dejarPasarMayoresDeEdad( 17 )
dejarPasarMayoresDeEdad( 34 )




// complejizar un poco, añadiendo un 2o parámetro:

function dejarPasarMayoresDeEdadConBoleto( edad, tieneBoleto ) {

   // si la edad es menor a 18, o si no tiene boleto:
   if( edad < 18 || ! tieneBoleto ) {
      console.log("no dejar pasar!")
      return 'no'
   }

   console.log("sí dejar pasar!")
   return 'si'

}

dejarPasarMayoresDeEdadConBoleto( 17, true )
dejarPasarMayoresDeEdadConBoleto( 34, false )
dejarPasarMayoresDeEdadConBoleto( 44, true )
