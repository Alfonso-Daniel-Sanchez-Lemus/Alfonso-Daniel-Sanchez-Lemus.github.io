let almacenar=0;
let r_id=document.getElementById("operacion");
let mrespuesta=document.getElementById("calculof");
let estado_operacionn=0;
let sumando=0;
let restando=0;
let multiplicando=0;
let dividiendo=0;
let uop=0;

document.getElementById("calculof").value=almacenar; 

function n0(){
    let r=0;

    if(r_id.value === "" && almacenar==0 && estado_operacionn==0){
        r_id.value = r; 
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==0){
        r_id.value = r;
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==1 && !( r_id.value=="+"|| r_id.value=="-"|| r_id.value=="*"|| r_id.value=="/")){
        r_id.value = r_id.value+r;
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==1 && ( r_id.value=="+"|| r_id.value=="-"|| r_id.value=="*"|| r_id.value=="/")){
        r_id.value = r;
        console.log(r_id.value)
    }

    else{
        r_id.value = r_id.value+r;
    }

    
}
function n00(){
    let r=0;
    if(r_id.value === "" && almacenar==0 && estado_operacionn==0){
        r_id.value = r; 
        r_id.value = r_id.value+r
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==0){
        r_id.value = r;
        r_id.value = r_id.value+r
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==1 && !(r_id.value!="+"|| r_id.value!="-"|| r_id.value!="*"|| r_id.value!="/")){
        r_id.value = r_id.value+r;
        r_id.value = r_id.value+r;
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==1 && (r_id.value=="+"||r_id.value=="-"||r_id.value=="*"||r_id.value=="/")){
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
    if(r_id.value === "" && almacenar==0 && estado_operacionn==0){
        r_id.value = r; 
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==0){
        r_id.value = r;
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==1 && !( r_id.value=="+"|| r_id.value=="-"|| r_id.value=="*"|| r_id.value=="/")){
        r_id.value = r_id.value+r;
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==1 && ( r_id.value=="+"|| r_id.value=="-"|| r_id.value=="*"|| r_id.value=="/")){
        r_id.value = r;
        console.log(r_id.value)
    }

    else{
        r_id.value = r_id.value+r;
    }
    
}
function n2(){
    let r=2;
    if(r_id.value === "" && almacenar==0 && estado_operacionn==0){
        r_id.value = r; 
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==0){
        r_id.value = r;
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==1 && !( r_id.value=="+"|| r_id.value=="-"|| r_id.value=="*"|| r_id.value=="/")){
        r_id.value = r_id.value+r;
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==1 && ( r_id.value=="+"|| r_id.value=="-"|| r_id.value=="*"|| r_id.value=="/")){
        r_id.value = r;
        console.log(r_id.value)
    }

    else{
        r_id.value = r_id.value+r;
    }
    
}
function n3(){
    let r=3;
    if(r_id.value === "" && almacenar==0 && estado_operacionn==0){
        r_id.value = r; 
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==0){
        r_id.value = r;
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==1 && !( r_id.value=="+"|| r_id.value=="-"|| r_id.value=="*"|| r_id.value=="/")){
        r_id.value = r_id.value+r;
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==1 && ( r_id.value=="+"|| r_id.value=="-"|| r_id.value=="*"|| r_id.value=="/")){
        r_id.value = r;
        console.log(r_id.value)
    }

    else{
        r_id.value = r_id.value+r;
    }
    
}
function n4(){
    
    let r=4;
    if(r_id.value === "" && almacenar==0 && estado_operacionn==0){
        r_id.value = r; 
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==0){
        r_id.value = r;
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==1 && !( r_id.value=="+"|| r_id.value=="-"|| r_id.value=="*"|| r_id.value=="/")){
        r_id.value = r_id.value+r;
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==1 && ( r_id.value=="+"|| r_id.value=="-"|| r_id.value=="*"|| r_id.value=="/")){
        r_id.value = r;
        console.log(r_id.value)
    }

    else{
        r_id.value = r_id.value+r;
    }
}
function n5(){
    let r=5;
    if(r_id.value === "" && almacenar==0 && estado_operacionn==0){
        r_id.value = r; 
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==0){
        r_id.value = r;
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==1 && !( r_id.value=="+"|| r_id.value=="-"|| r_id.value=="*"|| r_id.value=="/")){
        r_id.value = r_id.value+r;
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==1 && ( r_id.value=="+"|| r_id.value=="-"|| r_id.value=="*"|| r_id.value=="/")){
        r_id.value = r;
        console.log(r_id.value)
    }

    else{
        r_id.value = r_id.value+r;
    }
    
}
function n6(){
    let r=6;
    if(r_id.value === "" && almacenar==0 && estado_operacionn==0){
        r_id.value = r; 
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==0){
        r_id.value = r;
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==1 && !( r_id.value=="+"|| r_id.value=="-"|| r_id.value=="*"|| r_id.value=="/")){
        r_id.value = r_id.value+r;
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==1 && ( r_id.value=="+"|| r_id.value=="-"|| r_id.value=="*"|| r_id.value=="/")){
        r_id.value = r;
        console.log(r_id.value)
    }

    else{
        r_id.value = r_id.value+r;
    }
    
}
function n7(){
    let r=7;
    if(r_id.value === "" && almacenar==0 && estado_operacionn==0){
        r_id.value = r; 
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==0){
        r_id.value = r;
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==1 && !( r_id.value=="+"|| r_id.value=="-"|| r_id.value=="*"|| r_id.value=="/")){
        r_id.value = r_id.value+r;
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==1 && ( r_id.value=="+"|| r_id.value=="-"|| r_id.value=="*"|| r_id.value=="/")){
        r_id.value = r;
        console.log(r_id.value)
    }

    else{
        r_id.value = r_id.value+r;
    }
    
}
function n8(){
    let r=8;
    if(r_id.value === "" && almacenar==0 && estado_operacionn==0){
        r_id.value = r; 
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==0){
        r_id.value = r;
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==1 && !( r_id.value=="+"|| r_id.value=="-"|| r_id.value=="*"|| r_id.value=="/")){
        r_id.value = r_id.value+r;
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==1 && ( r_id.value=="+"|| r_id.value=="-"|| r_id.value=="*"|| r_id.value=="/")){
        r_id.value = r;
        console.log(r_id.value)
    }

    else{
        r_id.value = r_id.value+r;
    }
    
}
function n9(){
    let r=9;
    if(r_id.value === "" && almacenar==0 && estado_operacionn==0){
        r_id.value = r; 
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==0){
        r_id.value = r;
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==1 && !( r_id.value=="+"|| r_id.value=="-"|| r_id.value=="*"|| r_id.value=="/")){
        r_id.value = r_id.value+r;
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==1 && ( r_id.value=="+"|| r_id.value=="-"|| r_id.value=="*"|| r_id.value=="/")){
        r_id.value = r;
        console.log(r_id.value)
    }

    else{
        r_id.value = r_id.value+r;
    }

}
function punto(){
    let r=".";
    if(r_id.value === "" && almacenar==0 && estado_operacionn==0){
        r_id.value = r; 
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==0){
        r_id.value = r;
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==1 && !( r_id.value=="+"|| r_id.value=="-"|| r_id.value=="*"|| r_id.value=="/")){
        r_id.value = r_id.value+r;
    }
    else if(r_id.value != 0 && almacenar!=0 && estado_operacionn==1 && ( r_id.value=="+"|| r_id.value=="-"|| r_id.value=="*"|| r_id.value=="/")){
        r_id.value = r;
        console.log(r_id.value)
    }

    else{
        r_id.value = r_id.value+r;
    }
}
function sumar(){
    let r="+";
    if(r_id.value === ""){
        estado_operacionn=1
        sumando=1
        almacenar=parseFloat(r_id.value)
        r_id.value = r;
       
    }
    else if(parseFloat(r_id.value) != 0 && uop==0){
        estado_operacionn=1
        sumando=1
        almacenar+=parseFloat(r_id.value)
        r_id.value = r;
        mrespuesta.value=almacenar;
        sumando=1
        uop=1
    }
    

    
}
function restar(){
    let r="-";
    
    if(r_id.value === ""){
        estado_operacionn=1
        restando=1
        almacenar=parseFloat(r_id.value)
        r_id.value = r;
       
    }
    else if(parseFloat(r_id.value) != 0 && uop==0){
        estado_operacionn=1
        almacenar=parseFloat(r_id.value)
        r_id.value = r;
        mrespuesta.value=almacenar;
        restando=1
        uop=1
    }
    
}
function multiplicar(){
    let r="*";
    if(r_id.value === ""){
        estado_operacionn=1
        multiplicando=1
        almacenar=parseFloat(r_id.value)
        r_id.value = r;
       
    }
    else if(parseFloat(r_id.value) != 0 && uop==0){
        estado_operacionn=1
        multiplicando=1
        almacenar=parseFloat(r_id.value)
        r_id.value = r;
        mrespuesta.value=almacenar;
        uop=1
    }
    
}
function dividir(){
    let r="/";
    if(r_id.value === ""){
        estado_operacionn=1
        dividiendo=1
        almacenar=parseFloat(r_id.value)
        r_id.value = r;
       
    }
    else if(parseFloat(r_id.value) != 0 && uop==0){
        estado_operacionn=1
        dividiendo=1
        almacenar=parseFloat(r_id.value)
        r_id.value = r;
        mrespuesta.value=almacenar;
        uop=1
    }
}


function respuesta(){

    if(sumando==1){
        uop=0;
        almacenar+=parseFloat(r_id.value)
        r_id.value = 0;
        mrespuesta.value=almacenar;
        sumando=0

    }
    else if(restando==1){
        uop=0;
        almacenar-=parseFloat(r_id.value)
        r_id.value = 0;
        mrespuesta.value=almacenar;
        restando=0

    }
    else if(multiplicando==1){
        uop=0;
        almacenar*=parseFloat(r_id.value)
        r_id.value = 0;
        mrespuesta.value=almacenar;
        multiplicando=0

    }
    else if(dividiendo==1){
        uop=0;
        almacenar/=parseFloat(r_id.value)
        r_id.value = 0;
        mrespuesta.value=almacenar;
        dividiendo=0

    }
}



