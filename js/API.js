//* =========================
//* === interacciones API ===
//* =========================

const url = 'http://localhost:4000/clientes';

// ===========================
// === crear nuevo cliente ===
// ===========================
export const nuevoCliente = async cliente => {
    //console.log(cliente);

    try {
        await fetch(url, {
            // POST - crear/create
            method: 'POST',
            // convertir objeto a string y mardarlo a la url con POST
            body: JSON.stringify(cliente),
            // headers: info de que tipo de dato enviamos
            // ¿que es lo que estoy enviando?            
            headers: {
                // enviar info al servidor
                'Content-Type': 'application/json'
            }
        });
        // === redireccionar ===
        // una vez completa la acción de crear cliente
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}

// ==================================
// === obtener todos los clientes ===
// ==================================
export const obtenerClientes = async () => {
    try {
        // fetch | usa GET por defecto
        // GET - leer/read
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        console.log(error);
    }
}

// ===========================
// === eliminar un cliente ===
// ===========================
export const eliminarCliente = async id => {
    try {
        // inyectar id en la url | rest | eliminar
        await fetch(`${url}/${id}`, {
            // DELETE - eliminar/delete
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error);
    }
}

// =================================
// === obtener un cliente por id ===
// =================================
export const obtenerCliente = async id => {
    try {
        // tomar id | cliente
        const resultado = await fetch(`${url}/${id}`);
        // resultado | en json
        const cliente = await resultado.json();
        return cliente;
    } catch (error) {
        console.log(error);
    }
}

// =============================
// === actualizar un cliente ===
// =============================
export const editarCliente = async cliente => {
    //console.log(cliente); 

    try {
        // capturar id cliente
        await fetch(`${url}/${cliente.id}`, {
            // PUT - actualizar/update
            method: 'PUT',
            // convertir objeto a string y mardarlo a la url con PUT
            body: JSON.stringify(cliente),
            // headers: info de que tipo de dato enviamos
            // ¿que es lo que estoy enviando?
            headers: { 
                // enviar info al servidor
                'Content-Type': 'application/json'
            }
        });
        // === redireccionar ===
        // una vez completa la acción de crear cliente
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}
