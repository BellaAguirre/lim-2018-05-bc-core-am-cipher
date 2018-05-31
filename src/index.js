let offset = document.getElementById('desplazar');//variable para el offset
let string = document.getElementById('mensaje');//variable para el string ingresado
let resultFinal = document.getElementById('resultado');//varible para mostrar el resultado de cifrar o descifrar
let botonCifrar = document.getElementById('cifrador');//variable para el boton cifrar
let botonDecifrar = document.getElementById('decifrador');//variable para el boton descifrar
let botonSorpresa = document.getElementById('cipher');
let sorpresa =document.getElementById('sorpresa');

botonCifrar.addEventListener('click', function(e){//evento click para cifrar un mensaje
    e.preventDefault();
    resultFinal.innerHTML = window.cipher.encode(offset.value, string.value);//mostrando el resultado de cifrar en el html
});
botonDecifrar.addEventListener('click', function(e){//evento click para descifrar un mensaje
    e.preventDefault();
    resultFinal.innerHTML = window.cipher.decode(offset.value, string.value);//mostrando el resultado de descifrar en el html
});
botonSorpresa.addEventListener('click', function(e){
    e.preventDefault();
    sorpresa.innerHTML = window.cipher.createCipherWithOffset(offset.value).encode(string.value);
});