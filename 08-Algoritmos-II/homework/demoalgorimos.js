// Encontrar si tal num se encuentra en una lista ORDENADA
const lista = [2, 11, 23, 24, 25, 31, 44];
​
//? su Complejidad es O(n)
function search(num, arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("count steps => ", i);
    if (num === arr[i]) {
      return true;
    }
  }
  return false;
}
​
var res = 3 + 4; // 1 Step -> O(1)
​
console.log(search(6, lista));
​
//? O(log n)
function superSearch(num, list) {
  let indexPuntoDelMedio = Math.floor(list.length / 2);
  let valuePuntoDelMedio = list[indexPuntoDelMedio];
  console.log(valuePuntoDelMedio);
  if (num === valuePuntoDelMedio) return true;
​
  // [2, 11, 23, 24, 25, 31, 44]
  if (num < valuePuntoDelMedio) {
    list = list.slice(0, indexPuntoDelMedio);
  }
  if (num > valuePuntoDelMedio) {
    list = list.slice(indexPuntoDelMedio + 1);
  }
  //? y aplicamos recursividad o Bucles (While)
  const newIndex = Math.floor(list.length / 2);
  console.log(list);
  let newValue = list[newIndex];
  console.log(newValue);
  if (num === newValue) return true;
}
superSearch(123, lista);
// 100 -> 6 steps    200 -> 7 sets    400 -> 8 sets    -- ... -->  200.000.000 -> 21
​
/*
todo: COMPLEJIDAD
* tiempo -> los pasos  <- Siempre pensar en el peor de los casos
* espacio 
​
INPUT   10 -> Los pasos 10     1023 -> Los pasos 1023     n cant. de datos n cant de pasos -> O(n)
*/
​
// Divide y Conquista
​
var testList = [1, 2, 4, 5, 80];
//                         desde , hasta
console.log(testList.slice(0, 2)); // el SLICE retorna un new array
const newData = testList.slice(0, 2);
​
//                         donde, cuanto/s
console.log(testList.splice(1, 2));
console.log(testList);
​
//* Complejidad  O(n)
function maxValue(list) {
  let max = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] > max) {
      max = list[i];
    }
  }
  return max;
}
​
console.log(maxValue(lista));
​
//* Complejidad  O(n x 2)   O(2n)
function maxMinValue(list) {
  let max = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] > max) {
      max = list[i];
    }
  }
  let min = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] < min) {
      min = list[i];
    }
  }
  return [min, max];
}
​
console.log(maxMinValue(lista));
​
//todo: bucles anidados  O(n^2)
for (let index = 0; index < lista.length; index++) {
  for (let index = 0; index < lista.length; index++) {
    console.log(index);
  }
}
​
//todo: bucles anidados  O(n^3)
for (let index = 0; index < lista.length; index++) {
  for (let index = 0; index < lista.length; index++) {
    for (let index = 0; index < lista.length; index++) {
      console.log(index);
    }
  }
}