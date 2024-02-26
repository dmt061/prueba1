


let registro=  new Array()
let documento= prompt("Ingrese su documento")
registro.push(documento);

let nombre= prompt("Ingrese su nombre")
registro.push(nombre);

let apellido= prompt("Ingrese su apellido")
registro.push(apellido);

let correo= prompt("Ingrese su correo")
registro.push(correo);

let salario= prompt("Ingrese su salario")
registro.push(salario);

let programa= prompt("Ingrese su programa")
registro.push(programa);

let institucion= prompt("Ingrese su isntitucion")
registro.push(institucion);

let estaActivo= prompt("Ingrese su estaActivo")
registro.push(estaActivo);


for(let i =0 ; i < registro.length; i++ ){
    document.write( registro[i], "</br>")

}