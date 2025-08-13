document.addEventListener("DOMContentLoaded", function () {

    var validaciones = {
        nombre: false,
        apellidos: false,
        email: false,
        telefono: false
    };
    var restricciones = {
        nombre: {
            pattern: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{3,40}$/,
            error: "El nombre no es válido"
        },
        apellidos: {
            pattern: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{4,60}$/,
            error: "Los apellidos no son válidos"
        },
        email: {
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            error: "El email no es válido"
        },
        telefono: {
            pattern: /^\d{9}$/,
            error: "El teléfono no es válido"
        }
    };
    validarRestriccion();
    function validarRestriccion (){
        Object.keys(restricciones).forEach((clave)=>{
            const input = document.querySelector(`input[name=${clave}]`);
            if(!input) return; // Por si no existe en el DOM
            input.addEventListener('input', ()=>{
                if(input.value == null || input.value === ""){
                    validaciones[clave] = false;
                    setError(input, "* Este campo no puede estar vacío"); 
                } else if(!restricciones[clave].pattern.test(input.value)){
                    validaciones[clave] = false;
                    setError(input, restricciones[clave].error);
                }else{
                    validaciones[clave] = true;
                    setSuccess(input);
                }
            })
        })
    }

    function setError (input, error){
        //cogemos el padre del input para poder escribir el error 
        var padre = input.parentElement; 
        var div = padre.querySelector("div");
        div.innerHTML = error;

        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
    } 
    function setSuccess (input){
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
    }
    function validar(){
        var enviar = true; 
        Object.keys(validaciones).forEach((clave)=>{
            if(!validaciones[clave]){
                enviar = false;
            }
        }); 
        return enviar;
    } 

    //Añadimos un evento al formulario para validar los campos
    var form = document.getElementById("contactForm")
    var confirmarEnvio = document.getElementById("confirmarEnvio");
    form.addEventListener("submit", function(event){
        event.preventDefault(); // evita recargar
    if (validar()) {
        confirmarEnvio.style.display = "inline-block";
        form.classList.add('was-validated');
    }
    });


    //Al resetear el formulario, limpiamos los errores
    form.addEventListener("reset", ()=>{
        Object.keys(restricciones).forEach((clave)=>{
            const input = document.querySelector(`input[name=${clave}]`);
            input.classList.remove('is-valid');
            input.classList.remove('is-invalid');
        })
    })
});