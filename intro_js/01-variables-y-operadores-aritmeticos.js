// 1. Variables y Operadores aritméticos

// usar variable nueva directamente, sin declarar
unaVariable = "algo"

var otraVariable
var otraVariableMas

// en JS, a una variable podemos asignarle cualquier valor:

unaVariable = undefined
unaVariable = 0
unaVariable = 17
unaVariable = 17.008
unaVariable = 'una frase'
unaVariable = [1, 2, 3]
unaVariable = { a: 123 }
// unaVariable = function(){ console.log('algo') }


a = 8
b = 3


// operadores aritméticos +, -, *, /
// Math.pow para operaciones potencia y raíz

c = a + b
console.log( 'la suma de', a, 'mas', b, 'es', c )

c = a - b
console.log( 'la resta de', a, 'menos', b, 'es', c )

c = a * b
console.log( 'la multiplicacion de', a, 'por', b, 'es', c )

c = a / b
console.log( 'la división de', a, 'entre', b, 'es', c )

c = Math.pow(a, b)
console.log( 'la potencia de', a, 'a la', b, 'es', c )

c = Math.pow(a, 1/b)
console.log( 'la raíz ', b, 'de', a, 'es', c )

c = a % b
console.log( 'el módulo', b, 'de', a, 'es', c )



a = 100

a += 50
// equivalente a decir 'a = a + 50'
console.log( "el nuevo valor de a es", a )

a -= 50
console.log( "el nuevo valor de a es", a )

a *= 50
console.log( "el nuevo valor de a es", a )

a /= 50
console.log( "el nuevo valor de a es", a )



// operadores de incremento

a++
console.log( "el nuevo valor de a es", a )


a--
console.log( "el nuevo valor de a es", a )




// operadores de comparación

// igual
a == b
// distinto
a != b
// mayor a
a > b
// menor a
a < b
// mayor o igual a
a >= b
// menor o igual a
a <= b



// operadores lógicos
// AND &&
a < b && a != b
// OR ||
a < b || a != b

// ! NOT
! a < b
