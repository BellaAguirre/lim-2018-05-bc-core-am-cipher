//variables offset y string
let offset = document.getElementById('desplazar');
let string = document.getElementById('mensaje');
let resultFinal;//varible para mostrar el resultado de cifrar o descifrar
//botones de inicio
let btnCifra = document.getElementById('cifrar');
let btnDescifra = document.getElementById('descifra');
//form
let formPregunta = document.getElementById('container_menu');
let formCifrador = document.getElementById('container');
// Botones dentro del formulario
let botonCifrar = document.getElementById('cifrador');
let botonDecifrar = document.getElementById('decifrador');
let btnVolver = document.getElementById('volver');
//variables para mensaje error
let mensajeError = document.getElementById('mensaje_error');
let errorText = document.getElementById('error_text');

//Evento click de los botones del menu
btnCifra.addEventListener('click', () => {
    formPregunta.classList.remove('block');
    formPregunta.classList.add('none');
    formCifrador.classList.remove('none');
    formCifrador.classList.add('block');
    botonDecifrar.classList.remove('block');
    botonDecifrar.classList.add('none');
    botonCifrar.classList.add('block');
});

btnDescifra.addEventListener('click', () => {
    formPregunta.classList.remove('block');
    formPregunta.classList.add('none');
    formCifrador.classList.remove('none');
    formCifrador.classList.add('block');
    botonCifrar.classList.remove('block');
    botonCifrar.classList.add('none');
    botonDecifrar.classList.add('block');
});
//Evento click del boton de volver
btnVolver.addEventListener('click', () => {
    formPregunta.classList.remove('none');
    formPregunta.classList.add('block');
    formCifrador.classList.remove('block');
    formCifrador.classList.add('none');
});
//evento click para cifrar un mensaje
botonCifrar.addEventListener('click', function(e){
    e.preventDefault();
    //validando espacios vacios
    if(offset.value === '') {
        mensajeError.innerHTML = 'Ingresa tu clave';
        errorText.innerHTML = '';
    } else if(string.value.trim() === '') {
        mensajeError.innerHTML = '';
        errorText.innerHTML = 'ingresa un mensaje';
    }else{
        //mostrando el resultado de cifrar en el html
        mensajeError.innerHTML = '';
        errorText.innerHTML = '';
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
       mensajeError.innerHTML = 'Ingresa tu clave';
        errorText.innerHTML = '';
    } else if(string.value.trim() === '') {
        mensajeError.innerHTML = '';
        errorText.innerHTML = 'ingresa un mensaje';
    }else{
        //mostrando el resultado de descifrar en el html
        mensajeError.innerHTML = '';
        errorText.innerHTML = '';
        resultFinal = window.cipher.decode(offset.value, string.value);
        string.value = resultFinal;
        document.forms['myform']['mensaje'].readOnly = true;//bloquear textarea para no ingresar nada despues de descifrar
    }
});
