let listaUsuarios = [];

function registrarse(event) {
    event.preventDefault(); // Evita que el formulario se envíe y la página se recargue

    const usuariosGuardados = localStorage.getItem("usuarios");

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("correo").value;
    let password = document.getElementById("contrasena").value;
    let repassword = document.getElementById("repite-contrasena").value;

    // Verifica que las contraseñas coincidan
    if (password !== repassword) {
        alert("Las contraseñas deben ser iguales");
        return;
    }
    if (usuariosGuardados) {
        let usuarios = JSON.parse(usuariosGuardados);
        let existeCorreo = usuarios.some(usuario => usuario.email === email);

        if (existeCorreo) {
            alert("El correo electrónico ya posee una cuenta");
            return;
        }
        else{
            // Crea un objeto persona
            let persona = {
                nombre: nombre,
                apellido: apellido,
                email: email,
                password: password
            };

            // Añade el nuevo usuario a la lista
            listaUsuarios.push(persona);
            console.log(listaUsuarios);

            // Guarda la lista de usuarios en localStorage
            localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
            alert("Usuario registrado");


        }
    }
    else if(!usuariosGuardados){ // Crea un objeto persona
        let persona = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            password: password
        };
    
        // Añade el nuevo usuario a la lista
        listaUsuarios.push(persona);
        console.log(listaUsuarios);
    
        // Guarda la lista de usuarios en localStorage
        localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
        alert("Usuario registrado");
        
    }
   
}
function verify() {
    const usuariosGuardados = localStorage.getItem("usuarios");

    if (usuariosGuardados) {
        listaUsuarios = JSON.parse(usuariosGuardados);
    }
}
window.onload = verify;