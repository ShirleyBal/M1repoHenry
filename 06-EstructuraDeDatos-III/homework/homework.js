'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por 
  parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

//valuesToInsert = [15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34];
function BinarySearchTree(value) { //QUEUE el primero en entrar es el primero en salir
   this.value= value;
   this.left = null;
   this.right = null;
}
const testTree = new BinarySearchTree;

//tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, y `size

BinarySearchTree.prototype.insert= function (value) {//agregar nodos
   if(value > this.value){
      if(!this.right){ // negando el null
         this.right = new BinarySearchTree(value);
      }else{
         this.right.insert(value);
      }
   }else{ //por defecto queda el menor aqui <=
      if(!this.left){
         this.left = new BinarySearchTree(value);
      }else{
         this.left.insert(value);
      }
   }
};

BinarySearchTree.prototype.size= function (value) {
   if(!this.left && !this.right){
      return 1 // que no tenga ningun hijo
   }
   if(!this.right){
      return 1 + this.left.size();
   }
   if(!this.left){
      return 1 + this.right.size();
   }
   if(!this.left && this.right){ // que tenga en ambos lados
      return 1 + this.left.size() + this.right.size();
   }
}

BinarySearchTree.prototype.contains= function (value) {
   if(value === this.value){ //buscar si esta en el primero console.log(testTree.contain(10))
      return true;
   }
//   if(!this.right && !this.left){ // si tanto izq o der no tiene
//      return false;
//   }
   if(value > this.value){
      if(!this.right){
        return false;
      }else{
         return this.right.contains(value);
      }
   }else{
      if(!this.left){
         return false;
      }else{
         return this.left.contains(value); //hay que devolver la recursividad
      }
   }
}

//TODO: RECORRER ARBOL
// * In-order ->  left value right   LVR
// var result=[]
// RECURSION
BinarySearchTree.prototype.depthFirstForEachSimple= function (result= []) { //params por defecto, para que no se rompa un codigo si no me dan algun dato
   // params por defecto
  if (this.left) this.left.depthFirstForEachSimple(result);
  result.push(this.value);
  if (this.right) this.right.depthFirstForEachSimple(result);
  return result;
}

//   testArr = [];
//   tree.depthFirstForEach(function(val){ testArr.push(val); }, 'in-order')
//  cb(8)  =>  function(8){ testArr.push(8); } <= testArr = [8]
BinarySearchTree.prototype.depthFirstForEach= function (cb, order) {
   //abajo de izq a derecha
   //copiar la de profe
   //hace lo mismo pero en diferentes ordenes
   if (order === "pre-order") {
      cb(this.value);
      if (this.left) this.left.depthFirstForEach(cb, order);
      if (this.right) this.right.depthFirstForEach(cb, order);
    } else if (order === "post-order") {
      if (this.left) this.left.depthFirstForEach(cb, order);
      if (this.right) this.right.depthFirstForEach(cb, order);
      cb(this.value);
    } else {
      if (this.left) this.left.depthFirstForEach(cb, order);
      cb(this.value);
      if (this.right) this.right.depthFirstForEach(cb, order);
    }
}

//tiene una funcion por callback e inicializar la queue con recursion
BinarySearchTree.prototype.breadthFirstForEach= function (cb, array = []) {
   //como libro
   if (this.left) queue.push(this.left);
  if (this.right) queue.push(this.right);
  cb(this.value);
  if (queue.length > 0) {
    let subTree = queue.shift();
    subTree.breadthFirstForEach(cb, queue);
  }
};


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
