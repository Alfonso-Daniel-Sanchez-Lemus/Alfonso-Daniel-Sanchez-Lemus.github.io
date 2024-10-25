function iniciarSesion(event) {
    event.preventDefault(); // Evita que la página se recargue

    const emailIngresado = document.getElementById("correo").value;
    const passwordIngresada = document.getElementById("contrasena").value;

    // Recupera la lista de usuarios del localStorage
    const usuariosGuardados = localStorage.getItem("usuarios");

    if (!usuariosGuardados) {
        alert("No hay usuarios registrados");
        return;
    }

    const listaUsuarios = JSON.parse(usuariosGuardados);

    // Busca al usuario con el correo ingresado
    const usuarioEncontrado = listaUsuarios.find(usuario => usuario.email === emailIngresado);

    if (!usuarioEncontrado) {
        alert("Correo electrónico no registrado");
        return;
    }

    // Verifica la contraseña
    if (usuarioEncontrado.password !== passwordIngresada) {
        alert("Contraseña incorrecta");
        return;
    }

    
    window.location.href = "opciones.html";
    // Aquí puedes redirigir al usuario a otra página o realizar alguna acción
}

// Añade el listener para el evento submit del formulario de inicio de sesión
window.onload = function() {
    document.getElementById("form").addEventListener("submit", iniciarSesion);
};
