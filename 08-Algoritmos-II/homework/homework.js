'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array; // caso base
  let pivot = Math.floor(array.length / 2); // -> es el index (pos) en centro <- array[pivot]
  let left = [];
  let right = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== pivot) {
      if (array[i] <= array[pivot]) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
  }
  return quickSort(left).concat(array[pivot]).concat(quickSort(right));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (list.length <= 1) return list;
  let lineDiv = Math.floor(list.length / 2);
  console.log(lineDiv);
​
  let leftArray = list.slice(0, lineDiv);
  let rightArray = list.slice(lineDiv);
  console.log(leftArray);
  console.log(rightArray);
​
  leftArray = mergeSort(leftArray);
  rightArray = mergeSort(rightArray);
​
  let arrayResult = []; // [1,2]
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      arrayResult.push(leftArray.shift());
    } else {
      arrayResult.push(rightArray.shift());
    }
  }
// leftArray []    rightArray [4, 8]
  arrayResult = arrayResult.concat(leftArray, rightArray)
​
  return arrayResult;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
