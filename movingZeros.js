//link del ejercicio: https://www.codewars.com/kata/52597aa56021e91c93000cb0

function moveZerosToEnd(arr) {
    // Crea dos arrays: una para los elementos distintos de cero y otra para los ceros
    let noZeroArr = [];
    let zeroCount = 0;
  
    // Itera a traves del array de entrada
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        zeroCount++; // Cuenta el número de ceros
      } else {
        noZeroArr.push(arr[i]); // Empuja los elementos distintos de cero a la nueva matriz
      }
    }
  
    // Añade los ceros al final de la matriz distinta de cero
    while (zeroCount > 0) {
      noZeroArr.push(0);
      zeroCount--;
    }
  
    return noZeroArr;
  }
  
  // Ejemplo:
  let arr = [1, 0, 2, 0, 3, 4, 0, 5];
  console.log(moveZerosToEnd(arr)); // Salida: [1, 2, 3, 4, 5, 0, 0, 0]