//micro desafio 1: 30

//microdesafio 2: 20


//!Parte 1

function pulgadasCentimetros (pulg){
    return pulg * 2.54
}

console.log(pulgadasCentimetros(2))

function stringUrl(str){
    return `http://www.${str}.com`
}

console.log(stringUrl('hola'))

function admiracion (str){
    return `${str}!!!`
}

console.log(admiracion('chao'))

function anioPerro(year){
    return year * 7
}

console.log(anioPerro(8))

function calculoHoras(sueldo){
    return sueldo / 40
}

console.log(calculoHoras(600000))


function calculoImc(peso, altura){
    return peso / (altura * altura)
}

console.log(calculoImc(70, 1.75))

// !Flecha

const anioPerroFlecha=(year) => year * 7

console.log(anioPerroFlecha(8))


//! parte 2

const mayuscula = (str) => str.toUpperCase();
console.log(mayuscula('hola'))


const tipoDato = (dato) =>{
    return typeof dato
}
console.log(tipoDato(123))

const circunferencia = (radio) =>{
    return 2 * Math.PI * radio
}
console.log(circunferencia(20))