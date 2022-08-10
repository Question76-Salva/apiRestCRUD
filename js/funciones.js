export function mostrarAlerta(mensaje) {

    // === capturar elemento ===
    const alerta = document.querySelector('.bg-red-100');

    // === si no hay alerta | generar/crear una ===
    if(!alerta) {

        // crear elemento html
        const alerta = document.createElement('p');

        // añadir clases css | tailwind css
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');

        // diseñar template
        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;

        // capturar elemento contenedor
        const formulario = document.querySelector('#formulario');

        // renderizar alerta dentro del elemento contenedor
        formulario.appendChild(alerta);

        // hacer desaparecer alerta a los 3 segundos
        setTimeout(() => {
            alerta.remove();
        }, 3000);

    }
}

export function validar(obj) {
    // === true | false | en caso de que pase la validación ===
    return !Object.values(obj).every( input => input !== '');
}