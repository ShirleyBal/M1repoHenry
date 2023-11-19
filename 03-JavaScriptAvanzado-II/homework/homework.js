'use strict';

// Closures

/* Ejercicio 1
La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando 
un valor numérico que empieza en 1 e incrementa con cada invocación.
EJEMPLO
const nuevoContador = counter()
nuevoContador()     // 1
nuevoContador()     // 2

const otroContador = counter()
otroContador()      // 1
otroContador()      // 2 */

function counter() {
  let count= 0;
  return function () {
    count++;  // Incrementa el contador en cada invocación
    return count; // Retorna el valor actual del contador
  };
}
const nuevoContador= counter(); // => f(){}
console.log(nuevoContador());  // 1
console.log(nuevoContador());  // 2

const otroContador= counter(); // => f(){}
console.log(otroContador());  // 1 
console.log(otroContador());  // 2
console.log(otroContador());  // 3

/* Ejercicio 2
Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché para el callback 
que recibe por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que hace, de manera que, 
al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar 
otra vez cálculos que ya se hicieron anteriormente.

- cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e invocar a cb con ese argumento; 
hecho eso, debe guardar el argumento junto con el resultado de la invocación (tip: usá un objeto donde cada propiedad sea 
el argumento, y su valor el resultado de la correspondiente invocación a cb) de manera que, la próxima vez que reciba el 
mismo argumento, no sea necesario volver a invocar a cb, porque el resultado estará guardado en la "memoria caché".

  Ejemplo:
  function square(n){
    return n * n
  }

  const squareCache = cacheFunction(square)

  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
  squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) y 
                       lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty) */
                  
const cbDemo = function(x) {
  return x * 2;
};                       

function cacheFunction(cb) {
  let cache= {}; // objeto para guardar
    return function (num){
        if(cache.hasOwnProperty(num)){ // vemos si esta o no
          return "Esa key de value " + cache[num] + " ya existe";
        }
        cache[num] = cb(num);
                    // num* 2
        return num + " : " + cache[num];
    };
}
 /// VERRRRR en las capturas porque este no es
const instClosureCacheSimple  = cacheFunction(cbDemo);  // -> function (arg) {cache[arg] = arg * 2return cache};
console.log(instClosureCacheSimple (2));  // 5
console.log(instClosureCacheSimple (3));  // ya no lo va a tomar porque esta en el cache
console.log(instClosureCacheSimple (5)); 
console.log(instClosureCacheSimple (3));

//----------------------------------------

// Bind

var instructor = {
   nombre: 'Franco',
   edad: 25,
};

var alumno = {
   nombre: 'Juan',
   curso: 'FullStack',
};

function getNombre() {
  return this.nombre;
}

/*
  Ejercicio 3
  IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)
  Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre pero retornen el nombre del instructor y del alumno, respectivamente.
*/
//retornen el nombre del instructor y del alumno
let getNombreInstructor = getNombre.bind(instructor);
let getNombreAlumno = getNombre.bind(alumno);

console.log(getNombreInstructor()); // "Franco"
console.log(getNombreAlumno()); // "Juan"
/*
  Ejercicio 4
  Sin modificar la función crearCadena, usar bind para guardar, en las tres variables declaradas a continuación, tres 
  funciones que retornen una cadena (string) y el delimitador especificado (asteriscos, guiones, y guiones bajos, }
  respectivamente). Las funciones obtenidas deberían recibir solamente un argumento - la cadena de texto - ya que los 
  otros argumentos habrán sido "bindeados". 
*/

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
    return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind(null, "*", "*"); // en el primero se puede poner cualquier cosa porque ya esta ocupado
let textoGuiones = crearCadena.bind(null, "-", "-");
let textoUnderscore = crearCadena.bind(null, "_", "_");

console.log(textoAsteriscos("Hola"));       // "*Hola*"
console.log(textoGuiones("Hola"));         // "-Hola-"
console.log(textoUnderscore("Hola"));  // "_Hola_"

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   counter,
   cacheFunction,
   getNombreInstructor,
   getNombreAlumno,
   textoAsteriscos,
   textoGuiones,
   textoUnderscore,
};
