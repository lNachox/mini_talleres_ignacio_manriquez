//link del ejercicio: https://www.codewars.com/kata/520b9d2ad5c005041100000f

function pigLatinConverter(sentence) {
    // Divide la oración en palabras
    let words = sentence.split(/\b/); // Utilice \b para conservar los signos de puntuación
  
    // Procesa cada palabra
    let transformedWords = words.map(word => {
      // Comprueba si la palabra contiene sólo caracteres alfabéticos (ignora la puntuación)
      if (/^[a-zA-Z]+$/.test(word)) {
        // Mueve la primera letra al final y agrega «ay»
        return word.slice(1) + word[0] + 'ay';
      }
      // Si la palabra contiene caracteres no alfabéticos, la deja como está
      return word;
    });
  
    // Une las palabras transformadas en una oración
    return transformedWords.join('');
  }
  
  // Ejemplo:
  let sentence = "Hello, world!";
  console.log(pigLatinConverter(sentence)); 
  // Ejemplo de salida: "elloHay, orldway!"
  