//primer ejercicio
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x); // 10 esta arriba el valor
   console.log(a); // 8 porque lo busca afuera
   var f = function (a, b, c) {
      b = a; // que era 9 -> 8
      console.log(b);  // 8 porque es a
      b = c; // 8 -> 9
      var x = 5;
   };
   f(a, b, c);
   console.log(b); // 9 ? 10
};
c(8, 9, 10); //a,b,c 
console.log(b); // 10 sin entrar en la funcion
console.log(x); // 1

/////////////////////////////////////

console.log(bar); // undefined porque se lee de arriba hacia abajo
console.log(baz); // not defined
foo();
function foo() {
   console.log('Hola!'); // Hola!, rompe el codigo baz, si no lo estuviera si sale el console.log de foo
}
var bar = 1;
baz = 2;  // no esta definido porque le falta var

////////////////////////////////////////

var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor); // ""Franco" 

/////////////////////////////////////////
//CONTEXTO
var instructor = 'Tony';
console.log(instructor); //"Tony"
(function () {  // funciones autoinvocadas
   if (true) {  
      var instructor = 'Franco';
      console.log(instructor); //"Franco"
   }
})(); // funciones autoinvocadas
console.log(instructor); //"Tony"

/////////////////////////////////////////
// BLOQUE
var instructor = 'Tony'; 
let pm2 = 'Franco';  
if (true) {
   var instructor = 'The Flash'; // le cambia el valor
   let pm2 = 'Reverse Flash'; // un nuevo registro
   console.log(instructor); //The Flash"
   console.log(pm2); //"Reverse Flash"
}
console.log(instructor); // "The Flash" // CREO que es por el [var]
console.log(pm2); // Franco"

/////////////////////////////////

//VER DE NUEVO!! CONSOLOGEAR
6 / "3"           // 2           //Se pasa por Number()
"2" * "3"         // 6           //Se pasan por Number()
4 + 5 + "px"      //"9px"        //Se suman y luego concatena
"$" + 4 + 5       //"$45"        //Al ir de izquierda a derecha se concatena $4, y luego al no poder sumarse, concatena
"4" - 2           // 2           //Se pasa por Number()
"4px" - 2         // NaN         //Esto no es un numero "4px" y no se le puede restar
7 / 0             // Infinity    //Todo numero dividido entre 0 tiende a infinito
{}[0]             // [0]         //
parseInt("09")    // 9           //Pasa a numero
5 && 2            // 2           //ambos son true, se toma el ultimo
2 && 5            // 5           //abbos son true, se toma el ultimo
5 || 0            // 5           //Se toma el true
0 || 5            // 5           //Se toma el true
[3]+[3]-[10]      // 23          //Se suman los array, 3 + 3 = "33" - 10 
3>2>1             // false       //3>2 = true > 1 = false
//[] == ![]         // true        //Se instancian , como ambos estan instanciados en diferente lugar, ==!, por lo tanto son distintos (true)

//////////////////////////////////////
//CONTEXTO + HOISTING
function test() {
    console.log(a); // undefined
    console.log(foo()); // 2
 
    var a = 1;
    function foo() {
       return 2;
    }
}
 test();

//////////////////////////////////////
// CONTEXTO Y BLOQUE
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';   //BLOQUE
      return snack;
   }
   return snack;
}

getFood(false); // undefined 

//////////////////////////////////////

//This
//¿Cuál es el output o salida en consola luego de ejecutar esté código? 
//Explicar por qué:

var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname; // "Aurelio De Rosa"
      },
   },
};

console.log(obj.prop.getFullname()); // "Aurelio De Rosa"

var test = obj.prop.getFullname; // -> function () {return this.fullname;}

console.log(test()); // undefined null SE PIERDE
//el this lo obliga a buscar desde adentro, si le sacamos el this va a ser Juan Perez

/////////////////////////////////////

function printing() {
    console.log(1); // primero
    setTimeout(function () {
       console.log(2);  //cuarto
    }, 1000);
    setTimeout(function () {
       console.log(3); //tercero
    }, 0);
    console.log(4); //segundo
 }
 
 printing();
//1, 4, 3, 2
///////////////////////////////////

