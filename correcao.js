/* O código abaixo tem um erro e esse erro gera um loop infinito,
    pois nunca é incrementado valor a variável num.
    Para corrigi-lo, devemos alterar a linha 8 para: num += 1;
    fazendo assim, o código encerra ao atingir o primeiro número maior que 10, na variavel num
*/


let num = -1;

while(num <= 10){
    console.log(num)
    num += 0;
}

if(num > 10){
    console.log(num)
}