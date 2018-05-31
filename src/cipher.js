window.cipher = {
  // ... 
  encode: (offset, string) => {// funcion para ejecutar el cifrado
    return cipher.refactorFor(offset, string);// retorna el resultado de cifrar
  },

  decode: (offset, string) => {// funcion para jecutar el descifrado
    offset = (26 - (offset % 26)) % 26;// recalculando un nuevo offset
    return cipher.refactorFor(offset, string);// retorna el resultado de descifrar
  },
  refactorFor:(offset, string) => {// funcion para hacer el cifrado y descifrado
    let resultado = "";
    offset = parseInt(offset);  
    for (let i = 0; i < string.length; i++){// este for recorre la cantidad de cadena del string
      let caracter1 = string.charCodeAt(i);// recibiendo el valor de un caracter en la posicion i
      if (caracter1 >= 65 && caracter1 <= 90){// evaluando si el valor esta entre 65 y 90 en el codigo ASCII(mayusculas)
        resultado += String.fromCharCode((caracter1 - 65 + offset) % 26 + 65);// si esta añadimos a nuestro resultado
      } else if (caracter1 >= 97 && caracter1 <= 122){// evaluando si el valor esta entre 97 y 122 en el codigo ASCII (minusculas)
        resultado += String.fromCharCode((caracter1 - 97 + offset) % 26 + 97);// si esta añadimos a nuestro resultado
      } else {
        resultado += String.fromCharCode(caracter1);// caso contrario solo añadimos la letra de este valor 
    }
  }
    return resultado;// retornamos el resultado obtenido
  },
  createCipherWithOffset: (offset) => {
    const result = {
      encode(string) {
         return cipher.encode(offset, string);
      },
      decode(string) {
         return cipher.decode(offset, string);
      }
    }
    return result;
  }
};
 