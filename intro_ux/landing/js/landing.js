$(document).ready(function(){

   // Escala y Recorta la imagen para que quepa exacto en su contenedor
   $('.imgLiquidFill').imgLiquid()

   // Configuramos nuestro plugin a partir de un Objeto de JS
   $('.imgLiquidNoFill').imgLiquid({
      fill: false
   })


   // Centrado Vertical:
   // Iterar por cada elemento que tenga la clase 'v-center'
   $('.v-center').each(function(){

      elementoPadre = $(this)

      elementosHijos = elementoPadre.children()

      alturaHijos = 0

      // ahora, iterar por cada uno de estos elementos hijos:
      elementosHijos.each(function(){
         elementoHijo = $(this)
         // sumar la altura del elemento hijo a la altura de todos los hijos en conjunto
         alturaHijos += elementoHijo.height()
      })

      diferencia = elementoPadre.height() - alturaHijos
      // dividir diferencia entre 2
      espacioSuperior = diferencia / 2

      // dar espaciado superior al padre, para que empuje sus hijos hacia abajo
      elementoPadre.css({
         paddingTop: espacioSuperior
      })

   })


   console.log('Landing Lista')

})
