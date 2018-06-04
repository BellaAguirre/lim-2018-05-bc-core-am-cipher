let offset = document.getElementById('desplazar');//variable para el offset
let string = document.getElementById('mensaje');//variable para el string ingresado
let resultFinal;//varible para mostrar el resultado de cifrar o descifrar
//botones de inicio
let btnCifra = document.getElementById('cifrar');
let btnDescifra = document.getElementById('descifra');
//form
let formPregunta = document.getElementById('containerMenu');
let formCifrador = document.getElementById('container');
// Botones dentro del formulario
let botonCifrar = document.getElementById('cifrador');//variable para el boton cifrar
let botonDecifrar = document.getElementById('decifrador');//variable para el boton descifrar
let btnVolver = document.getElementById('volver');

formCifrador.style.display = 'none';
//Evento click de los botones del menu
btnCifra.addEventListener('click', function(e){
    e.preventDefault();
    formPregunta.style.display = 'none';
    formCifrador.style.display = 'block';
    botonDecifrar.style.display = 'none';
});

btnDescifra.addEventListener('click', function(e){
    e.preventDefault();
    formPregunta.style.display = 'none';
    formCifrador.style.display = 'block';
    botonCifrar.style.display = 'none';
    botonDecifrar.style.display = 'inline block';
});
//Evento click del boton de volver
btnVolver.addEventListener('click', function(){
    formPregunta.style.display = 'block';
    formCifrador.style.display = 'none';
});
//evento click para cifrar un mensaje
botonCifrar.addEventListener('click', function(e){
    e.preventDefault();
    //validando espacios vacios
    if(offset.value === '') {
        document.getElementById('mensajeError').innerHTML = 'Ingresa tu clave';
        document.getElementById('errorText').innerHTML = '';
    } else if(string.value.trim() === '') {
        document.getElementById('mensajeError').innerHTML = '';
        document.getElementById('errorText').innerHTML = 'ingresa un mensaje';
    }else{
        //mostrando el resultado de cifrar en el html
        document.getElementById('mensajeError').innerHTML = '';
        document.getElementById('errorText').innerHTML = '';
        resultFinal = window.cipher.encode(offset.value, string.value);
        string.value = resultFinal;
        document.forms['myform']['mensaje'].readOnly = true;
    }
    
});
//evento click para descifrar un mensaje
botonDecifrar.addEventListener('click', function(e){
    e.preventDefault();
    //validando espacios vacios
    if(offset.value === '') {
        document.getElementById('mensajeError').innerHTML = 'Ingresa tu clave';
        document.getElementById('errorText').innerHTML = '';
    } else if(string.value.trim() === '') {
        document.getElementById('mensajeError').innerHTML = '';
        document.getElementById('errorText').innerHTML = 'ingresa un mensaje';
    }else{
        //mostrando el resultado de descifrar en el html
        document.getElementById('mensajeError').innerHTML = '';
        document.getElementById('errorText').innerHTML = '';
        resultFinal = window.cipher.decode(offset.value, string.value);
        string.value = resultFinal;
        document.forms['myform']['mensaje'].readOnly = true;//bloquear textarea para no ingresar nada despues de descifrar
    }
});
