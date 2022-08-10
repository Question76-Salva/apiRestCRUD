//* =================
//* === principal ===
//* =================

import { obtenerClientes, eliminarCliente } from './API.js';

(function() {
    //* === proteger variables | que no salgan de este archivo ===

    // === capturar elemento ===
    const listado = document.querySelector('#listado-clientes');

    // === disparar eventos ===
    document.addEventListener('DOMContentLoaded', mostrarClientes);
    
    listado.addEventListener('click', confirmarEliminar);

    // === funciones ===

    async function mostrarClientes() {

        // traer todos los clientes de API.js
        const clientes = await obtenerClientes();
        
        //console.log(clientes);
        
        clientes.forEach(cliente => {

            // extraer variables del objeto | cliente
            const { nombre, email, telefono, empresa, id } = cliente;

            // crear elemento html
            const row = document.createElement('tr');

            // renderizar tabla | mostrar clientes
            row.innerHTML += `
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                    <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${telefono}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p class="text-gray-600">${empresa}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                    <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                    <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                </td>
            `;

            listado.appendChild(row);
        });
    }

    function confirmarEliminar(e) {
        if(e.target.classList.contains('eliminar')) {
            // console.log('Diste click en eliminar');

            // detectar | a que le estoy dando click para eliminar
            // y convertirlos a number
            const clienteId = parseInt(e.target.dataset.cliente);
            
            //console.log(clienteId);

            const confirmar = confirm('¿Deseas eliminar este registro?');

            if(confirmar) {
                eliminarCliente(clienteId);
            }
        }
    }

}());