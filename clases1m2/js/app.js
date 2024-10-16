function saludoboton(){
    const nombreinput = document.getElementById("entrada");
    let nombrejs= nombreinput.value
    console.log("HOLAAAAAA  "+nombrejs)
  }
  
  
  
  function saludar(nombre){
      console.log("hola, "+nombre+"!")
  }
  
  function sumar(a, b){
   console.log(a+b)
  }
  
  
  let num1=10
  let num2=8
  
  
  let mujer1="Sara"
  sumar(num1, num2)
  saludar(mujer1);
  saludoboton()