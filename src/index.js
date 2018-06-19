//variables offset y string
const offset = document.getElementById('desplazar');
const string = document.getElementById('mensaje');
let resultFinal;//varible para mostrar el resultado de cifrar o descifrar
//botones de inicio
const btnCifra = document.getElementById('cifrar');
const btnDescifra = document.getElementById('descifra');
//form
const formPregunta = document.getElementById('container-menu');
const formCifrador = document.getElementById('container');
// Botones dentro del formulario
const botonCifrar = document.getElementById('cifrador');
const botonDecifrar = document.getElementById('decifrador');
const btnVolver = document.getElementById('volver');
//variables para mensaje error
const mensajeError = document.getElementById('mensaje-error');
const errorText = document.getElementById('error-text');

//Evento click de los botones del menu
btnCifra.addEventListener('click', () => {
    formPregunta.classList.replace('block','none');
    formCifrador.classList.replace('none','block');
    botonDecifrar.classList.replace('block','none');
    botonCifrar.classList.add('block');
});

btnDescifra.addEventListener('click', () => {
    formPregunta.classList.replace('block','none');
    formCifrador.classList.replace('none','block');
    botonCifrar.classList.replace('block','none');
    botonDecifrar.classList.add('block');
});
//Evento click del boton de volver
btnVolver.addEventListener('click', () => {
    offset.value = '';
    string.value = '';
    errorText.innerHTML = '';
    mensajeError.innerHTML = '';
    formPregunta.classList.replace('none','block');
    formCifrador.classList.replace('block','none');
    document.forms['myform']['mensaje'].readOnly = false;
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
