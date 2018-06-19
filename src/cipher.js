window.cipher = {
  // funcion de cifrar
  encode: (offset, string) => cipher.refactorFor(offset, string),
  decode: (offset, string) => {
    offset = (26 - (offset % 26)) % 26;// recalculando un nuevo offset
    return cipher.refactorFor(offset, string);
  },
  refactorFor:(offset, string) => {
    // funcion para el recorrido del for
    let stringCipher = '';
    offset = parseInt(offset);  
    for ( i in string){
      const valueString = string.charCodeAt(i);
      if (valueString >= 65 && valueString <= 90){// evaluando si el valor esta entre 65 y 90 en el codigo ASCII(mayusculas)
        stringCipher += String.fromCharCode((valueString - 65 + offset) % 26 + 65);
      } else if (valueString >= 97 && valueString <= 122){// evaluando si el valor esta entre 97 y 122 en el codigo ASCII (minusculas)
        stringCipher += String.fromCharCode((valueString - 97 + offset) % 26 + 97);
      } else {
        stringCipher += String.fromCharCode(valueString);// caso contrario solo añadimos la letra de este valor 
    }
  }
    return stringCipher;
  },
  //funcion del hacking edition retorna un objeto con dos funciones
  createCipherWithOffset: (offset) => {
    const result = {
      encode(string) {return cipher.encode(offset, string);},
      decode(string) {return cipher.decode(offset, string);}
    }
    return result;
  }
};