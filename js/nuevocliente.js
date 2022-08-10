import { mostrarAlerta, validar } from './funciones.js';
import { nuevoCliente } from './API.js';

(function() {
    //* === proteger variables | que no salgan de este archivo ===

    // === capturar elementos | formulario ===
    const formulario = document.querySelector('#formulario');

    // === disparar evento ===
    formulario.addEventListener('submit', validarCliente);

    // === funciones ===
    function validarCliente(e) {
        e.preventDefault();

        // === capturar elementos | inputs del formulario ===
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        // === objeto | guarda info de los inputs del formulario ===
        const cliente = {
            nombre, 
            email,
            telefono,
            empresa
        }

        // === validar formulario ===
        // NO ha pasado la validación
        if( validar(cliente)) {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        // SI, ha pasado la validación
        nuevoCliente(cliente);        
    }    

})();