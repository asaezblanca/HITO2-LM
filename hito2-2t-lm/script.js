async function loadData() {
    try {
        const response = await fetch('pedidos.json');
        const data = await response.json();

        // Llama a las funciones para mostrar la información del cliente y del pedido
        displayClientInfo(data.clients);
        displayOrderInfo(data.orders);
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
}

// Función para mostrar la información del cliente en una tabla
function displayClientInfo(clients) {
    const table = document.createElement('table');

    // Create table headers
    const headers = Object.keys(clients[0]);
    const headerRow = document.createElement('tr');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Create table rows
    clients.forEach(client => {
        const row = document.createElement('tr');
        headers.forEach(header => {
            const td = document.createElement('td');
            td.textContent = client[header];
            row.appendChild(td);
        });
        table.appendChild(row);
    });

    // Append the table to the body
    document.body.appendChild(table);
}

// Función para mostrar la información del pedido en una tabla
function displayOrderInfo(orders) {
    // Similar to displayClientInfo, create a table and populate it with order data
}

// Llama a la función loadData para cargar y procesar los datos
loadData();