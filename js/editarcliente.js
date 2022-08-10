import { obtenerCliente, editarCliente } from './API.js';
import { mostrarAlerta, validar } from './funciones.js';

(function() {

    // === campos del formulario ===
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const empresaInput = document.querySelector('#empresa');
    const telefonoInput = document.querySelector('#telefono');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {

        // === obtener cliente a editar | id ===
        // ¿que registro estamos consultado para hacer la consulta a la API?
        // y traernos los resultados
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parseInt(parametrosURL.get('id'));

        const cliente = await obtenerCliente(idCliente);
        
        //console.log(cliente);

        mostrarCliente(cliente);

        // === submit al formulario ===
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente);
    });

    // =================
    // === funciones ===
    // =================

    function mostrarCliente(cliente) {        
        //* === obtener la información | mostrar en los inputs ===

        // console.log(cliente);    

        // extraer variables del objeto | cliente        
        const { nombre, empresa, email, telefono, id } = cliente;

        // llenar los campos del formulario | con las variables
        nombreInput.value = nombre;
        empresaInput.value = empresa;
        emailInput.value = email;
        telefonoInput.value = telefono;
        idInput.value = id;
    }

    function validarCliente(e) {
        e.preventDefault();

        // === objeto | guarda info de los inputs del formulario ===
        const cliente = {
            nombre: nombreInput.value, 
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: parseInt(idInput.value)
        }

        //console.log(cliente);
        
        // === validar formulario ===
        // NO ha pasado la validación
        if( validar(cliente)) {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        // si se pasa la validación...
        // reescribe el objeto
        editarCliente(cliente);

    }


}());