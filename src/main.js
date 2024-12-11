import './style.css'


/* Ejercicio n°1 */

let nombre = 'Cristian';
let apellido = 'Gobbesso';
let edad = 36;
let pais = 'Argentina';

let arrayConocimientos = ['React', 'JavaScript', 'Html', 'Css'];

console.log(`Mi nombre es ${nombre}. Mi apellido es ${ apellido}, tengo  ${edad} años y vivo en ${pais}.`);

console.log(arrayConocimientos[0]);
console.log(arrayConocimientos[1]);
console.log(arrayConocimientos[2]);
console.log(arrayConocimientos[3]);

edad = 25;
let nuevoConocimiento = arrayConocimientos.push('Java');
console.log(edad);

console.log(arrayConocimientos);

console.warn('-------------------------------- -------------------------------------------');


/* Ejercicio n°2 */

let marca = 'Chevrolet';
let velocidad = 200;
velocidad = Number(velocidad);
let stock = true;
let arrayModelos = ['Cruze', 'Equinox', 'Onix', 'Spin', 'Tracker'];
console.log(`Marca:${marca}.\n\nVelocidad${ velocidad}km/h.\n\nStock:${stock}.`);
for (let i = 0; i < arrayModelos.length; i++) {
    console.log(arrayModelos[i])

}


console.warn('---------------------------------------------------------------------------');

/* Ejercicio n°3 */
let velocidadCoche = 135;
velocidadCoche = Number(velocidadCoche);

if (velocidadCoche>90) {
    console.log('Vas demasiado rapido, deberias bajar la velocidad')
} else {
    console.log('Vas dentro de la velocidad permitida, SIGUE ASI!!!')
}

console.warn('---------------------------------------------------------------------------');

/* Ejercicio n°4 */

let sueldo = 40.000;
sueldo = Number(sueldo);

if (sueldo>80.000) {
    console.log('Tu sueldo es EXCELENTE')
} 
else if(sueldo<=80.000 && sueldo>60.000){
    console.log('Tu sueldo es MUY BUENO')
}
else if(sueldo<=60.000 && sueldo>40.000){
    console.log('Tu sueldo es BUENO')
}
else {
    console.log('Tu sueldo es BAJO')
}

console.warn('---------------------------------------------------------------------------');

/* Ejercicio n°5 */
let fechaActual = 2024;
fechaActual = Number(fechaActual);
let fechaNacimiento = prompt('Ingrese su fecha de nacimiento');
fechaNacimiento = Number(fechaNacimiento);

let edadUsuario = (fechaActual - fechaNacimiento);
edadUsuario = Number(edadUsuario);

console.log(edadUsuario);
alert(`Tu edad es: ${edadUsuario}`);


console.warn('---------------------------------------------------------------------------');

/* Ejercicio n°6 */

function tablaDeMultiplicar() {
    let numero = prompt('Ingrese un numero del 1 al 10')
    for (let i = 0; i<=10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`)
        
    }
}
console.log(tablaDeMultiplicar())


console.warn('---------------------------------------------------------------------------');

/* Ejercicio n°7 */
function parOImpar(){
let numeroPedido = prompt('ingrese un numero')
if (numeroPedido % 2 === 0) {
    console.log(`El numero ${numeroPedido} es PAR!!!`)
    alert(`El numero ${numeroPedido} es PAR!!!`)
} else {
    console.log(`El numero ${numeroPedido} es IMPAR!!!`)
    alert(`El numero ${numeroPedido} es IMPAR!!!`)
}

}

parOImpar();