function sumar(){
    let r="+";
    if(r_id.value === ""){
        estado_operacionn=1
        sumando=1
        almacenar=parseFloat(r_id.value)
        r_id.value = r;
       
    }
    else if(parseFloat(r_id.value) != 0 && almacenar!=0){
        estado_operacionn=0
        sumando=0
        almacenar+=parseFloat(r_id.value)
        r_id.value = r;
        console.log(almacenar)
        mrespuesta.value+=almacenar;
    }
    else if(parseFloat(r_id.value) != 0 && almacenar==0){
        estado_operacionn=1
        sumando=1
        almacenar=parseFloat(r_id.value)
        r_id.value = r;
        console.log(almacenar)
        mrespuesta.value=almacenar;
    }
    

    
}
function restar(){
    let r="-";
    
    if(r_id.value != "" && almacenar!=0 && estado_operacionn==1){
        estado_operacionn=0
        r_id.value=parseFloat(r_id.value)-almacenar
        mrespuesta.value=almacenar
        
    }
    else if(r_id.value === "" && almacenar==0){
        r_id.value = r; 
    }
    else if((r_id.value !=0 || r_id.value != 0) && almacenar==0 && estado_operacionn==0){
        almacenar=parseFloat(r_id.value)
        estado_operacionn=1
        r_id.value=r
        mrespuesta.value=almacenar
    }
    
}
function multiplicar(){
    let r="*";
    if(r_id.value != "" && almacenar!=0){
        almacenar*=parseFloat(r_id.value)
    }
    else if(r_id.value === "" && almacenar==0){
        r_id.value = r; 
    }
    else if(r_id.value !=0 && almacenar==0){
        almacenar=parseFloat(r_id.value)
    }
    
}
function dividir(){
    let r="/";
    if(r_id.value === "" && almacenar==0){
        r_id.value = r; 
    }
    else if(r_id.value !=0 && almacenar==0){
        almacenar=parseFloat(r_id.value)
    }
    else if(r_id.value != "" && almacenar!=0){
        almacenar/=parseFloat(r_id.value)
    }
}
function punto(){
    let r=".";
    if(document.getElementById("resultado").value === ""){
        document.getElementById("resultado").value = r; 
    }
    else if(document.getElementById("resultado").value != "" && almacenar==0){
        almacenar=parseFloat(document.getElementById("resultado").value)
    }
}

function respuesta(){
 let r=0;
}