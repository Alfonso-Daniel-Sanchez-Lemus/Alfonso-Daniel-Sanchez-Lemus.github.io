let almacenar=0;
let sumando=0
let multiplicando=0
let restando=0
let prueba=0
let dividiendo=0
let valoroperacion=document.getElementById("operacion")
let respuestapantalla=document.getElementById("calculof")
valoroperacion.value=0
respuestapantalla.value=0

function numero(numero){
    if(valoroperacion.value=="" || valoroperacion.value==0){
        valoroperacion.value=numero
    }
    else{
        valoroperacion.value=valoroperacion.value+numero
    }
}

function punto(){
    if (!valoroperacion.value.includes(".")) {
        valoroperacion.value += ".";
    }

}

function operacion(op){
    console.log(op)
    if(sumando == 0 && multiplicando==0 && restando==0 && dividiendo==0 && op!="ac" && prueba==0){
    switch (op) {
        case "multiplicar":
            almacenar=parseFloat(valoroperacion.value)
            multiplicando=1
            valoroperacion.value=0
            respuestapantalla.value=almacenar

          break;
        case "restar":
            almacenar=parseFloat(valoroperacion.value)
            restando=1
            valoroperacion.value=0
            respuestapantalla.value=almacenar
          
          break;
        case "sumar":
            almacenar=parseFloat(valoroperacion.value)
            sumando=1
            valoroperacion.value=0
            respuestapantalla.value=almacenar
          break;
        case "dividir":
            almacenar=parseFloat(valoroperacion.value)
            dividiendo=1
            valoroperacion.value=0
            respuestapantalla.value=almacenar
          break;
        default:
          console.log("eso no esta sirviendo manito");
      }

    }
    else if(sumando == 0 && multiplicando==0 && restando==0 && dividiendo==0 && op!="ac" && prueba!=0){
        switch (op) {
            case "multiplicar":
                almacenar*=parseFloat(valoroperacion.value)
                valoroperacion.value=0
                respuestapantalla.value=almacenar
    
              break;
            case "restar":
                almacenar-=parseFloat(valoroperacion.value)
                valoroperacion.value=0
                respuestapantalla.value=almacenar
              
              break;
            case "sumar":
                almacenar+=parseFloat(valoroperacion.value)
                valoroperacion.value=0
                respuestapantalla.value=almacenar
              break;
            case "dividir":
                almacenar/=parseFloat(valoroperacion.value)
                valoroperacion.value=0
                respuestapantalla.value=almacenar
              break;
            default:
              console.log("eso no esta sirviendo manito");
          }
    
        }
    else if(op=="ac"){
        sumando=0
        prueba=0
        dividiendo=0
        multiplicando=0
        restando=0
        almacenar=0
        valoroperacion.value=0
        respuestapantalla.value=almacenar
    }

}

function respuesta(){

    if(sumando==1){
        almacenar+=parseFloat(valoroperacion.value)
        valoroperacion.value = 0;
        respuestapantalla.value=almacenar;
        sumando=0
        prueba=1

    }
    else if(restando==1){
        almacenar-=parseFloat(valoroperacion.value)
        valoroperacion.value = 0;
        respuestapantalla.value=almacenar;
        restando=0
        prueba=1

    }
    else if(multiplicando==1){
        almacenar*=parseFloat(valoroperacion.value)
        valoroperacion.value = 0;
        respuestapantalla.value=almacenar;
        multiplicando=0
        prueba=1

    }
    else if(dividiendo==1){
        almacenar/=parseFloat(valoroperacion.value)
        valoroperacion.value = 0;
        respuestapantalla.value=almacenar;
        dividiendo=0
        prueba=1

    }
}