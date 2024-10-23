let logeado = 0

listaUsuarios = []
function ingresar(){
    let listaUsuarios = JSON.parse(localStorage.getItem("usuario"))
    //console.log(listaUsuarios)

}

function verificarLogin(event){
    event.preventDefault(); // Evita que el formulario se envíe y la página se recargue
    let listaUsuarios = JSON.parse(localStorage.getItem("usuario"))
    let email = document.getElementById("correo").value
    let password = document.getElementById("contrasena").value

    for(let i =0; i<listaUsuarios.length;i++){
        //console.log(listaUsuarios[i].nombre)
        let usuario = JSON.parse(listaUsuarios[i])
        console.log(usuario.email)
        if(email == usuario.email && password == usuario.password){
            alert("el usuario ingreso correctamente")
            logeado=1
        }

      
    }

    if(logeado){
        window.location.href = "opciones.html"
    }else{
        alert("el usuario o clave incorrecta")
    }

}