const entradaPeso = require('prompt-sync')({sigint: true});
let peso;

peso = entradaPeso('digite o X: ');

const entradaAltura = require('prompt-sync')({sigint: true});
let altura;

altura = entradaAltura('digite o y: ');

function imc (peso, altura){
    let calculoImc = peso / (altura * altura); 
    return calculoImc;
};

const imcCalculado = imc(peso,altura);

if (imcCalculado <= 18.4 ){
    console.log("Abaixo do peso");
} else if (imcCalculado >= 18.5 && imcCalculado <= 24.9){
    console.log("peso normal");
} else if (imcCalculado >= 25 && calculoImc <= 29.9){
    console.log("acima do peso");
} else{
    console.log("Obesidade");
}


