function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      return "No se permite la division por 0.";
    }
    return a / b;
  }
  
  function calculator(a, b, operation) {
    switch (operation) {
      case "sumar":
        return add(a, b);
      case "restar":
        return subtract(a, b);
      case "multiplicar":
        return multiply(a, b);
      case "dividir":
        return divide(a, b);
      default:
        return "Error: Operacion invalida";
    }
  }
  
  console.log(calculator(5, 3, "sumar")); 
  console.log(calculator(5, 3, "restar")); 
  console.log(calculator(5, 3, "multiplicar")); 
  console.log(calculator(5, 3, "division")); 
  console.log(calculator(5, 0, "dividir")); 
  console.log(calculator(5, 3, "invalido")); 