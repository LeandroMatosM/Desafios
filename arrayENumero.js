const montandoLista = require('prompt-sync')({sigint: true});
let numerosArray = [];

while(numerosArray.length < 10) {
    let adicionarArray = montandoLista('digite um número para montar sua lista: ');
    numerosArray.push(adicionarArray);
}

const verificaLista = require('prompt-sync')({sigint: true});
let numero;

numero = verificaLista('Digite o número que deseja verificar: ');

function posicaoNumero(numerosArray, numero){
    const posicao = numerosArray.indexOf(numero);
    if (posicao !== -1) {
        return `O número ${numero} está no array, na posição ${posicao}.`;
    } else {
        return `O número ${numero} não está no array.`;
    }
}

console.log(posicaoNumero(numerosArray, numero));