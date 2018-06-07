window.cipher = {
  // funcion de cifrar
  encode: (offset, string) => cipher.refactorFor(offset, string),
  decode: (offset, string) => {
    offset = (26 - (offset % 26)) % 26;// recalculando un nuevo offset
    return cipher.refactorFor(offset, string);
  },
  refactorFor:(offset, string) => {
    // funcion para el recorrido del for
    let resultado = "";
    offset = parseInt(offset);  
    for (let i = 0; i < string.length; i++){
      let caracter1 = string.charCodeAt(i);
      if (caracter1 >= 65 && caracter1 <= 90){// evaluando si el valor esta entre 65 y 90 en el codigo ASCII(mayusculas)
        resultado += String.fromCharCode((caracter1 - 65 + offset) % 26 + 65);
      } else if (caracter1 >= 97 && caracter1 <= 122){// evaluando si el valor esta entre 97 y 122 en el codigo ASCII (minusculas)
        resultado += String.fromCharCode((caracter1 - 97 + offset) % 26 + 97);
      } else {
        resultado += String.fromCharCode(caracter1);// caso contrario solo añadimos la letra de este valor 
    }
  }
    return resultado;
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