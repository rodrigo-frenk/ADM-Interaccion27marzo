

// Estructuras de Control

// if: evaluar una condición, y hace algo si se cumple, y otra cosa si no.

// tenemos un concierto con un asistente

var edadAsistente = 17

if( edadAsistente >= 18 ) {

      console.log( "puede pasar" )

} else {

   console.log( "no puede pasar" )

}


// usar condiciones compuestas

edadAsistente = 25
tieneBoleto = false
tieneGafete = true

if( edadAsistente >= 18 && tieneBoleto == true ) {

      console.log( "puede pasar" )

} else {

   console.log( "no puede pasar" )

}



// usando condiciones anidadas

edadAsistente = 25
tieneBoleto = false
tieneGafete = true

if(
   edadAsistente >= 18
   &&
   ( tieneBoleto == true || tieneGafete == true )
) {

      console.log( "puede pasar" )

} else {

   console.log( "no puede pasar" )

}




// SWITCH

// sirve para revisar una variable,
// comparándola con diversos casos,
// y ejecutando aquellos con los que coincida

// tenemos que tomar una medicina cada 8 horas, empezando a las 9 am

hora = 6 // entre 0 y 23


switch( hora ) {

   case 7:
      console.log("despertar")
      break;

   case 10:
      console.log("sacar al perro")
      break;

   case 8:
      console.log("desayunar")
   case 0:
   case 16:
      console.log("tomar medicina")
      break;

   default:
      console.log("no hacer nada")

}



// Loops o Bucles (while y for)

// WHILE

// ejecutar un bloque de código mientras se cumpla una condición

asientosOcupados = 0
cupoMaximo = 100

while( asientosOcupados < cupoMaximo ) {
   asientosOcupados++
   console.log( "asientos disponibles:", cupoMaximo - asientosOcupados )
}


// FOR

for( var contador = 0; contador < 100; contador++ ) {

   console.log("nuestro contador es:", contador )

}



// ejercicio: contar de 10 en 10 entre 0 y 100

// Solución 1:
// contar del 0 al 10, y multiplicar el contador por 10

for( var contador = 0; contador<10; contador++) {
   console.log( "contador:", contador * 10 )
}

// Solución 2:
// incrementar el contador de 10 en 10

for( var contador = 0; contador<100; contador+=10) {
   console.log( "contador:", contador )
}


// Solución 3:
// mostrar sólo las ocasiones que sean divisibles entre 10

for( var contador = 0; contador<100; contador++) {
   console.log( "contador:", contador )
}
