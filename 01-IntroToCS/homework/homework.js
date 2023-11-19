'use strict';

function BinarioADecimal(num) {
 //string y retorna un numero
 if (typeof num !== 'string') {
   return null;
 }

 let NumD = parseInt(num, 2);
 return NumD;
  //toma la cadena num, que representa un número binario, y la convierte en un 
  //número entero en base 10 (decimal).

  /*  otra forma a ver:
  let decimal = 0;
   let array = num.split("").reverse()
   array.forEach(function (element, index) {
      decimal = decimal + Math.pow(2, index) * element
   });
   return decimal;
  */

   /*
   var numResult= 0;
   let arrayBinary = string.split("").reverse();
   for (let i = 0; i < arrayBinary.length; i++) {
      numResult = numResult + (arrayBinary[i] * 2 ** i);
   }
   return numResult;
   */

   /*
   var numResult = 0;
   var pos = string.length - 1;
   console.log(pos);
​
   for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
    console.log("  ", pos);
    numResult = numResult + string[i] * 2 ** pos;
    pos--;
   }
   return numResult;
   */
}



function DecimalABinario(num) {
   let binario = "";
  while (num > 0) { //se ejecutará hasta que num se convierta en 0.
    binario = (num % 2) + binario; //se actualiza num dividiéndolo por 2 que es el resto de lo que queda
    num = Math.floor(num / 2); // Se redondea hacia abajo. Esto es equivalente a eliminar el dígito binario menos significativo.
  }
  return(binario);
  //return num.toString(2)
   /*

  let binario = [];
   while (num >= 1) {
      let resto = Math.trunc(num % 2);
      binario.unshift(resto)
      num = num / 2;
   }
   return binario.join("");
  */

   /*
   var binaryString = "";
   while(num > 0){
      binaryString = (num % 2) + binaryString;
      num= Math.floor(num / 2);
   }
   return binaryString;
   */
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
