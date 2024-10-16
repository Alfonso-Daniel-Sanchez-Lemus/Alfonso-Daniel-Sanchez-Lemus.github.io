function sumar(){
    const n1 = document.getElementById("num1");
    let nu1= n1.value;
    const n2 = document.getElementById("num2");
    let nu2= n2.value;

    if (nu1 === "") {
        nu1 = 0; 
    }
    if (nu2 === "") {
        nu2 = 0; 
    }
    let r = (parseFloat(nu1)+parseFloat(nu2))
    console.log(r)
    document.getElementById("resultado").value = r
   }
    
   sumar()