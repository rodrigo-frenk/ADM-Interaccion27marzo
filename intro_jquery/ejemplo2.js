// Ejecutar nuestro codigo cuando haya
// terminado de cargar el documento:

$(document).ready(function(){


   $('#boton-abrir').click(function(){


      $('#caja2').animate(
         // propiedades CSS
         {
            left: 0
         },
         // duración en milisegundos
         3000,
         // suavizado:
         'swing',
         // función a ejecutarse al terminar:
         function() {
            console.log("terminó nuestra animación!")
            $('#caja2 > *').animate({
               opacity: 1
            }, 1000)
         }
      )

   })

   $('#boton-cerrar').click(function(){

      $('#caja2 p').animate({
         opacity: 0
      }, 1000, function(){

         $('#caja2').animate({
            left: '100%'
         })

      })

   })


})
