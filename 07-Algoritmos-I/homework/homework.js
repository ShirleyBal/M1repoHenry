'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  // las divisiones que uno hace al dividir un numero y que no quede resto por asi decirlo
  let result= [1]; //porque hay que devolver un array y siempre arranca con 1
  let baseDiv= 2;
  /*
  for (let i = 0; i < num.length; i++) { //porque 2 es el numero primo más pequeño
    while(num % i === 0){
      array.push(num);
      num /= i;
    }
  }
  return array;
  */
  while (num >1) {
    if(num % baseDiv === 0){ //que para dividir de cero
      result.push(baseDiv);
      num = num / baseDiv;
    }else{
      console.log()
      baseDiv++;
    }
  }
  return result;
}  

//se necesita 2 iteradores for{for}
function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código: []
  //va ordenando de dos en dos bubbleSort([5, 1, 4, 2, 8]))-> [1, 2, 4, 5, 8];
  let swap= true; //se le llama bandera, que le cambia el booleano para ejecutar o no
  while(swap) {
    swap= false;
    for (let i = 0; i < array.length -1 ; i++) { 
      if(array[i] > array[i+1]){ //si es mayor al de a lado de la derecha, va a hacer el intercambio
        let aux = array[i] //guardar el valor a desplazar
        array[i] = array[i+1] //intercambiar
        array[i+1]= aux;
        swap= true; // si cambie tengo que volver a entrar
      } 
    }
  }
  return array;
}               
//bubbleSort([10, 8, 1, 16, 12])


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  //j arranca en lo ultimo
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j >= 1; j--) {
      if (array[j] < array[j - 1]) {
        let aux = array[j];
        array[j] = array[j - 1];
        array[j - 1] = aux;
      } else {
        j = 0;
      }
    }
  }
  return array;
}
//insertionSort([10, 8, 1, 16, 12])

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  // clasico doble for, que primero corre j y luego i
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1 ; j < array.length; j++) { // desde la posición siguiente a la posición actual i y que j sea menor a la longitud del array
      if(array[j] < array[i]){ //si es menor entra
        let aux = array[i]; //guardar el valor a desplazar
        array[i] = array[j]; 
        array[j]= aux;
      }
    }
  }
  return array;
}     
//selectionSort([10, 8, 1, 16, 12])


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
