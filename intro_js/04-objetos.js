// Un Objeto es un conjunto de propiedades asociados a valores
// Un Objeto puede contener métodos que pueden ser invocados

objeto = {
   propiedad1: 'valor1',
   propiedad2: 'valor2',
   propiedad3: 'valor3',
   propiedadInutil: 'valorInutil',
   metodo: function(){
      console.log("un método")

      // podemos recuperar las propiedades de este objeto asi:
      // la palabra reservada 'this' hace referencia a este objeto
      console.log(this.propiedad1)
   }
}

// recuperar una propiedad
objeto.propiedad1

// cambiar una propiedad
objeto.propiedad2 = 'nuevovalor2'

// añadir una propiedad nueva
objeto.nuevapropiedad = 'nuevovalor'

// eliminar una propiedad:
delete objeto.propiedadInutil


// invocar un metodo de un objeto

objeto.metodo()






// Ejemplo con una Persona:


persona = {
   nombres: 'Juan Alberto',
   apellido_paterno: 'Gómez',
   apellido_materno: 'Hinojosa',
   edad: 28,

   nombreCompleto: function() {
      alert(
         this.nombres +
         " " + this.apellido_paterno +
         " " + this.apellido_materno
      )
   }

}


persona.nombreCompleto()



// Un arreglo de Objetos:


personas = [
   {
      nombre: 'Juan',
      apellido: 'Pérez'
   },
   {
      nombre: 'Marta',
      apellido: 'Ramírez'
   },
   {
      nombre: 'Ximena',
      apellido: 'Gómez'
   },
]

for( i in personas ) {
   console.log(
      'la persona', i, 'se llama',
      personas[i].nombre + " " + personas[i].apellido
   )
}





//
