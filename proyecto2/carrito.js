// Recuperar carrito de localStorage si existe
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let cc=0;

// Función para agregar productos al carrito y guardarlo en localStorage
function agregarAlCarrito(nombre, precio, boton) {
    const cantidad = parseInt(boton.previousElementSibling.value);
    const productoExistente = carrito.find(item => item.nombre === nombre);

    if (productoExistente) {
        productoExistente.cantidad += cantidad;
    } else {
        carrito.push({ nombre, precio, cantidad });
    }

    // Guardar carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    actualizarCarrito();

}

// Función para actualizar el carrito y mostrar la suma total
function actualizarCarrito() {
    const carritoDiv = document.getElementById('carritoContenido');
    carritoDiv.innerHTML = '';
    let total = 0;

    carrito.forEach(item => {
        const itemTotal = item.precio * item.cantidad;
        total += itemTotal;

        const productoDiv = document.createElement('div');
        productoDiv.innerHTML = `${item.nombre} - ${item.cantidad} x $${item.precio} = $${itemTotal}`;
        carritoDiv.appendChild(productoDiv);
    });

    const totalDiv = document.createElement('div');
    totalDiv.innerHTML = `<strong>Total: $${total}</strong>`;
    carritoDiv.appendChild(totalDiv);
}
// Función para mostrar la ventana emergente del carrito
function mostrarCarrito() {
    document.getElementById('carritoPopup').style.display = 'block';
    actualizarCarrito(); // Actualiza el contenido del carrito al abrir
}

// Función para cerrar la ventana emergente del carrito
function cerrarCarrito() {
    document.getElementById('carritoPopup').style.display = 'none';
}