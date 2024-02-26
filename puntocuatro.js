


let registro = [];

for (let i = 0; i < 6; i++) {
  if (i === 0) {
    registro.push(prompt('Ingrese el documento:'));
  } else if (i === 1) {
    registro.push(prompt('Ingrese el nombre:'));
  } else if (i === 2) {
    registro.push(prompt('Ingrese el apellido:'));
  } else if (i === 3) {
    registro.push(prompt('Ingrese el correo:'));
  } else if (i === 4) {
    registro.push(prompt('Ingrese el salario:'));
  } else if (i === 5) {
    registro.push(prompt('Ingrese el programa:'));
  } else if (i === 6) {
    registro.push(prompt('Ingrese la institución:'));
  }
}

console.log(registro);