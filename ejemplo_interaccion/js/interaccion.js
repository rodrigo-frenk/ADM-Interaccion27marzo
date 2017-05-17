/*

Interaccion Scroll

1. Existe una composición con N cajas que miden una pantalla completa, una sobre la otra

2. Cuando el usuario scrollea, las cajas se mueven normalmente

3. El contenido de dichas cajas esta oculto hasta abajo

4. Cuando el usuario scrollea hasta una caja, y si ésta está mayoritariamente completa dentro del visor,

5. Aparecen sus contenidos, animándose de abajo hacia el centro

6. Al desaparecer la caja, los contenidos vuelven hasta abajo, a su posición original oculta.

*/


$(document).ready(function(){

   $('.caja').addClass('v-center')

   centrarContenidos()

   interaccionScroll()

   // activar evento de scroll al entrar a la web
   $(window).scroll()

   console.log("Ejemplo Interacción Listo.")

})



function interaccionScroll() {

   $('.caja').appear()


   $('.caja').on('appear', function(event, $all_appeared_elements) {

      laCajaQueAparecio = $(this)

      cuantoScrollLlevamos = $(window).scrollTop()

      console.log( "cuantoScrollLlevamos", cuantoScrollLlevamos )

      dondeEmpiezaLaCaja = laCajaQueAparecio.offset().top
      // console.log( "dondeEmpiezaLaCaja", dondeEmpiezaLaCaja )

      alturaDeVentana = $(window).height()

      diferencia = dondeEmpiezaLaCaja - cuantoScrollLlevamos

      if( diferencia < ( alturaDeVentana * 0.3 ) ) {

         laCajaQueAparecio.children().addClass('visible')

      } else {

         laCajaQueAparecio.children().removeClass('visible')

      }

   })

   $('.caja').on('disappear', function(event, $all_disappeared_elements) {

      $(this).children().removeClass('visible')

   });


}




function centrarContenidos() {

   // Centrado Vertical:
   // Iterar por cada elemento que tenga la clase 'v-center'
   $('.v-center').each(function(){

      elementoPadre = $(this)

      elementosHijos = elementoPadre.children()

      alturaHijos = 0

      elementosHijos.first().css({
         marginTop: 0
      })

      elementosHijos.last().css({
         marginBottom: 0
      })

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

}
