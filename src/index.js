let offset = document.getElementById('desplazar');//variable para el offset
let string = document.getElementById('mensaje');//variable para el string ingresado
let resultFinal;//varible para mostrar el resultado de cifrar o descifrar

//botones de inicio
let btnCifra = document.getElementById('cifrar');
let btnDescifra = document.getElementById('descifra');
//form
let formPregunta = document.getElementById('containerMenu');
let formCifrador = document.getElementById('container');
let btnVolver = document.getElementById('volver');

// Botones dentro del formulario
let botonCifrar = document.getElementById('cifrador');//variable para el boton cifrar
let botonDecifrar = document.getElementById('decifrador');//variable para el boton descifrar


formCifrador.style.display = 'none';
btnCifra.addEventListener('click', function(e){
    e.preventDefault();
    formPregunta.style.display='none';
    formCifrador.style.display='block';
    botonDecifrar.style.display='none';
});

btnDescifra.addEventListener('click',function(e){
    e.preventDefault();
    formPregunta.style.display='none';
    formCifrador.style.display='block';
    botonCifrar.style.display='none';
    botonDecifrar.style.display = 'block';
});
btnVolver.addEventListener('click', function(e){
    formPregunta.style.display = 'block';
    formCifrador.style.display = 'none';
});
botonCifrar.addEventListener('click', function(e){//evento click para cifrar un mensaje
    e.preventDefault();
    //mostrando el resultado de cifrar en el html
    resultFinal= window.cipher.encode(offset.value, string.value);
    string.value=resultFinal;
    
});
botonDecifrar.addEventListener('click', function(e){//evento click para descifrar un mensaje
    e.preventDefault();
    
    resultFinal = window.cipher.decode(offset.value, string.value);//mostrando el resultado de descifrar en el html
    string.value=resultFinal;
});