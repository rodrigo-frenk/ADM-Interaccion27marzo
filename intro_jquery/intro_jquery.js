// Jquery

// jquery utiliza selectores iguales a CSS para seleccionar objetos
// del DOM

// Antes de conocer Jquery, veremos cómo se resuelve con JS puro:

// Con JS puro, se selecciona un elmemento así:

titulo1 = document.getElementById('titulo-prueba')

// seleccionar elementos por tag, nos devuelve un arreglo de elementos
titulo2 = document.getElementsByTagName('h2')
// tomar el primero (y unico) elemento del array devuelto:
titulo2 = titulo2[0]

// cambiar una propiedad de CSS usando JS puro:
titulo1.style.color='red';
titulo2.style.color='blue';



//  A continuación, lo mismo, pero con Jquery
// En jQuery, se usan los mismos selectores que en CSS
// construiremos objetos de Jquery usando la siguiente sintaxis:
// $(selector) -- un selector es una cadena de caracteres (String)
// por ejemplo: $("#identidad")

// seleccionamos un elemento usando su ID:
titulo1 = $('#titulo-prueba')

// seleccionamos un elemento usando su etiqueta
titulo2 = $('h2')

// seleccionar elementos usando su clase
titulares = $('.titular')

// Dos maneras de modificar estilos con jQuery.
titulo1.css('color','green')

// Modificar dos propiedades a la vez:
titulo2.css({
   color: 'purple',
   fontSize: 72
})

titulares.css({
   backgroundColor: 'red'
})

// Interactuar con el contenido de los Elementos:

// recuperar el contenido de un elemento:
contenidoAnterior = titulo1.html()

console.log( 'el titulo anterior era', contenidoAnterior )

titulo1.html('Nuevo título')
titulo2.html('Nuevo Subtítulo')



// consultar propiedades visuales

console.log( 'el color del titulo es ', titulo1.css('color') )
console.log( 'el ancho de la ventana es ', $(window).width() )
console.log( 'la altura de la ventana es ', $(window).height() )



// un selector puede obtener varios elementos.
// iterar por todos los elementos seleccionados:
$('.titular').each(function(i){
   // cada uno de los elementos es representado por $(this)
   cadaElemento = $(this)

   console.log(
      'el titular numero', i,
      'tiene el contenido',
      cadaElemento.html()
   )

   cadaElemento.css({
      backgroundColor: 'grey',
      fontSize: Math.random() * 100
   })

})


// obtener los hijos de un elemento:

hijos = $('#titulares').children()

console.log( hijos )

hijos.each(function(i){
   console.log(
      "el contenido del hijo número",
      i,
      "es",
      $(this).html()
   )
})


//


// Interacciones de Usuario

boton = $('#boton-click')

boton.click(function(){

   console.log("hiciste click sobre el boton!")

   // crear colores al azar
   // cada componente RGB debe ser un numero entero entre 0 y 255

   // Math.random nos arroja un numero decimal entre 0 y 1,
   // y lo interpolamos al rango correcto al multiplicarlo por 256

   // finalmente lo redondeamos hacia abajo
   r = Math.floor( Math.random() * 256 )
   g = Math.floor( Math.random() * 256 )
   b = Math.floor( Math.random() * 256 )

   // crear un color al azar:
   // integramos un String, concatenando los 3 componentes RGB

   color = 'rgb(' + r + ',' + g + ',' + b +  ')'

   // lo aplicamos a la ventana

   $('body').css({
      // backgroundColor: 'rgb(125,125,125)' // un color
      backgroundColor: color
   })

})





// añadir y quitar clases

$('#titulares').addClass('fondo-naranja').removeClass('fondo-rojo')




// duplicar un elemento ya existente, modificarlo, y colocarlo en el DOM

// primero, lo seleccionamos y lo clonamos
$('h1').clone()
// modificamos su contenido HTML
.html('titular duplicado')
// colocarlo en la caja llamada '#titulares'
.prependTo('#titulares')

// por cierto, en el ejemplo anterior estamos encadenando métodos



// seleccionar el ultimo titular 'h2'
ultimoTitular = $('#titulares h2').last()

// eliminarlo
ultimoTitular.remove()




// Crear un nuevo componente HTML

// Crear elementos Nuevos (se utilizan los signos '<' y '>' dentro del selector)
caja = $('<div>')
imagen = $('<img>')
parrafo1 = $('<p>')
parrafo2 = $('<p>')

// establecer atributo 'src' para la imagen usando el método 'attr'
imagen.attr('src', 'http://unsplash.it/500/350')

// añadir contenido html
parrafo1.html('Texto de nuevo Elemento')
parrafo2.html('Texto de Segundo Párrafo')

// asignar la imagen como contenido de la caja
caja.html( imagen )
// introducir un parrafo al principio
caja.prepend( parrafo1 )
// introducir un parrafo al final
caja.append( parrafo2 )

caja.css({
   backgroundColor: '#ccc',
   margin: '32px',
   padding: 32
})

// introducir nuevo componente al DOM:
$('body').append( caja )







//
