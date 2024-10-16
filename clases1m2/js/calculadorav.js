let almacenar=0;
let r_id=document.getElementById("operacion");
let mrespuesta=document.getElementById("resulatdo")
let estado_operacionn=0;

function n0(){
    let r=0;

    if(r_id.value === "" && almacenar==0 && estado_operacionn==0){
        r_id.value = r; 
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==0){
        r_id.value = r;
    }
    else{
        r_id.value = r_id.value+r;
    }

    
}
function n00(){
    let r=0;

    if(r_id.value === ""){
        r_id.value = r;
        r_id.value = r_id.value+r
    }
    else{
        r_id.value = r_id.value+r;
        r_id.value = r_id.value+r
    }
    
}
function n1(){
    let r=1;
    if(r_id.value === ""){
        r_id.value = r; 
    }
    else{
        r_id.value = r_id.value+r;
    }
    
}
function n2(){
    let r=2;
    if(r_id.value === ""){
        r_id.value = r; 
    }
    else{
        r_id.value = r_id.value+r;
    }
    
}
function n3(){
    let r=3;
    if(r_id.value === ""){
        r_id.value = r; 
    }
    else{
        r_id.value = r_id.value+r;
    }
    
}
function n4(){
    
    let r=4;
    if(r_id.value === ""){
        r_id.value = r; 
    }
    else{
        r_id.value = r_id.value+r;
    }
    
}
function n5(){
    let r=5;
    if(r_id.value === ""){
        r_id.value = r; 
    }
    else{
        r_id.value = r_id.value+r;
    }
    
}
function n6(){
    let r=6;
    if(r_id.value === ""){
        r_id.value = r; 
    }
    else{
        r_id.value = r_id.value+r;
    }
    
}
function n7(){
    let r=7;
    if(r_id.value === ""){
        r_id.value = r; 
    }
    else{
        r_id.value = r_id.value+r;
    }
    
}
function n8(){
    let r=8;
    if(r_id.value === ""){
        r_id.value = r; 
    }
    else{
        r_id.value = r_id.value+r;
    }
    
}
function n9(){
    let r=9;
    if(r_id.value === ""){
        r_id.value = r; 
    }
    else{
        r_id.value = r_id.value+r;
    }

}
function sumar(){
    let r="+";
    if(r_id.value === ""){
        almacenar=parseFloat(r_id.value)
        r_id.value = r;
    }
    else if(parseFloat(r_id.value) != 0 && almacenar==0){
        almacenar=parseFloat(r_id.value)
    }
    else if(parseFloat(r_id.value) != 0 && almacenar!=0){
        almacenar+=parseFloat(r_id.value)
    }

    
}
function restar(){
    let r="-";
    if(r_id.value === "" && almacenar==0){
        r_id.value = r; 
    }
    else if(r_id.value != "" && almacenar!=0 && estado_operacionn==1){
        estado_operacionn==0
        r_id.value=parseFloat(r_id.value)-almacenar
        mrespuesta.value=almacenar

        
    }
    else if((r_id.value !=0 || r_id.value != 0) && almacenar==0 && estado_operacionn==0){
        almacenar=parseFloat(r_id.value)
        estado_operacionn==1
        r_id.value=r
        mrespuesta.value=almacenar
    }
    
}
function multiplicar(){
    let r="*";
    if(r_id.value === "" && almacenar==0){
        r_id.value = r; 
    }
    else if(r_id.value !=0 && almacenar==0){
        almacenar=parseFloat(r_id.value)
    }
    else if(r_id.value != "" && almacenar!=0){
        almacenar*=parseFloat(r_id.value)
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



