window.cipher = {
  // ... 
  encode: (offset, string)=>{
   return cipher.refactorFor(offset, string);
  },

  decode:(offset, string) =>{
  offset=(26-(offset%26))%26;
  return cipher.refactorFor(offset,string);
  },
  refactorFor:(offset, string) => {
    let resultado="";  
    for(let i=0;i<string.length;i++){
      let caracter1 = string.charCodeAt(i);
      if(caracter1>=65 && caracter1<=90){
        resultado+=String.fromCharCode((caracter1-65 +parseInt(offset))% 26 +65);
      }else if(caracter1>=97 && caracter1<=122){
        resultado+=String.fromCharCode((caracter1-97 +parseInt(offset))% 26 + 97);
      }else{
        resultado+=String.fromCharCode(caracter1);
      }
    }
    return resultado;
  },
  createCipherWithOffset:(offset)=>{
   const result={
     encode(string){
      return cipher.encode(offset,string);
      },
    decode(string){
      return cipher.decode(offset,string);
      }
    }
    return result;
  }
};
 