async function loadData() {
    try {
        const response = await fetch('pedidos.json');
        const data = await response.json();

        // Llama a las funciones para mostrar la información del cliente y del pedido
        displayOrderInfo(data.pedidos);
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
}

// Función para mostrar la información del pedido en una tabla
function displayOrderInfo(pedidos) {
    // Crear una tabla para mostrar la información
    const table = document.createElement('table');

    // Crear encabezados de tabla
    const headers = ["Nombre", "Apellidos", "Teléfono", "Calle", "Ciudad", "Código Postal", "Provincia", "Correo Electrónico", "Número de Pedido", "Fecha de Compra", "Fecha de Entrega", "Total Factura", "Productos"];
    const headerRow = document.createElement('tr');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Recorrer los pedidos
    pedidos.forEach(year => {
        year.trimestres.forEach(trimestre => {
            trimestre.pedidos.forEach(pedido => {
                // Obtener la información del cliente y del pedido
                const cliente = pedido.cliente;
                const pedidoInfo = pedido.pedido;

                // Crear una fila para cada pedido
                const row = document.createElement('tr');

                // Agregar información del cliente a la fila
                const clientInfo = [cliente.nombre, cliente.apellidos, cliente.telefono, cliente.direccion.calle, cliente.direccion.ciudad, cliente.direccion.codigo_postal, cliente.direccion.provincia, cliente.correo_electronico];
                clientInfo.forEach(info => {
                    const td = document.createElement('td');
                    td.textContent = info;
                    row.appendChild(td);
                });

                // Agregar información del pedido a la fila
                const orderInfo = [pedidoInfo.numero_pedido, pedidoInfo.fecha_compra, pedidoInfo.fecha_entrega, pedidoInfo.total_factura];
                const td = document.createElement('td');
                td.textContent = JSON.stringify(pedidoInfo.productos);
                orderInfo.forEach(info => {
                    const td = document.createElement('td');
                    td.textContent = info;
                    row.appendChild(td);
                });

                // Agregar la fila a la tabla
                table.appendChild(row);
            });
        });
    });

    // Agregar la tabla al documento
    document.body.appendChild(table);
}

// Llama a la función loadData para cargar y procesar los datos
loadData();
