const numeroDigitado = require('prompt-sync')({sigint: true});
let numero;

numero = numeroDigitado('digite o número que deseja ler: ')

function numeroPorExtenso(numero) {
    const unidades = ['Zero', 'Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
    const ateVinte = ['Onze', 'Doze', 'Treze', 'Catorze', 'Quinze', 'Dezesseis', 'Dezessete', 'Dezoito', 'Dezenove'];
    const dezenas = ['Vinte', 'Trinta', 'Quarenta', 'Cinquenta', 'Sessenta', 'Setenta', 'Oitenta', 'Noventa'];
    const centenas = ['Cento', 'Duzentos', 'Trezentos', 'Quatrocentos', 'Quinhentos', 'Seiscentos ', "Setecentos", "Oitocentos", 'Novecentos'];

    if (numero < 0 || numero > 9999){
        console.log('Favor, escolha um número entre 0 e 9999');
        return;
    }

    const unidade = numero % 10;
    const dezena = Math.floor((numero % 100) / 10);
    const centena = Math.floor((numero % 1000) / 100);
    const milhar = Math.floor(numero / 1000);

    let numeroEscrito = '';

    if (milhar > 0){
        numeroEscrito += unidades[milhar] + ' mil ';
        if (centena > 0 || dezena > 0 || unidade > 0) {
            numeroEscrito += 'e ';
        }
    }

    if (centena > 0){
        numeroEscrito += centenas[centena-1] + ' ';
        if (dezena > 0 || unidade > 0) {
            numeroEscrito += 'e ';
        }
    }

    if (dezena > 1){
        numeroEscrito += dezenas[dezena-2];
        if (unidade > 0) {
            numeroEscrito += ' e ';
        }
    } else if (dezena === 1){
        if (unidade > 0) {
            numeroEscrito += ateVinte[unidade-1];
        } else {
            numeroEscrito += unidades[10];
        }
    }

    if (dezena !== 1 && unidade > 0){
        numeroEscrito += unidades[unidade];
    }

    console.log(numeroEscrito);
}

numeroPorExtenso(numero);