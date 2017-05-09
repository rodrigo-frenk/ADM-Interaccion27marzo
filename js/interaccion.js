var scrollAnterior = 0

var siguienteCaja = 0

var scrolling = false

$(document).ready(function(){

scrolling = false

  $('.caja').addClass('v-center')

  centrarContenidos()

  interaccionScroll()

  console.log("Ejemplo Interacción Listo.")

})



function interaccionScroll() {

  $('html,body').scroll(function(){
    console.log("body scroll");
// console.log("scrolling", scrolling);
    if( ! scrolling ) {

      scrolling = setTimeout(function(){

        // averiguar cuánto scroll ha realizado 'body'
        cantidadScroll = $('body').scrollTop()

        if( cantidadScroll > scrollAnterior ) {

          console.log( "abajo" )

          siguienteCaja++

        } else {

          console.log( "arriba" )

          siguienteCaja--

        }

        if( siguienteCaja > $('.caja').length - 1 ) {

          siguienteCaja = $('.caja').length - 1

        }
        if( siguienteCaja < 0 ) {

          siguienteCaja = 0

        }

        // actualizar el valor de scroll anterior:
        scrollAnterior = cantidadScroll

        console.log( "siguiente caja:", siguienteCaja )


        mostrarCaja( siguienteCaja )


        //scrolling = false


      },300)

    }

  })

}


function mostrarCaja( cualCaja ) {

  $('#cajas').animate({

    top: $('.caja').eq( cualCaja ).position().top

  }, 500, function() {

    scrolling = false

  })


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
